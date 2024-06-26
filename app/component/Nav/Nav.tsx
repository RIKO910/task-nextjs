import React from 'react';
import './Nav.css';
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

                        <a className="ml-4 font">Home</a>
                        <a className="ml-4 font">About Us</a>
                    </div>
                    <div>
                        <a className="font">Home</a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Nav;