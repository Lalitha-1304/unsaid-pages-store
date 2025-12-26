import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Checkout from './pages/Checkout';
import CategoryPage from './pages/CategoryPage';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:categoryId" element={<CategoryPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Layout>
    );
}

export default App;
