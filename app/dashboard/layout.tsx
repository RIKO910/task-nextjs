import React from 'react';
import './Dashboard.css'
import Nav from "@/app/dashboard/Nav/Nav";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";



const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div>
                <Nav></Nav>
            <div className="sidebar">
                <hr className="mt-11"/>
                <Link className='mt-4 d_nav' href='/' > <span className="flex icon"><IoMdHome /> <span className='ml-5'>Home</span></span> </Link>
                <Link className=' d_nav' href='/dashboard' > <span className="flex icon"><FiActivity /> <span className='ml-5'>Activity</span></span> </Link>
                <Link className='d_nav' href='/dashboard/user-management'><span className="flex icon"><FaUserFriends/> <span
                    className='ml-5'>User Management</span></span></Link>
            </div>

                <div className="main">
                    {children}
            </div>

            </div>
        </div>
    );
};

export default Layout;