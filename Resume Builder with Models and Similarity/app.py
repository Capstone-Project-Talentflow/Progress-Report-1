from flask import Flask, render_template, request, jsonify
from datetime import datetime
import json
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import re
from flask_cors import CORS

app = Flask(__name__, template_folder='html', static_folder='static')
app.secret_key = 'your-secret-key-here'
CORS(app)  # Must come AFTER app is defined

model = SentenceTransformer("all-MiniLM-L6-v2")

# In-memory storage (in production, use a database)
resume_storage = {}

job_desc_temp = job_desc = {
    "job_posting": {
        "job_id": "DATA_ANALYST_001",
        "created_at": "2026-02-19T16:10:00.000000",
        "job_title": "Data Analyst",
        "company": "Insight Analytics Corp",
        "location": "Manila, Philippines",
        "employment_type": "Full-Time",
        "job_description": "We are seeking a detail-oriented and analytical Data Analyst to collect, process, and analyze structured and unstructured datasets to support business decision-making. The candidate will be responsible for data cleaning, statistical analysis, dashboard creation, reporting insights, and automating reporting workflows.",
        "responsibilities": [
            "Collect and clean structured and unstructured data",
            "Analyze datasets using Python and SQL",
            "Build dashboards using Power BI or Tableau",
            "Perform exploratory data analysis (EDA)",
            "Present insights to stakeholders",
            "Automate recurring reports"
        ],
        "required_skills": {
            "technical": [
                "Python",
                "Pandas",
                "NumPy",
                "SQL",
                "Power BI",
                "Excel",
                "Data Cleaning",
                "Data Visualization",
                "Basic Statistics",
                "Machine Learning Fundamentals"
            ],
            "soft": [
                "Analytical Thinking",
                "Attention to Detail",
                "Problem Solving",
                "Communication Skills",
                "Time Management"
            ]
        },
        "experience_required": "1-3 years in data analysis or related field",
        "education_required": "Bachelor's degree in Information Technology, Computer Science, Statistics, or related field"
    }
}


def clean_text(text):
    if not text:
        return ""
    text = text.replace("\n", " ").replace("\r", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def flatten_resume(resume_json):
    resume = list(resume_json["resume_storage"].values())[0]
    sections = []

    for edu in resume.get("education", []):
        edu_text = f"{edu.get('degree', '')} from {edu.get('school', '')}. {edu.get('info', '')}"
        sections.append(clean_text(edu_text))

    for exp in resume.get("experiences", []):
        exp_text = f"{exp.get('title', '')} at {exp.get('company', '')}. {exp.get('description', '')}"
        sections.append(clean_text(exp_text))

    skills = resume.get("skills", {})
    sections.append(f"Technical Skills: {clean_text(skills.get('technical', ''))}")
    sections.append(f"Soft Skills: {clean_text(skills.get('soft', ''))}")
    sections.append(f"Interests: {clean_text(skills.get('interests', ''))}")

    return clean_text(" ".join(sections))


def flatten_job(job_json):
    job = job_json["job_posting"]
    sections = []

    sections.append(job.get("job_title", ""))
    sections.append(job.get("job_description", ""))

    responsibilities = job.get("responsibilities", [])
    sections.append("Responsibilities: " + " ".join(responsibilities))

    technical = job.get("required_skills", {}).get("technical", [])
    soft = job.get("required_skills", {}).get("soft", [])

    sections.append("Technical Skills Required: " + " ".join(technical))
    sections.append("Soft Skills Required: " + " ".join(soft))

    return " ".join(sections)


def get_new_resume_id():
    return datetime.now().strftime('%Y%m%d%H%M%S%f')


@app.route('/get_resume_id', methods=['GET'])
def get_resume_id():
    resume_id = get_new_resume_id()
    resume_storage[resume_id] = {
        'resume_id': resume_id,
        'created_at': datetime.now().isoformat(),
        'personal_info': {
            'first_name': '',
            'last_name': '',
            'email': '',
            'phone': '',
            'address': '',
            'city': '',
            'country': ''
        },
        'experiences': [],
        'education': [],
        'skills': {
            'technical': '',
            'soft': '',
            'interests': ''
        }
    }
    return jsonify({'resume_id': resume_id})





@app.route('/save_resume', methods=['POST'])
def save_resume():
    try:
        data = request.get_json(silent=True)
        if not data:
            return jsonify({'success': False, 'message': 'Invalid or missing JSON'}), 400

        resume_id = data.get('resume_id')
        step = data.get('step')

        if not resume_id or resume_id not in resume_storage:
            return jsonify({'success': False, 'message': 'Invalid resume ID'}), 400

        resume = resume_storage[resume_id]

        if step == 1:
            resume['personal_info'] = {
                'first_name': data.get('firstName', ''),
                'last_name': data.get('lastName', ''),
                'email': data.get('email', ''),
                'phone': data.get('phone', ''),
                'address': data.get('address', ''),
                'city': data.get('city', ''),
                'country': data.get('country', '')
            }
        elif step == 2:
            resume['experiences'] = data.get('experiences', [])
        elif step == 3:
            resume['education'] = data.get('education', [])
        elif step == 4:
            resume['skills'] = {
                'technical': data.get('technicalSkills', ''),
                'soft': data.get('softSkills', ''),
                'interests': data.get('interests', '')
            }

        resume['updated_at'] = datetime.now().isoformat()

        return jsonify({
            'success': True,
            'message': 'Resume saved successfully',
            'resume_data': resume
        })

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/get_resume/<resume_id>', methods=['GET'])
def get_resume(resume_id):
    try:
        if resume_id not in resume_storage:
            return jsonify({'success': False, 'message': 'Resume not found'}), 404

        return jsonify({
            'success': True,
            'resume_data': resume_storage[resume_id]
        })

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({
        'resume_storage': resume_storage
    })


@app.route('/similarity', methods=['GET'])
def similarity():
    try:
        if not resume_storage:
            return jsonify({'success': False, 'message': 'No resume found'}), 400

        resume = {'resume_storage': resume_storage}

        job_text = flatten_job(job_desc_temp)
        resume_text = flatten_resume(resume)

        resume_embedding = model.encode(resume_text)
        job_embedding = model.encode(job_text)

        score = cosine_similarity([resume_embedding], [job_embedding])[0][0]

        return jsonify({
            'success': True,
            'similarity_score': round(float(score), 4)
        })

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)