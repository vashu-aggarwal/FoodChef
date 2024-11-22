import React from 'react';
import ItemList from './ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../Utils/cartSlice';
import './cart.css';
import { toast } from "react-toastify";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
        toast.success("Cart deleted successfully",{
            autoClose: 1000, // Notification will close after 5000 milliseconds (5 seconds)
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = item.card.info.price ? parseInt(item.card.info.price) / 100 : parseInt(item.card.info.defaultPrice) / 100;
            return total + (item.quantity * price);
        }, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-heading">Cart</h1>
            <div>
                <button
                    className="cart-clear-button"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            {cartItems.length === 0 && <h3 className="cart-empty-message">Cart is empty. Add Items to the cart!!!</h3>}
            <div className="cart-item-list">
                <ItemList Items={cartItems} showRemoveButton={true} />
            </div>

            {cartItems.length > 0 && (
                <div className="billing-cart">
                    <h1 className="billing-header">Bill Amount</h1>
                    {cartItems.map((item, index) => {
                        const price = item.card.info.price ? parseInt(item.card.info.price) / 100 : parseInt(item.card.info.defaultPrice) / 100;
                        return (
                            <div key={index} className="item-row">
                                <span>{item.quantity}x ₹{price.toFixed(2)}</span>
                                <span className="item-total">₹{(item.quantity * price).toFixed(2)}</span>
                            </div>
                        );
                    })}
                    <div className="total-row">
                        <span>Total:</span>
                        <span className="total-amount">₹{calculateTotal()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
