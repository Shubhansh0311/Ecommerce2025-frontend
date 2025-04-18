import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Grid container className='bg-black text-center text-white pb-4 '>
            <Grid item xs={12} sm={6} md={3} >
                <Typography variant='h6' className='p-4' >Company</Typography>
                <div><Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >About</Button>
                </div>
                <div><Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Blogs</Button>
                </div>
                <div><Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Press</Button>
                </div>
                <div>
                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >partner</Button>

                </div>


            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Typography variant='h6' className='p-4' >Solutions </Typography>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Marketing</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Analytic</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Commerce</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Insight</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Support</Button>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Typography variant='h6' className='p-4'>Documentation</Typography>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Guide </Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >API status </Button>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Typography variant='h6' className='p-4'>legal</Typography>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Claim</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Privacy</Button>
                </div>
                <div>

                    <Button variant='h6' gutterBottom className='pb-5' sx={{ textTransform: 'capitalize' }} >Terms</Button>
                </div>

            </Grid>
            <Grid item xs={12} className='pt-20' >

                <Typography variant='body2' component='p' align='center'>
                    &copy; 2025 Company. All rights reserved.
                </Typography>
                <Typography variant='body2' component='p' align='center'>
                Your satisfaction is our priority.
                </Typography>
                <Typography variant='body2' component='p' align='center'>
                Stay connected for the latest trends and offers.

                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer