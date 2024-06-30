import React from 'react';
import './Register.css';
import RegisterForm from "@/app/component/RegisterForm/RegisterForm";
import { MdAppRegistration } from "react-icons/md";

const Page = () => {
    return (
        <div>
            <div className='mt-14'>
                <div className="flex space-x-3 items-center py-3 pr-5 loginLogo ">
                    <div className="flex-shrink-0">
                        <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                            <div
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-500">
                                <MdAppRegistration className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                            </div>
                        </dt>
                    </div>
                </div>
                <h1 className="text-3xl ml-7 login">Registration</h1>
            </div>
            <RegisterForm></RegisterForm>
        </div>
    );
};

export default Page;