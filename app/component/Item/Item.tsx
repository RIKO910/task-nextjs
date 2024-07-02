import React from 'react';
import Title from "@/app/component/Title/Title";

const Item = () => {
    return (
        <div className="pb-20 ml-7">
            <h1 className="text-3xl pb-7">Recent Lost Item Reports</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">School Bag</h2>
                        <p>a school bag was found with books. It is a red and white color mixed bag. It has two pars and
                            3 sub pockets of...</p>
                        <p>Date: 2024-05-29</p>
                        <p>Location: Khulna</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Watch</h2>
                        <p>It is a black watch. it was not much expensive and an ol model with round white line. I tis water proof and be...</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Test</h2>
                        <p>sfsdfs...</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Diamond Ring</h2>
                        <p>I lost my diamond ring at the Mall of America in Bloomington. The ring is a silver band with a single diamond ...</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Okjsdf</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Item;