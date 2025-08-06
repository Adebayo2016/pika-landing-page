import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountryCode from "../accessory/CountryCodes";

const SignUp1 = ({  
    businessName, businessNameOk, handleBusinessNameChange,
    businessAddress, businessAddressOk, handleBusinessAddressChange,
    tel, telOk, handleTelChange, email, emailOk, handleEmailChange,
    phoneCode, setPhoneCode, setLevel
}) => {
    return(
        <div className=''>
            <div className='mb-3'>
                <label htmlFor="businessName">Business name<sup>*</sup></label>
                <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (businessNameOk ? ' border-primary' : ' border-slate-200')}>
                    <input type='text' name='businessName' id='businessName' className='w-11/12 px-4 py-1.5 outline-none' placeholder='John Doe'
                        value={businessName} onChange={handleBusinessNameChange} />
                    <input type='hidden' name='userType' id='userType' value="business" />
                    <span><FontAwesomeIcon icon={faCheckCircle} className={businessNameOk ? 'text-primary' : 'text-gray-200'} /></span>
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor="businessAddress">Business address<sup>*</sup></label>
                <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (businessAddressOk ? ' border-primary' : ' border-slate-200')}>
                    <input type='text' name='businessAddress' id='businessAddress' className='w-11/12 px-4 py-1.5 outline-none' placeholder='4 Johnson street'
                        value={businessAddress} onChange={handleBusinessAddressChange} />
                    <input type='hidden' name='userType' id='userType' value="business" />
                    <span><FontAwesomeIcon icon={faCheckCircle} className={businessAddressOk ? 'text-primary' : 'text-gray-200'} /></span>
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor="phone">Business phone number<sup>*</sup></label>
                <div className={'rounded-lg mt-1 pl-1 border text-nowrap' + (telOk ? ' border-primary' : ' border-slate-200')}>
                    <select tabIndex='-1' id='phoneCode' name='phoneCode' className='outline-none appearance-none w-4/12 pl-4' value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
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
                <label htmlFor="email">Business email<sup>*</sup></label>
                <div className={'rounded-lg mt-1 py-0.5 pl-1 border text-nowrap' + (emailOk ? ' border-primary' : ' border-slate-200')}>
                    <input type='email' name='email' id='email' className='w-11/12 px-4 py-1.5 outline-none' placeholder='johndoe@gmail.com'
                        value={email} onChange={handleEmailChange} />
                    <span><FontAwesomeIcon icon={faCheckCircle} className={emailOk ? 'text-primary' : 'text-gray-200'} /></span>
                </div>
            </div>
            <div className='pt-6'>
                <button type='submit' {...(businessNameOk && businessAddressOk && telOk && emailOk  ? {disabled:false} : {disabled:true})}
                    className='bg-primary text-white rounded-full w-full py-2 disabled:opacity-50' onClick={() => setLevel(2)}
                >Continue</button>
            </div>
        </div>
    );
};

export default SignUp1;