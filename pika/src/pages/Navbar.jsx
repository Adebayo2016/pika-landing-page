import { Link, Outlet } from 'react-router-dom';
import pika_logo from '../assets/Logo.svg';

const Navbar = () => {
    return(
        <>
            <header>
                <nav className='flex justify-between my-8 px-4 md:px-16 items-center'>
                    <div><img src={pika_logo} className='logo-primary' /></div>
                    <div>
                        <Link to="/sign-up" className='border border-primary p-3 px-6 rounded-full text-primary font-semibold'>Sign Up</Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Navbar;