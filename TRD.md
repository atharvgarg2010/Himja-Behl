# TRD.md

# HIMJA BEHL — TECHNICAL REQUIREMENTS DOCUMENT

## 1. Project Overview

### Project Name
Himja Behl — Luxury Wedding Styling Website

### Project Type
Premium personal-brand / service website with:
- Editorial portfolio
- Client journey stories
- Lead-generation form
- Google Sheets lead storage
- Email notifications
- WhatsApp conversion
- Lightweight AI-powered personalized "Himja Edit"

### Primary Objective
The website exists primarily to:
1. Present Himja Behl as a premium wedding fashion stylist.
2. Establish trust through her story, work and client journeys.
3. Explain her styling process.
4. Capture qualified wedding-styling leads.
5. Give visitors a memorable personalized experience through the "Himja Edit".
6. Make it extremely easy for a potential client to contact Himja.

### Secondary Objective
Create a premium digital brand asset that can grow with Himja's styling business.

---

## 2. Business Context

Himja Behl is a wedding fashion stylist.
Her work focuses on styling:
- Brides
- Grooms
- Close family members
- Wedding wardrobes
- Multiple wedding functions
- Personalised occasion-specific looks

She is NOT a wedding décor planner.
The website must therefore communicate:
**fashion styling + wardrobe curation + personal attention + luxury + wedding expertise**
rather than wedding planning or décor.

---

## 3. Core User Journey

The ideal visitor journey is:

```text
LANDING
   ↓
UNDERSTAND HIMJA
   ↓
SEE HER WORK
   ↓
READ CLIENT JOURNEYS
   ↓
UNDERSTAND HER PROCESS
   ↓
START THE HIMJA EDIT
   ↓
SUBMIT DETAILS
   ↓
RECEIVE PERSONALIZED STYLE DIRECTION
   ↓
ENQUIRE / WHATSAPP HIMJA
```

The website should naturally guide users through this journey without feeling like a hard-selling funnel.

---

## 4. Technology Stack

### Frontend
- Next.js
- TypeScript
- React
- Tailwind CSS

Use the latest stable versions compatible with the project environment.

### Animation
Use Motion / Framer Motion where appropriate.
Animation must remain subtle and editorial.

### Forms
- React Hook Form
- Zod

Use client-side validation for UX and server-side validation for security.

### Lead Storage
Google Sheets

Do NOT introduce:
- Supabase
- Firebase
- MongoDB
- PostgreSQL
- MySQL
- Custom database infrastructure
for the current version.

Google Sheets is the source of truth for leads.

---

## 5. Lead Storage Architecture

Preferred architecture:
```text
Browser
   ↓
Next.js form
   ↓
Next.js server endpoint
   ↓
Google Apps Script Web App
   ↓
Google Sheet
```

The browser must NOT directly contain Google credentials.
The Google Sheet should not be publicly writable.

---

## 6. Google Sheet Requirements

Create/expect a structured Google Sheet with a primary Leads sheet.
Suggested columns:
- Timestamp
- Lead ID
- Name
- Email
- Phone
- Styling For
- Functions
- Wedding Date
- Location
- Preferred Style
- Preferred Colours
- Inspiration
- Budget
- Additional Notes
- Style Archetype
- Style Edit
- Lead Status
- Source

### Lead Status
Default: New

Possible statuses:
- New
- Contacted
- Consultation
- Converted
- Closed
- Not Interested

The website does not need an admin dashboard for managing this.
Himja can manage leads directly in Google Sheets.

---

## 7. Lead ID

Every lead should receive a unique ID.
Example: `HB-20260915-001`
The exact generation mechanism can be implemented server-side.
Do not use email or phone number as the unique identifier.

---

## 8. Timestamp

Every lead must automatically receive:
- Submission timestamp
- Appropriate timezone (Use India Standard Time where appropriate)

The timestamp should be generated server-side where possible.
Do not trust the client-provided timestamp.

---

## 9. Homepage Architecture

