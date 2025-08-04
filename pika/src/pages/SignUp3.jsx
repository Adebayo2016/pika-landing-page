import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";

const SignUp3 = ({
    serviceOffered, serviceOfferedOk, handleServiceOfferedChange, businessLogoDoc, 
    businessLogoDocOk, handleBusinessLogoDocChange, handleSubmit, isLoading
}) => {
    return(
        <div className=''>
            <div className='mb-3'>
                <label htmlFor="serviceOffered" className={serviceOffered ? "text-slate-600" : ""}>Service offered<sup>*</sup></label>
                <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (serviceOfferedOk ? ' border-primary' : ' border-slate-200')}>
                    <input type='text' name='serviceOffered' id='serviceOffered' autoComplete='no' className='w-11/12 px-4 py-1.5 outline-none' placeholder='John Doe'
                        value={serviceOffered} onChange={handleServiceOfferedChange} />
                    <span><FontAwesomeIcon icon={faCheckCircle} className={serviceOfferedOk ? 'text-primary' : 'text-gray-200'} /></span>
                </div>
                <small className='text-slate-600 text-xs'>separate the services with comma</small>
            </div>
            <div className='mb-3'>
                <label htmlFor="logo" className={businessLogoDoc ? "text-slate-600" : ""}>Business logo<sup>*</sup></label>
                <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap flex items-center' + (businessLogoDocOk ? ' border-primary' : ' border-slate-200')}>
                    <label htmlFor='logo' className='cursor-pointer block px-4 py-1.5 w-11/12 text-slate-500'>{businessLogoDoc ? businessLogoDoc.name : 'upload your business logo'}</label>
                    <span><FontAwesomeIcon icon={faUpload} className={businessLogoDocOk ? 'text-primary' : 'text-gray-200'} /></span>
                    <input type='file' name='logo' id='logo' className='hidden' onChange={handleBusinessLogoDocChange} />
                </div>
                <small className='text-slate-600 text-xs'>1MB-3MB in size</small>
            </div>
            <div className='pt-6'>
                <button type='submit' disabled={isLoading || !businessLogoDocOk || !serviceOfferedOk}
                    className='bg-primary text-white rounded-full w-full py-2 disabled:opacity-50'
                    onClick={handleSubmit} 
                >
                    {isLoading && <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />}
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignUp3;