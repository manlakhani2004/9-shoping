import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../componets/CartItem'

function Cart() {
    const { cart } = useSelector((state) => state);
    console.log(cart);
    const [TotalAmount, setTotalAmount] = useState(0);
    const [TotalItem, setTotalItem] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        setTotalItem(cart.length);
    }, [cart]);

    return (
        <div className="ml-[200px] mt-8">
           {
                cart.length > 0 ? (
                    <div className="flex max-w-5xl gap-8 mx-auto  ">
                        <div className=" max-w-[60%] flex flex-col gap-8">
                            {
                                cart.map((item) => {
                                    return <CartItem item={item} key={item.id} />
                                })
                            }
                        </div>

                        <div className=" flex gap-4 flex-col ">
                            <div>
                            <h2 className=" text-left text-lg text-green-800 font-semibold">YOUR CART</h2>
                            <h1 className=" text-left text-green-800 font-bold text-5xl">SUMMARY</h1>
                            <p className=" mt-6 text-left text-lg font-semibold text-slate-950">Total Item:{TotalItem}</p>
                            </div>
                            <div>
                            <p className="text-left mt-4  text-xl">Total Amount: <span className=" font-bold">{TotalAmount}</span></p>
                            <button className="flex justify-center items-center py-2 px-16 rounded-xl mt-3 bg-green-700 text-white font-semibold text-lg ">Checkout Now</button>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className=" flex justify-center items-center h-[80vh] w-full flex-col gap-5 relative right-[8%]">
                        <h1 className=" font-bold text-lg text-slate-700">Your Cart is Empty!</h1>
                        <Link to={'/'}>
                            <button className=" py-2 px-8 bg-green-600 rounded-lg text-white font-semibold">Shop Now</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )

}

export default Cart;