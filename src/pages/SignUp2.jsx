import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp2 = ({
    businessDoc, businessDocOk, handleBusinessDocChange, 
    kycDoc, kycDocOk, handleKYCDocChange, 
    bvnDoc, bvnDocOk, handleBvnDocChange, setLevel
}) => {
    return(
        <div className=''>
            <div className='mb-3'>
                <label htmlFor="cac">Business Document<sup>*</sup></label>
                <div className={'rounded-lg mt-1 my-0.5 pl-1 border text-nowrap flex items-center' + (businessDocOk ? ' border-primary' : ' border-slate-200')}>
                    <label htmlFor='cac' className='cursor-pointer block px-4 py-1.5 w-11/12 text-slate-500'>{businessDoc ? businessDoc.name : 'upload CAC document'}</label>
                    <span><FontAwesomeIcon icon={faUpload} className={businessDocOk ? 'text-primary' : 'text-gray-200'} /></span>
                    <input type='file' name='cac' id='cac' className='hidden' onChange={handleBusinessDocChange} />
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor="kyc">KYC Document<sup>*</sup></label>
                <div className={'rounded-lg mt-1 my-0.5 pl-1 border text-nowrap flex items-center' + (kycDocOk ? ' border-primary' : ' border-slate-200')}>
                    <label htmlFor='kyc' className='cursor-pointer block px-4 py-1.5 w-11/12 text-slate-500'>{kycDoc ? kycDoc.name : 'NIN, International passport'}</label>
                    <span><FontAwesomeIcon icon={faUpload} className={kycDocOk ? 'text-primary' : 'text-gray-200'} /></span>
                    <input type='file' name='kyc' id='kyc' className='hidden' onChange={handleKYCDocChange} />
                </div>
            </div>
            {/* <div className='mb-3'>
                <label htmlFor="bvn">BVN Document</label>
                <div className={'rounded-lg mt-1 my-0.5 pl-1 border text-nowrap flex items-center' + (bvnDocOk ? ' border-primary' : ' border-slate-200')}>
                    <label htmlFor='bvn' className='cursor-pointer block px-4 py-1.5 w-11/12 text-slate-500'>{bvnDoc ? bvnDoc.name : 'upload BVN document'}</label>
                    <span><FontAwesomeIcon icon={faUpload} className={bvnDocOk ? 'text-primary' : 'text-gray-200'} /></span>
                    <input type='file' name='bvn' id='bvn' className='hidden' onChange={handleBVNDocChange} />
                </div>
            </div> */}
            <div className='pt-6'>
                <button type='submit' {...(businessDocOk && kycDocOk ? {disabled:false} : {disabled:true})}
                    className='bg-primary text-white rounded-full w-full py-2 disabled:opacity-50'
                    onClick={() => setLevel(3)}
                >Continue</button>
            </div>
        </div>
    );
};

export default SignUp2;