import { useContext, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import classes from './PaymentSuccess.module.css';
import { Link } from "react-router-dom";
import CartContext from '../store/cart-context';
import Confetti from 'react-confetti'

const PaymentSuccess = () => {

    //Link to go back to shopping page
    const redirectShopping = `/shopping`;

    // Clear the current cart state
    const cartContext = useContext(CartContext);

    useEffect(() => {
        cartContext.clearAll();
    }, []);

    // Clear cart from local storage
    localStorage.removeItem('cartItems');
    localStorage.removeItem('totalAmount');

    //const { width, height } = useWindowSize()

    return (
        <div className={classes.successWrapper}>
            <Confetti recycle={false} numberOfPieces={400} />
            <div className={classes.success}>
                <p className={classes.icon}>
                    <BsBagCheckFill />
                </p>
                <br></br>
                <h2>Thank you for your order! </h2>
                <p className={classes.description}>
                    If you have any questions, please contact:
                    <a className={classes.email} href="mailto:Sevla Design Studio" style={{ textDecoration: 'none' }}>
                        sevladesignstudio@gmail.com
                    </a>
                </p>
                <Link to={{ pathname: redirectShopping }}>
                    <button type="button" width="300px" className={classes.btn}>
                        Continue Shopping
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default PaymentSuccess