//3.
//Purchase page is give us full product description and give us buy and add to cart option
//here we create our cart list array which is use in add to cart we create here because we want on addtocart product include into cart but cart page not show to the user
import React, { useState, useEffect } from 'react'
import "./Purchase.css"
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Testimonial from './Testimonial';
import { cart } from "../actions/index"
import changeCartItems from "../reducers/cart"
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Purchase({ type }) {

    const dispatch = useDispatch();
    // let data = useSelector((state) => state.changeCartItems)
    const getData = () => {
        let data = localStorage.getItem("cart")
        if (data) {
            data = JSON.parse(data)
            return data;
        }
        else {

            return [];
        }
    }

    const [cartList, setCartList] = useState(getData);

    const addtocart = (event) => {
        // if(cartList.length<=0){
        //     setCartList(event);
        // }
        let item = cartList.find((item) => item.imgSrc === event.imgSrc)

        if (item) {
            console.log(item)
            const updatedCartList = cartList.map((item) =>
                item.imgSrc === event.imgSrc ? { ...item, quantity: item.quantity + 1 } : item
            );
            // dispatch(cart(updatedCartList))
            setCartList(updatedCartList);
        } else {
            console.log("hhe")
            event = { ...event, quantity: 1 }
            // dispatch(cart([...data, event]))
            setCartList([...cartList, event])
        }
        // dispatch(cart([...data, event]));


    }


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartList));
        // dispatch(cart(cartList))

    }, [cartList]);

    const location = useLocation();
    const path = location.pathname;
    // console.log(path);

    let proId = path.slice(path.lastIndexOf("/") + 1)




    let productDetail = type.filter((value) => {

        return (value.id == proId);
    })

    if (productDetail.length == 0) {
        alert("sorry nothing found")
    }
    const navigate = useNavigate();
    function gotoPurchase() {

        localStorage.setItem("price", JSON.stringify(productDetail[0].price));
        navigate("/buy")
    }


    let cartITEM;
    if (cartList.length > 0) {

        cartITEM = cartList.map((val) => {

            return val.quantity;
        })
        cartITEM = cartITEM.reduce((a, b) => {
            return a + b;
        })
    } else {

        cartITEM = 0;
    }

    // these code for suggested elements
    let suggestedArr = [];

    for (; suggestedArr.length < 4;) {
        // 1. Generate random index within type.length
        let random = Math.floor(Math.random() * type.length);

        // 2. Check if element already exists
        if (suggestedArr.includes(type[random]) || type[random].imgSrc === productDetail[0].imgSrc) {
            // If yes, regenerate a random index to avoid duplicates
            continue;
        }

        // 3. Add unique element to suggestedArr
        suggestedArr.push(type[random]);
    }

    console.log("hello", suggestedArr);


    return (
        <>
            {(cartList) ? <Navbar color="#0087EB" font="white" search="blue" items={cartITEM} /> : <Navbar color="#0087EB" font="white" search="blue" items={0} />}

            <div className='flex mt-[5.8em]' style={{ marginBottom: 0 }}>
                <div id='img-container'>
                    <img src={productDetail[0].imgSrc} alt="sdfdss" />
                    <div className='mx-auto text-center'>
                        <Button variant="contained" style={{ backgroundColor: "#ff9f00", margin: ".5em", width: "35%" }} onClick={() => { addtocart(productDetail[0]) }} ><ShoppingCartTwoToneIcon style={{ marginRight: ".5em" }} />Add To Cart</Button>
                        <Button variant="contained" style={{ backgroundColor: "#fb641b", margin: ".5em", width: "35%" }} onClick={gotoPurchase}><LocalMallTwoToneIcon style={{ marginRight: ".5em" }} />Buy Now</Button>
                    </div>

                </div>
                <div id="description" className='leading-8 h-[90vh] overflow-y-auto scorllbar-style-1'>
                    <h1>{productDetail[0].name.toUpperCase()}</h1>
                    <div className="flex">
                        <span className='bg-green-500 p-1 text-white mr-3 '>4.5 ⭐</span>
                        <img src="/images/other/arrured.jpg" alt="" />
                    </div>

                    <div>Special Price</div>
                    <div className='font-bold text-2xl'>₹ {productDetail[0].price}<span className='text-gray-300 text-xl ml-3 line-through'>₹ {productDetail[0].price + Math.floor(productDetail[0].price / 5)}</span></div>

                    <div>Available offers</div>
                    <div className='flex align-middle'>


                        <LocalOfferIcon style={{ color: "green", marginRight: ".5em", fontSize: "1.5em", marginTop: ".3em" }} /><div><span className='font-bold'>Bank Offers</span> 10% off on Citi-branded credit and Debit Card txns, up to ₹15,00 on orders of  ₹10,000 and above <span className='text-blue-600'>T&C</span></div>
                    </div>
                    <div className='flex'>
                        <LocalOfferIcon style={{ color: "green", marginRight: ".5em", fontSize: "1.5em", marginTop: ".3em" }} /><div><span className='font-bold'>Bank Offers</span> 10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and above <span className='text-blue-600'>T&C</span></div>
                    </div>
                    <div className='flex'>
                        <LocalOfferIcon style={{ color: "green", marginRight: ".5em", fontSize: "1.5em", marginTop: ".3em" }} /><div><span className='font-bold'>Bank Offers</span> 10% off on Federal Bank Credit Card Transactions, up to ₹1,250 on orders of ₹10,000 and above <span className='text-blue-600'>T&C</span></div>
                    </div>
                    <div className='flex'>
                        <LocalOfferIcon style={{ color: "green", marginRight: ".5em", fontSize: "1.5em", marginTop: ".3em" }} /><div><span className='font-bold'>Special Price</span> Get extra 2% off (price inclusive of cashback/coupon) <span className='text-blue-600'>T&C</span></div>
                    </div>
                    <div className="my-4"><span className='font-bold mr-4 text-xl'>{productDetail[0].brand.toUpperCase()}</span>2 years warrenty <span className='text-blue-600 m-4'>know more...</span></div>
                    <div className='flex'>
                        <div className='font-bold w-[25%]'>Product Desciption</div>
                        <div>{productDetail[0].description}</div>
                    </div>

                    <div className='my-5'>
                        <h1 className=' text-base font-bold'>More Products you may like</h1>
                        <div className='flex items-center overflow-x-auto w-[100%] '>
                            {suggestedArr.map((value) => {
                                let inde = value.imgSrc.indexOf("/",1);
                                let inde2 = value.imgSrc.indexOf("/",inde+1)
                                let location = value.imgSrc.slice(inde,inde2);
                                console.log(location)
                                return <div ><Link to={`${location}/${value.id}`}>
                                <img src={value.imgSrc} alt="" style={{ width: "20em", padding: "2em" }} /></Link></div>
                            })}
                        </div>

                    </div>
                </div>



            </div>
            <br />
            <br />

            <Testimonial />

        </>
    )
}
