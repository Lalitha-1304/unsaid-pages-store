import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
    const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
            <div className="cart-drawer">
                <div className="cart-header">
                    <h2>Your Cart ({cartItems.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="close-btn">
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <button
                                className="btn btn-outline"
                                onClick={() => setIsCartOpen(false)}
                                style={{ marginTop: '1rem' }}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">${item.price}</p>
                                    <div className="cart-item-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            className="btn btn-primary checkout-btn"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
