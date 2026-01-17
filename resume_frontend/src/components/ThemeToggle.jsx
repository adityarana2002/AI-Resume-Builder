import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { setItem, getItem } from '../utils/localStorage';
import config from '../config/config';

/**
 * Theme Toggle Component
 * Switches between light and dark themes with persistence
 */
const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return getItem(config.storageKeys.theme, 'dark');
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        setItem(config.storageKeys.theme, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle swap swap-rotate"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
            ) : (
                <FiSun className="w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeToggle;
