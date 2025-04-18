import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { useNavigate } from 'react-router-dom'


const DeliveryAddressForm = () => {
    const handleChng = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        console.log(Object.fromEntries(formdata.entries()))
    }
    const navigate=useNavigate()
    const orderSummary=()=>{
    navigate('/ordersummary')}

    return (
        <div >
            <Grid container className='lg:space-x-4' alignItems='center'>
                <Grid xs={12} lg={3.5} className="rounded-md   p-4 border shadow-md h-[30.5rem] overflow-y-scroll" item>
                    <div className="p-0 border-b  cursor-pointer">
                        <AddressCard />
                        <Button variant="contained" onClick={orderSummary} size='large' sx={{ my: 2, bgcolor: '#4f46e5' }}>Deliver here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={8}  >
                    <Box className="shadow-md p-5 lg:mt-0 mt-4 rounded-md border">
                        <form onSubmit={handleChng}>
                            <Grid container spacing={3}  >
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='firstName'
                                        name='firstName'
                                        autoComplete='given-name'
                                        required
                                        label="First Name"
                                        fullWidth
                                        inputMode='text'
                                        inputProps={{ pattern: "[A-Za-z]+" }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='lastName'
                                        name='lastName'
                                        autoComplete='family-name'
                                        required
                                        label="Last Name"
                                        inputMode='text'
                                        fullWidth
                                        inputProps={{ pattern: "[A-Za-z]+" }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={12} item>
                                    <TextField
                                        id='Address'
                                        name='Address'
                                        autoComplete='street-address'
                                        required
                                        label="Address"
                                        inputMode='text'
                                        rows={3}
                                        multiline
                                        fullWidth
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='city'
                                        name='city'
                                        autoComplete='address-level2'
                                        required
                                        label="City"
                                        fullWidth
                                        inputMode='text'
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='state'
                                        name='state'
                                        autoComplete='address-level1'
                                        required
                                        label="State/Province/Region"
                                        fullWidth
                                        inputMode='text'
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='zip'
                                        name='zip'
                                        type='number'
                                        autoComplete='postal-code'
                                        required
                                        label="Zip/Postal code"
                                        fullWidth
                                        inputMode="numeric"
                                        inputProps={{ pattern: "[0-9]{5}" }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        required
                                        label="Phone Number"
                                        fullWidth
                                        inputMode='tel'
                                        inputProps={{ pattern: "[0-9]{10}" }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Button variant="contained" type='submit' size='large' sx={{ my: 2, bgcolor: '#4f46e5' }}>Deliver here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm
