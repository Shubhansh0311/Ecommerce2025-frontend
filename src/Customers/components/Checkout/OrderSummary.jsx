import React, { useEffect, useState } from 'react'
import AddressCard from '../AdressCard/AddressCard'
import { Button } from '@mui/material'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../State/order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../State/Payment/Action'
import { Loader } from '../Loader/Loader'

const OrderSummary = () => {
    const dispatch = useDispatch()
    const [paymentpage, setPaymentPage] = useState(true)
    const location = useLocation()
    const { order } = useSelector((state) => state)

    const orderId = new URLSearchParams(location.search).get('order_id')

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [])

    const handleCheckout = async () => {
        setPaymentPage(false) // 👉 show payment tab
        const paymentUrl = await dispatch(createPayment(orderId))
        if (paymentUrl) {
            window.location.href = paymentUrl
        }
    }

    // 👉 Show "Proceeding to payment..." tab
    if (!paymentpage) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Proceeding to Payment...</h2>
                <p className="text-gray-600 mb-6">You’ll be redirected shortly.</p>
                <Loader />
            </div>
        )
    }

    // 👉 Original content
    return (
        paymentpage && (
            <div className="">
                <div className="border shadow-md p-4 rounded-md space-y-3">
                    <h1 className="font-bold text-xl">Delivery Address</h1>
                    {order ? (
                        <AddressCard address={order?.orders?.shippingAddress} />
                    ) : (
                        <Loader />
                    )}
                </div>
                <div className="lg:grid pb-8 mt-4 relative lg:grid-cols-3 space-x-1">
                    <div className="col-span-2 pb-6">
                        <div className="space-y-4">
                            {order?.orders?.orderItems?.map((items) => (
                                <Cart key={items?._id} item={items} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 lg:pl-2 sticky top-0 lg:h-[100vh] lg:mt-0">
                        <div className="border shadow-lg rounded-md p-5">
                            <p className="font-semibold opacity-50 uppercase">Price Details</p>
                            <hr className="my-2" />
                            <div className="space-y-3 font-semibold pb-5">
                                <div className="flex justify-between ">
                                    <span>Price</span>
                                    <span>₹{order?.orders?.totalDiscountedPrice}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span className="text-green-500">-₹{order?.orders?.discount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span className="text-green-500">free</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Total </span>
                                    <span className="text-green-500">₹{order?.orders?.totalPrice}</span>
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                onClick={handleCheckout}
                                className="w-full"
                                sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#4f46e5' }}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default OrderSummary
