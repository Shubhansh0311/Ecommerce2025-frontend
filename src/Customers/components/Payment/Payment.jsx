import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, Grid } from '@mui/material';
import { OrderTracker } from '../Order/OrderTracker';
import { useDispatch, useSelector } from 'react-redux';
import AddressCard from '../AdressCard/AddressCard';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../State/order/Action';
import { updatePayment } from '../../State/Payment/Action';

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const params = useParams();
  const { order } = useSelector(state => state);
  const orderId = params.orderId;
console.log("order",order);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get('razorpay_payment_id'));
    setPaymentStatus(urlParams.get('razorpay_payment_link_status'));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId, dispatch]);

  return (
    <div className="px-4 lg:px-36 py-8">
      <div className="flex flex-col justify-center  items-center">
        <Alert variant="filled" severity="success" sx={{ mb: 6, width: 'fit-content' }}>
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your order has been placed.
        </Alert>

        <Grid container alignItems="center" justifyContent="center" className="py-4 mb-4 px-4">
          <Grid item xs={12} lg={10}  sm={6}>
            <OrderTracker activeStep={1} />
          </Grid>
        </Grid>

        <Grid container spacing={4} className="pt-10 w-full">
          {order?.orders?.orderItems?.map((item, index) => (
            <Grid
              item
              mb={2}
              xs={12}
              key={index}
              className="rounded-lg mb-12 border p-4 shadow-md bg-white"
            >
              <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justifyContent="space-between"
              >
                {/* Product Info */}
                <Grid item xs={12} md={6}>
                  <div className="flex flex-col  sm:flex-row items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <img
                      className="w-auto sm:w-32 sm:h-32 h-auto  object-cover object-top rounded-md"
                      src={item.product.imageUrl}
                      alt={item.product.title}
                    />
                    <div className="space-y-1">
                      <p className="font-semibold text-lg">{item.product.title}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">Seller: {item.product.brand}</p>
                      <p className="text-blue-600 font-bold text-md">₹ {item.price}</p>
                    </div>
                  </div>
                </Grid>

                {/* Shipping Address */}
                <Grid item xs={12} md={6}>
                  <AddressCard address={order?.orders?.shippingAddress} />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
