//2.
//This page is exact after homepage .Depending on route it provides product list 
//Workflow :  it uses navbar , then code for filter bar .
//The at last it call for product list resposible for showing product as per filter
import React, { useState } from 'react'
import Navbar from './Navbar'
import CatagoryBar from './CatagoryBar'
import { electronics, vehicle, furniture } from "../storage"
import Button from '@mui/material/Button';
import ProductList from './ProductList';
import "./ProductComponent.css";
import Testimonial from './Testimonial';


export default function ProductComponent({type}) {
    
    const [state, setState] = useState("ALL");
    const [brandProduct, setBrandProduct] = useState("ALL")
    const [brand, setBrand] = useState("")
    const [catagory, setCatagory] = useState(true)
    const [filterStyle, setFilterStyle] = useState({
        position: "absolute",
        // right: "-.4em",
        top:"0em",
        left:"0",
        textAlign: "left",
        backgroundColor: "grey",
        color: "white",
        padding: "1em",
        display: "none",
        cursor: "pointer",
        // transition: "all 1s ease-in-out", transition bhi kam nahin kar raha
        // ":hover": {
        //     backgroundColor: "rgb(115, 138, 138)" // dekna hoga
        // }

    })
    const filter = () => {
        
        setFilterStyle({ ...filterStyle, top: "4em", display: "inline" })
    }
    const showCatagory = (value) => {
        setState(value)

    }
    const showBrand = (value) => {
        setBrandProduct(value);
    }
    const buttonStyle = {
        margin: "0 .5em",
        padding: "0 .5em",
        borderRadius: "5em"

    }
    let cat = type.map((value) => {
        return value.catagory;
    })
    let uniqueCatagory = ["ALL", ...new Set(cat)];
    
    let brandName = type.map((value) => {
        return value.brand;
    })
    let uniqueBrand = ["ALL", ...new Set(brandName)];
    return (
        <>
            <Navbar color="#0087EB" font="white" search="blue"/>
            <div className='flex justify-between fixed w-[99vw] mt-[5.8em] bg-[#eee]' style={{zIndex:999}}>
                <div className='flex m-4'>
                    {(catagory) ?
                        uniqueCatagory.map((value, index) => {
                            return (

                                (state === value) ? <Button  variant="contained" className='mx-2' style={buttonStyle} key={index} onClick={() => showCatagory(value)}>{value}</Button>
                                    : <Button variant="outlined" className='mx-2' style={buttonStyle} key={index} onClick={() => showCatagory(value)}>{value}</Button>


                            );
                        }) :
                        uniqueBrand.map((value, index) => {
                            return (

                                (brandProduct === value) ? <Button variant="contained" className='mx-2' style={buttonStyle} key={index} onClick={() => showBrand(value)}>{value}</Button>
                                    : <Button variant="outlined" className='mx-2' style={buttonStyle} key={index} onClick={() => showBrand(value)}>{value}</Button>


                            );
                        })
                    }
                </div>
                <div style={{ position: 'relative' }}>
                    <Button variant="contained" onClick={filter} style={{ paddingInline: "2em", height: "100%" }}>Filter</Button>
                    <div style={filterStyle}>
                        <h1 onClick={() => { setCatagory(true); setFilterStyle({ ...filterStyle, top: "0", display: "none" }) }}>CATAGORY</h1>
                        <h1 onClick={() => { setCatagory(false); setFilterStyle({ ...filterStyle, top: "0", display: "none" }) }}>BRAND</h1>
                    </div>
                </div>

            </div>
            <div className='min-h-[70vh] mt-[10.2em]'>
            {(catagory) ? <ProductList productState={state} type={type} /> : <ProductList productBrand={brandProduct} type={type}/>}
            </div>
            <Testimonial/>
            

        </>
    )
}