The homepage must contain the following sections in this order:
1. Navbar
2. Hero
3. Himja's Story
4. Editorial Scroller
5. Client Journeys
6. Styling Process
7. The Himja Edit
8. Footer

The exact visual composition can evolve during design implementation, but the information hierarchy should remain.

---

## 10. Navbar

### Behaviour
Navbar should initially blend into the hero.
Initial state: transparent

On scrolling:
- sticky
- background transition
- readable navigation

Use a smooth transition.
Avoid excessive blur or glassmorphism.

### Content
Navbar should include:
- Himja Behl logo
- Primary navigation
- Enquiry CTA

Suggested navigation:
- STORY
- SERVICES
- JOURNEYS
- PROCESS
- THE EDIT
- ENQUIRE

Navigation labels can be adjusted during design if a better editorial structure is found.

---

## 11. Hero Section

### Visual Direction
The hero must use:
- Deep maroon / sophisticated red as its dominant background.

The hero should feel like a luxury fashion campaign.

### Hero Assets
A transparent PNG/cutout of a well-dressed wedding group will be integrated into the hero.
The image should NOT be treated as a normal rectangular image.
It should feel compositionally integrated into the page.

### Hero Content
Include:
- Himja Behl branding
- "Wedding Stylist" descriptor
- Large editorial headline
- Supporting copy
- Primary CTA
- Secondary CTA

Potential CTA examples:
- EXPLORE THE JOURNEYS
- ENQUIRE FOR YOUR WEDDING

or:
- CREATE YOUR STYLE EDIT
- EXPLORE HIMJA

Final copy should remain editable.

### Hero Requirements
- Full viewport or near-full viewport
- Responsive
- Strong visual hierarchy
- Mobile-specific composition
- Fast loading
- Optimized hero image
- No excessive animation

---

## 12. Story Section

### Purpose
Introduce Himja as a person and stylist.
This section should communicate:
- Her story
- Her philosophy
- Her approach to styling
- Her personality
- Her expertise

### Design
Use an editorial magazine layout.
Potential structure:

> THE WOMAN BEHIND THE EDIT
> [Large portrait]
> [Editorial headline]
> [Story content]
> [Optional pull quote]

Avoid a generic ABOUT US layout.

---

## 13. Editorial Scroller

Create a horizontal scrolling visual transition.
Potential content:
- BRIDAL
- GROOM
- FAMILY
- TROUSSEAU
- WEDDING WEEK
- PERSONAL STYLE
- CURATION
- DETAIL
- EXPRESSION
- ELEGANCE

### Requirements:
- Infinite horizontal loop
- Smooth animation
- Responsive
- Lightweight
- No layout shift
- Pause on interaction where appropriate
- Respect prefers-reduced-motion

If reduced motion is enabled, display the content statically or with minimal movement.

---

## 14. Client Journeys Section

### Purpose
Showcase Himja's work through real client stories.
Do not treat this as a simple testimonial carousel.
The section should feel like: editorial archive / client journal / fashion case study.

Potential title:
- THE JOURNEYS
or
- THE HIMJA ARCHIVE

### Journey Card
Each journey may contain:
- Image
- Client identifier/name
- Location
- Wedding/function information
- Short description
- CTA

Example:
> CLIENT STORY 01
> [IMAGE]
> THE BRIDE WHO WANTED TRADITION, REIMAGINED.
> Jaipur · Wedding
> READ THE JOURNEY →

---

## 15. Client Journey Pages

Each client story must have its own route.
Example: `/journeys/client-name`

### Structure
```text
Hero Image
↓
Client Story Introduction
↓
THE BRIEF
↓
THE PROCESS
↓
THE EDIT
↓
THE RESULT
↓
CLIENT'S WORDS
↓
Image Gallery
↓
Next Journey
```

### Requirements
- SEO-friendly dynamic routes
- Responsive editorial layout
- Large photography
- Accessible image alt text
- Reusable page template
- Content-driven architecture

New client stories should be addable without rewriting the page component.

---

## 16. Client Journey Data Model

