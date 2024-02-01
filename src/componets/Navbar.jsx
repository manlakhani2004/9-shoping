import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

function Navbar() {

    const {cart} = useSelector((state)=> state)
    return (
        <nav className=" max-w-8xl mx-auto">
            <div className="flex justify-between w-[70%] mx-auto py-4">
                <div>
                    <NavLink to={'/'}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrezSazjiSpzENKXnWKId9WrEjbfuvvB-cXLUmNbgAVuY6N39iVrvu0mKgKrNoTaK3cE&usqp=CAU" alt="" height={40} width={40} />
                    </NavLink>
                </div>
                <div className="text-white flex gap-4 justify-center items-center">
                    <NavLink to={'/'}>
                        <p className=" text-lg">Home</p>
                    </NavLink>
                    <div className="flex relative">
                        <NavLink to={'/cart'}>
                            <FaShoppingCart className=" text-xl" />
                        </NavLink>
                        { cart.length > 0 &&
                            <span className=" absolute top-[-13px] left-2 py-[1px] px-[6px] rounded-full bg-green-700 text-xs  animate-bounce">{cart.length}</span>
                        } 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;