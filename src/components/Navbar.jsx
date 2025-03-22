import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    const navItem = (
        <>
            <Link className="relative group">Home
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Dashboard
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Transactions
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Budget
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Reports
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Settings
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link className="relative group">Login
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gray-200 group-hover:w-full transition-all duration-500"></span>
            </Link>

        </>
    );

    return (
        <div className='flex'>
            <div className='border-b-2 border-gray-200 border-r-2'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl font-semibold">
                        {navItem}
                    </ul>
                </div>
                {/* Brand Logo */}
                <a className="btn btn-ghost text-4xl p-12 text-white">SpendSence</a>
            </div>
            <div className="flex w-full">
                <div className="hidden lg:flex flex-grow items-center">
                    <div className='w-full'>
                        <div className='bg-[#082F49] flex justify-between text-white px-4'>
                            <div className='flex gap-4 py-2'>
                                <p className='flex items-center gap-2'><IoLocationOutline /> Dhaka, Bangladesh</p>
                                <p className='flex items-center gap-2'><AiOutlineMail />Spendsence.com</p>
                                <p className='flex items-center gap-2'><MdOutlinePhonelinkRing />+689-410-8585</p>
                            </div>
                            <div className='flex gap-4 py-2 items-center'>
                                <Link>Help</Link>
                                <Link>About</Link>
                                <Link>Content</Link>
                                <TiSocialFacebook size={25} />
                                <TiSocialLinkedin size={25} />
                                <FaInstagram size={20} />
                                <IoShareSocialOutline size={20} />
                            </div>
                        </div>
                        {/* navItem and get start button */}
                        <div className='flex justify-between py-2 border-b-2 border-gray-200'>
                            <ul className="menu menu-horizontal px-6 text-xl font-semibold gap-4 text-white">
                                {navItem}
                            </ul>
                            <div className="relative w-40 h-12 flex items-center justify-center mx-6 cursor-pointer group border-2 border-white rounded-full">
                                {/* Background animation */}
                                <div className="absolute inset-0 bg-white transition-all duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left rounded-full"></div>

                                {/* Text and icon */}
                                <div className="relative flex gap-2 items-center text-white group-hover:text-black transition-all duration-500">
                                    <span>Get Started</span>
                                    <FaArrowRight />
                                </div>

                                {/* Remove border on hover */}
                                <style>
                                    {`.group:hover {border-color: transparent !important;}`}
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
