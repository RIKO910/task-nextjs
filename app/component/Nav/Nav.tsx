import React from 'react';
import './Nav.css';
import Link from "next/link";
const Nav = () => {
    return (
        <div  className="shadow-lg  p-1">
            <div className="mx-16">
                <div className="flex justify-between items-center my-3 ">
                    <div className="flex items-center">
                        <img
                            src="https://lostfoundway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bbb81a69.png&w=96&q=75"
                            className="logo-img"
                        />

                        <Link className="ml-4 font" href='/'>Home</Link>
                        <Link className="ml-4 font" href='/AboutUs'>About Us</Link>
                        <Link className="ml-4 font" href='/dashboard'>Dashboard</Link>
                    </div>
                    <div>
                        <Link className="font" href='/Login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Nav;