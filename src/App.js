// App.js

import { useContext } from "react";
import { CartContext } from "./CartContext/MainContext";
import ChatBotComponent from "./Components/ChatBotComponent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { coffeeData, data } from "./data";
import img1 from './images/10.jpg';

function App() {
  return (
    <div className=" w-screen h-auto">
      <Header />
      <section id="top" className=" w-screen bg-cover bg-center h-screen BgImage justify-center items-center flex">
        <main className=" text-white md:w-80 w-64 h-64 relative">
          <div className=" bg-black/70 w-full h-full -rotate-45 rounded-3xl absolute"></div>
          <div className=" absolute top-7 left-9">
            <h4 className="text-xl text-center pt-4 text-[#BC6C25]">Welcome to</h4>
            <h1 className=" md:text-4xl text-4xl text-center font-bold py-1">Belle Epoque</h1>
            <p className=" text-sm text-center py-1">your favorrite coffee daily lives.</p>
            <div className=" pt-5 w-full justify-evenly flex">
              <butto className=" px-3 py-2 rounded-full cursor-pointer">Today Special</butto>
              <button className=" bg-[#BC6C25]  px-3 py-2 rounded-full">Check Menu</button>
            </div>
          </div>
        </main>
      </section>

      <section id="about" className=" w-screen h-auto md:h-screen bg-[#4D3821] md:justify-center md:items-center flex">
        <main className=" flex flex-col md:flex-row md:justify-evenly items-center px-5 gap-5 py-5">
          <img src={img1} alt="" className="md:w-[40%] rounded-2xl" />
          <div className=" md:w-[40%]">
            <h1 className=" text-white text-xl font-bold">Belle Epoque</h1>
            <h1 className=" text-white text-4xl font-bold">Cafe in India</h1>
            <p className=" text-white py-2 text-xl">In the cozy cafe, the aroma of freshly brewed coffee dances with whispers of conversation, creating a haven for both solitude and camaraderie.</p>
            <p className=" text-white py-2 pb-4 text-xl"> Each sip tells a story, painting moments of warmth and indulgence against the backdrop of clinking cups and gentle melodies. </p>
            <button className=' cursor-pointer border-white border text-white hover:bg-[#6F4E37] hover:border-none p-2 rounded-full px-5 font-bold'>
              Check Menu
            </button>
          </div>
        </main>
      </section>

      <section id="" className=" w-screen h-auto md:h-screen bg-[#B78752] pt-10">
        <main>
          <div className=" py-5">
            <h4 className=" text-center text-xl text-white">Creative Baristas</h4>
            <h2 className=" text-center text-5xl font-bold text-white">Meet People</h2>
          </div>
          {/* card */}
          <div className=" flex justify-evenly md:flex-row flex-col items-center gap-3 py-5">
            <div className=" md:w-64 h-96 bg-cover bg-center e2Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Alex<span className="mx-1 text-sm bg-[#B78752] px-1 rounded-lg">Boss</span></h2>
                <p className=" text-white">your favourite coffee daily lives tempor.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center e3Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Leo<span className="mx-1 text-sm bg-[#B78752] px-1 rounded-lg">Mananger</span></h2>
                <p className=" text-white">your favourite coffee daily lives tempor.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center e1Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Ivan<span className="mx-1 text-sm bg-[#B78752] px-1 rounded-lg">Senior</span></h2>
                <p className=" text-white">your favourite coffee daily lives tempor.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center e4Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Sia<span className="mx-1 text-sm bg-[#B78752] px-1 rounded-lg">Baristas</span></h2>
                <p className=" text-white">your favourite coffee daily lives tempor.</p>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section id="menu" className=" w-screen bg-cover bg-center md:h-screen BgImage2 justify-center items-center flex">
        <main className=" flex flex-col md:flex-row md:justify-evenly items-center px-5 gap-5 py-5 w-full">
          <div className="md:w-[40%] w-full bg-black/70 rounded-2xl text-white p-5 py-10">
            <div>
              <h3 className=" text-3xl text-center font-bold">Delicious Menu</h3>
              <p className=" text-xl text-center">Breakfast</p>
            </div>
            <div className="mt-10">
              {data.map((item, index) => {
                return (
                  <ProductCards pdata={item} key={index} />
                )
              })}
            </div>
          </div>
          <div className="md:w-[40%] w-full bg-black/70 rounded-2xl text-white p-5 py-10">
            <div>
              <h3 className=" text-3xl text-center font-bold">Favourite Menu</h3>
              <p className=" text-xl text-center">Coffee</p>
            </div>
            <div className="mt-10">
              {coffeeData.map((item, index) => {
                return (
                  <ProductCards pdata={item} key={index} />
                )
              })}
            </div>
          </div>
        </main>
      </section>

      <section id="reviews" className=" w-screen h-auto md:h-screen bg-[#7C5C52] pt-10">
        <main>
          <div className=" py-5">
            <h4 className=" text-center text-xl text-white">Reviews by Customers</h4>
            <h2 className=" text-center text-5xl font-bold text-white">Testimonials</h2>
          </div>
          <div className=" flex justify-evenly md:flex-row flex-col items-center gap-3 py-5 px-5">
            <div className=" md:w-64 h-96 bg-cover bg-center c2Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Lily</h2>
                <p className=" text-white">The coffee here is amazing! I've never tasted anything like it before. Highly recommended!.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center c3Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Mia</h2>
                <p className=" text-white">This is my favorite coffee shop in town. The atmosphere is cozy, and the staff is always friendly.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center c1Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Olivia</h2>
                <p className=" text-white">I love coming here to work on my projects. The free Wi-Fi and delicious coffee make it the perfect spot.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center c4Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Jack</h2>
                <p className=" text-white">This is my favorite coffee shop in town. The atmosphere is cozy, and the staff is always friendly.</p>
              </div>
            </div>
            <div className=" md:w-64 h-96 bg-cover bg-center c5Image rounded-2xl flex justify-end flex-col">
              <div className="bg-black/50 w-full p-3 rounded-b-2xl">
                <h2 className=" text-3xl font-bold text-white">Henry</h2>
                <p className=" text-white">The coffee here is amazing! I've never tasted anything like it before. Highly recommended!.</p>
              </div>
            </div>
          </div>
        </main>
      </section>


      <section id="contact" className=" w-screen h-auto bg-cover bg-center BgImage3">
        <div className=" py-10 bg-black/70">
          <h4 className=" text-center text-xl text-white">Say Hello</h4>
          <h2 className=" text-center text-5xl font-bold text-white">Contact</h2>
        </div>
        <main className=" flex flex-col md:flex-row md:justify-evenly items-center px-5 gap-5 py-10 bg-black/70 ">
          <form action="" className=" flex flex-col md:w-[40%] w-full">
            <input type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Name" />
            <input type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Email" />
            <textarea rows={5} type="text" className=" bg-transparent border rounded-lg w-full p-2 my-3 text-white outline-none" placeholder="Message" />
            <button className=" bg-[#BC6C25] p-2 rounded-lg text-white">Send Message</button>
          </form>
          <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.29602469425!2d72.94814096749825!3d26.270489822299105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1713441364983!5m2!1sen!2sin" />

        </main>
      </section>


      <Footer />
      <ChatBotComponent />
    </div >
  );
}

export default App;


function ProductCards({ pdata }) {
  let { carts, setCarts } = useContext(CartContext);

  let addtoCart = () => {
    // Check if the item already exists in the cart
    const existingItemIndex = carts.findIndex(item => item.title === pdata.item);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      setCarts(carts.map((item, index) =>
        index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      // If the item doesn't exist, add it to the cart
      let cartObj = {
        title: pdata.item,
        price: pdata.price,
        qty: 1
      };
      setCarts([...carts, cartObj]);
    }
  }



  return (
    <div className=" mt-10">
      <div className=" flex justify-between px-5">
        <h3 className="text-xl font-bold">{pdata.item}</h3>
        <div className=" flex gap-3 items-center">
          <h3 className=" text-xl font-bold">₹{pdata.price}</h3>
          <div className="" onClick={addtoCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
        </div>
      </div>
      <div className=" w-full h-0.5 bg-white mt-4"></div>
    </div>

  )
}


const MapIframe = ({ src }) => {
  return (
    <div className="md:w-[40%] w-full rounded-2xl">
      <iframe
        src={src}
        style={{ border: 0 }}
        height={400}
        className=" rounded-lg w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};