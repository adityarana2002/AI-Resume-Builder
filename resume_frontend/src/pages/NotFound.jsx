import { Link } from 'react-router';
import { Home, Search, FileQuestion } from 'lucide-react';

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-error/10 via-base-100 to-warning/10 px-6">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <FileQuestion className="mx-auto text-error" size={120} strokeWidth={1.5} />
                </div>

                <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
                <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
                <p className="text-xl opacity-80 mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="btn btn-primary btn-lg gap-2">
                        <Home size={20} />
                        Go Home
                    </Link>
                    <Link to="/generate-resume" className="btn btn-secondary btn-lg gap-2">
                        <FileQuestion size={20} />
                        Generate Resume
                    </Link>
                </div>

                <div className="mt-12 card bg-base-200 p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-center gap-2">
                        <Search size={20} />
                        Popular Pages
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link to="/" className="link link-hover">Home</Link>
                        <span className="opacity-30">•</span>
                        <Link to="/about" className="link link-hover">About</Link>
                        <span className="opacity-30">•</span>
                        <Link to="/services" className="link link-hover">Services</Link>
                        <span className="opacity-30">•</span>
                        <Link to="/contact" className="link link-hover">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
