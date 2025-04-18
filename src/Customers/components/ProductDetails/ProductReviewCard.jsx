import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div className="space-y-3">
            <Grid container spacing={2} gap={{ xs: 5, lg:2,sm: 12 }} className='sm:gap-12'>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white text-lg mt-1' sx={{width:"50px",height:"50px",bgcolor:'#1e74e6'}}>S</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-3">
                       <div className="">
                       <p>Ramesh</p>
                       <p className='opacity-50 text-gray-500 font-semibold'>January 20,2025</p>
                       </div>
                    </div>
                    <Rating name="half-rating" value={4.5} readOnly precision={0.5}  />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