Use structured content.
Example:
```typescript
type ClientJourney = {
  slug: string
  title: string
  eyebrow?: string
  clientName?: string
  location?: string
  occasion?: string
  date?: string
  heroImage: string
  excerpt: string
  brief: string
  process: string
  edit: string
  result: string
  testimonial?: string
  gallery: string[]
}
```
The implementation may improve this model if necessary.

---

## 17. Styling Process

Section title: FROM VISION TO WARDROBE

Show four stages:
1. 01 — DISCOVER
2. 02 — CURATE
3. 03 — REFINE
4. 04 — DELIVER

Each stage should contain a concise description.
Do not make this look like a corporate SaaS workflow.
It should feel editorial and premium.

---

## 18. THE HIMJA EDIT

This is the main lead-generation experience.

### Purpose
Collect potential client information while making the form feel like a personalized styling experience.
It should not look like: Name/Email/Phone/Submit.
It should feel like an interactive consultation.

---

## 19. Form Flow

The form may use multiple steps.

### Step 1 — Who are we styling?
Options:
- Bride
- Groom
- Family
- Multiple

### Step 2 — What are you looking for?
Options:
- Wedding
- Reception
- Sangeet
- Mehendi
- Full Wedding Wardrobe
- Other
Allow multiple selections where appropriate.

### Step 3 — Style Direction
Options:
- Traditional
- Contemporary
- Fusion
- Minimal
- Regal
- Experimental
Multiple selections may be allowed.

### Step 4 — Wedding Details
Fields:
- Wedding Date
- Location
- Number of Functions

### Step 5 — Personal Preferences
Fields:
- Preferred Colours
- Inspiration
- Desired Look
- Additional Requirements

### Step 6 — Contact
Fields:
- Name
- Email
- Phone

---

## 20. Form UX Requirements

The form must:
- Show progress
- Clearly indicate current step
- Allow previous/next navigation
- Validate fields
- Preserve entered values when navigating
- Work properly on mobile
- Prevent accidental duplicate submissions
- Show loading state during submission
- Show meaningful error messages
- Be keyboard accessible

Do not ask for unnecessary information.

---

## 21. Form Validation

Use Zod for schema validation.
Validate:
- Name
- Email
- Phone
- Date
- Required selections

Use sensible limits for free-text fields.
Example:
- Name: max 100 characters
- Email: valid email format
- Phone: reasonable Indian/international phone validation
- Additional notes: max 1000 characters

Validation should exist on both client and server.

---

## 22. Submission Flow

When the user submits:
```text
FORM
 ↓
CLIENT VALIDATION
 ↓
SERVER REQUEST
 ↓
SERVER VALIDATION
 ↓
GENERATE LEAD ID
 ↓
STORE LEAD
 ↓
GENERATE STYLE EDIT
 ↓
SEND EMAIL
 ↓
RETURN RESULT
```
The system must be resilient to partial failures.

---

## 23. AI Style Archetype

The style archetype should be determined primarily through deterministic logic.
Do not let an LLM freely invent a personality/style category from scratch.

Example archetypes:
- Modern Romantic
- Refined Traditionalist
- Contemporary Minimal
- Regal Classic
- Modern Maximalist
- Effortless Fusion

The final list can be adjusted.
The rule engine should use form responses to select the most appropriate archetype.

---

## 24. Gemini Integration

Gemini should only be responsible for generating the editorial narrative.
Input should be structured.
Example:
```json
{
  "archetype": "Modern Romantic",
  "stylingFor": ["Bride", "Family"],
  "functions": ["Wedding", "Reception"],
  "location": "Jaipur",
  "stylePreferences": ["Contemporary", "Traditional"],
  "colours": ["Ivory", "Burgundy"]
}
```

Gemini should return concise structured content.
Target output:
- Style title
- Style tags
- Short editorial description
- Palette
- Styling direction

Target total length: approximately 100–200 words.

---

## 25. AI Prompt Requirements

Prompt should establish that Gemini is:
> The style editor for Himja Behl.

