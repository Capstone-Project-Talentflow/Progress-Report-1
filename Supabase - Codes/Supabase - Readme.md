# Supabase Set up Scripts

Proj URL = https://onssghljexptdladoekw.supabase.co

The database in the supabase utilizes PostgreSQL.

## Requirements

```bash
pip install psycopg2-binary pdfplumber python-dotenv
```

CONNECTION_STRING = "postgresql://postgres.onssghljexptdladoekw:talentflow_123@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"

## supa_create.py

Creates all 15 TalentFlow tables in your Supabase PostgreSQL database. This will also be the basis code if ever any changes to the database is needed.


## supa_insert.ipynb

First part is config, it configurates which folder is the base directory and which resumes are to be parsed.
Second part is the parser, will be changed by Mostafa's OCR.
Third part is the connection script. It transfers the parsed code to the supabase postgres.


# Postgres Setup View

https://dbdiagram.io/d/697b30cabd82f5fce2006466

For easier viewing, you can check through supabase link or dbdiagram link.
