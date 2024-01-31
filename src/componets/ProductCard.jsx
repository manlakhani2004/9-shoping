import React from "react";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";
import { add } from "../Redux/CartSlice";
import toast from "react-hot-toast";

function ProductCard({ product }) {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    // console.log(product);
    // console.log(cart);
    function addproducttocart() {
        dispatch(add(product));
        toast.success('Item Added');
        console.log(cart)
    }

    function removeProductToCart() {
        dispatch(remove(product.id));
        console.log(cart);
        toast.error('Item Removed');
    }

    return (
        <div className=" flex flex-col  items-center justify-evenly hover:scale-110 transition duration-300 ease-in
        gap-3 p-4  ml-5  rounded-xl productcard ">
            <div>
                <h2 className=" text-gray-700 font-semibold text-lg  text-center truncate w-40 mt-1">{product.title}</h2>
                <p className=" w-40  text-left text-xs  text-gray-500 ">{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className=" h-[180px]">
                <img  className=" h-full w-full" src={product.image} alt="Product Image Not Found" />
            </div>
            <div className=" flex justify-between gap-12">
                <div className=" text-green-700 font-bold">${product.price}</div>
                <div>
                    {
                        cart.some((item) => item.id == product.id) ? (
                            <button className=" py-2 px-3  bg-red-500 text-white text-xs font-semibold rounded-xl" onClick={removeProductToCart}>Remove To Cart</button>
                        ) : (
                            <button className="py-2 px-3 bg-slate-800 text-white text-xs font-semibold rounded-xl" onClick={addproducttocart}>Add To Cart</button>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductCard