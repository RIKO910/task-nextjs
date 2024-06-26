import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - 2024 Found and Lost System, Inc. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;