/**
 * Application Configuration
 * Centralized configuration management
 */

export const config = {
    // API Configuration
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',

    // App Info
    appName: import.meta.env.VITE_APP_NAME || 'AI Resume Maker',
    appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',

    // Feature Flags
    features: {
        pdfExport: true,
        autoSave: true,
        themeToggle: true,
    },

    // Storage Keys
    storageKeys: {
        theme: 'resume-app-theme',
        resumeData: 'resume-draft',
        userPreferences: 'user-preferences',
    },

    // API Endpoints
    endpoints: {
        generateResume: '/api/v1/resume/generate',
        saveResume: '/api/v1/resume/save',
        updateResume: '/api/v1/resume/update',
        deleteResume: '/api/v1/resume/delete',
    },
};

export default config;
