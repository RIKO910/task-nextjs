'use client'
import React, {FormEvent} from 'react';
import Link from "next/link";
const RegisterForm = () => {
    const formHandeling = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={formHandeling} className='my-7'>
                <label className="input input-bordered flex items-center">
                    <input type="text" className="grow" placeholder="Name"/>
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input type="text" className="grow " placeholder="User name"/>
                </label>
                <label className="input input-bordered flex items-center">
                    <input type="email" className="grow" placeholder="Email"/>
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input type="password" placeholder="Password" className=" grow "/>
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input type="password" placeholder="Confirm Password" className=" grow "/>
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input type="text" className="grow" placeholder="Bio Information"/>
                </label>
                <label className="input input-bordered flex items-center">
                    <input type="number" min={0} className="grow" placeholder="Age"/>
                </label>
                <button type='submit' className="button">LOGIN</button>
                <p>Dont have an account? <span className='sign'><Link href='/Login'>LOGIN</Link> </span></p>
            </form>

        </div>
    );
};

export default RegisterForm;