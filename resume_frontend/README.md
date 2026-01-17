# AI Resume Maker 🚀

![AI Resume Maker](https://img.shields.io/badge/AI-Resume%20Maker-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, AI-powered resume builder that helps you create professional, ATS-friendly resumes in minutes. Built with React, Vite, and TailwindCSS.

## ✨ Features

- 🤖 **AI-Powered Resume Generation** - Describe yourself in plain language and let AI create a professional resume
- 📄 **PDF Export** - Download your resume as a high-quality PDF
- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark/light theme support
- ⚡ **Fast & Efficient** - Built with Vite for lightning-fast development and builds
- 🔒 **Privacy First** - Your data stays secure
- 📱 **Mobile Responsive** - Works perfectly on all devices
- ♿ **Accessible** - WCAG compliant with keyboard navigation support
- 🎯 **ATS-Friendly** - Optimized to pass Application Tracking Systems

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resume-frontend.git
   cd resume-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your backend API URL:
   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Core
- **React** 19.2.0 - UI library
- **Vite** 7.1.2 - Build tool and dev server
- **React Router** 7.9.1 - Client-side routing

### Styling
- **TailwindCSS** 3.4.17 - Utility-first CSS framework
- **DaisyUI** 5.1.10 - Tailwind component library

### State & Forms
- **React Hook Form** 7.66.0 - Form validation and management

### HTTP & API
- **Axios** 1.12.1 - HTTP client

### PDF Generation
- **jsPDF** 2.5.2 - PDF generation
- **html2canvas** 1.4.1 - HTML to canvas conversion

### Icons
- **Lucide React** 0.544.0 - Modern icon library
- **React Icons** 5.5.0 - Popular icon packs

### Utilities
- **React Hot Toast** 2.6.0 - Toast notifications
- **PropTypes** 15.8.1 - Runtime type checking
- **React Error Boundary** 4.1.2 - Error handling

## 📁 Project Structure

```
resume_frontend/
├── public/             # Static assets
├── src/
│   ├── api/           # API service layer
│   │   └── ResumeService.js
│   ├── components/    # Reusable components
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── Resume.jsx
│   │   └── ThemeToggle.jsx
│   ├── config/        # Configuration files
│   │   └── config.js
│   ├── pages/         # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── GenerateResume.jsx
│   │   ├── Home.jsx
│   │   ├── LandingPage.jsx
│   │   ├── NotFound.jsx
│   │   ├── Resume.jsx
│   │   ├── Root.jsx
│   │   └── Services.jsx
│   ├── utils/         # Utility functions
│   │   ├── localStorage.js
│   │   ├── pdfExport.js
│   │   └── validation.js
│   ├── App.css
│   ├── index.css
│   └── main.jsx       # Application entry point
├── .env.example       # Environment variables template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 How to Use

1. **Navigate to Generate Resume**
   - Click on "Generate Resume" in the navigation bar

2. **Describe Yourself**
   - Write a description of your experience, skills, and qualifications
   - Click "Generate" to let AI create your resume

3. **Review and Edit**
   - Review the AI-generated resume
   - Edit any section using the intuitive form interface

4. **Download**
   - Click "Download PDF" to export your resume
   - Alternatively, use "Print" for printing

## 🌐 API Integration

The application connects to a backend API for resume generation. Configure the API endpoint in `.env`:

```env
VITE_API_BASE_URL=http://localhost:8080
```

### API Endpoints

- `POST /api/v1/resume/generate` - Generate resume from description
- `POST /api/v1/resume/save` - Save resume data

## 🎨 Customization

### Themes

The app supports multiple themes via DaisyUI. Switch themes in `index.html`:

```html
<html data-theme="dark">
```

Available themes: `light`, `dark`, `cupcake`, `cyberpunk`, etc.

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and more:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
}
```

## 🚨 Error Handling

The app includes comprehensive error handling:

- **Error Boundary** - Catches React errors and displays user-friendly messages
- **API Errors** - Handled with toast notifications
- **Form Validation** - Real-time validation with helpful error messages

## 📱 Responsive Design

Fully responsive design that works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Focus indicators
- Screen reader friendly
- Semantic HTML

## 🔒 Privacy & Security

- No data is stored without user consent
- All API communications can be secured with HTTPS
- Environment variables for sensitive configuration
- Client-side data validation

## 🐛 Known Issues

None currently. Please report issues on GitHub.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- React team for the amazing library
- Vite for the blazing fast build tool
- TailwindCSS for the utility-first CSS framework
- DaisyUI for beautiful components
- All contributors and users

## 📞 Support

For support, email support@airesume.com or create an issue on GitHub.

## 🔄 Changelog

### Version 1.0.0 (2026-01-11)
- Initial release
- AI-powered resume generation
- PDF export functionality
- Responsive design
- Dark/light theme support
- Complete page implementations (Home, About, Services, Contact)
- Error handling and loading states
- Form validation
- 404 page

---

Made with ❤️ using React, Vite, and TailwindCSS
