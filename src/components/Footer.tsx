'use client'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-16">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Top section with links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Logo and Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-2xl font-semibold text-primary mb-4">Safe Scheme</h2>
                        <p className="text-sm text-neutralLight mb-6 text-center md:text-left">
                            Safe Scheme is dedicated to providing the best security solutions for your digital needs.
                            Trust us to protect what matters most.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.twitter.com" className="text-white hover:text-primary transition">
                                <FontAwesomeIcon icon={faTwitter} size="lg"/>
                            </Link>
                            <Link href="https://www.linkedin.com" className="text-white hover:text-primary transition">
                                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                            </Link>
                            <Link href="https://www.instagram.com" className="text-white hover:text-primary transition">
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
                        <ul className="space-y-4 text-neutralLight">
                            <li><Link href="/#Features" className="hover:text-primary transition">Features</Link></li>
                            <li><Link href="/#Testimonies" className="hover:text-primary transition">Testimonials</Link>
                            </li>
                            {/*<li><Link href="/pricing" className="hover:text-primary transition">Pricing</Link></li>*/}
                            {/*<li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>*/}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-neutralLight">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                <span>contact@safescheme.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} size="lg"/>
                                <span>(123) 456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="border-t border-neutralLight mt-12 pt-6 text-center">
                    <p className="text-sm text-neutralLight">
                        &copy; {new Date().getFullYear()} Safe Scheme. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
