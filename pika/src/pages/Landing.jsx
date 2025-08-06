import landing_page1 from '../assets/landing_page1.png';
import landing_page2 from '../assets/landing_page2.svg';
import landing_page3 from '../assets/landing_page3.svg';
import smart_route from '../assets/smart_route.png';
import how_it_works from '../assets/how_it_works.png';
import rider_earning from '../assets/rider_earning.png';
import pika_logo from '../assets/Logo.svg';
import { useState } from 'react';
import Join from './Join';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Landing = () => {

    return(
        <>            
            <section id='about'className="pt-4 md:relative">
                <div className='md:absolute md:top-0 md:left-0 text-center w-full'>
                    <h1 className="text-primary font-semibold text-[3rem]/none pt-[48px] text-center">Your Bridge to Effortless Deliveries</h1>
                    <div className="text-md mt-2 md:mt-4 mx-6 whitespace-break-spaces">Making every delivery experience enjoyable, fast and simple</div>
                    <div className="w-8/12 mx-auto md:w-auto md:flex md:justify-center md:items-center mt-4 pt-6">
                        <div className='mr-4 text-sm text-center'>Earn as a rider!</div>
                        <div className='text-center'>
                            <Link to="/sign-up" className="bg-slate-900 text-white py-4 w-full block rounded-3xl md:rounded-xl md:w-[200px]">Sign-up now</Link>
                        </div>
                    </div>
                </div>
                <img src={landing_page1} alt="" className='md:h-[800px] w-full md:bg-[#F9F4F7]' />
            </section>
            <section className='py-24'>
                <div className='flex justify-between py-8 px-2 md:p-10 md:px-14 mx-auto w-10/12 bg-primary rounded-3xl'>
                    <div className='text-center'>
                        <h2 className='text-white text-[5vw] font-extrabold'>1,000+</h2>
                        <p className='text-white mt-4 tracking-widest font-light md:text-lg opacity-75'>Successful Deliveries</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-[5vw] font-extrabold'>500+</h2>
                        <p className='text-white mt-4 tracking-widest font-light md:text-lg opacity-75'>Satisfied Businesses</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-[5vw] font-extrabold'>380+</h2>
                        <p className='text-white mt-4 tracking-widest font-light md:text-lg opacity-75'>Expert Riders</p>
                    </div>
                </div>
            </section>
            <section id='track_delivery'>
                <div className='md:grid md:grid-cols-2 gap-[120px] items-center w-10/12 mx-auto'>
                    <img src={smart_route} className='w-full h-full mb-8 md:mb-0' />
                    <div>
                        <h1 className='font-bold text-3xl'>Track your delivery in real-time</h1>
                        <div className='pt-6'>Track your package, guaranteeing peace of mind at every step of it's journery.</div>
                    </div>
                </div>
            </section>
            <section id='how_it_works' className='py-24'>
                <img src={how_it_works} className='w-full h-full hidden md:block' />
                <div className='bg-primary text-white text-center py-16 px-4 md:hidden'>
                    <h1 className='font-bold mb-12 text-xl'>How PIKA works</h1>
                    <div className='border border-white rounded-3xl p-3 mb-12'>
                        <h2 className='font-semibold my-3'>1. Select Delivery Type</h2>
                        <div>
                            Pika offers customizable delivery options, allowing you to choose the type of delivery that suits your needs,
                            whether it's same day delivery or interstate delivery
                        </div>
                    </div>
                    <div className='border border-white rounded-3xl p-3 mb-12'>
                        <h2 className='font-semibold my-3'>2. Select Your Address</h2>
                        <div>
                            Whether it's your home, office, or a friend's place, selecting the right address ensures your package reaches
                            you seamlessly. Plus, you can save your frequently used addresses for even quicker ordering next time!
                        </div>
                    </div>
                    <div className='border border-white rounded-3xl p-3'>
                        <h2 className='font-semibold my-3'>3. Tailor your shipment</h2>
                        <div>
                            Pika makes delivery sheduling a breeze. Choose yoour preferred data and time effortlessly and stay updated at every step.
                            Say goodbye to stress with Pika's effortless scheduling.
                        </div>
                    </div>
                </div>
            </section>
            <section id="earn_as_rider" className='mb-16'>
                <div className='md:grid md:grid-cols-2 gap-[120px] items-center w-10/12 mx-auto'>
                    <img src={rider_earning} className='w-full h-full mb-8 md:mb-0' />
                    <div>
                        <h1 className='font-bold text-3xl text-[#180A0A]'>Earn As A Pika Rider</h1>
                        <div className='pt-6'>
                            <p>
                                You're free to set your own schedule, work from anywhere, 
                                and decide how much you want to work. You can accept or reject 
                                tasks at your convenience and easily locate opportunities nearby. 
                                There's no requirement to go to an office or have a boss to report to anymore.
                            </p>
                            <div className='mt-[60px] '>
                                <Link to="/sign-up" className='text-[#180A0A] font-bold text-xl block text-center border-[1.5px] border-black rounded-3xl py-[20px]'>Sign-up now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='my-16 relative'>
                <img src={landing_page3} alt="" className='h-auto md:bg-[#F9F4F7] w-full' />
                <div className='text-center w-10/12 mt-8 mx-auto md:flex gap-8 md:items-end md:absolute md:bottom-4 md:right-24 md:w-[370px] md:rounded-xl md:bg-green-50 md:p-4 md:text-sm'>
                    <h3>Moving packages, saving the planet</h3>
                    <p className='mt-6'>At PIKA, we’re aligning with the UN Sustainable Development Goals by introducing bicycle dispatch for short-distance deliveries. 
                        Less carbon, more motion and a healthier urban life
                    </p>
                </div>
            </section>

            <section id='waitlist' className="md:relative mt-[100px]">
                <div className='mb-4 md:mb-0 md:absolute md:top-0 md:left-0 text-center md:text-left md:pt-[50px] md:pl-[150px]'>
                    <h1 className="font-bold text-lg md:text-[2rem] pt-[48px]">Safeguard your business logistics</h1>
                    <div className='max-w-[450px] mx-auto'>
                        <div className="text-md mt-2 text-sm">Jump on the Pika waitlist today and be the first to know when we launch!</div>
                        <div className="mt-4 pt-6 text-sm">
                            <input name='email' autoComplete='false' className='outline-none p-3 w-6/12 md:w-8/12 px-6 bg-transparent border-[1.5px] border-black border-solid rounded-l-lg placeholder-slate-900' type='email' placeholder='Enter your email address' />
                            <span>
                                <button className='outline-none pt-[0.9rem] pb-[0.85rem] px-6 bg-primary text-white border-[1.5px] border-black border-solid rounded-r-lg'>Submit</button>
                            </span>
                        </div>
                    </div>
                </div>                
                <img src={landing_page2} alt="" className='h-auto md:bg-[#F9F4F7] w-full' />
            </section>
            
            <section>
                <div className='mx-6 mt-[50px] md:flex md:justify-between'>
                    <img src={pika_logo} className='logo-primary block md:inline md:w-[100px] md:h-[100px] mr-8 mb-6 md:mb-0' />
                    <div className='flex justify-between md:grid md:grid-cols-2 md:gap-8'>
                        <div className='md:flex md:justify-evenly w-8/12 md:w-auto'>
                            <div className='mb-3 mr-3'>
                                <ul>
                                    <li className='mb-2'><a href="#track_delivery">Track and monitor your delivery in real-time</a></li>
                                    <li className='mb-2'><a href="#how_it_works">How Pika works</a></li>
                                    <li className='mb-2'><a href="#earn_as_rider">Earn as a Pika rider</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-2'>Contact</h3>
                                <div className='mb-2'><a href='mailto:info@abc.com'>info@abc.com</a></div>
                                <div><a href='tel:+91999988766' className='whitespace-nowrap'>+91 999988766</a></div>
                            </div>
                        </div>
                        <div className='md:flex md:justify-evenly w-4/12 md:w-auto'>
                            <div className='mb-3'>
                                <h3 className='font-semibold mb-2'>Support</h3>
                                <div><a href='' className='mb-2'>Helpxcenter</a></div>
                                <div><a href='' className='mb-2'>FAQs</a></div>
                            </div>
                            <div>
                                <div className='font-semibold mb-2'>Follow Pika</div>
                                <ul>
                                    <li className='mb-2'><a target='_blank' href=''>Facebook</a></li>
                                    <li className='mb-2'><a target='_blank' href=''>Instagram</a></li>
                                    <li className='mb-2'><a target='_blank' href=''>Twitter</a></li>
                                    <li className='mb-2'><a target='_blank' href=''>Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='bg-primary text-white py-4 mt-4 text-sm text-center md:text-left'>
                    <div className='mx-auto w-fit md:w-auto md:flex md:justify-evenly'>
                        <div>
                            {new Date().getFullYear()} De-Aelum LLC All Right Reserved
                        </div>
                        <div>
                            <a href='#' className='mr-4'>Policy</a>
                            <a href='#'>Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Landing;