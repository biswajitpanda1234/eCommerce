//4. Final pricing section
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Button, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import changeCartItems from "../reducers/cart";
import { priceUpdate, quantityUpdate } from "../actions/index"
import { cart } from "../actions/index"
import { useSelector, useDispatch } from 'react-redux';
export default function AddToCart({ list }) {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.changeCartItems);
  
  const getData = ()=>{
    let data = localStorage.getItem("cart")
    if(data){
      
        data = JSON.parse(data)
        return data;
    }
    else{
    
        return [];
    }
}
  
  // let items = getData();
  const [items, setItems] = useState(getData);
  const [items2, setItems2]= useState([]);


  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }



  // To get total no of items to be orderd
  function p() {
    let a = 0;
    items.map((value, index) => {
      a = a + (value.price*value.quantity);
      return value;
    })
    return a;
  }
  const [no, setNo] = useState(items.length);
  const [price, setPrice] = useState(p);
  const navigate = useNavigate();
  function gotoPurchase() {

    localStorage.setItem("price", JSON.stringify(price));
    // dispatch(priceUpdate(price))
    navigate("/buy")
  }
  // useEffect(() => {
  //   // localStorage.setItem("number", JSON.stringify(no))
  //   dispatch(quantityUpdate(no))
  // }, [no])

  // to calculate delivery date
  function getThreeDaysLater(currentDate) {
    // Add three days to the current date
    const threeDaysLater = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);

    // Get the day of the week (0-6, where 0 is Sunday)
    const dayOfWeek = threeDaysLater.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the date, month name, and year
    const date = threeDaysLater.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[threeDaysLater.getMonth()]; // Get the month name
    const year = threeDaysLater.getFullYear();

    // Format the output string
    const formattedDate = `${days[dayOfWeek]}, ${date} ${month}, ${year}`;

    return formattedDate;
  }

  // Get the current date
  const currentDate = new Date();

  // Call the function and print the result
  const threeDaysLaterString = getThreeDaysLater(currentDate);

  let cartITEM;
  if (items.length > 0) {

    cartITEM = items.map((val) => {

      return val.quantity;
    })
    cartITEM = cartITEM.reduce((a, b) => {
      return a + b;
    })
  } else {

    cartITEM = 0;
  }
  //setItems(items2)
  return (
    <>

      <Navbar color="#0087EB" font="white" search="blue" items={cartITEM} />

      <div className='mt-[5.8em]'></div>

      {items.map((value, index) => {
        const [counts, setCounts] = useState(value.quantity);

        const decrease=(p)=> {
          setCounts(counts-1);
          const newVal = {...value, quantity: value.quantity-1};
          console.log(newVal)
          let newItems = items.map((val)=>{
            if(val.imgSrc === newVal.imgSrc){
              return newVal
            }else{
              return val;
            }
          })
          console.log("newdata",newItems)
          localStorage.setItem("cart", JSON.stringify(newItems));
          setItems(getData)
          // setNo(no - 1);
          // dispatch(cart(newData));
          setPrice(price - p);

        }
        function increase(p) {
          setCounts(counts+1);
          const newVal = {...value, quantity: value.quantity+1};
          console.log(newVal)
          let newItems = items.map((val)=>{
            if(val.imgSrc === newVal.imgSrc){
              return newVal
            }else{
              return val;
            }
          })
          console.log("newdata",newItems)
          localStorage.setItem("cart", JSON.stringify(newItems));
          setItems(getData)

          // setNo(no + 1);
          setPrice(price + p);
        }
        function remove(val) {

          setNo(no - counts);

          let amount = counts * val.price;
          setPrice(price - amount);
          let ite = items.filter((value) => {
            return value !== val;
          })
          localStorage.setItem("cart", JSON.stringify(ite));
          setItems(getData);

          window.location.href = window.location.href;
        }
        

        return (
          
          <div id="left" className='w-[60%] mx-1 p-4 bg-white pb-[4em] ' key={index} >
            <div className='flex justify-between'>
              <div className=" w-[25%]">
                <img src={value.imgSrc} alt="" className='w-[1000%] ' />
                <div className='my-2'>
                  {(value.quantity > 1) ? <Button variant="outlined" onClick={() => { decrease(value.price) }} style={{ width: "33%", padding: "0", minWidth: "50px" }}>-</Button> : <Button variant="outlined" onClick={() => { decrease(value.price) }} disabled style={{ width: "33%", padding: 0, minWidth: "50px" }}>-</Button>}

                  <input value={counts} style={{ textAlign: "center", width: "34%", height: "2em", backgroundColor: "white" }} />
                  <Button variant="outlined" onClick={() => { increase(value.price) }} style={{ width: "33%", padding: 0, minWidth: "50px" }}>+</Button>
                </div>
              </div>
              <div className="p-4 w-[45%]">
                <h1>{value.name.toUpperCase()}</h1>
                <h2>{value.brand.toUpperCase()}</h2>
                <p>seller</p>
                <h1> ₹ {value.price}</h1>
                <Button variant="outlined">Save for later</Button>
                <Button variant="outlined" style={{ marginLeft: "1em" }} onClick={() => { remove(value) }}>Remove</Button>

              </div>
              <div>
                <p>Your order reach you before<br /> {threeDaysLaterString}</p>
              </div>
            </div>

          </div>
        );
      })}

      <div className='bg-white' style={{ position: "fixed", bottom: "0", width: "60%", height: "4em" }}>
        <Button variant="contained" style={{ margin: ".5em", backgroundColor: "#fb641b" }} onClick={gotoPurchase}>PLACE ORDER</Button>
      </div>
      <div id="right" style={{ position: "fixed", right: "0em", backgroundColor: "white", top: "5.9em", width: "38%", lineHeight: "2em",paddingInline:"2em" }}>

        <h1 className="font-bold">Price Details:</h1>
        <br />
        <div className='flex justify-between'>
          <h2 >Price ({cartITEM} items)  </h2>
          <h2>₹ {price}</h2>
        </div>

        <div className='flex justify-between'>
          <h2>Delhivery Charges</h2>
          <h2>₹ 500</h2>
        </div>
        <br />
        <div className='flex justify-between'>
          <h2 className="font-bold">Total</h2>
          <h2 className="font-bold">₹ {price + 500}</h2>
        </div>

      </div>

    </>
  )
}
