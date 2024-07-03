import React, {useEffect, useState} from 'react';
import { format } from 'date-fns';

const AllClaim = () => {
    // Claim Item GET

    const [allClim, setAllClim] =useState([])

    const [loading, setLoading] =useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/api/getclaim')
            .then((response)=>response.json())
            .then((data)=>{
                // console.log(data);
                setAllClim(data);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(allClim);

    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {allClim.map((data, index) => (
                <div key={data.id} className="bg-base-100 border-2 rounded-md p-5">
                    <p className="w-fit bg-[#1486FD] rounded-full px-3 py-1 text-white text-sm">PENDING</p>
                    <h1 className="text-2xl mt-2">{data.claim}</h1>
                    <h1 className="text-sm mt-2">{data.feature}</h1>
                    <h1 className="text-sm mt-2">{format(new Date(data.date), 'MMMM dd, yyyy')}</h1>
                </div>
            ))}
        </div>
    );
};

export default AllClaim;