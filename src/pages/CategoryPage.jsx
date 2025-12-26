import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const category = categories.find(c => c.id === categoryId);
    const categoryProducts = products.filter(p => p.categoryId === categoryId);

    if (!category) {
        return (
            <div className="container text-center" style={{ padding: '5rem 0' }}>
                <h2>Category not found</h2>
                <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
            </div>
        );
    }

    return (
        <div className="container category-page">
            <div className="category-header">
                <Link to="/shop" className="back-link">&larr; Back to Categories</Link>
                <h1>{category.name}</h1>
                <p>{category.description}</p>
            </div>

            <div className="product-grid">
                {categoryProducts.length > 0 ? (
                    categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="no-products">No exclusive diaries available in this collection yet.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
