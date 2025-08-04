import verified_riders from '../assets/verified_riders.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import { useMutation } from '@tanstack/react-query';
import { api, auth } from '../accessory/Auth';

const Signup = () => {
    const [businessName, setBusinessName] = useState('');
    const [businessNameOk, setBusinessNameOk] = useState(false);
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessAddressOk, setBusinessAddressOk] = useState(false);
    const [tel, setTel] = useState('');    
    const [phoneCode, setPhoneCode] = useState('+234');    
    const [telOk, setTelOk] = useState(false);
    const [email, setEmail] = useState('');    
    const [emailOk, setEmailOk] = useState(false);
    const [businessDoc, setBusinessDoc] = useState(null);
    const [businessDocOk, setBusinessDocOk] = useState(false);
    const [kycDoc, setKYCDoc] = useState(null);
    const [kycDocOk, setKYCDocOk] = useState(false);
    const [bvnDoc, setBVNDoc] = useState(null);
    const [bvnDocOk, setBVNDocOk] = useState(false);
    const [businessLogoDoc, setBusinessLogoDoc] = useState(null);
    const [businessLogoDocOk, setBusinessLogoDocOk] = useState(false);
    const [serviceOffered, setServiceOffered] = useState("");
    const [serviceOfferedOk, setServiceOfferedOk] = useState(false);
    const [level, setLevel] = useState(1);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [userLocation, setUserLocation] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // console.log('User location:', latitude, longitude);
                    
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
        console.error('Geolocation is not supported by this browser.');
        }
    }, []);
    
    
    const handleBusinessNameChange = (e) => {
        const val = e.target.value;
        setBusinessName(val);
        if (val.length >= 6) {
            setBusinessNameOk(true);
        } else {
            setBusinessNameOk(false);
        }
    };

    const handleBusinessAddressChange = (e) => {
        const val = e.target.value;
        setBusinessAddress(val);
        if (val.length >= 6) {
            setBusinessAddressOk(true);
        } else {
            setBusinessAddressOk(false);
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

    const handleBusinessDocChange = (e) => {
        const file = e.target.files[0];
        setBusinessDoc(file);
        setBusinessDocOk(true);
    };

    const handleKYCDocChange = (e) => {
        const file = e.target.files[0];
        setKYCDoc(file);
        setKYCDocOk(true);
    };
    const handleBVNDocChange = (e) => {
        const file = e.target.files[0];
        setBVNDoc(file);
        setBVNDocOk(true);
    };

    const handleBusinessLogoDocChange = (e) => {
        const file = e.target.files[0];
        setBusinessLogoDoc(file);
        if (file.size > 1024 * 1024 * 3){
            setError("File size should be less than 3MB");
        }else {
            setBusinessLogoDocOk(true);
        }
    };

    const handleServiceOfferedChange = (e) => {
        const val = e.target.value;
        setServiceOffered(val);
        if (val.length >= 3) {
            setServiceOfferedOk(true);
        } else {
            setServiceOfferedOk(false);
        }
    };

    const signup = useMutation({
        mutationFn: async ({url, data}) => {return await api.put(url, data)},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error creating business profile</div>"));},
    });

    const upload = useMutation({
        mutationFn: async ({url, data}) => {return await api.post(url, data)},
        onError: (e) => {setError(error + (e.response.data ? `"<div>${e.response.data.message}</div>"` : "<div>Error uploding data</div>"));},
    });

    const handleSubmit = async () => {
        setError("");
        if (!businessNameOk || !businessAddressOk || !telOk || !emailOk || !businessDocOk || !kycDocOk || !businessLogoDocOk || !serviceOfferedOk) {
            setError('Please fill all fields correctly.');
            return;
        }
        
        const data = new FormData();
        data.append('fullName', businessName);
        data.append('address', businessAddress);
        data.append('phone', phoneCode + tel);
        data.append('businessPhone', phoneCode + tel);
        data.append('email', email);
        data.append('businessEmail', email);
        data.append('filename', businessLogoDoc);
        // data.append('serviceOffered', serviceOffered);
        data.append('lat', userLocation?.latitude || 6.642303425130728);
        data.append('lng', userLocation?.longitude || 3.493614760705535);
        // {
        //     fullName:businessName ,
        //     phone:phoneCode + tel,
        //     address:businessAddress,
        //     filename: businessLogoDoc,
        //     lat:6.642303425130728,
        //     lng:3.493614760705535,
        //     businessType:"retail",
        //     businessEmail:email,
        //     businessPhone:phoneCode + tel,
        //     // about: "",
        //     // website: "",
        //     // establishedYear:"",
        // }
        
        const docs = new FormData();
        docs.append('cac', businessDoc);
        docs.append('id', kycDoc);
        docs.append('documentTypes', "cac,id");
        // {
        //     documentTypes:"cac,id",
        //     cac:businessDoc,
        //     id:kycDoc
        // }
        // console.log(data, docs);
        try {
            const [profileRes, uploadRes] = await Promise.all([
                signup.mutateAsync({url:'/api/update-business-profile', data:data}),
                upload.mutateAsync({url:'/api/upload-multiple-documents', data:docs})
            ]);

            // sample response for upload
            // {
            //     "document_urls": {
            //         "cac": "https://res.cloudinary.com/dncormlzh/image/upload/v1754230231/business_documents/8DlQ6EDZbtgQxIBrHld2R62YtyD2/cac/bg_compose_background_1754230231.png",
            //         "id": "https://res.cloudinary.com/dncormlzh/image/upload/v1754230232/business_documents/8DlQ6EDZbtgQxIBrHld2R62YtyD2/id/bg_compose_background_1754230231.png"
            //     }
            // }
            // console.log(profileRes, uploadRes);
            navigate("success");
        } catch (err) {
            setError("Error creating business profile");
            // console.error("Error creating business profile:", err);
        }
    };

    return(
        <div className="md:flex md:justify-between md:gap-8 md:items-center">
            <div className='hidden md:block h-screen w-1/2 max-w-[500px]'>
                <img src={verified_riders} alt="" className='h-screen w-full'/>
            </div>
            <div className='mx-auto w-10/12 max-w-[350px] h-screen content-center'>
                <h1 className='font-bold pb-6'>Complete your profile</h1>
                <div className='pb-6 text-sm flex justify-around items-center gap-4 whitespace-nowrap mx-auto mb-8 w-8/12'>
                    <div className={`w-fit rounded-[100%] py-[2px] px-[7px] border border-slate-900 text-xs ${level === 1 && "bg-slate-900 text-white"}`}>1</div>
                    <hr className='w-5/12 bg-slate-700 h-[2px]' />
                    <div className={`w-fit rounded-[100%] py-[2px] px-[7px] border border-slate-900 text-xs ${level === 2 && "bg-slate-900 text-white"}`}>2</div>
                    <hr className='w-5/12 bg-slate-700 h-[2px]' />
                    <div className={`w-fit rounded-[100%] py-[2px] px-[7px] border border-slate-900 text-xs ${level === 3 && "bg-slate-900 text-white"}`}>3</div>
                </div>
                <div className='text-sm'>
                    {error && <div className='mb-4 text-red-500'>{error}</div>}
                    {level === 1 && 
                        <SignUp1 
                            businessName={businessName} businessNameOk={businessNameOk} handleBusinessNameChange={handleBusinessNameChange}
                            businessAddress={businessAddress} businessAddressOk={businessAddressOk} handleBusinessAddressChange={handleBusinessAddressChange} 
                            tel={tel} telOk={telOk} handleTelChange={handleTelChange}
                            email={email} emailOk={emailOk} handleEmailChange={handleEmailChange}
                            phoneCode={phoneCode} setPhoneCode={setPhoneCode} setLevel={setLevel}
                        />
                    }
                    {level === 2 && 
                        <SignUp2 
                            businessDoc={businessDoc} businessDocOk={businessDocOk} handleBusinessDocChange={handleBusinessDocChange}
                            kycDoc={kycDoc} kycDocOk={kycDocOk} handleKYCDocChange={handleKYCDocChange} 
                            bvnDoc={bvnDoc} bvnDocOk={bvnDocOk} handleBVNDocChange={handleBVNDocChange} setLevel={setLevel}
                        />
                    }
                    {level === 3 && 
                        <SignUp3 
                            businessLogoDoc={businessLogoDoc} businessLogoDocOk={businessLogoDocOk} handleBusinessLogoDocChange={handleBusinessLogoDocChange}
                            serviceOffered={serviceOffered} serviceOfferedOk={serviceOfferedOk} handleServiceOfferedChange={handleServiceOfferedChange} 
                            handleSubmit={handleSubmit} isLoading={signup.isPending || upload.isPending}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Signup;