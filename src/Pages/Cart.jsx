import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/MainContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';




const Cart = () => {
    let { carts, setCarts } = useContext(CartContext);
    const [totlePrice, setTotlePrice] = useState(0);
    useEffect(() => {
        {
            let NewtotlePrice = 0;
            carts.map((item, index) => {
                NewtotlePrice += parseInt(item.price) * parseInt(item.qty);
            })
            setTotlePrice(NewtotlePrice);
        }
    }, [carts, setCarts])



    return (
        <div className=' w-screen h-auto'>
            <Header />
            <div className="container mx-auto pt-24">
                <div className="flex shadow-md my-10 flex-col">
                    <div className="w-full bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-xl">3 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                        </div>
                        {carts.map((item, index) => {
                            return (
                                console.log(item),
                                <CartItem pdata={item} key={index} />
                            )
                        })}

                        <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>

                    <div id="summary" className="w-full px-8 py-10">
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>₹{totlePrice}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;


const CartItem = ({ pdata }) => {
    let { carts, setCarts } = useContext(CartContext);

    let addtoCart = () => {
        // Find the index of the item in the cart
        const index = carts.findIndex(item => item.title === pdata.title);

        // If the item is already in the cart, increase its quantity by 1
        if (index !== -1) {
            const updatedCarts = [...carts];
            updatedCarts[index].qty += 1;
            setCarts(updatedCarts);
        } else {
            // If the item is not in the cart, add it with quantity 1
            setCarts([...carts, { ...pdata, qty: 1 }]);
        }
    }

    let removefromCart = () => {
        // Find the index of the item in the cart
        const index = carts.findIndex(item => item.title === pdata.title);

        // If the item is in the cart and its quantity is greater than 1, decrease its quantity by 1
        if (index !== -1 && carts[index].qty > 1) {
            const updatedCarts = [...carts];
            updatedCarts[index].qty -= 1;
            setCarts(updatedCarts);
        } else {
            // If the item is in the cart and its quantity is 1, remove it from the cart
            const updatedCarts = carts.filter(item => item.id !== pdata.id);
            setCarts(updatedCarts);
        }
    }
    return (
        <div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{pdata.title}</span>
                    </div>
                </div>
                <div className="flex justify-center w-1/5">
                    <button onClick={removefromCart}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>


                    <input className="mx-2 border text-center w-8" type="text" value={pdata.qty} />
                    <button onClick={addtoCart}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>

                </div>
                <span className="text-center w-1/5 font-semibold text-sm">₹{pdata.price}</span>
                <span className="text-center w-1/5 font-semibold text-sm">₹{pdata.price * pdata.qty}</span>
            </div>
        </div>
    )
}
