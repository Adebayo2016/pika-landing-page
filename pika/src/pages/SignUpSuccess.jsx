import verified_riders from '../assets/verified_riders.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const SignUpSuccess = () => {
    const navigate = useNavigate();

    return(
        <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className='hidden md:block md:h-screen'>
                <img src={verified_riders} alt="verified_riders" className='h-screen w-full'/>
            </div>
            <div className='mx-auto text-center h-screen content-center'>
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 bg-white text-6xl pb-5 pt-10" />
                <div className="pb-10">Business profile created!</div>
                <div>
                    <button className='bg-primary text-white rounded-3xl py-3 px-6 text-sm text-center'
                        onClick={() => navigate('/sign-up/subscription')}>Select a subscription plan</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpSuccess;