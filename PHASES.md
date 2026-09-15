# PHASES.md

# HIMJA BEHL — Phased Development Plan

## 1. Purpose

The HIMJA BEHL website will be developed incrementally through clearly defined phases.

Each phase represents a specific, visually complete part of the website. The agent must finish, test, and present the current phase for owner verification before proceeding to the next phase.

The development cycle is:

> **BUILD → TEST → REVIEW → REFINE → APPROVE → CONTINUE**

The goal is to maintain tight visual control throughout development and prevent large amounts of unverified work from being built at once.

---

## 2. Phase Approval System

Every phase has one of the following statuses:

- `NOT STARTED`
- `IN PROGRESS`
- `READY FOR REVIEW`
- `CHANGES REQUESTED`
- `REVISED`
- `APPROVED`

A phase is only complete when the project owner explicitly approves it.

### Important Rule

**Never assume approval.**

A technically working phase is not automatically a visually approved phase.

The agent must wait for explicit approval before beginning the next major phase.

---

## 3. Phase 0 — Project Foundation

### Objective
Prepare the project foundation required for implementation.

### Scope
- Project setup
- Global styling foundation
- Design tokens
- Font configuration
- Base layout
- Responsive foundations
- Shared UI foundations
- Required dependencies
- Basic application structure

### Do Not Build
Do not build the actual website sections yet.
Do not implement:
- Hero
- Story
- Journeys
- Process
- Enquiry
- THE HIMJA EDIT
- Footer

### Verification
Confirm that:
- The project runs correctly
- The application builds successfully
- Fonts load correctly
- Global styles work
- Responsive foundations work
- No critical console errors exist

### Completion
Once the foundation is stable, stop and wait for owner approval.

**Status:** `NOT STARTED`

---

## 4. Phase 1 — Navbar + Hero

### Objective
Build and perfect the first viewport of the website.
This phase contains **only the Navbar and Hero**.
Nothing else on the homepage should be developed during this phase.

### Navbar
Implement:
- HIMJA BEHL logo
- Primary navigation
- Enquiry CTA where applicable
- Desktop navigation
- Mobile navigation
- Hero-integrated navbar appearance
- Sticky navigation behaviour
- Scroll-state transition

The navbar should initially feel like part of the hero rather than a separate UI element.

### Hero
Implement:
- Deep maroon / wine-red background
- Main editorial headline
- Supporting copy where required
- Primary CTA
- Secondary CTA
- Wedding-fashion PNG / cutout composition
- Typography hierarchy
- Image positioning
- Hero spacing
- Initial entrance animations

The hero must establish the visual identity of the entire website.

### Responsive Verification

#### Desktop
Verify:
- Typography scale
- Image composition
- Navigation
- CTA placement
- Vertical balance
- Overall first-viewport composition

#### Tablet
Verify:
- Image positioning
- Typography
- Navigation
- Spacing
- CTA placement

#### Mobile
Verify:
- Headline wrapping
- PNG composition
- CTA placement
- Navigation/menu
- Hero height
- No horizontal overflow

The mobile hero must be intentionally designed rather than simply being a smaller desktop layout.

### Quality Bar
Before presenting the phase for review:
- Typography must feel premium
- Hero composition must feel editorial
- PNG must feel intentionally positioned
- Navigation must feel integrated
- CTAs must be clear but restrained
- No unnecessary decorative elements
- No generic wedding-template aesthetic
- No excessive animation
- No obvious responsive issues
- No critical console errors

### Deliverable
Only:
> **NAVBAR + HERO**

The page may end immediately after the hero.
Do not implement the next homepage section.

### Approval
After completing this phase:
1. Test it.
2. Present it to the project owner.
3. Wait for feedback.
4. Make requested revisions if necessary.
5. Wait for explicit approval.
6. Only then begin Phase 2.

**Status:** `NOT STARTED`

---

## 5. Phase 2 — Himja Story

### Objective
Build the first editorial content section immediately after the hero.

### Scope
Implement:
- Himja story/about section
- Himja photography
- Editorial headline
- Supporting copy
- Image treatment
- Editorial layout
- Section transition
- Responsive behaviour
- Subtle entrance animation

### Design Direction
The section should feel like an editorial profile spread.
Avoid a generic:
> Image + text card

layout. Use:
- Editorial grid
- Asymmetry
- Large typography
- Negative space
- Intentional image placement

### Verification
Test:
- Desktop
- Tablet
- Mobile
- Image cropping
- Typography
- Spacing
- Transition from hero

