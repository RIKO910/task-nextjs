import React from 'react';
import './Testimonial.css';
import Title from "@/app/component/Title/Title";

const Testimonial = () => {
    return (
        <div className="pt-16">
            <Title title='Testimonials' className="ml-7"/>
            {/*<h1 className="text-3xl ml-7">Testimonials</h1>*/}
            <div className="grid grid-cols-2 mt-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className="image1"
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                            alt="Movie"/>
                    </figure>
                    <div className="card-body my-auto">
                        <h2 className="card-title">John Doe</h2>
                        <p>I found my lost dog thanks to this platform! Highly recommend it.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl ml-2">
                    <figure>
                        <img className="image1"
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                            alt="Movie"/>
                    </figure>
                    <div className="card-body my-auto">
                        <h2 className="card-title">John Doe</h2>
                        <p>I found my lost dog thanks to this platform! Highly recommend it.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;