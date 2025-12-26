import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <div style={{
                backgroundColor: '#FFA500',
                color: 'white',
                textAlign: 'center',
                padding: '8px',
                fontWeight: 'bold',
                fontSize: '0.9rem'
            }}>
                🚧 STORE IN PREVIEW MODE - ORDERS ARE FOR TESTING ONLY 🚧
            </div>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <CartDrawer />
        </div>
    );
};

export default Layout;
