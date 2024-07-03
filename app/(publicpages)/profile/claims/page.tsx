'use client';

import React from 'react';
import Title from "@/app/component/Title/Title";
import './Claim.css'

const ClaimsPage = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_3');
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
                    <button type='button' className="button" onClick={openModal}>ADD CLAIM</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Claim a found item</h3>
                            <hr/>
                            <form className="my-4">
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Claim item</option>
                                    <option>Bike</option>
                                    <option>Mobile phone</option>
                                    <option>Wallet</option>
                                </select>
                                <input type="text" placeholder="DIStinguish features"
                                       className="input my-2 input-bordered w-full max-w-xs"/>
                                <input type="date" placeholder="DIStinguish features"
                                       className="input input-bordered w-full max-w-xs"/>
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

export default ClaimsPage;
