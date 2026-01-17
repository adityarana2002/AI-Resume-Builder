import axios from "axios";
import config from "../config/config";

export const baseURL = config.apiBaseUrl;

export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 900000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Server responded with error status
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            // Request made but no response
            console.error('Network Error:', error.message);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

/**
 * Generate resume from user description
 * @param {string} description - User's description for resume generation
 * @returns {Promise<Object>} - Generated resume data
 */
export const generateResume = async (description) => {
    try {
        const response = await axiosInstance.post(config.endpoints.generateResume, {
            userDescription: description,
        });
        // Backend returns ApiResponse: { message, data: { data: {...}, think: ... }, success }
        // We need to extract the actual resume content which is inside resonse.data.data.data (if nested)
        // Or based on backend: 
        // stringObjectMap has "data" (resume json) and "think".
        // ApiResponse.data = stringObjectMap.
        // So response.data.data contains { data: resumeJson, think: ... }

        if (!response.data.success) {
            throw new Error(response.data.message || 'Server replied with failure');
        }

        const result = response.data.data;
        if (!result || !result.data) {
            throw new Error("No resume data found in server response");
        }
        console.log("Parsed Resume Service Data:", result.data);
        return result.data; // This should be the resume object
    } catch (error) {
        console.error("Generate Resume Error:", error);
        throw new Error(error.response?.data?.message || error.message || 'Failed to generate resume');
    }
};

/**
 * Save resume data
 * @param {Object} resumeData - Resume data to save
 * @returns {Promise<Object>} - Save response
 */
export const saveResume = async (resumeData) => {
    try {
        const response = await axiosInstance.post(config.endpoints.saveResume, resumeData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to save resume');
    }
};

export default {
    generateResume,
    saveResume,
};
