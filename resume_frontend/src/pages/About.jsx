import { CheckCircle, Users, Target, Zap, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

function About() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
        <div className="hero-content text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About AI Resume Maker
            </h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Revolutionizing the way people create resumes with the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-primary" size={40} />
                Our Mission
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-4">
                We believe that everyone deserves a chance to showcase their talents and skills effectively.
                Our mission is to democratize professional resume writing by leveraging cutting-edge AI technology.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Whether you're a student, professional, or career changer, we're here to help you create
                resumes that stand out and get you noticed by employers.
              </p>
            </div>
            <div className="card bg-base-200 shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  'AI-powered resume generation',
                  'ATS-friendly formatting',
                  'Professional templates',
                  'Instant PDF export',
                  'Unlimited revisions',
                  '100% Free to use',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-success flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Making an Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={50} />, number: '10,000+', label: 'Happy Users' },
              { icon: <Award size={50} />, number: '25,000+', label: 'Resumes Created' },
              { icon: <TrendingUp size={50} />, number: '95%', label: 'Success Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl text-center p-8 hover:scale-105 transition-transform"
              >
                <div className="text-primary mx-auto mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-primary mb-2">{stat.number}</div>
                <div className="text-lg opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-warning" size={40} />,
                title: 'Lightning Fast',
                description: 'Generate a professional resume in under 5 minutes. No more hours of formatting and editing.',
              },
              {
                icon: <CheckCircle className="text-success" size={40} />,
                title: 'ATS Optimized',
                description: 'Our AI ensures your resume passes Applicant Tracking Systems used by 99% of companies.',
              },
              {
                icon: <Award className="text-primary" size={40} />,
                title: 'Professional Quality',
                description: 'Get resumes that look like they were crafted by professional resume writers.',
              },
            ].map((feature, i) => (
              <div key={i} className="card bg-base-200 shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Resume?</h2>
          <p className="text-xl opacity-80 mb-8">
            Join thousands of successful job seekers who trust AI Resume Maker
          </p>
          <Link to="/generate-resume" className="btn btn-primary btn-lg shadow-xl hover:scale-110 transition-transform">
            Get Started Now →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
}

export default About;
