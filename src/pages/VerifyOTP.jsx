import wheels from '../assets/wheels.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUpload, faTimesCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { api, auth } from '../accessory/Auth';

const VerifyOTP = () => {
    const [emailOTP, setEmailOTP] = useState('');
    const [emailOTPOk, setEmailOTPOk] = useState(false);
    const [phoneOTP, setPhoneOTP] = useState('');
    const [phoneOTPOk, setPhoneOTPOk] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailOTPChange = (e) => {
        const val = e.target.value;
        setEmailOTP(val);
        if (val.length == 6 && Number.isInteger(Number(val))) {
            setEmailOTPOk(true);
        } else {
            setEmailOTPOk(false);
        }
    };

    const handlePhoneOTPChange = (e) => {
        const val = e.target.value;
        setPhoneOTP(val);
        if (val.length == 4 && /^[0-9]+$/.test(val)) {
            setPhoneOTPOk(true);
        } else {
            setPhoneOTPOk(false);
        }
    };

    const register = useMutation({
        mutationFn: auth.register,
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error registering business</div>"));},
    });

    const emailOtp = useMutation({
        mutationKey: ['verifyEmailOtp'],
        mutationFn: async ({url, data}) => (await api.post(url, data)).data,
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error verifying email otp</div>"));},
    });
    
    const smsOtp = useMutation({
        mutationKey: ['verifySmsOtp'],
        mutationFn: async ({url, data}) => (await api.post(url, data)).data,
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error verifying sms otp</div>"));},
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!emailOTPOk || !phoneOTPOk) {
            setError('Please fill all fields correctly.');
            return;
        }

        const state = location.state;
        const emailOtpCredential = {url:'/api/auth/verify-email-otp', data:{email:state?.email, otp:emailOTP}};
        const smsOtpCredential = {url:'/api/auth/verify-sms-otp', data:{pinId:state?.pinId, pin:phoneOTP}};
        delete state?.pinId;
        
        try {
            const [emailRes, smsRes, registerRes] = await Promise.all([
                emailOtp.mutateAsync(emailOtpCredential),
                smsOtp.mutateAsync(smsOtpCredential),
                register.mutateAsync(JSON.stringify(state))
            ]);
            navigate("success");
        } catch (err) {
            setError("Error verifying OTPs");
            console.error("Error verifying OTPs:", err);
        }
    };

    return(
        <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className='hidden md:block md:h-screen'>
                <img src={wheels} alt="wheels" className='h-screen w-full'/>
            </div>
            <div className='mx-auto w-10/12 max-w-[350px] h-screen content-center'>
                <h1 className='font-bold pb-6'>Verify your account</h1>
                <div className='mb-4'>An OTP was sent to your email and mobile device</div>
                <div className='text-sm'>
                    {error && <div className='mb-4 text-red-500'>{error}</div>}
                    <form id='business' autoComplete='no' method='POST' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="emailOTP">Email OTP<sup>*</sup></label>
                            <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (emailOTPOk ? ' border-primary' : ' border-slate-200')}>
                                <input type='text' name='emailOTP' id='emailOTP' className='w-11/12 px-4 py-1.5 outline-none' placeholder='Enter the code sent to your email'
                                    value={emailOTP} onChange={handleEmailOTPChange} maxLength='6' minLength='6' />
                                <span><FontAwesomeIcon icon={faCheckCircle} className={emailOTPOk ? 'text-primary' : 'text-gray-200'} /></span>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phoneOTP">Phone number OTP<sup>*</sup></label>
                            <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (phoneOTPOk ? ' border-primary' : ' border-slate-200')}>
                                <input type='text' name='phoneOTP' id='phoneOTP' className='w-11/12 px-4 py-1.5 outline-none' placeholder='Enter the code sent to your phone number'
                                    value={phoneOTP} onChange={handlePhoneOTPChange} maxLength='4' minLength='4' />
                                <span><FontAwesomeIcon icon={faCheckCircle} className={phoneOTPOk ? 'text-primary' : 'text-gray-200'} /></span>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <button type='submit' disabled={!emailOTPOk || !phoneOTPOk || emailOtp.isPending || smsOtp.isPending || register.isPending}
                                className='bg-primary text-white rounded-full w-full py-2 disabled:opacity-50'>
                                    {emailOtp.isPending || smsOtp.isPending || register.isPending && <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />}
                                    Verify your account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;