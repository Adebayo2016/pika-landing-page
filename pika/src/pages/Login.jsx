import wheels from '../assets/wheels.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle, faSpinner, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import PropTypes from 'prop-types';
import { auth, requireAuth } from '../accessory/Auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailOk, setEmailOk] = useState(false);
    const [passwordOk, setPasswordOk] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const fromOtp = location.state?.fromOtp || false;

    const mutation = useMutation({
        mutationFn: auth.login,
        onSuccess: () => {fromOtp ? navigate("/sign-up/business-profile") : navigate('/dashboard')},
        onError: (error) => {setError(error?.response?.data?.message || "Error logging in");},
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(e.target.value)) {
            setEmailOk(true);
        }else {
            setEmailOk(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length >= 8) {
            setPasswordOk(true);
        } else {
            setPasswordOk(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(emailOk && passwordOk){
            mutation.mutate({ email, password });
        }
    };

    // const { data, isLoading, error } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => (await api.get('/products')).data,
    // });

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error loading products</p>;

    // const token = auth.getToken();
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //     const res = await api.get('/users/1', {
    //         headers: { Authorization: `Bearer ${token}` },
    //     });
    //     return res.data;
    //     },
    //     enabled: !!token,
    // });

    // if (!token) return <p className="text-red-500">Not authenticated</p>;
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error loading profile</p>;



    return(
        <div className="md:flex md:justify-between md:gap-8 md:items-center">
            <div className='hidden md:block h-screen w-1/2 max-w-[500px]'>
                <img src={wheels} alt="wheels" className='h-screen w-full'/>
            </div>
            <div className='mx-auto w-10/12 max-w-[400px] h-screen content-center justify-center'>
                <h1 className='font-bold pb-6'>Login to your account</h1>
                {error && <div className='mb-4 text-red-500'>{error}</div>}
                <div className='text-base'>
                    <div className='mb-3'>
                        <label htmlFor="email" className={email ? "text-slate-600" : ""}>Email</label>
                        <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (emailOk ? ' border-primary' : ' border-slate-200')}>
                            <input type='email' name='email' id='email' className='w-11/12 px-4 py-1.5 outline-none' placeholder='johndoe@gmail.com'
                                value={email} onChange={handleEmailChange} />
                            <span><FontAwesomeIcon icon={error ? faExclamationCircle : faCheckCircle} className={error ? "text-slate-900" : emailOk ? 'text-primary' : 'text-gray-200'} /></span>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className={password ? "text-slate-600" : ""}>Password</label>
                        <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (passwordOk ? ' border-primary' : ' border-slate-200')}>
                            <input type='password' name='password' id='password' className='w-11/12 px-4 py-1.5 outline-none' placeholder='your password'
                                value={password} onChange={handlePasswordChange} />
                            <span><FontAwesomeIcon icon={error ? faExclamationCircle : faCheckCircle} className={error ? "text-slate-900" : passwordOk ? 'text-primary' : 'text-gray-200'} /></span>
                        </div>
                    </div>

                    <p className='py-3'>
                        <a href='#' className='font-semibold'>Forgot Password?</a>
                    </p>
                    
                    <div className='flex justify-between gap-6 pt-6'>
                        <button type='submit'  disabled={!emailOk || !passwordOk || mutation.isPending}
                            className='bg-primary disabled:opacity-50 text-white rounded-full w-6/12 py-2' onClick={handleSubmit}>
                                {mutation.isPending && <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />}
                                Login
                            </button>
                        <Link to='/sign-up' type='button' className='text-center text-primary border border-primary rounded-full w-6/12 py-2'>Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;