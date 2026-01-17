import React from "react";
import { CheckCircle, FileText, Zap, Sparkles, Star } from "lucide-react";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="bg-base-100 text-base-content transition-colors duration-300">
     

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>
        <div className="hero-content text-center max-w-3xl relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Build Stunning Resumes with AI
            </h1>
            <p className="py-6 text-lg opacity-80">
              Forget boring templates.{" "}
              <span className="text-secondary font-semibold">
                Describe yourself
              </span>{" "}
              and let AI create a resume that shines ✨
            </p>
            <Link to={'/generate-resume'} className="btn btn-primary btn-lg mt-4 shadow-xl hover:scale-110 hover:shadow-secondary/70 transition duration-300">
              🚀 Build My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-base-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-secondary/5 to-accent/5"></div>
        <h2 className="text-4xl font-extrabold text-center mb-12 relative z-10">
          Features that Wow 🚀
        </h2>
        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {[
            {
              icon: <FileText className="mx-auto text-primary" size={50} />,
              title: "AI Resume Writing",
              desc: "Generate a job-winning resume tailored to your profile.",
            },
            {
              icon: <Zap className="mx-auto text-secondary" size={50} />,
              title: "Fast & Easy",
              desc: "Create your resume in under 5 minutes with simple inputs.",
            },
            {
              icon: <Sparkles className="mx-auto text-accent" size={50} />,
              title: "ATS Friendly",
              desc: "Ensure your resume passes Applicant Tracking Systems.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-base-100/80 backdrop-blur-md shadow-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition duration-300 animate-float"
            >
              <div className="card-body text-center">
                {item.icon}
                <h3 className="mt-4 font-bold text-lg">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Why Choose <span className="text-primary">ResumeAI</span>?
          </h2>
          <p className="text-lg opacity-80 mb-10">
            Whether you’re a{" "}
            <span className="text-secondary font-semibold">student</span>,{" "}
            <span className="text-accent font-semibold">professional</span>, or{" "}
            <span className="text-primary font-semibold">job seeker</span> – our
            AI saves you time and lands you interviews 🚀
          </p>
          <ul className="flex flex-col md:flex-row justify-center gap-6 text-left">
            {[
              "100% Customizable",
              "Professionally Designed",
              "Export in Multiple Formats",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-3 hover:translate-x-2 transition"
              >
                <CheckCircle className="text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        <h2 className="text-4xl font-extrabold text-center mb-12 relative z-10">
          Loved by Job Seekers ❤️
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card bg-base-100/90 backdrop-blur-md shadow-xl hover:scale-105 hover:shadow-lg hover:shadow-secondary/40 transition duration-300"
            >
              <div className="card-body text-center">
                <Star className="text-warning mx-auto animate-bounce" size={40} />
                <p className="my-4 italic opacity-80">
                  “This tool made resume writing so simple. Got my dream job in
                  just weeks!”
                </p>
                <h4 className="font-bold">User {i}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-base-300 p-10 text-base-content">
        <aside>
          <h2 className="text-2xl font-extrabold text-primary">ResumeAI</h2>
          <p className="opacity-80">
            AI-powered resume builder for modern job seekers.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">GitHub</a>
        </nav>
      </footer>

      {/* Extra Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 1s ease-out; }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
}
