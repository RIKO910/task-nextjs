import React, { useEffect, useState } from 'react';
import { MdDelete, MdEditNote } from 'react-icons/md';
import { format } from 'date-fns';

const AllLost = ({ openModal }) => {
    const [allLost, setAllLost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/lost')
            .then(response => response.json())
            .then(data => {
                setAllLost(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const deleteLostItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/lost/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setAllLost(allLost.filter(item => item.id !== id));
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {allLost.map(data => (
                <div key={data.id} className="bg-base-100 border-2 rounded-md p-5">
                    <div className="flex justify-between">
                        <div>
                            <p className="w-fit bg-[#1486FD] rounded-full px-3 py-1 text-white text-sm">PENDING</p>
                        </div>
                        <div className="flex">
                            <div className="hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 p-1 rounded-full">
                                <MdDelete
                                    className=" text-2xl cursor-pointer"
                                    onClick={() => deleteLostItem(data.id)}
                                />
                            </div>

                            <div className= " ml-2 hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 p-1 rounded-full">
                                <MdEditNote
                                    className="text-2xl cursor-pointer "
                                    onClick={() => openModal(data)}
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className="text-2xl mt-2">{data.lost_name}</h1>
                    <h1 className="text-sm mt-2">{data.description}</h1>
                    <h1 className="text-sm mt-2">{format(new Date(data.date), 'MMMM dd, yyyy')}</h1>
                </div>
            ))}
        </div>
    );
};

export default AllLost;
