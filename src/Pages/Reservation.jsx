import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
const Reservation = () => {
    return (
        <div>
            <Header />
            <section className=" w-screen bg-cover bg-center BgImage4 justify-center items-center flex pt-32">
                <main className="bg-black/50 w-[90%] p-10 rounded-2xl mt-10 flex justify-evenly my-10 flex-col md:flex-row gap-3">
                    <form action="" className=" flex flex-col md:w-[40%] w-full">
                        <div className=" py-5">
                            <h4 className=" text-center text-xl text-white">Fill out the booking form</h4>
                            <h2 className=" text-center text-5xl font-bold text-white">  Book a table</h2>
                        </div>
                        <input type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Name" />
                        <input type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Phone" />
                        <input type="date" id="birthdaytime" name="birthdaytime" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none " />
                        <input type="time" id="birthdaytime" name="birthdaytime" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none " />
                        <textarea rows={5} type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Message" />
                        <button className=" bg-[#BC6C25] p-2 rounded-lg text-white">Send Message</button>
                    </form>
                    <div className=" md:w-[40%] md:h-[500px] h-96 bg-cover bg-center e1Image rounded-2xl flex justify-end flex-col">
                        <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                            <h2 className=" text-3xl font-bold text-white">Ravi<span className="mx-1 text-sm bg-[#B78752] px-1 rounded-lg">Senior</span></h2>
                            <p className=" text-white">your favourite coffee daily lives tempor.</p>
                        </div>
                    </div>
                </main>
            </section>

            <Footer />
        </div>
    )
}

export default Reservation