### Approval
Stop after completing the Story section.
Wait for explicit owner approval before continuing.

**Status:** `NOT STARTED`

---

## 6. Phase 3 — Editorial Scroller

### Objective
Create a visual transition between Himja's story and the client journeys.

### Scope
Implement:
- Horizontal editorial scroller
- Brand statements
- Typography
- Continuous motion
- Responsive behaviour

Possible content direction:
- `CURATED NOT COMPROMISED`
- `EVERY LOOK HAS A STORY`
- `THE ART OF THE WEDDING WARDROBE`

Final copy may be refined during implementation.

### Motion Direction
The scroller should be:
- Slow
- Smooth
- Continuous
- Subtle

It should create rhythm rather than become the focus of the page.

### Verification
Check:
- Animation smoothness
- Mobile overflow
- Typography
- Reduced-motion behaviour
- Overall relationship with surrounding sections

### Approval
Stop and wait for explicit approval.

**Status:** `NOT STARTED`

---

## 7. Phase 4 — Client Journeys

### Objective
Build the main social-proof and editorial storytelling section.

### Scope
Implement:
- Journeys section heading
- Journey cards
- Client imagery
- Client names
- Styling context
- Short descriptions
- Editorial layout
- Hover interactions
- Responsive behaviour
- Links to individual journey pages

### Design Direction
The section must not look like:
- Review cards
- Star ratings
- Generic testimonials
- SaaS testimonial sliders
- Standard portfolio cards

It should feel like a fashion editorial archive.

### Layout
Use varied image and content compositions where appropriate.
Avoid repetitive card grids.
The layout should allow:
- Large editorial features
- Smaller supporting stories
- Asymmetric placement
- Strong photography

### Verification
Check:
- Image hierarchy
- Typography
- Card composition
- Hover behaviour
- Mobile layout
- Editorial rhythm

### Approval
Stop and wait for explicit approval.

**Status:** `NOT STARTED`

---

## 8. Phase 5 — Individual Journey Page

### Objective
Create the editorial template for individual client stories.

### Scope
Implement:
- Journey hero
- Client name
- Wedding/styling context
- Introduction
- THE BRIEF
- THE PROCESS
- THE EDIT
- THE RESULT
- Client testimonial
- Image gallery
- Next journey navigation

### Design Direction
The page should feel like a fashion editorial.
It must not feel like a business dashboard or generic case-study template.

### Suggested Structure
```text
FULL-BLEED HERO IMAGE

CLIENT NAME
CONTEXT

INTRODUCTION

THE BRIEF

LARGE IMAGE

THE PROCESS

IMAGE + TEXT

THE EDIT

IMAGE GRID

THE RESULT

CLIENT WORDS

VISUAL ARCHIVE

NEXT JOURNEY
```

### Verification
Test:
- At least one complete journey
- Different image ratios
- Short and long content
- Desktop
- Tablet
- Mobile
- Journey-to-journey navigation

### Approval
Stop and wait for explicit approval.

**Status:** `NOT STARTED`

---

## 9. Phase 6 — Styling Process

### Objective
Explain how Himja works with a client.

### Scope
Implement the four-stage process:
- 01 — DISCOVER
- 02 — CURATE
- 03 — REFINE
- 04 — DELIVER

Include:
- Large stage numbers
- Stage titles
- Short descriptions
- Editorial layout
- Dividers
- Subtle motion

### Design Direction
The section should feel:
- Structured
- Precise
- Elegant
- Professional

It must not feel corporate.
Avoid icon-heavy process cards.
Typography and layout should carry most of the visual weight.

### Verification
Check:
- Visual hierarchy
- Desktop layout
- Tablet layout
- Mobile layout
- Number treatment
- Spacing
- Animation

### Approval
Stop and wait for explicit approval.

**Status:** `NOT STARTED`

---

## 10. Phase 7 — Styling Enquiry

### Objective
Build the primary conversion experience.
The enquiry form should feel like the beginning of a private styling consultation.
It must not feel like a conventional contact form.

### Scope
Implement the interactive enquiry flow.

#### Step 01 — Who Are We Styling?
Options:
- Bride
- Groom
- Couple
- Family
- Multiple

#### Step 02 — What Are You Looking For?
Options:
- Wedding
- Reception
- Sangeet
- Mehendi
- Engagement
- Full Wedding Wardrobe
- Other

#### Step 03 — Style Direction
Options:
- Traditional
- Contemporary
- Fusion
- Minimal
- Regal
- Experimental

