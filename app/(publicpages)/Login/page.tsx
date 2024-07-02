'use client';
import React from 'react';
import './Login.css';
import { FaLock } from "react-icons/fa";
import LoginForm from "@/app/component/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <div className='mt-14'>
                <div className="flex space-x-3 items-center py-3 pr-5 loginLogo ">
                    <div className="flex-shrink-0">
                        <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-500">
                                <FaLock className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                            </div>
                        </dt>
                    </div>
                </div>
                <h1 className="text-3xl ml-7 login">Login</h1>
            </div>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;