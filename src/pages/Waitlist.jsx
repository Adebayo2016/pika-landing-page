import { useState, useEffect, useRef } from "react";
import axios from "axios";
import hourglass_sm from "./assets/pika_hourglass.png";
import hourglass_md from "./assets/pika_hourglass3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SignUpForm from "./components/SignUpForm";
import Alert from "./components/Alert";
import LoadingProgress from "./components/LoadingProgress";
import Header from "./components/Header";

export default function App(){
  const [windowWidth, setWindowWidth] = useState(0);
  const formRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const source = axios.CancelToken.source();

  useEffect(() => { 
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
  }, [windowWidth]);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const openSignUpForm = () => {
    setIsFormOpen(true);
    setIsSuccess(false);
  };

  const closeSignUpForm = () => {
    setIsFormOpen(false);
    source.cancel('Request canceled due to user action');
  };

  const submitSignUpForm = (e) => {
    e.preventDefault();

    setIsFormOpen(false);
    
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    addUserToWaitList(formValues).then(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess(false);        
      }, 3000);

    });

  };

  const handleLoadProgress = (event) => {
    const percentCompleted = Math.round((event.loaded / event.total) * 100);
    setProgress(percentCompleted);
  };

  const client = axios.create({
    baseURL: "https://us-central1-dispatch-9953a.cloudfunctions.net/",
    onDownloadProgress: handleLoadProgress,
    onUploadProgress: handleLoadProgress,
    cancelToken: source.token,
  });

  const addUserToWaitList = async (data) => {
    try{
      setIsLoading(true);
      const url = `addUserToWaitlist?email=${data.email}&name=${data.name}&business=${data.business_name}&state=${data.state}&phone=${data.phone}`;
      const response = await client.post(url);
      setIsSuccess(true);
    } catch (error) {
      setIsLoading(false);
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else if (error.code === 'ECONNABORTED') {
        console.log('Request timed out');
      } else {
        console.log('Error:', error.message);
      }
    }
  };

  return(
    <>
      <div className="">
        <Header windowWidth={windowWidth} />
        <main className="md:flex md:items-center md:justify-between">
          <section className="md:w-1/2">
            <div className="text-center text-white bg-gradient-to-b from-slate-950 from-40% to-transparent to-90% z-10
              w-full px-16 fixed top-0 left-0 pt-20 md:bg-none md:bg-primary md:static md:h-screen md:content-center md:px-8">
              <p className="font-bold text-[4vw] pb-4 whitespace-nowrap md:text-[2.5vw]" style={{fontSize: isFormOpen || isSuccess ? "15px" : "revert-layer"}}>Track, deliver and manage <br/> packages smarter & easier</p>
              <div className="text-[2vw] md:text-[1.5vw]"  style={{fontSize: isFormOpen || isSuccess ? "10px" : "revert-layer"}}>Be among the first to know when PIKA launches</div>
              {!isFormOpen && !isSuccess &&
                <div>
                  <button onClick={openSignUpForm} className="bg-primary w-full p-4 mt-6 rounded-xl md:bg-slate-950">Join the waitlist</button>
                  <div>
                    <ul className="flex flex-start gap-4 mt-10">
                      <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                      <li><a href="https://www.facebook.com/profile.php?id=61563490287723" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                      <li><a href="https://www.facebook.com/profile.php?id=61563490287723" target="blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                  </div>
                </div>
              }
            </div>
          </section>
          <section className="md:w-1/2">
            <div className="h-screen relative">
              <div>
                <img src={windowWidth > 768 ? hourglass_md : hourglass_sm} loading="lazy"
                  alt="Pika Illustration Hour Glass" className="bg-primary object-fill h-screen w-full" />
              </div>
              
              {isLoading && <LoadingProgress progress={progress} /> }
              
              <div className="content-center absolute top-[5%] left-[5%] z-20 w-full">
                <div className="max-w-[354px] mx-auto bg-white rounded-xl">
                  {isFormOpen && 
                    <SignUpForm ref={formRef} close={closeSignUpForm} submit={submitSignUpForm} />
                  }
                  {isSuccess && 
                    <Alert message="Congratulations you have signed up for the waitlist" type="success" />
                  }
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
};