import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

//If StripePromise does not exist
//Set the StripePromise to loadStripe, loading a Stripe instance
const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51LnC1XCyxXSqp5ehucN2nngHI0RD7BzrqaFlGA8Zrxs79WobBmUeYCH6dnqFVuXZ12LN8wWo5J5HR9nIvDtpw6Z000I9wHh8ih');
    }
    return stripePromise;
    
}

export default getStripe;