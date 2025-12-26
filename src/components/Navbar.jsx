import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logo.png" alt="Unsaid Pages" className="logo-img" />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop Diaries</Link>
                    <Link to="/about">Our Story</Link>
                </div>

                <div className="navbar-actions">
                    <button
                        className="cart-btn"
                        aria-label="Cart"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag size={24} />
                        <span className="cart-count">{cartCount}</span>
                    </button>

                    <button
                        className="menu-btn mobile-only"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop Diaries</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
