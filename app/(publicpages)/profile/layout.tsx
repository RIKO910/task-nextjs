import React from 'react';
import Header from "@/app/component/Profile/Header/Header";

const ProfileLayout = ({
                           children,
                       }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="mx-36">
            <Header></Header>
            {children}
        </div>
    );
};

export default ProfileLayout;