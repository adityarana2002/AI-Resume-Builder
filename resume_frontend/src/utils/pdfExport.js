/**
 * PDF Export Utility
 * Generate PDF from HTML content
 */

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Export HTML element to PDF
 * @param {HTMLElement} element - DOM element to convert
 * @param {string} filename - PDF filename
 * @param {Object} options - Additional options
 * @returns {Promise<void>}
 */
export const exportToPDF = async (element, filename = 'resume.pdf', options = {}) => {
    try {
        const {
            quality = 0.95,
            scale = 2,
            orientation = 'portrait',
            format = 'a4',
        } = options;

        // Create canvas from HTML
        const canvas = await html2canvas(element, {
            scale,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png', quality);

        // Calculate dimensions
        const pdf = new jsPDF({
            orientation,
            unit: 'mm',
            format,
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if content is longer than one page
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save(filename);
        return true;
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF');
    }
};

/**
 * Generate and download resume PDF
 * @param {string} elementId - ID of element to export
 * @param {string} filename - Custom filename
 * @returns {Promise<boolean>}
 */
export const downloadResumePDF = async (elementId = 'resume-content', filename) => {
    const element = document.getElementById(elementId);

    if (!element) {
        throw new Error(`Element with ID "${elementId}" not found`);
    }

    const pdfFilename = filename || `resume_${Date.now()}.pdf`;

    await exportToPDF(element, pdfFilename, {
        quality: 0.95,
        scale: 2,
    });

    return true;
};

export default {
    exportToPDF,
    downloadResumePDF,
};
