import React from 'react';

const About = () => {
    return (
        <div className="pb-20">
            <h1 className="text-3xl ml-7">Testimonials</h1>
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-1xl font-bold mt-5">Purpose And Mission</p>
                    <p className="mt-2">
                        Our website is dedicated to helping people reconnect with their lost belongings. Whether you have found something valuable or lost an item, our platform provides a space for you to post and claim items, facilitating their return to their rightful owners. Our mission is to make the process of reuniting lost items with their owners as easy and efficient as possible.
                    </p>
                </div>
                <div className="ml-3">
                    <p className="text-1xl font-bold mt-5 ">Team Information</p>
                    <p className="mt-2">
                        Meet the dedicated individuals behind our platform who work tirelessly to ensure its smooth operation and success. (Optional: Provide brief information about team members, their roles, and their contributions.)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;