#### Step 04 — Wedding Details
Collect:
- Wedding date
- Location
- Number of functions

#### Step 05 — Preferences
Collect:
- Preferred colours
- Inspiration
- Desired look
- Additional requirements

#### Step 06 — Contact
Collect:
- Name
- Email
- Phone

### Design Direction
Use:
- Large editorial questions
- Minimal controls
- Clear selection states
- Progress indicator
- Generous spacing
- Smooth transitions

Avoid dense form layouts.

### Verification
Test:
- Every question
- Next navigation
- Back navigation
- Selection states
- Validation
- Mobile interaction
- Keyboard interaction
- Error states
- Completion flow

### Approval
Stop and wait for explicit owner approval.
Do not proceed to the personalized result until this phase has been approved.

**Status:** `NOT STARTED`

---

## 11. Phase 8 — THE HIMJA EDIT

### Objective
Build the personalized styling result presented after the enquiry.

### Scope
Implement the visual experience for:
`THE HIMJA EDIT`

The result should contain:
- Style direction
- Style archetype
- Style tags
- Editorial description
- Colour palette
- Styling direction
- CTA

### Design Direction
The result must resemble a personalized fashion edit.
It must not resemble:
- An AI chatbot
- A personality test
- A dashboard
- A generated report
- A SaaS result page

### Suggested Structure
```text
THE HIMJA EDIT

YOUR STYLE DIRECTION

MODERN ROMANTIC

ELEGANT
CONTEMPORARY
EXPRESSIVE

EDITORIAL DESCRIPTION

PALETTE

COLOUR SWATCHES

DIRECTION

STYLING DIRECTION

LET'S BRING IT TO LIFE
```

### Verification
Test all supported style archetypes.
Check:
- Typography
- Style hierarchy
- Tags
- Palette presentation
- CTA
- Mobile layout
- Loading state
- Error/fallback state

### Approval
Stop and wait for explicit owner approval.

**Status:** `NOT STARTED`

---

## 12. Phase 9 — Lead Submission + Contact

### Objective
Connect the approved enquiry experience to the actual lead-generation workflow.

### Scope
Implement:
- Lead submission
- Submission confirmation
- Himja notification
- WhatsApp continuation
- Success state
- Error state
- Retry behaviour

### Important Principle
A failure in a secondary service must not unnecessarily destroy a successful lead submission.
For example:
If notification delivery fails but lead storage succeeds, the lead must remain successfully captured.

### Verification
Test:
- Successful submission
- Invalid submission
- Network failure
- Duplicate submission
- Notification failure
- Retry
- Mobile experience

### Approval
Stop and wait for explicit owner approval.

**Status:** `NOT STARTED`

---

## 13. Phase 10 — Footer

### Objective
Complete the visual page experience.

### Scope
Implement:
- HIMJA BEHL logo
- Brand statement
- Navigation
- Contact
- Social links where applicable
- Enquiry CTA
- Copyright

### Design Direction
The footer should feel like the final editorial spread of the website.
Avoid generic multi-column corporate footer patterns.

### Verification
Check:
- Desktop
- Tablet
- Mobile
- Typography
- Spacing
- Links
- CTA
- Relationship with the preceding section

### Approval
Stop and wait for explicit owner approval.

**Status:** `NOT STARTED`

---

## 14. Phase 11 — Global Visual Polish

### Objective
Review the entire website as one unified visual experience.
This phase begins only after all major sections have been individually approved.

### Scope
Review:
- Typography consistency
- Spacing
- Colour consistency
- Section transitions
- Image treatment
- Button behaviour
- Navigation
- Motion
- Responsive layouts
- Mobile experience
- Overall visual hierarchy

### Key Question
Does the entire website feel like one brand?
It should not feel like separate templates assembled together.
Everything should feel like HIMJA BEHL.

### Verification
Perform a complete visual review across:
- Desktop
- Tablet
- Mobile

### Approval
Stop and wait for explicit owner approval.

**Status:** `NOT STARTED`

---

## 15. Phase 12 — Final QA

### Objective
Verify that the approved design and functionality are ready for production.

### Visual QA
Check:
- No broken layouts
- No incorrect image crops
- No typography issues
- No spacing inconsistencies
- No visual regressions
- No horizontal overflow

### Interaction QA
Check:
- Navigation
- CTAs
- Journey links
- Forms
- WhatsApp
- Success states
- Error states

### Responsive QA
Check:
- Desktop
- Tablet
- Mobile

