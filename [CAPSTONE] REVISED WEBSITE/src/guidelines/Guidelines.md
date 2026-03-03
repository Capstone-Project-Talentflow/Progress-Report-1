PROJECT OVERVIEW

Brand Colors
Primary Yellow: #ffca1a - Buttons, highlights, active states
Primary Green: #17960b - Headers, accents, CTAs
Dark Green: #0d5e06 - Gradients, hover states

Typography
Font Family: Inter (sans-serif)
Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
Responsive Breakpoints
Mobile: < 640px (sm)
Tablet: 640px - 1024px (md/lg)
Desktop: > 1024px (xl)

FILE STRUCTURE AND GUIDELINES

ROOT FILES

/App.tsx (Main Application Entry)
Main application logic and routing

Key Features:

State management for navigation (currentPage)

Login/authentication state (isLoggedIn)

Job save/apply functionality

Page routing logic

Pages Available:

jobs (Job Portal - Homepage)

jobsforyou (Personalized Jobs)

resume (Resume Builder)

dashboard (Applicant Dashboard)

about (About Us)

applications (Application Progress)

profile (Profile Settings)

apply (Job Application Form)

savedjobs (Saved Jobs)

Authentication Flow: Shows LoginPage if not logged in, otherwise shows full app

ChatBot: Only visible on job portal homepage

CORE COMPONENTS (/components/)

1. /components/Header.tsx
2. 
Navigation header with logo and menu

3. /components/Footer.tsx
4. 
Website footer with company information

5. /components/LoginPage.tsx
6. 
Landing/login page (first page users see)

Features:

Login form

Sign-up option

Brand identity display

Authentication handling

8. /components/JobPortal.tsx
   
Main job listings page (Homepage when logged in)

Key Features:

Hero Section: Green gradient with search functionality

Search Filters:

Job keyword search

Location search

Search type toggle (Any word / Exact word)

Filter Buttons (Yellow when active):

Landbased

No Placement Fee

High School Graduate

No Work Experience


5. /components/JobsForYou.tsx

Personalized job recommendations

Features:

Curated job listings

Save job functionality

Apply button integration


6. /components/SavedJobs.tsx
   
User's saved/bookmarked job

Features:

List of saved jobs

Remove from saved

Quick apply option

8. /components/JobApplication.tsx
   
Purpose: Job application form

Features:

Apply for specific positions

Pre-filled contact details (Naomi Cuerdo, 09345234576)

"Use My Saved Resume" option

Application summary panel

Form fields: Full Name, Email, Phone Number

RESUME BUILDER COMPONENTS

9. /components/ResumeBuilder.tsx
    
Purpose: 4-step resume builder/job application form

Features:

Step 1: Personal Information

Step 2: Work Experience

Step 3: Education

Step 4: Skills & Certifications

Dual Purpose: Build resume + Submit job application

Preview System: Dynamic multi-page preview (auto-expands based on content)

10. /components/ResumePreview.tsx
Purpose: Real-time resume preview component

Features:

Live preview as user types

Multi-page layout (automatic expansion)

Professional formatting

Print-ready design

11. /components/PersonalInfoForm.tsx

Purpose: Personal information form component

Used In: Resume Builder Step 1

12. /components/StepIndicator.tsx
    
Purpose: Visual step progress indicator

Used In: Resume Builder navigation

 
DASHBOARD COMPONENTS

13. /components/ApplicantDashboard.tsx
    
Applicant dashboard with analytics

Features:

Resume grading system

Company recommendations

Application statistics

Profile insights

Access: Requires login

14. /components/Dashboard.tsx
    
Purpose: General dashboard wrapper/template

Features: Layout structure for dashboard pages

15. /components/ApplicationProgress.tsx
    
Track job application status

Features:

Application timeline

Status updates

Progress tracking

16. /components/ProfileSettings.tsx
    
User profile management

Features:

Edit personal information

Account settings

Privacy controls

INFORMATION PAGES

18. /components/AboutUs.tsx

Purpose: Company information page

Features:

Company history

Mission statement with updated motto

Team information

Values and services

Access: Requires login

UTILITY COMPONENTS

19. /components/ChatBot.tsx
    
Purpose: Customer support chatbot

Location: Only visible on Job Portal homepage

Features:

Automated responses

Help with navigation

Job search assistance

20. /components/SignUpPrompt.tsx
    
Purpose: Prompt users to create account

Used For: Blocking protected pages

21. /components/Sidebar.tsx
    
Purpose: Navigation sidebar (if applicable)

Features: Alternative navigation layout

AUTHENTICATION COMPONENTS

22. /components/AuthPage.tsx

Authentication wrapper/handle

Features: Login/signup logic


FIGMA IMPORTS (/imports/)

SVG Assets

/imports/svg-3nnvnkmfcx.ts - Icons for Job Portal

/imports/svg-65zdysylli.ts - Additional icons

/imports/svg-f640k20hpn.ts - More graphics

Figma Components

/imports/LandingPage.tsx - Figma landing page design

/imports/ResumeBuilder-4029-658.tsx - Figma resume builder design

/imports/ResumeBuilderPersonal.tsx - Personal info design

Protected Image Component
/components/figma/ImageWithFallback.tsx - Image handler (DO NOT MODIFY)





