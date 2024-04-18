import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/MainContext'
import menu from '../images/menu.svg'

import logo from '../images/logo.png'
export default function Header() {
    let { carts } = useContext(CartContext)
    const [show, setShow] = useState(false);
    return (

        <main className=' w-screen flex justify-center items-center fixed my-5 z-50'>
            <nav className=' w-[90%] h-auto bg-black/50 backdrop-blur-sm flex p-5 rounded-3xl justify-between flex-col lg:flex-row'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="" className=' w-[100px] invert' />
                    </div>
                    <div>{
                        !show ?
                            <button className=' lg:hidden block cursor-pointer' onClick={() => setShow(true)}>
                                <img src={menu} alt="" />
                            </button> :
                            <button className=' lg:hidden block text-white text-2xl cursor-pointer' onClick={() => setShow(false)}>
                                X
                            </button>}
                    </div>
                </div>
                <div className={` items-center ${show ? " block" : " hidden"} lg:block flex items-center`}>
                    <ul className='flex items-start gap-3 lg:flex-row lg:items-center flex-col lg:justify-center lg:pt-2'>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#top'}>
                                Home
                            </a>
                        </li>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#menu'}>
                                Today Special
                            </a>
                        </li>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#about'}>
                                About
                            </a>
                        </li>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#menu'}>
                                Our Menu
                            </a>
                        </li>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#reviews'}>
                                Reviews
                            </a>
                        </li>
                        <li className=' cursor-pointer text-white p-2 hover:text-[#BC6C25] font-bold'>
                            <a href={'/#contact'}>
                                Contact
                            </a>
                        </li>
                        <li className=' cursor-pointer border-white border text-white hover:bg-[#BC6C25] hover:border-none p-2 rounded-full px-5 font-bold'>
                            <Link to={'/Reservation'}>
                                Reservation
                            </Link></li>
                        <li className=' cursor-pointer border-white border text-white hover:bg-[#BC6C25] hover:border-none p-2 rounded-full px-5 font-bold'>
                            <Link to={'/cart'}>
                                Cart({carts.length})
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>

    )
}
