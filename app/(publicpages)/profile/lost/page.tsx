'use client';

import React from 'react';
import Title from "@/app/component/Title/Title";
import './lost.css'
const LostPage = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal');
        if (modal) {
            modal.showModal();
        }
    };
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <Title title="My Claim Requests" size="md" />
                </div>
                <div>
                    <button type='button' className="button" onClick={openModal}>ADD LOST ITEM</button>
                    <dialog id="my_modal" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Add a lost item</h3>
                            <hr/>
                            <form className="my-4">
                                <input type="text" placeholder="Lost item name"
                                       className="input input-bordered w-full max-w-xs"/>
                                <select className="select my-2 select-bordered w-full max-w-xs">
                                    <option disabled selected>Category</option>
                                    <option>Jewelry</option>
                                    <option>Electronics</option>
                                    <option>Cloths</option>
                                    <option>Pets & Animals</option>
                                    <option>Bags & Luggage</option>
                                </select>
                                <input type="text" placeholder="Description"
                                       className="input input-bordered w-full max-w-xs"/>
                                <input type="text" placeholder="Location"
                                       className="input my-2 input-bordered w-full max-w-xs"/>
                                <input type="email" placeholder="Email"
                                       className="input input-bordered w-full max-w-xs"/>
                                <input type="date" placeholder="DIStinguish features"
                                       className="input  my-2 input-bordered w-full max-w-xs"/>
                                <input type="text" placeholder="Phone"
                                       className="input mb-2 input-bordered w-full max-w-xs"/>
                                <br/>
                                <input type="file" className="file-input w-full max-w-xs"/>
                                <br/>
                                <button type='button' className="button">ADD</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-base-100 border-2 rounded-md p-5">
                    <p className="w-fit bg-[#1486FD] rounded-full px-3 py-1 text-white text-sm">PENDING</p>
                    <Title title="Bike" size="md" />
                    <Title title="aqwsed" size="sm" className="mt-2" />
                    <Title title="Found By, nayeem, Email: nayeem@gmail.com" size="sm" className="mt-1 text-sm" />
                </div>
            </div>
        </div>
    );
};

export default LostPage;