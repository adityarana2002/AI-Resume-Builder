import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

/**
 * Footer Component
 * Reusable footer with navigation and social links
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-300 text-base-content">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-extrabold text-primary">AI Resume Maker</h2>
                        <p className="text-base-content/70 text-sm">
                            Create professional, ATS-friendly resumes powered by AI technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="footer-title text-base font-bold mb-4">Quick Links</h6>
                        <nav className="flex flex-col gap-2">
                            <Link to="/" className="link link-hover text-sm">Home</Link>
                            <Link to="/about" className="link link-hover text-sm">About</Link>
                            <Link to="/services" className="link link-hover text-sm">Services</Link>
                            <Link to="/generate-resume" className="link link-hover text-sm">Generate Resume</Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h6 className="footer-title text-base font-bold mb-4">Support</h6>
                        <nav className="flex flex-col gap-2">
                            <Link to="/contact" className="link link-hover text-sm">Contact Us</Link>
                            <a href="#faq" className="link link-hover text-sm">FAQ</a>
                            <a href="#privacy" className="link link-hover text-sm">Privacy Policy</a>
                            <a href="#terms" className="link link-hover text-sm">Terms of Service</a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h6 className="footer-title text-base font-bold mb-4">Connect With Us</h6>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-circle btn-sm hover:text-primary"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-circle btn-sm hover:text-primary"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-circle btn-sm hover:text-primary"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@airesume.com"
                                className="btn btn-ghost btn-circle btn-sm hover:text-primary"
                                aria-label="Email"
                            >
                                <FaEnvelope className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="divider"></div>
                <div className="text-center text-sm text-base-content/60">
                    <p>© {currentYear} AI Resume Maker. All rights reserved.</p>
                    <p className="mt-2">
                        Built with ❤️ using React, Vite, and Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