### Accessibility QA
Check:
- Keyboard navigation
- Focus states
- Form labels
- Contrast
- Reduced motion
- Tap target sizes
- Image descriptions

### Performance QA
Check:
- Image optimization
- Font loading
- Unnecessary scripts
- Animation performance
- Page loading behaviour

### SEO QA
Check:
- Page titles
- Metadata
- Open Graph
- Sitemap
- Robots
- Semantic structure

### Code QA
Check:
- Production build
- Console errors
- Type errors
- Unnecessary dead code
- Exposed secrets
- Broken routes

### Approval
Stop and wait for final owner review.

**Status:** `NOT STARTED`

---

## 16. Phase 13 — Final Owner Review

### Objective
Perform the final complete review of the website.

Review:
- Navbar
- Hero
- Himja Story
- Editorial Scroller
- Client Journeys
- Individual Journey
- Styling Process
- Styling Enquiry
- THE HIMJA EDIT
- Lead Submission
- Footer
- Mobile experience
- Overall visual identity

The owner should verify both:
- Visual quality
- Functional correctness
- Completion

The project is considered complete only after explicit final approval.

**Status:** `NOT STARTED`

---

## 17. Development Rules

### Rule 1 — One Major Phase at a Time
Do not implement multiple unapproved phases simultaneously.

### Rule 2 — Never Assume Approval
A phase being functional does not mean it is approved.
Wait for explicit confirmation.

### Rule 3 — Fix Before Continuing
If the owner requests changes:
1. Make the requested changes.
2. Re-test the phase.
3. Present the revised phase.
4. Wait for approval.

Do not continue while major requested changes remain unresolved.

### Rule 4 — Preserve Approved Work
Once a phase has been approved, do not unnecessarily redesign it during later phases.
Later phases should build around the approved work.
If a later requirement genuinely requires changing an approved phase, explain the reason before making a major change.

### Rule 5 — Small Technical Fixes Are Allowed
Minor technical corrections may be made during later phases when they do not change the approved visual or product direction.
Examples:
- Bug fixes
- Accessibility fixes
- Performance fixes
- Responsive corrections
- Type errors
- Build fixes

### Rule 6 — No Scope Creep
Do not introduce new sections, features, animations, interactions or product functionality simply because they seem interesting.
Anything outside the approved PRD, TRD or DESIGN scope requires owner approval.

### Rule 7 — Do Not Build Placeholders Unnecessarily
When a phase is intentionally limited to one section, do not build future sections merely as placeholders.
The purpose of phased development is to isolate decisions and make review meaningful.

---

## 18. Phase Review Format

Whenever a phase is ready for review, report using the following structure:

```text
PHASE: [NUMBER] — [NAME]

STATUS: READY FOR REVIEW

COMPLETED:
- ...

RESPONSIVE:
- Desktop
- Tablet
- Mobile

TESTED:
- ...

INTENTIONALLY NOT IMPLEMENTED:
- ...

WAITING FOR:
OWNER APPROVAL
```

Keep the review summary concise.
Do not begin the next major phase until approval is received.

---

## 19. Master Phase Checklist
- [ ] Phase 0 — Project Foundation
- [ ] Phase 1 — Navbar + Hero
- [ ] Phase 2 — Himja Story
- [ ] Phase 3 — Editorial Scroller
- [ ] Phase 4 — Client Journeys
- [ ] Phase 5 — Individual Journey Page
- [ ] Phase 6 — Styling Process
- [ ] Phase 7 — Styling Enquiry
- [ ] Phase 8 — THE HIMJA EDIT
- [ ] Phase 9 — Lead Submission + Contact
- [ ] Phase 10 — Footer
- [ ] Phase 11 — Global Visual Polish
- [ ] Phase 12 — Final QA
- [ ] Phase 13 — Final Owner Review

---

## 20. Final Development Principle

The HIMJA BEHL website should be developed incrementally and deliberately.

The agent must prioritize visual quality and owner verification over speed.

The process is:

**BUILD → TEST → SHOW → VERIFY → REFINE → APPROVE → CONTINUE**

Every major visual decision should be validated before more complexity is added.

The final website should feel deliberately art-directed from the first viewport to the final interaction.

**This is the one I'd actually put in the repo as `PHASES.md`.** It gives the coding agent a hard rule: **Phase 1 = only navbar + hero → stop → you review → approval → Phase 2.** No agent going rogue and building 70% of the site before you even see the hero 😭🔥
