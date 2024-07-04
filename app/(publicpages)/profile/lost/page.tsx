'use client';

import React, {FormEvent, useState} from 'react';
import Title from "@/app/component/Title/Title";
import './lost.css'
import Lost from "@/app/component/Profile/Lost/Lost";

const LostPage = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal');
        if (modal) {
            modal.showModal();
        }
    };


    // Lost item create

    const [fieldData, setFieldData] = useState({
        lost_name: "",
        category: "",
        description: "",
        location: "",
        email: "",
        phone: "",
        date: "",
    });

    const [message, setMessage] = useState('');

    const formHandling = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/postlost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lost_name: fieldData.lost_name,
                    category: fieldData.category,
                    description: fieldData.description,
                    location: fieldData.location,
                    email: fieldData.email,
                    phone: fieldData.phone,
                    date: fieldData.date,
                }),
            });

            if (response.ok) {
                setMessage('Data create successful');
                // Reset form fields
                setFieldData({
                    lost_name: "",
                    category: "",
                    description: "",
                    location: "",
                    email: "",
                    phone: "",
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
                    <button type='button' className="button" onClick={openModal}>ADD LOST ITEM</button>
                    <dialog id="my_modal" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Add a lost item</h3>
                            <hr/>
                            <form onSubmit={formHandling} className="my-4">
                                <input name="lost_name" onChange={handleInputChange} type="text" placeholder="Lost item name"
                                       className="input input-bordered w-full max-w-xs"/>
                                <select name="category" onChange={handleInputChange} className="select my-2 select-bordered w-full max-w-xs">
                                    <option disabled selected>Category</option>
                                    <option value="Jewelry">Jewelry</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Cloths">Cloths</option>
                                    <option value="Pets & Animals">Pets & Animals</option>
                                    <option value="Bags & Luggage">Bags & Luggage</option>
                                </select>
                                <input name="description" onChange={handleInputChange} type="text" placeholder="Description"
                                       className="input input-bordered w-full max-w-xs"/>
                                <input name="location" onChange={handleInputChange} type="text" placeholder="Location"
                                       className="input my-2 input-bordered w-full max-w-xs"/>
                                <input name="email" onChange={handleInputChange} type="email" placeholder="Email"
                                       className="input input-bordered w-full max-w-xs"/>
                                <input name="date" onChange={handleInputChange} type="date" placeholder=""
                                       className="input  my-2 input-bordered w-full max-w-xs"/>
                                <input name="phone" onChange={handleInputChange} type="text" placeholder="Phone"
                                       className="input mb-2 input-bordered w-full max-w-xs"/>
                                <br/>
                                <input type="file" className="file-input w-full max-w-xs"/>
                                <br/>
                                <button type='submit' className="button">ADD</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <div>
               <Lost></Lost>
            </div>
        </div>
    );
};

export default LostPage;