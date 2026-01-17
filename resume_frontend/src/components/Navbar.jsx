import { Link, useLocation } from 'react-router';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinkClass = (path) => {
        return isActive(path) ? 'text-primary font-semibold' : '';
    };

    return (
        <div className="navbar shadow bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-base-100/95">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* Mobile Section */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/" className={navLinkClass('/')}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={navLinkClass('/about')}>About</Link>
                        </li>
                        <li>
                            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={navLinkClass('/contact')}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/generate-resume" className="text-primary font-semibold">Generate Resume</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl hover:text-primary transition-colors">
                    ✨ AI Resume Maker
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Big Screen Section */}
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className={navLinkClass('/')}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={navLinkClass('/about')}>About</Link>
                    </li>
                    <li>
                        <Link to="/services" className={navLinkClass('/services')}>Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={navLinkClass('/contact')}>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <ThemeToggle />
                <Link to="/generate-resume" className="btn btn-primary btn-sm md:btn-md">
                    Generate Resume
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

