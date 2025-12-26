import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Write what you haven't said.</h1>
                    <p>A collection of premium diaries for your deepest thoughts, dreams, and unsaid pages.</p>
                    <Link to="/shop" className="btn btn-primary">Start Writing</Link>
                </div>
            </section>

            {/* Featured Section */}
            <section className="featured container">
                <div className="section-header">
                    <h2>Trending Diaries</h2>
                    <Link to="/shop" className="view-all">View All</Link>
                </div>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="about-teaser container">
                <div className="about-content">
                    <h2>Your Safe Space</h2>
                    <p>In a world of noise, find your quiet corner. Our journals are crafted with premium paper and binding to stand the test of time, just like your memories.</p>
                    <Link to="/about" className="btn btn-outline">Read Our Story</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
