import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f5f5f5;
    min-height: 100vh;
    color: #000;
  }

  .rb-header {
    background: white;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .rb-header h1 { color: #48ca20; font-size: 2em; }

  .rb-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    background: #48ca20;
    font-size: 1.5em;
    padding: 10px;
    color: white;
  }

  .rb-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1600px;
    margin: 0 auto;
    gap: 20px;
    padding: 20px;
    height: calc(100vh - 160px);
  }

  .rb-forms {
    background: white;
    overflow-y: auto;
    max-height: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .rb-forms::-webkit-scrollbar { width: 10px; }
  .rb-forms::-webkit-scrollbar-track { background: #f1f1f1; }
  .rb-forms::-webkit-scrollbar-thumb { background: rgb(97,96,96); border-radius: 5px; }
  .rb-forms::-webkit-scrollbar-thumb:hover { background: #3ba318; }

  .rb-forms-input {
    background: white;
    padding: 40px;
    border-top: 20px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    border-bottom: 20px solid #f5f5f5;
  }

  .rb-forms h2 {
    background: rgb(11,209,24);
    padding: 10px;
    color: white;
    font-size: 1.5em;
  }

  .rb-form-group { margin-bottom: 20px; }

  .rb-form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333 !important;
  }

  /* Explicit light styling to prevent dark-mode or Vite default overrides */
  .rb-form-group input,
  .rb-form-group textarea,
  .rb-form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1em;
    background-color: #ffffff !important;
    color: #000000 !important;
  }

  .rb-form-group textarea {
    min-height: 100px;
    resize: vertical;
  }

  .rb-button-des {
    background: #48ca20;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin: 20px 40px;
  }

  .rb-button-des:hover { background: #3ba318; }

  .rb-remove-button {
    background: #ff4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }

  .rb-remove-button:hover { background: #cc0000; }

  .rb-next-steps {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 15px;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    text-align: center;
    z-index: 1000;
  }

  .rb-next-button, .rb-back-button {
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    margin: 0 10px;
  }

  .rb-next-button { background: #48ca20; }
  .rb-next-button:hover { background: #3ba318; }
  .rb-back-button { background: #6c757d; }
  .rb-back-button:hover { background: #5a6268; }
  .rb-back-button:disabled { background: #ccc; cursor: not-allowed; }

  /* Preview panel */
  .rb-preview-container {
    background: #525659;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .rb-preview-container::-webkit-scrollbar { width: 10px; }
  .rb-preview-container::-webkit-scrollbar-track { background: #3a3d40; }
  .rb-preview-container::-webkit-scrollbar-thumb { background: #fafcfa; border-radius: 5px; }

  /* A4 shell: 794x1123px (A4 at 96dpi). overflow:hidden clips each page slice. */
  .rb-page-shell {
    width: 794px;
    height: 1123px;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
  }

  /* Full content block positioned inside each shell */
  .rb-page-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 794px;
    padding: 75px;          /* ~20mm at 96dpi */
    box-sizing: border-box;
    font-size: 11pt;
    line-height: 1.5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #000 !important;
    background: white;
  }

  /* Gap between pages */
  .rb-page-gap {
    height: 20px;
    width: 100%;
    flex-shrink: 0;
  }

  /* Off-screen div used to measure total content height */
  .rb-measure {
    position: fixed;
    left: -9999px;
    top: 0;
    visibility: hidden;
    pointer-events: none;
    width: 644px;           /* 794 - 75*2 = 644px usable width */
    font-size: 11pt;
    line-height: 1.5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #000;
  }

  /* ── Resume content styles ── */
  .rb-page-content * { color: inherit; }

  .rb-resume-name {
    font-size: 14pt;
    font-weight: 700;
    color: #000 !important;
    border-bottom: 2px solid #000;
    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 6px;
  }

  .rb-contact-info {
    color: #333 !important;
    margin-bottom: 18px;
    line-height: 1.6;
    font-size: 10pt;
    text-align: center;
  }

  .rb-resume-section { margin-bottom: 16px; }

  .rb-section-title {
    font-size: 11pt;
    font-weight: 700;
    color: #000 !important;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
    margin-bottom: 10px;
  }

  .rb-resume-item { margin-bottom: 12px; }

  .rb-resume-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .rb-resume-row .r-left {
    font-weight: 600;
    font-size: 11pt;
    color: #2c3e50 !important;
  }

  .rb-resume-row .r-right {
    font-size: 9pt;
    color: #777 !important;
    font-style: italic;
  }

  .rb-subtitle-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
  }

  .rb-subtitle-row .r-left {
    color: #555 !important;
    font-style: italic;
    font-size: 10pt;
  }

  .rb-subtitle-row .r-right {
    color: #777 !important;
    font-size: 9pt;
  }

  .rb-resume-item ul { margin: 5px 0 0 18px; padding: 0; }

  .rb-resume-item li {
    margin-bottom: 4px;
    line-height: 1.5;
    font-size: 10pt;
    color: #444 !important;
  }

  .rb-skills-block { display: flex; flex-direction: column; gap: 6px; }

  .rb-skills-row { display: flex; gap: 8px; font-size: 10pt; color: #000 !important; }

  .rb-skills-label {
    font-weight: 700;
    font-size: 10pt;
    white-space: nowrap;
    color: #000 !important;
  }

  @media print {
    .rb-page-shell { box-shadow: none; page-break-after: always; }
  }
`;

const FLASK_URL = 'http://127.0.0.1:5000';
const PROGRESS_LABELS = ["30% Progress", "60% Progress", "70% Progress", "90% Progress"];
const BUTTON_TEXTS = [
  "Next: Employment History →",
  "Next: Education History →",
  "Next: Skills & Interests →",
  "Finish & Download"
];

const PAGE_W = 794;   // A4 width at 96dpi
const PAGE_H = 1123;  // A4 height at 96dpi
const PADDING = 75;   // ~20mm at 96dpi
const USABLE_H = PAGE_H - PADDING * 2; // content height per page

// ── Resume content ─────────────────────────────────────────────────────────────
function ResumeContent({ personal, experiences, education, skills }) {
  const fullName = [personal.firstName, personal.lastName].filter(Boolean).join(" ") || "John Doe";
  const locationParts = [personal.address, personal.city, personal.country].filter(Boolean);
  const contactParts = [locationParts.join(", "), personal.email, personal.phone].filter(Boolean);
  const contactLine = contactParts.length
    ? contactParts.join(" • ")
    : "123 Main Street, New York, NY, United States • john.doe@email.com • (555) 123-4567";

  const showExp = experiences.length > 0 && experiences.some(e => e.title || e.company);
  const showEdu = education.length > 0 && education.some(e => e.school || e.degree);
  const showSkills = skills.technicalSkills || skills.softSkills || skills.interests;

  return (
    <>
      <div className="rb-resume-name">{fullName}</div>
      <div className="rb-contact-info">{contactLine}</div>

      <div className="rb-resume-section">
        <div className="rb-section-title">Experience</div>
        {!showExp ? (
          <>
            <div className="rb-resume-item">
              <div className="rb-resume-row"><span className="r-left">incididunt ut labore</span><span className="r-right">New York, NY</span></div>
              <div className="rb-subtitle-row"><span className="r-left">magna aliqua</span><span className="r-right">01/2020 – Present</span></div>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div className="rb-resume-item">
              <div className="rb-resume-row"><span className="r-left">eiusmod tempor</span><span className="r-right">New York, NY</span></div>
              <div className="rb-subtitle-row"><span className="r-left">aliquip</span><span className="r-right">01/2018 – 12/2019</span></div>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li>
              </ul>
            </div>
          </>
        ) : (
          experiences.map((exp, idx) => {
            if (!exp.title && !exp.company) return null;
            const bullets = (exp.description || "").split("\n").filter(l => l.trim());
            return (
              <div className="rb-resume-item" key={idx}>
                <div className="rb-resume-row">
                  <span className="r-left">{exp.title}</span>
                  <span className="r-right">{exp.location}</span>
                </div>
                <div className="rb-subtitle-row">
                  <span className="r-left">{exp.company}</span>
                  <span className="r-right">{exp.startDate}{exp.startDate && exp.endDate ? " – " : ""}{exp.endDate}</span>
                </div>
                {bullets.length > 0 && <ul>{bullets.map((b, i) => <li key={i}>{b.trim()}</li>)}</ul>}
              </div>
            );
          })
        )}
      </div>

      <div className="rb-resume-section">
        <div className="rb-section-title">Education</div>
        {!showEdu ? (
          <div className="rb-resume-item">
            <div className="rb-resume-row"><span className="r-left">iste natus</span><span className="r-right">New York, NY</span></div>
            <div className="rb-subtitle-row"><span className="r-left">accusantium</span><span className="r-right">2020</span></div>
            <ul><li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li></ul>
          </div>
        ) : (
          education.map((edu, idx) => {
            if (!edu.school && !edu.degree) return null;
            const bullets = (edu.info || "").split("\n").filter(l => l.trim());
            return (
              <div className="rb-resume-item" key={idx}>
                <div className="rb-resume-row"><span className="r-left">{edu.school}</span><span className="r-right">{edu.location}</span></div>
                <div className="rb-subtitle-row"><span className="r-left">{edu.degree}</span><span className="r-right">{edu.year}</span></div>
                {bullets.length > 0 && <ul>{bullets.map((b, i) => <li key={i}>{b.trim()}</li>)}</ul>}
              </div>
            );
          })
        )}
      </div>

      <div className="rb-resume-section">
        <div className="rb-section-title">Skills & Interests</div>
        {!showSkills ? (
          <div className="rb-skills-block">
            <div className="rb-skills-row"><span className="rb-skills-label">Technical Skills:</span><span>Masonry, Brickwork, Plastering</span></div>
            <div className="rb-skills-row"><span className="rb-skills-label">Soft Skills:</span><span>Communication, Teamwork</span></div>
            <div className="rb-skills-row"><span className="rb-skills-label">Interests:</span><span>Reading, Puzzles</span></div>
          </div>
        ) : (
          <div className="rb-skills-block">
            {skills.technicalSkills && <div className="rb-skills-row"><span className="rb-skills-label">Technical Skills:</span><span>{skills.technicalSkills}</span></div>}
            {skills.softSkills && <div className="rb-skills-row"><span className="rb-skills-label">Soft Skills:</span><span>{skills.softSkills}</span></div>}
            {skills.interests && <div className="rb-skills-row"><span className="rb-skills-label">Interests:</span><span>{skills.interests}</span></div>}
          </div>
        )}
      </div>
    </>
  );
}

// ── Paginated preview ─────────────────────────────────────────────────────────
function ResumePreview({ personal, experiences, education, skills }) {
  const measureRef = useRef(null);
  const containerRef = useRef(null);
  const [pageCount, setPageCount] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (measureRef.current) {
      const h = measureRef.current.scrollHeight;
      setPageCount(Math.max(1, Math.ceil(h / USABLE_H)));
    }
    if (containerRef.current) {
      const available = containerRef.current.offsetWidth - 40;
      setScale(Math.min(1, available / PAGE_W));
    }
  });

  const scaledPageH = PAGE_H * scale;

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* Hidden measurement div */}
      <div className="rb-measure" ref={measureRef}>
        <ResumeContent personal={personal} experiences={experiences} education={education} skills={skills} />
      </div>

      {Array.from({ length: pageCount }).map((_, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          {/* Gap between pages */}
          {i > 0 && <div style={{ height: '20px' }} />}

          {/* Scaled page wrapper */}
          <div style={{
            width: `${PAGE_W}px`,
            height: `${PAGE_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            // Pull up by the space that scaling removes
            marginBottom: `${scaledPageH - PAGE_H}px`,
          }}>
            <div className="rb-page-shell">
              <div
                className="rb-page-content"
                // Each page shifts the full content block upward by i full page heights.
                // Since padding is INSIDE rb-page-content, the top margin is always preserved.
                style={{ transform: `translateY(-${i * PAGE_H}px)` }}
                {...(i === 0 ? { id: "resumePreview" } : {})}
              >
                <ResumeContent
                  personal={personal}
                  experiences={experiences}
                  education={education}
                  skills={skills}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Form components ────────────────────────────────────────────────────────────
function PersonalDetails({ data, onChange }) {
  const fields = [
    { id: "firstName", label: "First Name", placeholder: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", placeholder: "Last Name", type: "text" },
    { id: "address", label: "Address", placeholder: "Street Address", type: "text" },
    { id: "city", label: "City, State", placeholder: "City, State", type: "text" },
    { id: "country", label: "Country", placeholder: "Country", type: "text" },
    { id: "email", label: "Email", placeholder: "email@example.com", type: "email" },
    { id: "phone", label: "Phone", placeholder: "Phone Number", type: "tel" },
  ];
  return (
    <div className="rb-forms-input">
      {fields.map(f => (
        <div className="rb-form-group" key={f.id}>
          <label>{f.label}</label>
          <input type={f.type} placeholder={f.placeholder} value={data[f.id] || ""} onChange={e => onChange(f.id, e.target.value)} />
        </div>
      ))}
    </div>
  );
}

function ExperienceForm({ experiences, onAdd, onRemove, onChange }) {
  return (
    <div>
      {experiences.map((exp, idx) => (
        <div className="rb-forms-input" key={idx}>
          {[
            { label: "Job Title", field: "title", placeholder: "Job Title", type: "input" },
            { label: "Company", field: "company", placeholder: "Company Name", type: "input" },
            { label: "Location", field: "location", placeholder: "City, State", type: "input" },
            { label: "Start Date", field: "startDate", placeholder: "MM/YYYY", type: "input" },
            { label: "End Date", field: "endDate", placeholder: "MM/YYYY or Present", type: "input" },
            { label: "Description", field: "description", placeholder: "Enter each bullet point on a new line", type: "textarea" },
          ].map(f => (
            <div className="rb-form-group" key={f.field}>
              <label>{f.label}</label>
              {f.type === "textarea"
                ? <textarea placeholder={f.placeholder} value={exp[f.field] || ""} onChange={e => onChange(idx, f.field, e.target.value)} />
                : <input type="text" placeholder={f.placeholder} value={exp[f.field] || ""} onChange={e => onChange(idx, f.field, e.target.value)} />}
            </div>
          ))}
          <button className="rb-remove-button" onClick={() => onRemove(idx)}>Remove</button>
        </div>
      ))}
      <button className="rb-button-des" onClick={onAdd}>+ Add Experience</button>
    </div>
  );
}

function EducationForm({ education, onAdd, onRemove, onChange }) {
  return (
    <div>
      {education.map((edu, idx) => (
        <div className="rb-forms-input" key={idx}>
          {[
            { label: "School/University", field: "school", placeholder: "School Name", type: "input" },
            { label: "Degree", field: "degree", placeholder: "Degree", type: "input" },
            { label: "Location", field: "location", placeholder: "City, State", type: "input" },
            { label: "Graduation Year", field: "year", placeholder: "YYYY", type: "input" },
            { label: "Additional Info", field: "info", placeholder: "Enter each item on a new line", type: "textarea" },
          ].map(f => (
            <div className="rb-form-group" key={f.field}>
              <label>{f.label}</label>
              {f.type === "textarea"
                ? <textarea placeholder={f.placeholder} value={edu[f.field] || ""} onChange={e => onChange(idx, f.field, e.target.value)} />
                : <input type="text" placeholder={f.placeholder} value={edu[f.field] || ""} onChange={e => onChange(idx, f.field, e.target.value)} />}
            </div>
          ))}
          <button className="rb-remove-button" onClick={() => onRemove(idx)}>Remove</button>
        </div>
      ))}
      <button className="rb-button-des" onClick={onAdd}>+ Add Education</button>
    </div>
  );
}

function SkillsForm({ data, onChange }) {
  return (
    <div className="rb-forms-input">
      <div className="rb-form-group">
        <label>Technical Skills</label>
        <textarea placeholder="Enter your technical skills (e.g. Masonry, Brickwork)" value={data.technicalSkills || ""} onChange={e => onChange("technicalSkills", e.target.value)} />
      </div>
      <div className="rb-form-group">
        <label>Soft Skills</label>
        <textarea placeholder="Enter your soft skills (e.g. English Proficiency, Critical Thinker)" value={data.softSkills || ""} onChange={e => onChange("softSkills", e.target.value)} />
      </div>
      <div className="rb-form-group">
        <label>Interests</label>
        <textarea placeholder="Enter your interests (e.g. Reading, Puzzles)" value={data.interests || ""} onChange={e => onChange("interests", e.target.value)} />
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function ResumeBuilder() {
  const [resumeId, setResumeId] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [personal, setPersonal] = useState({ firstName: "", lastName: "", address: "", city: "", country: "", email: "", phone: "" });
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState({ technicalSkills: "", softSkills: "", interests: "" });

  useEffect(() => {
    fetch(`${FLASK_URL}/get_resume_id`)
      .then(res => res.json())
      .then(data => setResumeId(data.resume_id))
      .catch(err => console.error('Could not connect to Flask:', err));
  }, []);

  const handlePersonalChange = (f, v) => setPersonal(p => ({ ...p, [f]: v }));
  const handleSkillsChange = (f, v) => setSkills(s => ({ ...s, [f]: v }));
  const addExperience = () => setExperiences(e => [...e, { title: "", company: "", location: "", startDate: "", endDate: "", description: "" }]);
  const removeExperience = idx => setExperiences(e => e.filter((_, i) => i !== idx));
  const changeExperience = (idx, f, v) => setExperiences(e => e.map((item, i) => i === idx ? { ...item, [f]: v } : item));
  const addEducation = () => setEducation(e => [...e, { school: "", degree: "", location: "", year: "", info: "" }]);
  const removeEducation = idx => setEducation(e => e.filter((_, i) => i !== idx));
  const changeEducation = (idx, f, v) => setEducation(e => e.map((item, i) => i === idx ? { ...item, [f]: v } : item));

  const downloadPDF = () => {
    const element = document.getElementById("resumePreview");
    const firstName = personal.firstName || "Resume";
    const lastName = personal.lastName || "";
    const filename = `${firstName}_${lastName}_Resume.pdf`.replace(/\s+/g, "_");
    if (window.html2pdf) {
      window.html2pdf().set({
        margin: 20,
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      }).from(element).save();
    } else {
      alert("PDF library not loaded.");
    }
  };

  const saveCurrentStep = async (step) => {
    let data = { resume_id: resumeId, step };
    if (step === 1) data = { ...data, ...personal };
    else if (step === 2) data.experiences = experiences;
    else if (step === 3) data.education = education;
    else if (step === 4) { data.technicalSkills = skills.technicalSkills; data.softSkills = skills.softSkills; data.interests = skills.interests; }
    try {
      const res = await fetch(`${FLASK_URL}/save_resume`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!result.success) console.error('Save failed:', result.message);
    } catch (err) {
      console.error('Error saving:', err);
    }
  };

  const nextStep = async () => {
    await saveCurrentStep(currentStep);
    if (currentStep < 4) setCurrentStep(s => s + 1);
    else { alert("Resume is downloading!"); downloadPDF(); }
  };

  const previousStep = async () => {
    if (currentStep > 1) { await saveCurrentStep(currentStep); setCurrentStep(s => s - 1); }
  };

  const stepTitles = ["Personal Details", "Employment History", "Education History", "Skills & Interests"];

  return (
    <>
      <style>{styles}</style>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

      <div className="rb-header"><h1>Resume Builder</h1></div>

      <div className="rb-container">
        <div className="rb-forms">
          <span className="rb-progress">{PROGRESS_LABELS[currentStep - 1]}</span>
          <h2>{stepTitles[currentStep - 1]}</h2>
          {currentStep === 1 && <PersonalDetails data={personal} onChange={handlePersonalChange} />}
          {currentStep === 2 && <ExperienceForm experiences={experiences} onAdd={addExperience} onRemove={removeExperience} onChange={changeExperience} />}
          {currentStep === 3 && <EducationForm education={education} onAdd={addEducation} onRemove={removeEducation} onChange={changeEducation} />}
          {currentStep === 4 && <SkillsForm data={skills} onChange={handleSkillsChange} />}
        </div>

        <div className="rb-preview-container">
          <ResumePreview personal={personal} experiences={experiences} education={education} skills={skills} />
        </div>
      </div>

      <div className="rb-next-steps">
        <button className="rb-back-button" disabled={currentStep === 1} onClick={previousStep} style={{ opacity: currentStep === 1 ? 0.5 : 1 }}>← Back</button>
        <button className="rb-next-button" onClick={nextStep}>{BUTTON_TEXTS[currentStep - 1]}</button>
      </div>
    </>
  );
}