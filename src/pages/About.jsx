import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page container">
            <div className="about-hero">
                <h1>Our Story</h1>
            </div>

            <div className="about-content-block">
                <p>We believe every emotion deserves a quiet place to rest.</p>
                <p>Our diaries are created for moments that words struggle to hold — joy, sorrow, hope, and healing.</p>
                <p>Inspired by timeless designs and gentle thoughts, each page invites honesty and self-reflection.</p>
                <p>This is more than paper and ink; it is a companion for your inner world.</p>
                <p className="highlight-text">Because some stories are meant to be written slowly, and kept forever.</p>
            </div>
        </div>
    );
};

export default About;
