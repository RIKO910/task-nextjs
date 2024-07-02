'use client';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';

const RegisterForm = () => {
    const [fieldData, setFieldData] = useState({
        name: "",
        user_name: "",
        email: "",
        password: "",
        confirm_password: "",
        bio_information: "",
        age: "",
    });

    const [message, setMessage] = useState('');

    const formHandling = async (e: FormEvent) => {
        e.preventDefault();

        // Check if passwords match
        if (fieldData.password !== fieldData.confirm_password) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: fieldData.name,
                    user_name: fieldData.user_name,
                    email: fieldData.email,
                    password: fieldData.password,
                    bio_information: fieldData.bio_information,
                    age: fieldData.age,
                }),
            });

            if (response.ok) {
                setMessage('Registration successful');
                // Reset form fields
                setFieldData({
                    name: "",
                    user_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    bio_information: "",
                    age: "",
                });
            } else {
                const data = await response.json();
                setMessage(`Registration failed: ${data.error}`);
            }
        } catch (error) {
            setMessage('An error occurred');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFieldData({ ...fieldData, [name]: value });
    };

    return (
        <div>
            <form onSubmit={formHandling} className='my-7'>
                <label className="input input-bordered flex items-center">
                    <input name="name" onChange={handleInputChange} type="text" className="grow" placeholder="Name" value={fieldData.name} />
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input name="user_name" onChange={handleInputChange} type="text" className="grow " placeholder="User name" value={fieldData.user_name} />
                </label>
                <label className="input input-bordered flex items-center">
                    <input name="email" onChange={handleInputChange} type="email" className="grow" placeholder="Email" value={fieldData.email} />
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input name="password" onChange={handleInputChange} type="password" placeholder="Password" className=" grow " value={fieldData.password} />
                </label>
                <label className='input input-bordered flex items-center  mt-4'>
                    <input name="confirm_password" onChange={handleInputChange} type="password" placeholder="Confirm Password" className=" grow " value={fieldData.confirm_password} />
                </label>
                <label className="input input-bordered flex items-center my-4">
                    <input name="bio_information" onChange={handleInputChange} type="text" className="grow" placeholder="Bio Information" value={fieldData.bio_information} />
                </label>
                <label className="input input-bordered flex items-center">
                    <input name="age" onChange={handleInputChange} type="number" min={0} className="grow" placeholder="Age" value={fieldData.age} />
                </label>
                <button type='submit' className="button">REGISTER</button>
                {message && <p>{message}</p>}
                <p>Dont have an account? <span className='sign'><Link href='/Login'>LOGIN</Link> </span></p>
            </form>
        </div>
    );
};

export default RegisterForm;
