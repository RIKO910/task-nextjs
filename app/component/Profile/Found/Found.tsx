import React, {useState} from 'react';
import UpdateFound from "@/app/component/Profile/Found/UpdateFound/UpdateFound";
import AllFound from "@/app/component/Profile/Found/AllFound/AllFound";

const Found = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFoundItem, setSelectedFoundItem] = useState(null);

    const openModal = (foundItem) => {
        setSelectedFoundItem(foundItem);
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedFoundItem(null);
    };

    return (
        <div>
            <UpdateFound isModalOpen={isModalOpen} closeModal={closeModal} foundItem={selectedFoundItem} />
            <AllFound openModal={openModal} />
        </div>
    );
};

export default Found;