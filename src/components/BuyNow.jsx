
//5.
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';

export default function BuyNow() {
    const [thank, setThank] = useState({});
    const price = JSON.parse(localStorage.getItem("price"))
    const navigate = useNavigate();
    // if(price<=0){
    //     alert('Invalid price');
    //     navigate(-1);
    // }
    
    const thakyou = () => {
        setThank({
            display: 'none',
        })
    }
    return (
        <>
            <div className='w-[50%] bg-white shadow-md m-auto mt-[5em]' style={thank}>

                <h1 className='font-bold text-center'>Checkout</h1>
                <div className='flex'>
                    <div className='w-[47%] m-4'>
                        <h1>Shoping Address</h1>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                        <TextField id="standard-basic" label="Address" variant="standard" />
                        <TextField id="standard-basic" label="City" variant="standard" />
                        <TextField id="standard-basic" label="Pin Code" variant="standard" />
                        <TextField id="standard-basic" label="Phone" variant="standard" />
                        <TextField id="standard-basic" label="Email" variant="standard" />

                        <Button variant="outlined" style={{ marginBlock: "1em" }}>BACK TO CART</Button>
                    </div>
                    <div className='w-[47%] m-4'>
                        <h1>Payment Method</h1>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input
                                id="standard-adornment-amount" disabled
                                startAdornment={<InputAdornment position="start" disabled>₹ {price}</InputAdornment>}
                            />
                        </FormControl>
                        <TextField id="standard-basic" label="Card Name" variant="standard" />
                        <TextField id="standard-basic" label="Card Number" variant="standard" />


                        <div className=''>Expire</div>
                        <input type="date" style={{ backgroundColor: "white", borderBottom: "1px solid", height: "2em" }} />

                        <TextField id="standard-basic" label="cvv" variant="standard" />
                        <Button variant="contained" style={{ marginTop: "6.4em" }} onClick={thakyou}>PAY NOW</Button>
                    </div>
                </div>

            </div>
            {
                (thank.display === "none") ?
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        Thanks You For choosing us!!
                    </div>
                    : null
            }

        </>
    )
}
