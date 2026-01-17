import { FileText, Zap, Sparkles, Download, Edit, Shield, Globe, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

function Services() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-br from-secondary/20 via-base-100 to-primary/20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl opacity-80">
              Everything you need to create the perfect resume, all in one place
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 bg-base-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText size={50} className="text-primary" />,
                title: 'AI Resume Generation',
                description: 'Describe yourself in plain language and let our AI create a professional, tailored resume that highlights your strengths.',
                features: ['Natural language input', 'Smart content generation', 'Industry-specific templates'],
              },
              {
                icon: <Edit size={50} className="text-secondary" />,
                title: 'Easy Customization',
                description: 'Edit and refine your resume with our intuitive form interface. Perfect control over every detail.',
                features: ['Drag and drop sections', 'Real-time preview', 'Multiple formats'],
              },
              {
                icon: <Download size={50} className="text-accent" />,
                title: 'Instant Export',
                description: 'Download your resume as a high-quality PDF with perfect formatting, ready to send to employers.',
                features: ['PDF export', 'Print-friendly format', 'Professional styling'],
              },
            ].map((service, i) => (
              <div key={i} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="card-body">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="card-title text-2xl mb-3">{service.title}</h3>
                  <p className="opacity-80 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Our Service Stands Out</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="text-warning" />,
                title: 'ATS-Friendly',
                description: 'Optimized to pass Applicant Tracking Systems',
              },
              {
                icon: <Zap className="text-success" />,
                title: 'Fast & Efficient',
                description: 'Create resumes in minutes, not hours',
              },
              {
                icon: <Shield className="text-error" />,
                title: 'Privacy First',
                description: 'Your data is secure and never shared',
              },
              {
                icon: <Globe className="text-info" />,
                title: 'Always Available',
                description: '24/7 access from anywhere',
              },
              {
                icon: <Smartphone className="text-primary" />,
                title: 'Mobile Friendly',
                description: 'Works perfectly on all devices',
              },
              {
                icon: <FileText className="text-secondary" />,
                title: 'Multiple Templates',
                description: 'Choose from various professional styles',
              },
              {
                icon: <Download className="text-accent" />,
                title: 'No Watermarks',
                description: 'Clean, professional output',
              },
              {
                icon: <CheckCircle className="text-success" />,
                title: '100% Free',
                description: 'All features available at no cost',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Describe Yourself',
                description:
                  'Write a simple description of your experience, skills, education, and what you\'re looking for.',
              },
              {
                step: '2',
                title: 'Let AI Work Its Magic',
                description:
                  'Our advanced AI analyzes your input and generates a professionally formatted resume tailored to your profile.',
              },
              {
                step: '3',
                title: 'Review & Customize',
                description:
                  'Edit any section, add more details, rearrange content - make it perfectly yours.',
              },
              {
                step: '4',
                title: 'Download & Apply',
                description:
                  'Export your resume as a PDF and start applying to your dream jobs immediately!',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="badge badge-primary badge-lg text-2xl font-bold w-16 h-16 flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="opacity-80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Perfect Resume?</h2>
          <p className="text-xl opacity-80 mb-8">
            Join thousands of job seekers who landed their dream jobs with our AI-powered resumes
          </p>
          <Link
            to="/generate-resume"
            className="btn btn-primary btn-lg shadow-xl hover:scale-110 transition-transform"
          >
            Start Building Now →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
