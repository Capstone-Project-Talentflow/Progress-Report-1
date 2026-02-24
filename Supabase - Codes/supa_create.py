import psycopg2
from psycopg2 import sql


CONN_STRING = "postgresql://postgres.onssghljexptdladoekw:talentflow_123@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"

TABLES = [
    ("t_applicant", """
        CREATE TABLE IF NOT EXISTS t_applicant (
            applicant_id    SERIAL PRIMARY KEY,
            app_first_name  VARCHAR(100),
            app_middle_name VARCHAR(100),
            app_last_name   VARCHAR(100),
            app_address     TEXT,
            app_city        VARCHAR(100),
            app_country     VARCHAR(100),
            app_mobile      VARCHAR(50),
            app_email       VARCHAR(150)
        );
    """),

    ("t_skills_dict", """
        CREATE TABLE IF NOT EXISTS t_skills_dict (
            skill_id        SERIAL PRIMARY KEY,
            skill_name      VARCHAR(150),
            skill_category  VARCHAR(100)
        );
    """),

    ("t_principal", """
        CREATE TABLE IF NOT EXISTS t_principal (
            principal_id             SERIAL PRIMARY KEY,
            company_name             VARCHAR(200),
            company_contact          VARCHAR(100),
            company_representative   VARCHAR(150),
            company_country          VARCHAR(100)
        );
    """),

    ("t_account", """
        CREATE TABLE IF NOT EXISTS t_account (
            account_id      SERIAL PRIMARY KEY,
            applicant_id    INT REFERENCES t_applicant(applicant_id),
            acc_username    VARCHAR(100),
            acc_password    VARCHAR(255),
            is_active       BOOLEAN DEFAULT TRUE
        );
    """),

    ("t_resume", """
        CREATE TABLE IF NOT EXISTS t_resume (
            resume_id           SERIAL PRIMARY KEY,
            applicant_id        INT REFERENCES t_applicant(applicant_id),
            resume_statement    TEXT,
            highest_edu         VARCHAR(100),
            total_years_exp     FLOAT,
            is_parsed           VARCHAR(20) DEFAULT 'false',
            last_updated        TIMESTAMP DEFAULT NOW()
        );
    """),

    ("t_experience", """
        CREATE TABLE IF NOT EXISTS t_experience (
            experience_id       SERIAL PRIMARY KEY,
            resume_id           INT REFERENCES t_resume(resume_id),
            exp_company         VARCHAR(200),
            exp_title           VARCHAR(150),
            exp_start_date      DATE,
            exp_end_date        DATE,
            exp_responsibilities TEXT
        );
    """),

    ("t_education", """
        CREATE TABLE IF NOT EXISTS t_education (
            education_id        SERIAL PRIMARY KEY,
            resume_id           INT REFERENCES t_resume(resume_id),
            edu_institution     VARCHAR(200),
            edu_level           VARCHAR(100),
            edu_study_field     VARCHAR(150),
            edu_grade           VARCHAR(50),
            edu_start_date      DATE,
            edu_end_date        DATE
        );
    """),

    ("t_resume_skills", """
        CREATE TABLE IF NOT EXISTS t_resume_skills (
            rs_id               SERIAL PRIMARY KEY,
            resume_id           INT REFERENCES t_resume(resume_id),
            skill_id            INT REFERENCES t_skills_dict(skill_id),
            source_id           INT,
            source_type         VARCHAR(100),
            years_of_exp        VARCHAR(50),
            proficiency_level   VARCHAR(50)
        );
    """),

    ("t_job_orders", """
        CREATE TABLE IF NOT EXISTS t_job_orders (
            jo_id               SERIAL PRIMARY KEY,
            principal_id        INT REFERENCES t_principal(principal_id),
            jo_date             DATE,
            jo_reference_number VARCHAR(100),
            is_active           BOOLEAN DEFAULT TRUE,
            is_posted           BOOLEAN DEFAULT FALSE
        );
    """),

    ("t_job_positions", """
        CREATE TABLE IF NOT EXISTS t_job_positions (
            position_id         SERIAL PRIMARY KEY,
            jo_id               INT REFERENCES t_job_orders(jo_id),
            job_name            VARCHAR(150),
            job_description     TEXT,
            job_requirements    TEXT,
            job_years           INT,
            job_type            VARCHAR(100),
            number_needed       INT,
            is_active           BOOLEAN DEFAULT TRUE
        );
    """),

    ("t_job_skills", """
        CREATE TABLE IF NOT EXISTS t_job_skills (
            js_id               SERIAL PRIMARY KEY,
            position_id         INT REFERENCES t_job_positions(position_id),
            skill_id            INT REFERENCES t_skills_dict(skill_id),
            importance_weight   FLOAT
        );
    """),

    ("t_applications", """
        CREATE TABLE IF NOT EXISTS t_applications (
            application_id  SERIAL PRIMARY KEY,
            position_id     INT REFERENCES t_job_positions(position_id),
            applicant_id    INT REFERENCES t_applicant(applicant_id),
            resume_id       INT REFERENCES t_resume(resume_id),
            ai_score        FLOAT,
            ai_grade        VARCHAR(10),
            current_stage   VARCHAR(100)
        );
    """),

    ("t_application_history", """
        CREATE TABLE IF NOT EXISTS t_application_history (
            history_id      SERIAL PRIMARY KEY,
            application_id  INT REFERENCES t_applications(application_id),
            status_reached  VARCHAR(100),
            timestamp       TIMESTAMP DEFAULT NOW()
        );
    """),

    ("t_processing", """
        CREATE TABLE IF NOT EXISTS t_processing (
            processing_id   SERIAL PRIMARY KEY,
            application_id  INT REFERENCES t_applications(application_id),
            applicant_id    INT REFERENCES t_applicant(applicant_id),
            medical_status  VARCHAR(100),
            visa_status     VARCHAR(100),
            contract_signed BOOLEAN DEFAULT FALSE,
            flight_date     DATE,
            current_stage   VARCHAR(100)
        );
    """),

    ("t_deployed", """
        CREATE TABLE IF NOT EXISTS t_deployed (
            deployment_id   SERIAL PRIMARY KEY,
            processing_id   INT REFERENCES t_processing(processing_id),
            current_status  VARCHAR(100)
        );
    """),
]


def create_schema():
    try:
        conn = psycopg2.connect(CONN_STRING)
        conn.autocommit = True
        cursor = conn.cursor()
        print("Connected")

        for table_name, ddl in TABLES:
            try:
                cursor.execute(ddl)
                print(f"OK: {table_name}")
            except Exception as e:
                print(f"FAIL: {table_name}: {e}")
        
        cursor.close()
        conn.close()

    except Exception as e:
        print(f"Connection failed: {e}")


if __name__ == "__main__":
    create_schema()
