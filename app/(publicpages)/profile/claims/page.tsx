'use client';

import React, {FormEvent, useEffect, useState} from 'react';
import Title from "@/app/component/Title/Title";
import './Claim.css'
import AllClaim from "@/app/component/Profile/AllClaim/AllClaim";

const ClaimsPage = () => {
    // Show Modal
    const openModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.showModal();
        }
    };

    // Claim Item Create
    const [fieldData, setFieldData] = useState({
        claim: "",
        feature: "",
        date: "",
    });

    const [message, setMessage] = useState('');

    const formHandling = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/claimpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    claim: fieldData.claim,
                    feature: fieldData.feature,
                    date: fieldData.date,
                }),
            });

            if (response.ok) {
                setMessage('Data create successful');
                // Reset form fields
                setFieldData({
                    claim: "",
                    feature: "",
                    date: "",
                });
            } else {
                const data = await response.json();
                setMessage(`Create failed: ${data.error}`);
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
                            <form onSubmit={formHandling} className="my-4">
                                <select name="claim" onChange={handleInputChange}  className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Claim item</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Mobile phone">Mobile phone</option>
                                    <option value="Wallet">Wallet</option>
                                </select>
                                <input name="feature" onChange={handleInputChange} type="text" placeholder="DIStinguish features"
                                       className="input my-2 input-bordered w-full max-w-xs"/>
                                <input name="date" onChange={handleInputChange} type="date" placeholder="DIStinguish features"
                                       className="input input-bordered w-full max-w-xs"/>
                                <br/>
                                <button type='submit' className="button">ADD</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <div className="">
                <AllClaim></AllClaim>
            </div>
        </div>
    );
};

export default ClaimsPage;
