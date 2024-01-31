import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";
import toast from "react-hot-toast";

function CartItem({ item }) {
    const dispatch = useDispatch();
    function RemoveCartItem() {
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
    return (
    <div className="flex justify-between gap-10 w-[500px] px-5 border-b-2 border-black pb-5  ">
        <div className=" w-[280px]">
            <img src={item.image} className=" w-full h-fulxl" />
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-slate-700 font-semibold text-lg text-left">
                {item.title}
            </h2>
            <p className="text-left">
                {
                    item.description.substring(0,100)+"..."
                }
            </p>
            <div className="flex  justify-between gap-8 items-center mt-3">

                <p className=" font-bold text-lg text-green-700">${item.price}</p>
                <p className="p-2 bg-red-300 rounded-full text-red-950">
                <AiTwotoneDelete onClick={RemoveCartItem} className=" cursor-pointer" />
                </p>
            </div>
        </div>
    </div>
    )
}

export default CartItem;