import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Copyright&copy; {date}</p>
        </footer>
    );
};

export default Footer;