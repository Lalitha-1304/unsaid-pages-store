import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import './Shop.css';

const Shop = () => {
    return (
        <div className="container shop-page">
            <div className="shop-header">
                <h1>Our Collections</h1>
                <p>Choose the diary that fits your journey.</p>
            </div>

            <div className="categories-grid">
                {categories.map(category => (
                    <Link to={`/shop/${category.id}`} key={category.id} className="category-card">
                        <div className="category-image-container">
                            <img src={category.image} alt={category.name} className="category-image" />
                            <div className="category-overlay">
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;
