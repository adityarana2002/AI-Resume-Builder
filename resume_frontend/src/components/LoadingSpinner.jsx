import PropTypes from 'prop-types';

/**
 * Loading Spinner Component
 * Reusable loading indicator with different sizes and variants
 */
const LoadingSpinner = ({ size = 'md', fullPage = false, text = '' }) => {
    const sizeClasses = {
        xs: 'loading-xs',
        sm: 'loading-sm',
        md: 'loading-md',
        lg: 'loading-lg',
    };

    const spinner = (
        <div className="flex flex-col items-center justify-center gap-4">
            <span className={`loading loading-spinner text-primary ${sizeClasses[size]}`}></span>
            {text && <p className="text-base-content/70">{text}</p>}
        </div>
    );

    if (fullPage) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-base-200/80 backdrop-blur-sm z-50">
                {spinner}
            </div>
        );
    }

    return spinner;
};

LoadingSpinner.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    fullPage: PropTypes.bool,
    text: PropTypes.string,
};

export default LoadingSpinner;
