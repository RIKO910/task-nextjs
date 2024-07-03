// app/component/Nav/Nav.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { logout } from '@/app/store/authSlice';
import './Nav.css';

const Nav: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="shadow-lg p-1">
            <div className="mx-16">
                <div className="flex justify-between items-center my-3">
                    <div className="flex items-center">
                        <img
                            src="https://lostfoundway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bbb81a69.png&w=96&q=75"
                            className="logo-img"
                        />
                        <Link className="ml-4 font" href="/">
                            Home
                        </Link>
                        <Link className="ml-4 font" href="/AboutUs">
                            About Us
                        </Link>
                        <Link className="ml-4 font" href="/profile/claims">
                            Profile
                        </Link>
                        {isAuthenticated && (
                            <Link className="ml-4 font" href="/dashboard">
                                Dashboard
                            </Link>
                        )}
                    </div>
                    <div>
                        {isAuthenticated ? (
                            <button className="font" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link className="font" href="/Login">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
