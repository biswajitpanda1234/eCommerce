//1.
// Responsible for main homepage come after app.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import './swiperStyles.css';
import './Homepage.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from './Navbar';

import Testimonial from './Testimonial';
import { Link } from 'react-router-dom'
import Login from './Login';
export default function Homepage() {
  const navigate = useNavigate();
  
const handleNavigation = (targetRoute) => {
  navigate(targetRoute);

  // Option 1: Scroll to top directly
  window.scrollTo(0, 0);

  // Option 2: Scroll to an element ID (replace with your element ID)
  // const element = document.getElementById('my-element');
  // element.scrollIntoView({ behavior: 'smooth' });

  // Option 3: Custom scrolling logic based on your requirements
  // ...
};

// using gsap here

// useGSAP(()=>{
//   gsap.from(".up-down",{
//     duration:1,
//     y:70,
//     stagger:{each:.5, from:"center"},
//     repeat:-1,
//     yoyo:true
//   })
// })
useGSAP(()=>{
  gsap.from(".up-down1",{
    delay:.3,
    duration:1.5,
    y:50,
    stagger:{each:.5, from:"center"},
    repeat:-1,
    yoyo:true,
    ease:"linear"
  })
  gsap.from(".up-down2",{
    delay:.6,
    duration:1.5,
    y:50,
    stagger:{each:.5, from:"center"},
    repeat:-1,
    yoyo:true,
    ease:"linear"
  })
  gsap.from(".up-down3",{
    delay:.9,
    duration:1.5,
    y:50,
    stagger:{each:.5, from:"center"},
    repeat:-1,
    yoyo:true,
    ease:"linear"
  })
  
  

})


  return (
    <>
    
    <div >
    <Navbar color="white" />
      {/* <Navbar color="blue" font="white" search="blue"/> */}
      <div id='swip' style={{ height: "83vh", width: "99vw", margin:"auto", marginTop:"6em"}}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true} 
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/home img/bed.jpg" alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/home img/mixer.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/home img/paddle scooter.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/home img/scooter.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/home img/virat with smart watch.jpg" alt="" />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='m-8 block h-[30em] px-5 mb-12 ' >
        <h1 className="text-center text-3xl my-8 font-bold text-black " id='ourCatagory'> OUR CATAGORIES</h1>
        <div className='flex w-[100%] justify-between text-center'>
          <div className='w-[25%] h-[21em] up-down1'>
            <div className='w-[100%] h-[100%] catagory mt-10 mb-4'>
              <Link to="/electronic"  onClick={() => handleNavigation('/electronics')}>
                <img src="images/other/gadget.jpg" alt="gadget" className='object-cover w-[100%] h-[100%] ' />
              </Link>
            </div>

            <div className=" text-base">ELECTRONICS</div>
          </div>
          <div className='w-[25%] h-[21em] up-down2'>
            <div className='w-[100%] h-[100%] catagory mt-10 mb-4'>
              <Link to="/vehicle" onClick={() => handleNavigation('/vehicle')} >

                <img src="images/other/bike.jpg" alt="gadget" className='object-cover w-[100%] h-[100%] ' />
              </Link>
            </div>

            <div className=" text-base">VEHICLES</div>
          </div>
          <div className='w-[25%] h-[21em] up-down3'>
            <div className='w-[100%] h-[100%] catagory mt-10 mb-4'>
              <Link to="/furniture" onClick={() => handleNavigation('/furniture')}  >
                <img src="images/other/bed.jpg" alt="gadget" className='object-cover w-[100%] h-[100%] ' />
              </Link>
            </div>

            <div className=" text-base">FURNITURES</div>
          </div>

        </div>

      </div>


      <div style={{marginTop:"10em"}}>
      <Testimonial />
        
      </div>
      
    </div>
      
    </>
  );
}

