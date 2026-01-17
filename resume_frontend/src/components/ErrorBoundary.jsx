import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console
        console.error('Error caught by boundary:', error, errorInfo);

        this.setState({
            error,
            errorInfo,
        });

        // You can also log to an error reporting service here
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
                    <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h2 className="card-title text-error justify-center text-3xl mb-4">
                                ⚠️ Oops! Something went wrong
                            </h2>
                            <p className="text-base-content/70 mb-4">
                                We encountered an unexpected error. This has been logged and we'll look into it.
                            </p>

                            {this.props.showDetails && this.state.error && (
                                <div className="mockup-code text-left mb-4">
                                    <pre data-prefix=">" className="text-error">
                                        <code>{this.state.error.toString()}</code>
                                    </pre>
                                    {this.state.errorInfo && (
                                        <pre data-prefix=">" className="text-warning text-xs">
                                            <code>{this.state.errorInfo.componentStack}</code>
                                        </pre>
                                    )}
                                </div>
                            )}

                            <div className="card-actions justify-center gap-3">
                                <button
                                    onClick={this.handleReset}
                                    className="btn btn-primary"
                                >
                                    Try Again
                                </button>
                                <a href="/" className="btn btn-ghost">
                                    Go to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.node,
    onError: PropTypes.func,
    showDetails: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
    fallback: null,
    onError: null,
    showDetails: false,
};

export default ErrorBoundary;
