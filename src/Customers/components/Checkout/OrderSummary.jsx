import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { Button, IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cart from '../Cart/Cart';
const OrderSummary = () => {
    return (
        <div className="">
            <div className="border shadow-md p-4 rounded-md space-y-3">
                <h1 className='font-bold text-xl'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="lg:grid  pb-8 mt-4 relative lg:grid-cols-3 space-x-1">

                <div className="col-span-2 pb-6">
                    <div className="space-y-4">
                        {[1, 1, 1, 1].map((item) => <Cart />)}
                    </div>
                </div>
                <div className="col-span-1 lg:pl-2 sticky top-0  lg:h-[100vh] lg:mt-0">
                    <div className="border shadow-lg rounded-md  p-5">
                        <p className='font-semibold opacity-50 uppercase'> Price Details</p>
                        <hr className='my-2' />
                        <div className="space-y-3 font-semibold pb-5">

                            <div className="flex justify-between ">
                                <span>Price</span>
                                <span>₹4999</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className='text-green-500'>-₹999</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span className='text-green-500'>free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <span>Total </span>
                                <span className='text-green-500'>₹4999</span>
                            </div>
                        </div>
                        <Button variant="contained" className='w-full' sx={{ px: "2.5rem", py: '.7rem', bgcolor: '#4f46e5' }} >Checkout</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OrderSummary