/**
 * Form Validation Utilities
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (various formats)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
export const isValidPhone = (phone) => {
    // eslint-disable-next-line
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid
 */
export const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

/**
 * Validate required field
 * @param {string} value - Value to validate
 * @returns {boolean} - True if not empty
 */
export const isRequired = (value) => {
    return value !== null && value !== undefined && value.toString().trim() !== '';
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length required
 * @returns {boolean} - True if meets minimum length
 */
export const hasMinLength = (value, minLength) => {
    return value && value.toString().length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum length allowed
 * @returns {boolean} - True if within maximum length
 */
export const hasMaxLength = (value, maxLength) => {
    return value && value.toString().length <= maxLength;
};

/**
 * Validate contact form
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation errors object
 */
export const validateContactForm = (formData) => {
    const errors = {};

    if (!isRequired(formData.name)) {
        errors.name = 'Name is required';
    }

    if (!isRequired(formData.email)) {
        errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!isRequired(formData.message)) {
        errors.message = 'Message is required';
    } else if (!hasMinLength(formData.message, 10)) {
        errors.message = 'Message must be at least 10 characters';
    }

    return errors;
};

export default {
    isValidEmail,
    isValidPhone,
    isValidUrl,
    isRequired,
    hasMinLength,
    hasMaxLength,
    validateContactForm,
};