The model must:
- Use only provided information
- Produce elegant editorial copy
- Avoid unsupported factual claims
- Avoid psychological claims
- Avoid mentioning AI
- Avoid pretending to know the client personally
- Avoid product-specific claims
- Avoid guarantees

The output should feel like a premium fashion editorial.

---

## 26. AI Failure Fallback

If Gemini fails: timeout, quota exceeded, API error, invalid response, network failure.
The website must NOT show a broken state.

Instead:
```text
FORM
 ↓
RULE ENGINE
 ↓
FALLBACK STYLE EDIT
```
The user should still receive a personalized result.
The lead must still be stored.

---

## 27. Style Edit Result Page

After successful form submission, display:

```text
THE HIMJA EDIT

YOUR STYLE DIRECTION
[ARCHETYPE]
[STYLE TAGS]
[EDITORIAL DESCRIPTION]

PALETTE
[COLOUR DIRECTION]

DIRECTION
[STYLING DIRECTION]

[CTA]
```

Primary CTA: LET'S BRING IT TO LIFE
Secondary: CHAT WITH HIMJA

The result should look like a luxury editorial card/page, not an AI chatbot.

---

## 28. Lead Storage Timing

The lead should be stored even if AI generation fails.
Preferred approach:
```text
Submit
 ↓
Validate
 ↓
Create lead
 ↓
Store lead
 ↓
Attempt AI
 ↓
Attempt email
 ↓
Return user result
```
Do not make lead storage dependent on successful AI generation.

---

## 29. Email Notification

Use a transactional email provider such as Resend.
When a lead is submitted, send Himja a notification.

Subject example: `New Himja Behl Styling Enquiry — [Name]`

Email content:
```text
NEW STYLING ENQUIRY

Lead ID:
Date:
NAME:
PHONE:
EMAIL:
STYLING FOR:
FUNCTIONS:
WEDDING DATE:
LOCATION:
STYLE:
COLOURS:
INSPIRATION:
BUDGET:
STYLE ARCHETYPE:
THE HIMJA EDIT:
[Generated content]
STATUS: New
```

The exact email design can be improved during implementation.

---

## 30. Email Failure Handling

If email fails:
- Do not delete the lead.
- Do not fail the entire submission.
- Log the failure server-side.
- Still show the user their Style Edit if possible.

Lead storage is more important than notification success.

---

## 31. WhatsApp Integration

WhatsApp should be implemented as a simple conversion mechanism.
No complicated WhatsApp backend is required for V1.
Use a configurable WhatsApp number.

CTA example: `CHAT WITH HIMJA →`

Use a prefilled message where appropriate.
Example: `Hi Himja, I just completed the Himja Edit on your website and would love to discuss styling for my wedding.`

The exact number and message should be configurable through environment variables/config.

---

## 32. Analytics

Track useful conversion events.
Recommended events:
- `hero_cta_click`
- `journey_open`
- `journey_read`
- `form_started`
- `form_step_completed`
- `form_submitted`
- `style_edit_generated`
- `style_edit_fallback`
- `whatsapp_click`
- `email_click`

Do not track unnecessary personal information.
Never send sensitive form data to analytics platforms.

---

## 33. SEO

Homepage metadata should include:
- Title
- Description
- Open Graph image
- Canonical URL

Each client journey should have unique:
- Title
- Description
- Open Graph metadata

Use semantic HTML. Heading structure should be logical.

---

## 34. Performance Requirements

Target a fast premium experience.
Priorities:
- Hero loading
- Image optimization
- Font loading
- Minimal JavaScript
- Lazy-loaded below-fold images
- Efficient animation
- Minimal third-party scripts

Use Next.js image optimization. Do not load massive unoptimized images.

---

## 35. Accessibility Requirements

Implement:
- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels
- Accessible form errors
- Alt text
- ARIA only when necessary
- Good colour contrast
- Reduced-motion support

The form must be usable without a mouse.

---

## 36. Responsive Requirements

