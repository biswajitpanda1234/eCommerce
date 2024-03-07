
// Responsible  for show products as per input and at last when job done it send us to purchse page to show more about product
import React from 'react'
import { electronics, vehicle, furniture } from "../storage"
import "./ProductList.css"
import { Link, useLocation } from 'react-router-dom';


export default function ProductList({ productState, productBrand, type }) {
    const location = useLocation();


    let products = [];
    if (productState) {
        if (productState.toUpperCase() === "ALL") {

            products = type.map((value) => {

                return value;
            })
        } else {
            products = type.filter((value, index) => {

                return value.catagory === productState;
            })
        }
    }
    else {
        if (productBrand.toUpperCase() === "ALL") {
            products = type.map((value) => {

                return value;
            })
        }
        else {
            products = type.filter((value, index) => {

                return value.brand === productBrand;
            })
        }
    }
    
    

    return (
        <>
            <div className="main ">
                {products.map((value, index) => {

                    return (
                        <div key={index} id='prod' className='listing hover:scale-110 duration-300  shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]' >
                            <Link to={`${location.pathname}/${value.id}`} target='__blank'>
                                {/* <Link to= {"/electronics/1"}> */}
                                <div className='bg-white img-container'>
                                    <img src={value.imgSrc} alt="hello" height="100px" width="100px" />
                                </div>

                                <div className="flex justify-between px-2">
                                    <span>
                                        {value.name}
                                    </span>
                                    <span className="text-xl font-bold">₹{value.price}</span>
                                </div>

                                <div className='px-2'>
                                    {value.description}
                                </div>

                            </Link>
                        </div>

                    )
                    

                })}
                

            </div>

        </>
    )


}
