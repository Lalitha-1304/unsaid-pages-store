import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid var(--color-border)',
            marginTop: 'auto',
            backgroundColor: 'var(--color-bg)'
        }}>
            <div className="container text-center">
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Unsaid Pages. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
