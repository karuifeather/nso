"use client"

import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow sticky">
            <nav className="container mx-auto px-6 md:px-12 py-3">
                {/* Logo */}
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">NSO</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="/events" className="text-gray-600 hover:text-gray-900">Events</a>
                        <a href="/resources" className="text-gray-600 hover:text-gray-900">Resources</a>
                        <a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                        <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
                    <a href="/" className="block py-2 text-gray-600 hover:text-gray-900">Home</a>
                    <a href="/events" className="block py-2 text-gray-600 hover:text-gray-900">Events</a>
                    <a href="/resources" className="block py-2 text-gray-600 hover:text-gray-900">Resources</a>
                    <a href="/faq" className="block py-2 text-gray-600 hover:text-gray-900">FAQ</a>
                    <a href="/contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
                    <a href="/about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
