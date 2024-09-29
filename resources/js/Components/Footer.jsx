import React from 'react';

const Footer = ({appName}) => {
    return (
        <footer className="bg-blue-800 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-6">
                    <h2 className="text-lg font-bold mb-4">{appName}</h2> {/* Replace with your logo or brand name */}
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap justify-between mb-6">
                    <div className="w-1/2 md:w-1/4">
                        <h4 className="font-semibold mb-2">About</h4>
                        <ul>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                            <li><a href="/careers" className="hover:underline">Careers</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4">
                        <h4 className="font-semibold mb-2">Customer Service</h4>
                        <ul>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            <li><a href="/returns" className="hover:underline">Returns</a></li>
                            <li><a href="/shipping" className="hover:underline">Shipping</a></li>
                            <li><a href="/support" className="hover:underline">Support</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4">
                        <h4 className="font-semibold mb-2">Categories</h4>
                        <ul>
                            <li><a href="/electronics" className="hover:underline">Electronics</a></li>
                            <li><a href="/fashion" className="hover:underline">Fashion</a></li>
                            <li><a href="/home-appliances" className="hover:underline">Home Appliances</a></li>
                            <li><a href="/books" className="hover:underline">Books</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4">
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-blue-900 text-center py-4">
                <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
