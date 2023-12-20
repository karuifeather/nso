import React from 'react';

// props for future use
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Logo */}
                <div className="mb-6 md:mb-0">
                    <a href="#" className="text-2xl font-bold">NSO</a>
                </div>

                 {/* Links */}
                 <div className="grid grid-cols-1 gap-4 mb-6 md:mb-0 md:flex md:flex-row md:space-x-8">
                        <a href="#" className="hover:underline">Resources</a>
                        <a href="#" className="hover:underline">FAQ</a>
                        <a href="#" className="hover:underline">Contact</a>
                        <a href="#" className="hover:underline">About</a>
                    </div>

                {/* Social Media Links */}
                <div className="mt-6 md:mt-0">
                    <a href="#" className="mr-4 hover:underline">Facebook</a>
                    <a href="#" className="mr-4 hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">Instagram</a>
                </div>
            </div>

            {/* Copy Right Notice */}
            <div className="mt-6 text-sm text-center">
                    © {new Date().getFullYear()} NSO. All rights reserved.
            </div>
        </div>
      </footer>
    );
};

export default Footer;
