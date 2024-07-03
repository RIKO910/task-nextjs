'use client'; // Ensure this directive is at the top

import React from 'react';
import './Header.css';
import Title from "@/app/component/Title/Title";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";

const Header = () => {
    const pathname = usePathname();

    const getLinkClass = (path) => {
        return pathname === path ? "border-b-2 border-[#1486FD] text-[#7373F8]" : "text-[#7373F8]";
    };

    return (
        <div className="">
            <div className="contain mt-8 mb-4">
                <div className="grid grid-cols-4 gap-3">
                    <div className=''>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="flex justify-between py-5 pr-5">
                            <div>
                                <Title title=" Ethan Flynn (66y)"/>
                                <Title title=" riko@mail.com" size="sm" className="mb-4"/>
                                <Title title="Ab dolores ex offici" size="sm"/>
                            </div>
                            <div className='flex'>
                                <MdOutlineEventNote  className="text-2xl"/>
                                <RiUserSettingsFill className="ml-2 text-2xl"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex relative">
                                <p className="text-5xl">1</p>
                                <p className="bottom-0 absolute ml-7">Claims</p>
                            </div>
                            <div className="flex relative">
                                <p className="text-5xl">1</p>
                                <p className="bottom-0 absolute ml-7">Claims</p>
                            </div>
                            <div className="flex relative">
                                <p className="text-5xl">1</p>
                                <p className="bottom-0 absolute ml-7">Claims</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Link href='/profile/claims' className={getLinkClass('/profile/claims')}>CLAIM ITEMS</Link>
                <Link href='/profile/lost' className={getLinkClass('/profile/lost')}>LOST ITEMS</Link>
                <Link href='/profile/founds' className={getLinkClass('/profile/founds')}>FOUND ITEMS</Link>
            </div>
        </div>
    );
};

export default Header;
