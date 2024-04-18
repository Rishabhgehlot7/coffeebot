import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=" w-screen h-auto bg-[#BC6C25]">
                <main className=" max-w-screen-xl grid grid-cols-1 md:grid-cols-3 mx-auto py-8 px-3">
                    <div>
                        <p className=" text-white text-xl py-2 font-bold">Where to find us?</p>
                        <h4 className=" text-white text-sm py-2">Jodhpur Rajasthan</h4>
                    </div>
                    <div>
                        <p className=" text-white text-xl py-2 font-bold">Contact</p>
                        <div className=" text-white text-sm py-2"><span>Phone:+91-8885599667</span></div>
                        <div className=" text-white text-sm py-2"><span>Email:BelleEpoque@gmail.com</span></div>
                    </div>
                    <div>
                        <p className=" text-white text-xl py-2 font-bold">Opening Hours.</p>
                        <div className=" text-white text-sm py-2">Monday - Friday: 9:00 - 18:00</div>
                        <div className=" text-white text-sm py-2">Saturday: 11:00 - 16:30</div>
                        <div className=" text-white text-sm py-2">Sunday: Closed</div>
                    </div>
                </main>
                <div className=" text-sm text-white text-center bg-black/50 py-2">Copyright © Belle Epoque Cafe 2024 </div>
            </footer>
        </div>
    )
}

export default Footer