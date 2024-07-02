'use client';
import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
    return (
        <div className='mx-36'>
            <h1 className="text-3xl mt-8">Our Mission</h1>
            <p className="mt-4">
                Our mission is to provide a reliable platform for helping people find their lost items. We strive to
                create a community where everyone can feel safe and supported in their time of need.
            </p>
            <h1 className="text-3xl mt-8">Found and Lost System</h1>
            <p className="mt-4">
                The &quot;Found and Lost System&quot; is a platform where individuals can help each other by reporting and finding
                lost items. Whether it&apos;s a misplaced phone, a lost pet, or any other valuable possession, our platform
                connects people to aid in the recovery process. Together, we strive to reunite lost items with their
                rightful owners and foster a sense of community support.
            </p>
            <h1 className="text-3xl mt-8">Meet Our Team</h1>
            <div className="my-4 grid grid-cols-3">
                <div className="card">
                    <img src='https://lostfoundway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fab1.7ef6ef2c.jpg&w=256&q=75' alt="Daniel Marko"/>
                    <h2 className='mt-4'>Daniel Marko</h2>
                    <p>CEO</p>
                </div>
                <div className="card">
                    <img src='https://lostfoundway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fab2.ab706599.png&w=256&q=75' alt="Arshi Doby"/>
                    <h2 className='mt-4'>Arshi Doby</h2>
                    <p>CTO</p>
                </div>
                <div className="card">
                    <img src='https://lostfoundway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fab3.8067cb54.jpeg&w=128&q=75' alt="Willium Makro"/>
                    <h2 className='mt-4'>Willium Makro</h2>
                    <p>CFO</p>
                </div>
            </div>
            <div className="contact mt-10 mb-10">
                <h1 className="text-3xl font-bold mt-8">Contact Us</h1>
                <p className="my-4">If you have any questions or need assistance, feel free to reach out to us.</p>
                <p>Address: 1234 Lost &amp; Found Lane, Somewhere City, Country</p>
            </div>
        </div>
    );
};

export default AboutUsPage;
