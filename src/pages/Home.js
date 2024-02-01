import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../componets/Spinner";
import ProductCard from "../componets/ProductCard";

function Home() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [loader, setloader] = useState(false);

    console.log('render');
    function fetchdata() {
        setloader(true);
        axios.get(api_url)
            .then((Response) => {
                console.log(Response.data);
                setProducts(Response.data);
                setloader(false);
            });
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className=" ">
            {
                (loader) ? (
                    <div className=" flex justify-center items-center h-screen">
                        <Spinner />
                    </div>) : (

                    (products.length > 0) ? (
                        <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto mt-10 space-x-5">
                            {
                                products.map((product) => (
                                    <ProductCard product={product} key={product.id} />

                                ))
                            }
                        </div>
                    ) : (
                        <div>Product not found </div>
                    )
                )
            }
        </div>
    )

}

export default Home;