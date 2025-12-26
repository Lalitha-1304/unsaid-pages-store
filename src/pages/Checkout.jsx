import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        paymentMethod: 'COD' // Default to Cash on Delivery
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Format the items list
        const itemsList = cartItems.map(item =>
            `- ${item.name} (${item.category}) x ${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        // 2. Construct the message
        const message = `
*New Order Request - Unsaid Pages*

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Address: ${formData.address}, ${formData.city}, ${formData.zip}

*Payment Method:* ${formData.paymentMethod === 'ONLINE' ? 'Online Payment (GPay/PhonePe)' : 'Cash on Delivery'}

*Order Details:*
${itemsList}

*Total Amount: $${cartTotal.toFixed(2)}*

---------------------------
Please confirm my order. ${formData.paymentMethod === 'ONLINE' ? 'Please share the UPI/QR Code for payment.' : ''}
    `.trim();

        // 3. Create WhatsApp URL
        const phoneNumber = "917672090352";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // 4. Redirect
        window.open(whatsappUrl, '_blank');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container checkout-empty">
                <h1>Your cart is empty</h1>
                <p>Add some items before checking out.</p>
            </div>
        );
    }

    return (
        <div className="container checkout-page">
            <h1>Checkout</h1>
            <div className="checkout-grid">
                <form className="checkout-form" onSubmit={handleSubmit}>

                    {/* Shipping Section */}
                    <section className="checkout-section">
                        <h2>Shipping Details</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" required onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>ZIP Code</label>
                                <input type="text" name="zip" required onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* Payment Section */}
                    <section className="checkout-section">
                        <h2>Payment Method</h2>
                        <div className="payment-options">
                            <label className={`payment-option ${formData.paymentMethod === 'COD' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    checked={formData.paymentMethod === 'COD'}
                                    onChange={handleChange}
                                />
                                <div className="payment-label">
                                    <strong>Cash on Delivery</strong>
                                    <span>Pay when your diary arrives.</span>
                                </div>
                            </label>

                            <label className={`payment-option ${formData.paymentMethod === 'ONLINE' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="ONLINE"
                                    checked={formData.paymentMethod === 'ONLINE'}
                                    onChange={handleChange}
                                />
                                <div className="payment-label">
                                    <strong>Online Payment</strong>
                                    <span>Google Pay / PhonePe / UPI</span>
                                </div>
                            </label>
                        </div>
                    </section>

                    <button type="submit" className="btn btn-primary place-order-btn">
                        Place Order via WhatsApp
                    </button>
                </form>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
