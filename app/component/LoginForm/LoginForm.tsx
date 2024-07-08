// components/LoginForm.js
'use client';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import api from '../../lib/axios';
import { useAppSelector } from "@/src/redux/reduxHooks";
import { AUTH_KEY } from "@/app/constant/authConstant";
import { setAccessToken } from "@/src/action/authAction";
import { loginSuccess, setFlag, setUser } from "@/src/redux/slices/auth";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const authState = useAppSelector((state) => state.auth);

    const formHandling = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post('/login', { email, password });

            console.log('Full Response:', response); // Log the full response
            const data = response;
            console.log('Response Data:', data); // Log the data part of the response

            const { user, token, status } = data; // Destructure user, token, and status from response.data

            if (status === 200) {
                if (token) {
                    setAccessToken(AUTH_KEY, token);
                }
                dispatch(setUser(user));
                dispatch(setFlag({ flagName: "fetch", value: false }));
                dispatch(loginSuccess({ user, token }));
                setMessage('Login successful');
                router.push("/dashboard");
            } else {
                console.error('Login failed with status:', status);
                setMessage('Login failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setMessage('An error occurred');
        }
    };

    return (
        <div>
            <form onSubmit={formHandling} className='my-7'>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                    </svg>
                    <input
                        type="text"
                        className="grow"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className='input input-bordered flex items-center gap-2 mt-4'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd"/>
                    </svg>
                    <input
                        type="password"
                        placeholder="Password"
                        className="grow"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type='submit' className="button">LOGIN</button>
                {message && <p>{message}</p>}
                <p>Dont have an account? <span className='sign'><Link href='/register'>SIGN UP</Link> </span></p>
            </form>
        </div>
    );
};

export default LoginForm;
