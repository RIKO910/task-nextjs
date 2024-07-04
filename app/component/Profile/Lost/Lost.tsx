import React, { useState, useEffect } from 'react';
import AllLost from '@/app/component/Profile/Lost/AllLost/AllLost';
import UpdateLost from '@/app/component/Profile/Lost/UpdateLost/UpdateLost';

const Lost = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLostItem, setSelectedLostItem] = useState(null);

    const openModal = (lostItem) => {
        setSelectedLostItem(lostItem);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLostItem(null);
    };

    return (
        <div>
            <UpdateLost isModalOpen={isModalOpen} closeModal={closeModal} lostItem={selectedLostItem} />
            <AllLost openModal={openModal} />
        </div>
    );
};

export default Lost;