The site must support: Desktop, Laptop, Tablet, Mobile.
Mobile must be intentionally designed.

### Important mobile areas:
- **Hero**: The wedding group PNG must be repositioned/recomposed.
- **Navbar**: Use a clean mobile navigation.
- **Client Journeys**: Cards should become a vertical or horizontal swipe-friendly layout.
- **Form**: Inputs and buttons should be easy to use with one hand.
- **Typography**: Maintain editorial impact without causing horizontal overflow.

---

## 37. Browser Compatibility

Support modern versions of: Chrome, Edge, Safari, Firefox.
Do not rely on experimental browser APIs unless there is a clear fallback.

---

## 38. Security Requirements

Never expose:
- GEMINI_API_KEY
- RESEND_API_KEY
- GOOGLE credentials
to the browser.

Sensitive integrations must execute server-side.
Validate all incoming requests.
Rate-limit publicly accessible AI/lead endpoints where practical.
Do not expose internal error details to users.

---

## 39. Environment Variables

Expected configuration may include:
```env
NEXT_PUBLIC_SITE_URL=
GEMINI_API_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
GOOGLE_APPS_SCRIPT_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```
Do not commit secrets. Provide an `.env.example` file.

---

## 40. Google Apps Script Requirements

The Apps Script endpoint should:
- Accept POST requests.
- Validate basic payload structure.
- Append a new row to the configured Google Sheet.
- Preserve column order.
- Add timestamp if necessary.
- Return a clear JSON response.
- Handle errors gracefully.

Expected response format:
```json
{
  "success": true,
  "leadId": "HB-20260915-001"
}
```
Failure:
```json
{
  "success": false,
  "error": "Unable to save lead"
}
```
Do not return sensitive Google configuration.

---

## 41. Content Management

V1 does not require a CMS.
Client stories should be maintained through structured local content/data.

Possible future migration:
`Local content → CMS`

Do not build CMS infrastructure unless specifically requested.

---

## 42. No Admin Dashboard

The current version does NOT require:
- Admin login
- Admin dashboard
- User dashboard
- Database-backed CMS
- Lead management UI

Google Sheets is sufficient for lead management.

---

## 43. No Payment System

The current Himja website is a lead-generation website.
Do not implement payments unless explicitly requested later.

---

## 44. No User Authentication

Visitors do not need accounts.
The Himja Edit should work without signup/login.
Do not add authentication.

---

## 45. Asset Handling

Expected major assets:
- Logo
- Hero group PNG
- Himja portrait
- Client photography
- Client journey images
- Potential editorial/background imagery

Use appropriate image optimization.
If a required asset is missing:
- Use a clearly marked temporary placeholder during development.
- Tell the owner which asset is required.
- Do not invent important client imagery.

---

## 46. Component Architecture

Suggested structure:
```text
src/
├── app/
│   ├── page.tsx
│   ├── journeys/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── api/
│   │   ├── lead/
│   │   │   └── route.ts
│   │   └── style-edit/
│   │       └── route.ts
│   └── ...
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── story/
│   ├── scroller/
│   ├── journeys/
│   ├── process/
│   ├── himja-edit/
│   ├── footer/
│   └── ui/
├── data/
│   ├── journeys.ts
│   ├── services.ts
│   ├── process.ts
│   └── style-archetypes.ts
├── lib/
│   ├── validation.ts
│   ├── google-sheets.ts
│   ├── gemini.ts
│   ├── email.ts
│   ├── whatsapp.ts
│   └── style-engine.ts
└── types/
```
This is a suggested structure, not a strict requirement.
Adapt to the existing project architecture.

---

## 47. Design Tokens

Centralize:
- Colours
- Typography
- Spacing
- Border radius
- Shadows
- Transitions
- Container widths

Example conceptual tokens:
- `--color-maroon`
- `--color-ivory`
- `--color-charcoal`
- `--color-muted`
- `--font-display`
- `--font-body`
- `--container-max`

Do not scatter arbitrary colour values throughout components.

---

## 48. Error States

