import wheels from '../assets/wheels.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CountryCode from "../accessory/CountryCodes";
import { useMutation, useMutationState  } from '@tanstack/react-query';
import { api, auth } from '../accessory/Auth';
import { formToJSON } from 'axios';

const Join = () => {
    const [activeTab, setActiveTab] = useState('business');
    const [fullName, setFullName] = useState('');
    const [fullNameOk, setFullNameOk] = useState(false);
    const [email, setEmail] = useState('');
    const [emailOk, setEmailOk] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordOk, setPasswordOk] = useState(false);
    const [tel, setTel] = useState('');    
    const [telOk, setTelOk] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleFullNameChange = (e) => {
        const val = e.target.value;
        setFullName(val);
        if (val.length >= 6) {
            setFullNameOk(true);
        } else {
            setFullNameOk(false);
        }
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(val)) {
            setEmailOk(true);
        } else {
            setEmailOk(false);
        }
    };

    const handleTelChange = (e) => {
        const val = e.target.value;
        const regex = /^[0-9\s]{8,20}$/;
        setTel(val);
        if (regex.test(val)) {
            setTelOk(true);
        } else {
            setTelOk(false);
        }
    };

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        if (val.length >= 8) {
            setPasswordOk(true);
        } else {
            setPasswordOk(false);
        }
    };

    const emailOtp = useMutation({
        mutationFn: async ({url, data}) => {return api.post(url, data)},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error sending email otp</div>"));},
    });
    const smsOtp = useMutation({
        mutationFn: async ({url, data}) => {return api.post(url, data)},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error sending sms otp</div>"));},
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!fullNameOk || !emailOk || !telOk || !passwordOk) {
            setError('Please fill all fields correctly.');
            return;
        }

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        formValues.phone = formValues.phoneCode + tel
        delete formValues.phoneCode;

        try {
            const [emailRes, smsRes] = await Promise.all([
            emailOtp.mutateAsync({url:'/api/auth/send-email-otp', data:{email}}),
            smsOtp.mutateAsync({url:'/api/auth/send-sms-otp', data:{phone:formValues.phone}})
            ]);
            const stateData = formValues;
            // console.log(stateData);
            formValues.pinId = smsRes.data.data.pinId;
            navigate('verify-otp', {state: stateData});
        } catch (err) {
            setError("Error sending OTPs");
            console.error("Error sending OTPs:", err);
        }
            // {
            //     data: {pinId: '739c5cab-158e-4e9f-898c-b0c5d64ceced', to: '+2348080350144', smsStatus: 'Message Sent'}
            //     message: "SMS OTP sent successfully"
            //     status: 200
            // }
    };

    return(
        <div className="md:flex md:justify-between md:gap-8 md:items-center">
            <div className='hidden md:block h-screen w-1/2 max-w-[500px]'>
                <img src={wheels} alt="wheels" className='w-full h-screen'/>
            </div>
            <div className='mx-auto w-10/12 max-w-[400px] h-screen content-center justify-center'>
                <h1 className='font-bold pb-6'>Join Pika!</h1>
                <div className='tab pb-6 text-sm whitespace-nowrap'>
                    <a className={'px-4 hover:text-primary' + (activeTab === 'business' ? ' font-semibold underline decoration-primary underline-offset-8' : '')} onClick={() => setActiveTab("business")}>Business Account</a>
                    <a className={'px-4 hover:text-primary' + (activeTab === 'logistics' ? ' font-semibold underline decoration-primary underline-offset-8' : '')} >Logistic Account</a> {/* onClick={() => setActiveTab("logistics")} */}
                </div>
                <div className='tab-content text-sm'>
                    <div id='business' className={"h-full " + (activeTab === 'business' ? '' : 'hidden')}>
                        {error && <div className='mb-4 text-red-500'>{error}</div>}
                        <form id='business' method='POST' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="fullName">Full name<sup>*</sup></label>
                                <div className={'rounded-lg mt-1 pl-1 border text-nowrap' + (fullNameOk ? ' border-primary' : ' border-slate-200')}>
                                    <input type='text' name='fullName' id='fullName' className='w-11/12 px-4 py-1.5 outline-none' placeholder='John Doe'
                                        value={fullName} onChange={handleFullNameChange} />
                                    <input type='hidden' name='userType' id='userType' value="business" />
                                    <span><FontAwesomeIcon icon={faCheckCircle} className={fullNameOk ? 'text-primary' : 'text-gray-200'} /></span>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email">Email address<sup>*</sup></label>
                                <div className={'rounded-lg mt-1 pl-1 border text-nowrap' + (emailOk ? ' border-primary' : ' border-slate-200')}>
                                    <input type='email' name='email' id='email' className='w-11/12 px-4 py-1.5 outline-none' placeholder='johndoe@gmail.com'
                                        value={email} onChange={handleEmailChange} />
                                    <span><FontAwesomeIcon icon={faCheckCircle} className={emailOk ? 'text-primary' : 'text-gray-200'} /></span>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone">Phone number<sup>*</sup></label>
                                <div className={'rounded-lg mt-1 pl-1 border text-nowrap' + (telOk ? ' border-primary' : ' border-slate-200')}>
                                    <select tabIndex='-1' id='phoneCode' name='phoneCode' className='outline-none appearance-none w-4/12 pl-4' defaultValue='+234'>
                                        {CountryCode.map((value) => {
                                            return (<option key={value.countryCode} value={"+" + value.phoneCode}>
                                                        {value.countryCode} +{value.phoneCode}
                                                    </option>);
                                        })}
                                    </select>
                                    <input type='tel' name='phone' id='phone' className='w-7/12 pr-4 py-1.5 outline-none' placeholder='8081234567'
                                        value={tel} onChange={handleTelChange} />
                                    <span><FontAwesomeIcon icon={faCheckCircle} className={telOk ? 'text-primary' : 'text-gray-200'} /></span>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password">Password<sup>*</sup></label>
                                <div className={'rounded-lg mt-1 pl-1 border text-nowrap' + (passwordOk ? ' border-primary' : ' border-slate-200')}>
                                    <input type='password' name='password' id='password' minLength='8' className='w-11/12 px-4 py-1.5 outline-none' placeholder='8 character long'
                                        value={password} onChange={handlePasswordChange} />
                                    <span><FontAwesomeIcon icon={faCheckCircle} className={passwordOk ? 'text-primary' : 'text-gray-200'} /></span>
                                </div>
                            </div>
                            <div className='flex justify-between gap-6 pt-6'>
                                <button type='submit' disabled={!fullNameOk || !emailOk || !telOk || !passwordOk || emailOtp.isPending || smsOtp.isPending}
                                    className='bg-primary text-white rounded-full w-6/12 py-2 disabled:opacity-50'>
                                        {emailOtp.isPending || smsOtp.isPending && <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />}
                                        Create Account
                                    </button>
                                <Link to='/login' type='button' className='text-center text-primary border border-primary rounded-full w-6/12 py-2'>Login</Link>
                            </div>
                        </form>
                    </div>
                    <div id='logistic' className={"h-full " + (activeTab === 'business' ? 'hidden' : '')}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;