import React, {FormEvent, useEffect, useState} from 'react';

const UpdateFound = ({ isModalOpen, closeModal, foundItem }) => {
    const [fieldData, setFieldData] = useState({
        found_name: '',
        category: '',
        description: '',
        location: '',
        email: '',
        phone: '',
        date: '',
        claim_process:'',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (foundItem) {
            setFieldData({
                found_name: foundItem.found_name,
                category: foundItem.category,
                description: foundItem.description,
                location: foundItem.location,
                email: foundItem.email,
                phone: foundItem.phone,
                date: new Date(foundItem.date).toISOString().split('T')[0],
                claim_process:foundItem.claim_process,
            });
        }
    }, [foundItem]);

    const formHandling = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/found/${foundItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    found_name: fieldData.found_name,
                    category: fieldData.category,
                    description: fieldData.description,
                    location: fieldData.location,
                    email: fieldData.email,
                    phone: fieldData.phone,
                    date: fieldData.date,
                    claim_process: fieldData.claim_process,
                }),
            });

            if (response.ok) {
                setMessage('Data update successful');
                closeModal(); // Close modal after successful update
            } else {
                const data = await response.json();
                setMessage(`Update failed: ${data.error}`);
            }
        } catch (error) {
            setMessage('An error occurred');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFieldData({ ...fieldData, [name]: value });
    };

    return (
        <div>
            {isModalOpen && (
                <dialog id="my_modal" className="modal" open>
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Update Lost Item</h3>
                        <hr />
                        <form onSubmit={formHandling} className="my-4">
                            <input
                                name="found_name"
                                onChange={handleInputChange}
                                type="text"
                                value={fieldData.found_name}
                                placeholder="Lost item name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <select
                                name="category"
                                onChange={handleInputChange}
                                value={fieldData.category}
                                className="select my-2 select-bordered w-full max-w-xs"
                            >
                                <option disabled value="">
                                    Category
                                </option>
                                <option value="Jewelry">Jewelry</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Cloths">Cloths</option>
                                <option value="Pets & Animals">Pets & Animals</option>
                                <option value="Bags & Luggage">Bags & Luggage</option>
                            </select>
                            <input
                                name="description"
                                onChange={handleInputChange}
                                type="text"
                                value={fieldData.description}
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input
                                name="location"
                                onChange={handleInputChange}
                                type="text"
                                value={fieldData.location}
                                placeholder="Location"
                                className="input my-2 input-bordered w-full max-w-xs"
                            />
                            <input
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                value={fieldData.email}
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input
                                name="claim_process"
                                onChange={handleInputChange}
                                type="text"
                                value={fieldData.claim_process}
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <input
                                name="date"
                                onChange={handleInputChange}
                                type="date"
                                value={fieldData.date}
                                className="input my-2 input-bordered w-full max-w-xs"
                            />
                            <input
                                name="phone"
                                onChange={handleInputChange}
                                type="text"
                                value={fieldData.phone}
                                placeholder="Phone"
                                className="input mb-2 input-bordered w-full max-w-xs"
                            />
                            <br />
                            <input type="file" className="file-input w-full max-w-xs" />
                            <br />
                            <button type="submit" className="button">
                                Update
                            </button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default UpdateFound;