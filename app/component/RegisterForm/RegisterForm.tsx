'use client'
import React, {FormEvent, useState} from 'react';
import Link from "next/link";
const RegisterForm = () => {
    const [fieldData, setFieldData]=useState({
        name:"",
        user_name:"",
        email:"",
        password:"",
        confirm_password:"",
        bio_information:"",
        age:"",
    })
    const formHandeling = (e: FormEvent) => {
        e.preventDefault();
        console.log(fieldData);
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFieldData({ ...fieldData, [name]: value });
    };

    return (
        <div>
            <form onSubmit={formHandeling} className='my-7'>
                <label className="input input-bordered flex items-center">
                    <input name="name" onChange={handleInputChange} type="text" className="grow" placeholder="Name"/>
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input name="user_name" onChange={handleInputChange} type="text" className="grow " placeholder="User name"/>
                </label>
                <label className="input input-bordered flex items-center">
                    <input name="email" onChange={handleInputChange} type="email" className="grow" placeholder="Email"/>
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input name="password" onChange={handleInputChange} type="password" placeholder="Password" className=" grow "/>
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input  type="password" placeholder="Confirm Password" className=" grow "/>
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input name="bio_information" onChange={handleInputChange}  type="text" className="grow" placeholder="Bio Information"/>
                </label>
                <label className="input input-bordered flex items-center">
                    <input name="age" onChange={handleInputChange} type="number" min={0} className="grow" placeholder="Age"/>
                </label>
                <button type='submit' className="button">REGISTER</button>
                <p>Dont have an account? <span className='sign'><Link href='/Login'>LOGIN</Link> </span></p>
            </form>

        </div>
    );
};

export default RegisterForm;