Every major interactive system needs a clear error state.
- **Form**: Something went wrong. Please try again.
- **AI**: We couldn't generate your full edit right now, but we've saved your enquiry.
- **Email**: No user-facing failure unless necessary.
- **Google Sheets**: Do not silently claim submission succeeded if lead storage failed.

---

## 49. Loading States

Implement elegant loading states for:
- Form submission
- Style Edit generation
- Journey navigation where applicable

Avoid generic giant spinners.
Use subtle editorial loading indicators.

---

## 50. Duplicate Submission Prevention

After the user submits:
- Disable the submit button
- Show loading state
- Prevent multiple rapid submissions

Server-side duplicate protection may also be implemented if appropriate.
Do not make the UX frustrating.

---

## 51. Privacy

The form collects personal contact information.
- Only collect information necessary for lead generation.
- Do not expose submitted leads publicly.
- Do not send personal data to unnecessary third-party services.
- Analytics should not receive raw contact information.
- A simple privacy notice may be added near the form if appropriate.

---

## 52. Deployment

Primary deployment target: Vercel

Deployment flow:
`GitHub → Vercel → Production`

Environment variables must be configured in Vercel.
Production deployment must be tested after configuration.

---

## 53. Testing Checklist

Before final delivery, test:

### Navigation
- Navbar links
- Sticky behaviour
- Mobile menu
- CTA links

### Hero
- Desktop
- Mobile
- Image loading
- CTA functionality

### Story
- Responsive layout
- Images
- Typography

### Journeys
- Cards
- Dynamic routes
- Images
- Back navigation
- Mobile layout

### Form
- Required fields
- Invalid email
- Invalid phone
- Missing selections
- Back/next steps
- Refresh behaviour
- Double submission
- Mobile keyboard
- Submission success

### Google Sheets
- Lead appears
- Correct columns
- Timestamp
- Lead ID
- Data integrity

### AI
- Successful generation
- API failure
- Timeout
- Invalid response
- Fallback generation

### Email
- Successful notification
- Email failure handling

### WhatsApp
- Correct number
- Prefilled message
- Mobile behaviour

### Responsive
- Desktop
- Tablet
- Mobile

### Accessibility
- Keyboard navigation
- Form labels
- Focus states
- Reduced motion
- Contrast

---

## 54. Definition of Done

The project is considered complete when:

### Design
- The website matches the approved luxury editorial direction.
- Hero uses the intended maroon visual treatment.
- Typography and spacing feel premium.
- Photography is properly integrated.
- Mobile design is intentionally composed.

### Functionality
- Navigation works.
- Client journeys work.
- Journey pages work.
- Lead form works.
- Form validation works.
- Google Sheets receives leads.
- Gemini generates the Himja Edit.
- Fallback works when Gemini fails.
- Himja receives email notifications.
- WhatsApp CTA works.

### Technical
- No exposed secrets.
- Production build succeeds.
- No critical console errors.
- Responsive layouts work.
- Basic accessibility requirements are met.
- Images are optimized.
- SEO metadata exists.

### Business
A visitor should be able to go from:
Landing → Understanding Himja → Seeing her work → Creating a Style Edit → Contacting Himja
without friction.

---

## 55. Important Scope Boundary

The V1 project intentionally does NOT include:
- Authentication
- User accounts
- Admin dashboard
- Custom CRM
- Database
- Payment gateway
- Complex CMS
- Automated WhatsApp API
- Complex AI agent
- Chatbot
- Advanced analytics dashboard

These may be added in future versions if required.
The current objective is:
**A highly polished luxury website that converts visitors into qualified styling enquiries.**

---

## 56. Final Product Principle

The website should feel like:
**a digital fashion editorial that happens to be an extremely effective lead-generation system.**

The technology should remain invisible.
The visitor should experience:
```text
DESIRE
↓
TRUST
↓
CURIOSITY
↓
PERSONALIZATION
↓
ENQUIRY
```

The final website must prioritize brand perception, storytelling, photography, usability and conversion over technical complexity.
