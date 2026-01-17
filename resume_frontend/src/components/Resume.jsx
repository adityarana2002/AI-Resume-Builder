import { useState } from "react";
import PropTypes from "prop-types";
import { Download, Printer } from "lucide-react";
import toast from "react-hot-toast";
import { downloadResumePDF } from "../utils/pdfExport";

export default function Resume({ data }) {
  const [isExporting, setIsExporting] = useState(false);

  if (!data)
    return <div className="text-center py-10">No resume data available</div>;

  const {
    personalInformation = {},
    summary = "",
    skills = {},
    experience = [],
    education = [],
    certifications = [],
    projects = [],
    interests = [],
    languages = [],
  } = data;

  const handleDownloadPDF = async () => {
    try {
      setIsExporting(true);
      toast.loading("Generating PDF...", { id: "pdf-export" });

      await downloadResumePDF("resume-content", `${personalInformation.fullName || 'resume'}_resume.pdf`);

      toast.success("PDF downloaded successfully!", { id: "pdf-export" });
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Failed to generate PDF. Please try again.", { id: "pdf-export" });
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-10 px-4">
      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto mb-6 flex gap-3 justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="btn btn-secondary btn-sm gap-2"
        >
          <Printer size={18} />
          Print
        </button>
        <button
          onClick={handleDownloadPDF}
          disabled={isExporting}
          className="btn btn-primary btn-sm gap-2"
        >
          {isExporting ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <Download size={18} />
          )}
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div
        id="resume-content"
        className="w-full max-w-4xl mx-auto p-10 bg-base-100 shadow-2xl rounded-2xl border border-base-300 print:shadow-none print:border-none"
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-primary tracking-wide">
            {personalInformation.fullName}
          </h1>
          <div className="mt-3 text-base-content/70 space-y-1">
            {personalInformation.email && <p>{personalInformation.email}</p>}
            {personalInformation.phoneNumber && <p>{personalInformation.phoneNumber}</p>}
            {personalInformation.location && <p>{personalInformation.location}</p>}
          </div>

          {/* Links */}
          {(personalInformation.linkedIn || personalInformation.gitHub || personalInformation.portfolio) && (
            <div className="flex justify-center gap-6 mt-4 text-sm flex-wrap">
              {personalInformation.linkedIn && (
                <a
                  href={personalInformation.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {personalInformation.gitHub && (
                <a
                  href={personalInformation.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  GitHub
                </a>
              )}
              {personalInformation.portfolio && (
                <a
                  href={personalInformation.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Portfolio
                </a>
              )}
            </div>
          )}
        </div>

        {/* SECTION WRAPPER */}
        <div className="space-y-10">
          {/* SUMMARY */}
          {summary && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Professional Summary
              </h2>
              <p className="text-base leading-relaxed text-base-content/80">
                {summary}
              </p>
            </section>
          )}

          {/* SKILLS GRID */}
          {Object.keys(skills).length > 0 && Object.values(skills).some(arr => arr && arr.length > 0) && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([title, list]) => {
                  if (!list || list.length === 0) return null;
                  return (
                    <div key={title} className="bg-base-200 p-5 rounded-xl shadow">
                      <h3 className="font-semibold text-lg mb-2 capitalize">
                        {title.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <ul className="list-disc ml-5 text-sm text-base-content/70">
                        {list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* EXPERIENCE */}
          {experience && experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 bg-base-200 rounded-xl border-l-4 border-primary shadow"
                  >
                    <p className="font-semibold text-base">{exp}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {education && education.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Education
              </h2>
              {education.map((edu, i) => (
                <p key={i} className="p-3 bg-base-200 rounded-xl mb-2 shadow">
                  {edu}
                </p>
              ))}
            </section>
          )}

          {/* CERTIFICATIONS */}
          {certifications && certifications.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Certifications
              </h2>
              {certifications.map((cert, i) => (
                <p
                  key={i}
                  className="p-3 border-l-4 border-accent bg-base-200 rounded-xl mb-2 shadow"
                >
                  {cert}
                </p>
              ))}
            </section>
          )}

          {/* PROJECTS */}
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, i) => (
                  <div key={i} className="p-5 bg-base-200 rounded-xl shadow">
                    <p className="font-medium">{project}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* LANGUAGES */}
          {languages && languages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Languages
              </h2>
              <ul className="list-disc ml-5 text-sm space-y-1">
                {languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {/* INTERESTS */}
          {interests && interests.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3 border-b pb-2">
                Interests
              </h2>
              <ul className="list-disc ml-5 text-sm space-y-1">
                {interests.map((interest, i) => (
                  <li key={i}>{interest}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content,
          #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

Resume.propTypes = {
  data: PropTypes.shape({
    personalInformation: PropTypes.object,
    summary: PropTypes.string,
    skills: PropTypes.object,
    experience: PropTypes.array,
    education: PropTypes.array,
    certifications: PropTypes.array,
    projects: PropTypes.array,
    languages: PropTypes.array,
    interests: PropTypes.array,
  }),
};

