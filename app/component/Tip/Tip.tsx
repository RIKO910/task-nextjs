import React from 'react';
import {RiErrorWarningFill} from "react-icons/ri";
import Image from "next/image";
import Title from "@/app/component/Title/Title";

const Tip = () => {
    return (
        <div className="py-20">
            <Title title='Tips' className="ml-7"/>
            <div className=" bg-base-100 shadow-xl ">
                <Title title='Tips for Reporting Lost or Found Items' className=" px-7 py-10" size='md' />
                <div className="grid grid-cols-2 px-7 pb-10">
                    <div>
                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Immediately report any lost or found items.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Include contact information for quick resolution.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Stay in touch with community members for better coordination.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Search the platform regularly for any new information.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Set up notifications for any updates on your report.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Provide clear and detailed descriptions.

                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Keep checking the platform for updates.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex space-x-3 items-center py-3 pr-5 ">
                            <div className="flex-shrink-0">
                                <dt className="text-base font-semibold leading-7 text-gray-900 relative z-10">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                        <RiErrorWarningFill className="absolute h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                </dt>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-900 dark:text-black-50">
                                        Verify the identity of the person before returning items.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tip;