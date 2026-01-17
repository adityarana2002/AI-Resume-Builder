import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { validateContactForm } from '../utils/validation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 4000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero */}
      <section className="hero min-h-[40vh] bg-gradient-to-br from-accent/20 via-base-100 to-primary/20">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-xl opacity-80">
              Have questions? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card bg-base-200 shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.name}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.email}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`textarea textarea-bordered w-full h-32 ${errors.message ? 'textarea-error' : ''
                      }`}
                    placeholder="Tell us more..."
                  ></textarea>
                  {errors.message && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.message}</span>
                    </label>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full gap-2"
                >
                  {isSubmitting && <span className="loading loading-spinner loading-sm"></span>}
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="opacity-80 mb-8">
                  Feel free to reach out to us through any of the following channels.
                  We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:support@airesume.com" className="link link-hover text-primary">
                      support@airesume.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="link link-hover">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="opacity-80">
                      123 Resume Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="card bg-base-200 p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Is the service really free?</h4>
                    <p className="text-sm opacity-70">
                      Yes! All features are completely free with no hidden charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">How secure is my data?</h4>
                    <p className="text-sm opacity-70">
                      We take privacy seriously. Your data is encrypted and never shared with third parties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Can I edit my resume after generating?</h4>
                    <p className="text-sm opacity-70">
                      Absolutely! You have full control to edit and customize every section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
