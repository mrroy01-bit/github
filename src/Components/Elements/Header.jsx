import { useState } from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { SiGithubcopilot } from "react-icons/si";
import { GoGitCompare } from "react-icons/go";
import { MdSecurity } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { GoCodeReview } from "react-icons/go";
import { GoIssueOpened } from "react-icons/go";
import { GoCommentDiscussion } from "react-icons/go";
import { GoCodeSquare } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Header() {
    const [activeMenu, setActiveMenu] = useState(null)

    const handleMenuClick = (menu) => {
        setActiveMenu(menu === activeMenu ? null : menu)
    }

    return (
        <header className=" flex  items-center w-full py-4 px-8">
            <div className="flex items-center text-4xl text-white">
                <IoLogoGithub />
            </div>
            <nav className="flex items-center ml-5 font-medium">

                <ul className="flex gap-5">

                    <li className="relative " onMouseEnter={() => handleMenuClick('product')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300 Product  pl-3 pr-3 pt-5 pb-5">Product</a>
                        {activeMenu === 'product' && (

                            <ul className="absolute top-full left-0 mt-2 bg-white p-4 shadow-lg w-[500px] rounded-md">

                                <li className="Submenu py-2 pt-6">
                                    <div className='flex font-medium'>
                                        <SiGithubcopilot className='text-slate-500 text-4xl pt-3' />
                                        <span className='tracking-normal font-normal leading-normal me-menu'>
                                            <a href="#" className="text-black font-semibold hover:text-gray-300 block mb-1 pl-3 text-base pb-1 leading-normal">GitHub Copilot</a>
                                            <p className="text-gray-400 text-sm leading-normal pl-3">Write better code with Al</p>
                                        </span>
                                    </div>
                                </li>

                                <li className="Submenu py-2 ">
                                    <div className='flex font-medium'>
                                        <MdSecurity className='text-slate-500 text-4xl pt-3' />
                                        <span className='tracking-normal font-normal leading-normal me-menu'>
                                            <a href="#" className="text-black hover:text-gray-300 font-semibold block mb-1 pl-3  text-base pb-1 leading-normal">Security</a>
                                            <p className="text-gray-400 text-sm leading-normal pl-3">Find and fix vulnerabilities</p>
                                        </span>
                                    </div>
                                </li>

                                <li className="Submenu py-2 ">
                                    <span className='flex font-medium'>
                                        <GoGitCompare className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 block mb-2 pl-3 font-semibold">Actions</a>
                                    </span>
                                    <p className="text-gray-400 text-sm">Automate any workflow</p>
                                </li>

                                <li className="Submenu py-2">
                                    <span className='flex font-medium'>
                                        <GoCodespaces className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 block mb-2 pl-3">Codespaces</a>
                                    </span>
                                    <p className="text-gray-400 text-sm">Instant dev environments</p>
                                </li>

                                <li className="Submenu py-2">
                                    <span className='flex font-medium'>
                                        <GoIssueOpened className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 block mb-2 pl-3">Issues</a>
                                    </span>
                                    <p className="text-gray-400 text-sm">Plan and track work</p>
                                </li>

                                <li className="Submenu py-2">
                                    <span className='flex font-medium'>
                                        <GoCodeReview className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 block mb-2 pl-3">Code Review</a>
                                    </span>
                                    <p className="text-gray-400 text-sm">Manage code changes</p>
                                </li>

                                <li className="Submenu py-2 ">
                                    <span className='flex font-medium'>
                                        <GoCommentDiscussion className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 block mb-2 pl-3">Discussions</a>
                                    </span>
                                    <p className="text-gray-400 text-sm">Collaborate outside of code</p>
                                </li>

                                <li className="Submenu py-2 ">
                                    <span className='flex font-medium'>
                                        <GoCodeSquare className='text-slate-500 text-2xl' />
                                        <a href="#" className="text-black hover:text-gray-300 pl-3">Code Search</a>
                                    </span>
                                    <p className='pt-3 text-gray-400 text-sm'>Find more ,search less</p>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li className="relative" onMouseEnter={() => handleMenuClick('solutions')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300   pl-3 pr-3 pt-5 pb-5 Solution">Solutions</a>
                        {activeMenu === 'solutions' && (
                            <ul className="absolute top-full left-0 mt-2 bg-gray-700 p-4 shadow-lg">
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 1</a></li>
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 2</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="relative" onMouseEnter={() => handleMenuClick('resources')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300  pl-3 pr-3 pt-5 pb-5 Resource">Resources</a>
                        {activeMenu === 'resources' && (
                            <ul className="absolute top-full left-0 mt-2 bg-gray-700 p-4 shadow-lg">
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 1</a></li>
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 2</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="relative" onMouseEnter={() => handleMenuClick('open source')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300  pl-3 pr-3 pt-5 pb-5 ">Open Source</a>
                        {activeMenu === 'open source' && (
                            <ul className="absolute top-full left-0 mt-2 bg-gray-700 p-4 shadow-lg">
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 1</a></li>
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 2</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="relative" onMouseEnter={() => handleMenuClick('enterprise')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300  pl-3 pr-3 pt-5 pb-5">Enterprise</a>
                        {activeMenu === 'enterprise' && (
                            <ul className="absolute top-full left-0 mt-2 bg-gray-700 p-4 shadow-lg">
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 1</a></li>
                                <li className="Submenu"><a href="#" className="text-white hover:text-gray-300">Submenu Item 2</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="relative" onMouseEnter={() => handleMenuClick('pricing')} onMouseLeave={() => handleMenuClick(null)}>
                        <a href="#" className="text-white hover:text-gray-300  pl-3 pr-3 pt-5 pb-5">Pricing</a>
                    </li>
                </ul>
            </nav>

            <div className="login+search flex ml-[48vh] text-white gap-3 pt-3 ">
                <button className='py-2 px-2 border border-slate-400 rounded bg-[#272E49]'>
                    <FaSearch />
                </button>
                <Link to='/login' className="SinIn pl-5 pr-5 pt-1 text-[0.875rem] hover:text-slate-400 cursor-pointer">
                    Sin in
                </Link>
                <Link to='/sinup'  className="SinUp border ml-1 pl-2 pr-2 pt-1 rounded text-[0.875rem] hover:text-slate-400 cursor-pointer">
                    Sin Up
                </Link>
            </div>

        </header>
    )
}

export default Header


