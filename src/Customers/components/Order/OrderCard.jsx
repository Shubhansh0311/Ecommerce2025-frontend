import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className="  shadow-md border hover:shadow-xl p-4 rounded-sm border-gray-200">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer space-x-2">
                        <img src="https://i.ibb.co/spkNChFB/cart3.jpg" alt="cart2.jpg" className='w-[5rem] h-[5rem] object-top object-cover' />

                        <div className='space-y-1'>
                            <p className='font-semibold text-sm'>A classic shirt perfect for formal occasions.</p>
                            <p className='text-sm font-semibold opacity-60 '>Size : M</p>
                            <p className='text-sm font-semibold opacity-60 '>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1999</p>
                </Grid>
                <Grid item xs={4}>
                    <div className="space-x-1">

                        {true && <div>
                            <p>  <AdjustIcon sx={{ width: '15px', height: '15px' }} className='text-green-500' />
                                <span className='opacity-60 font-semibold'> Delivered on 5february </span></p>
                            <p className='opacity-50 text-sm font-semibold'>Your item has been delivered</p>
                        </div>
                        }
                        {false &&
                            <p >
                                <span className='opacity-60 font-semibold'>Expected delivery on 5february</span></p>}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard