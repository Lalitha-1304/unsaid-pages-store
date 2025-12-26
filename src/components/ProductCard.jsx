import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                >
                    <ShoppingBag size={20} /> Add
                </button>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
