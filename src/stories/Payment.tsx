import React from 'react';
import NetWrapper from 'src/Network/netWrapper';
import ToastAlert from 'src/Toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface IPayment {
  name: string;
  email: string;
  phone: string;
  receipt: string;
  checkInDate: Date;
  checkOutDate: Date;
  adults: number;
  children: number;
  infants: number;
  extraGuests: number;
  pets: number;
  totalPrice: number;
}

const Payment = () => {
  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      ToastAlert('Razorpay SDK Failed to load', 'error');
      return;
    }

    let body = {
      name: 'shubham hota',
      email: 'ak@f22labs.com',
      phone: '+919999999999',
      type: 'property',
      receipt: 'receipt_001',
      details: {
        propertyId: 2,
        checkInDate: '2023-07-18',
        checkOutDate: '2023-07-20',
        guests: {
          adults: 1,
          children: 0,
          infants: 0,
          extraGuests: 2,
          pets: 1
        },
        totalPrice: 1463200
      }
    };
    const { data, error } = await NetWrapper('api/order', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    if (error) {
      ToastAlert('Order did not generate, Please try again', 'error');
      return;
    }
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      name: 'Luxunlock Pvt Ltd',
      currency: 'INR',
      amount: 1463200,
      //@ts-ignore
      order_id: data.id,
      description: 'Thankyou for your test',
      image:
        'https://luxunlockdev.s3.ap-south-1.amazonaws.com/thumbnail_Lobby_View_of_Villa_1_9ee254addc.jpg',
      handler: async function (response) {
        await NetWrapper(`api/capture/${response.razorpay_payment_id}`, {
          method: 'POST',
          body: JSON.stringify({
            amount: 1463200,
            orderId: response.razorpay_order_id
          })
        });
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <>
      <div
        className="text-center p-[20px] w-full bg-[#8A1E61] text-white font-bold uppercase text-xs"
        onClick={makePayment}
      >
        MAKE PAYMENT
      </div>
    </>
  );
};

export default Payment;
