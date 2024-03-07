
// use for navigation page of every component
import React, { useEffect, useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector, useDispatch } from 'react-redux';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { electronics, vehicle, furniture } from "../storage"
export default function Navbar({ color, font, search, items }) {


    if (!items) {
        items = JSON.parse(localStorage.getItem("cart"));
        if (items.length > 0) {
            items = items.map((val) => {
                return val.quantity;
            })
            items = items.reduce((acc, val) => {
                return acc + val;
            })
        } else {
            items = 0
        }
    }
    
    useGSAP(() => {
        gsap.from(".one-to-one", {
            duration: 1,
            opacity: 0,
            y: -100
        })
    })
    const [searchVal, setSearchVal] = useState("")
    const handleChange = (event) => {
        setSearchVal(event.target.value)


    }

    const [searchArr,setSearchArr] = useState([]);
    
    useEffect(() => {
        setSearchArr((prevSearch)=>[])
        if (searchVal !== "") {
            let electronicsSearch = electronics.filter((val) => {

                return (val.name.toLowerCase().includes(searchVal.toLowerCase()) || val.brand.toLowerCase().includes(searchVal.toLowerCase())  || val.catagory.toLowerCase().includes(searchVal.toLowerCase()))
                //  ;
            })
            
            setSearchArr((prevSearch)=>[...electronicsSearch]);
            if (searchArr.length < 8) {
                let furnitureSearch = furniture.filter((val) => {

                    return (val.name.toLowerCase().includes(searchVal.toLowerCase()) || val.brand.toLowerCase().includes(searchVal.toLowerCase()) || val.catagory.toLowerCase().includes(searchVal.toLowerCase()))
                    //  ;
                })
                setSearchArr((prevSearch)=>[...prevSearch, ...furnitureSearch])
                if (searchArr.length < 8) {

                    let vehicleSearch = vehicle.filter((val) => {
                        
                        return (val.name.toLowerCase().includes(searchVal.toLowerCase()) || val.brand.toLowerCase().includes(searchVal.toLowerCase()) || val.catagory.toLowerCase().includes(searchVal.toLowerCase()) )
                        //  ;
                    })
                    setSearchArr((prevSearch)=>[...prevSearch, ...vehicleSearch])
                }
            }

        }
        


    }, [searchVal])
    
    if (searchArr.length > 8) {
        setSearchArr(searchArr.slice(0, 8))
    }
    return (
        <>
            <div className="parent flex justify-around items-center px-10 pt-5 pb-4" style={{
                backgroundColor: color, color: font, position: "fixed", top: "0em", left: "0em", width: "100vw", zIndex: "9999", opacity: "1",
            }}>
                <div id='log h-[2em]' className='one-to-one'>
                    <img src="/images/other/sss.png" alt="dsfs" style={{ width: "10em", padding: "0", margin: "0" }} />
                </div>
                <div className='w-[40%] input-container text-black' >
                    <div className="px-2 inline-block ">

                        <SearchOutlinedIcon style={{ color: search, marginInline: ".5em" }} />
                    </div>
                    <input type="text" placeholder='Search' value={searchVal} onChange={handleChange} onClick={()=>{setSearchArr([])}} />
                    <div className='w-[85%] bg-white ml-10 px-5' style={{ lineHeight: "2em" }}>
                        {
                            (searchArr.length > 0) ?
                            searchArr.map((value, index)=>{
                    
                                let inde = value.imgSrc.indexOf("/",1);
                                let inde2 = value.imgSrc.indexOf("/",inde+1)
                                let location = value.imgSrc.slice(inde,inde2);
                              
                                return <div key={index}><Link to={`${location}/${value.id}`}>{value.name}</Link></div>
                            }): null
                               
          
                                    
                        }
                        
                    </div>
                </div>

                <div>

                    <div className="px-2 inline-block ">
                        <AccountCircleOutlinedIcon />
                    </div>
                    <span>Login</span>
                </div>
                <Link to={"/cart"} >
                    {(items > 0) ? <div className="px-2 inline-block cart-notification" no={items}>
                        <ShoppingCartOutlinedIcon />
                    </div> :
                        <div className="px-2 inline-block">
                            <ShoppingCartOutlinedIcon />
                        </div>}

                    Cart
                </Link>
                <div>
                    <div className="px-2 inline-block">
                        <StorefrontOutlinedIcon />
                    </div>
                    Become a Seller
                </div>

            </div >
        </>
    )
}
