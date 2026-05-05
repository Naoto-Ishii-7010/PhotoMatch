```
DISTILLED_AESTHETICS_PROMPT = """
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:

- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
"""

You are an excellent UI/UX designer and frontend architect.
Based on the following specifications, please create the UI for the PhotoMatch MVP.

# Service Overview

Service Name: PhotoMatch

PhotoMatch is a C2C photography matching service that connects users who want to request photo shoots with photographers who shoot as a hobby or side business.

Target country: Japan only
Language: Japanese only

Core value:
- Request photo shoots at more affordable prices than professional studios
- Hobby/side-job photographers can showcase their work and gain opportunities
- Ensure a minimum level of safety and transparency even when interacting with strangers

# User Types

- Guest (not logged in)
  - Can view LP, photographer search, work search, and public photographer details
  - Cannot request, propose, follow, or chat

- Requester
  - Can create requests, post jobs, compare proposals, chat, and check notifications
  - Must set a display name to create requests or job postings

- Photographer
  - Can manage profile, portfolio, search jobs, send proposals, and chat
  - To appear in search or send proposals, the following are required:
    - Display name
    - Activity area
    - Supported genres
    - Self-introduction
    - At least one public portfolio item

- Admin
  - Manages users, reports, suspensions, reinstatements, job cancellations, and audit logs

- Suspended User
  - Cannot log in
  - Excluded from public profiles, portfolios, and search results

A single account can act as both requester and photographer.

# MVP Scope

Included:
- Registration/Login via Google authentication
- Profile management
- Portfolio management
- Photographer search / Work search
- Job search
- Direct requests
- Job postings, proposal comparison, and selection
- 1-on-1 chat after matching
- Push notifications and in-app notifications
- Admin dashboard

Excluded:
- In-app payments, billing, refunds
- Reviews and ratings
- Chat with image attachments
- Email/SMS notifications
- Automatic identity verification or moderation

# Design Principles

- Natural and trustworthy UI for a Japanese service
- High-quality visual design with spacious layout fitting a photography service
- Responsive for both desktop and mobile
- Base colors: white, off-white, light gray
- Clearly highlighted CTAs
- Use rounded cards, photo thumbnails, and status badges extensively
- Clearly separate flows for requesters and photographers
- Include mock screens for unimplemented features assuming MVP
- No real data fetching; use realistic dummy data
- Japan Standard Time
- Currency in Japanese Yen with comma separators
- Do not display personal information (detailed address, phone number, payment methods) before a request is made
- Avoid generic AI-like visual design; create a distinctive, carefully designed interface tailored to PhotoMatch
- Use unique and refined typography instead of overused generic fonts such as Arial, Inter, Roboto, or system fonts
- Establish a cohesive visual theme using CSS variables for color, spacing, shadows, radii, and motion
- Prefer confident dominant colors with sharp accent colors rather than timid, evenly distributed palettes
- Avoid clichéd purple-gradient-on-white layouts and predictable template-like component arrangements
- Create atmosphere and depth through layered gradients, subtle geometric patterns, photographic framing, or context-specific visual effects
- Use motion purposefully for high-impact moments, such as page-load staggered reveals, important CTA transitions, and state changes
- For HTML, prioritize CSS-only animations; for React, use Motion library when available
- Make unexpected choices that feel genuinely designed for a Japanese photography marketplace
- Vary light and dark sections where appropriate, while keeping the service trustworthy and readable
- Avoid repeatedly relying on common “AI design” font choices such as Space Grotesk
- Every screen should feel context-specific, not like a generic SaaS template

# Common Business Rules

## Profile Publishing Conditions

Requester requirements:
- Display name is set

Photographer requirements:
- Display name
- Activity area
- Supported genres
- Self-introduction
- At least one public portfolio

Prohibited content:
- No contact info, detailed address, or external SNS links in public profiles/portfolios
- No copyright-infringing images, third-party personal data, obscene or illegal content

## Common Job Fields

Common for both direct and open jobs:
- Genre: required
- Desired date: required
- Area: required (prefecture + city)
- Budget: required (integer in yen, total incl. tax)
- Notes: optional (requests, conditions, travel, facility fees, etc.)

Open job only:
- Application deadline: required

Exact meeting location/address is shared after matching via chat.

## Pricing & Payment

- Budget/proposal amounts are estimates of shooting fees
- Travel fees, entrance fees, etc. are clarified in notes or chat
- Payments are handled directly between users
- The service does not manage billing, payments, or refunds

## Job Status

Statuses:
- Recruiting
- Proposing
- Matched
- In Progress
- Awaiting Completion
- Completed
- Cancelled

Transitions:
- Direct: Recruiting → Matched → In Progress → Awaiting Completion → Completed
- Open: Recruiting → Proposing → Matched → In Progress → Awaiting Completion → Completed
- Direct requests expire after 72 hours if not approved
- Open jobs cannot receive proposals after deadline
- After matching, sending the first chat message sets status to In Progress
- Completed or cancelled jobs cannot be reopened

Cancellation reasons:
- Requester cancelled
- Photographer declined
- Deadline expired
- Approval expired
- Admin cancellation

UI shows “Cancelled”; detailed reason shown in history/admin.

## Cancellation

- No reason required before matching
- Reason required after matching
- No cancellation fees/refund handling
- Audit log recorded

## Completion

- After shooting/payment, either party can mark as Awaiting Completion
- Completed when both confirm
- If one side confirms, remains Awaiting
- Auto-complete after 7 days

## Reports & Safety

- Report entry points in profile, job details, chat
- Admin can cancel jobs involving suspended users
- All admin actions logged

# Main User Flows

## Direct Request Flow
1. Register via Google
2. Set profile
3. Search/view photographer
4. Send direct request
5. Photographer approves → matched
6. Adjust details via chat
7. Complete after shoot

## Open Job Flow
1. Post job
2. Receive proposals
3. Compare proposals
4. Select one → matched
5. Adjust via chat
6. Complete

## Photographer Proposal Flow
1. Publish profile/portfolio
2. Search jobs
3. Send proposal
4. Selected → matched
5. Adjust via chat
6. Complete

# Screens

## 1. LP `/lp`

Purpose:
Present value, usage, safety, and CTAs to convert users.

Structure:
- Sticky header
- Hero
- About
- Use cases
- Work examples
- Pricing
- Safety
- CTA sections
- How it works tabs
- FAQ accordion
- Final CTA
- Footer

CTA:
- `/auth/register`
- `/auth/register?role=requester`
- `/auth/register?role=photographer`
- `/auth/login`

No actions (search/request/chat) available.

## 2. Register `/auth/register`

Purpose:
Start Google OAuth and proceed to profile setup.

UI:
- Logo
- Heading
- Description
- Role preset
- Terms/privacy checkbox
- Google button
- Login link

States:
- No consent → error
- OAuth cancel
- Existing account → login
- Suspended → blocked
- Server error

After:
- Redirect `/mypage/profile`

## 3. Login `/auth/login`

Purpose:
Login via Google OAuth.

UI:
- Logo
- Heading
- Description
- Google button
- Session expired message
- Register link

States:
- Cancel
- Suspended
- Session expired
- Server error

## 4. Search `/search`

Purpose:
Search photographers or works.

UI:
- Tabs
- Filters
- Sort
- Results count
- Cards
- Infinite scroll

Cards:
- Photographer: avatar, name, area, genres, featured work
- Work: thumbnail, title, genre, photographer

States:
- No results
- Error
- Loading
- Private content inaccessible

## 5. Photographer Detail `/photographers/[photographerId]`

Purpose:
View profile and portfolio.

UI:
- Avatar
- Name
- Area
- Genres
- Bio
- Followers
- Portfolio
- Follow CTA
- Request CTA
- Report

States:
- Guest action → login prompt
- Own profile → no request button
- Suspended → blocked
- No portfolio → not searchable

## 6. Profile Edit `/mypage/profile`

Purpose:
Edit profile and check requirements.

UI:
- Name
- Avatar
- Bio
- Area
- Genres
- Status panel
- Save

Validation:
- Required fields
- Bio ≤500 chars
- Max 6 genres
- Avatar ≤10MB
- Prohibited content blocked

## 7. Portfolio `/mypage/portfolio`

Purpose:
Manage works.

UI:
- Summary
- Add button
- Grid
- Thumbnail, title, genre, tags, status
- Toggle
- Delete

States:
- Empty
- Max 30
- Invalid image
- Validation errors

## 8. Follows `/mypage/follows`

Purpose:
Saved photographers list.

UI:
- Count
- Cards
- Unfollow
- Detail link

States:
- Empty
- Error
- Suspended auto removed

## 9. Direct Request `/direct-requests/new`

Purpose:
Send request.

UI:
- Photographer summary
- Fields
- Submit/Cancel

Rules:
- Login required
- Name required
- No duplicate pending

States:
- Errors
- Invalid input
- Target unavailable

## 10. Direct Request Detail `/direct-requests/[requestId]`

Purpose:
Manage request lifecycle.

UI:
- Status
- Details
- Actions
- History
- Reason
- Report

## 11. Job Post `/jobs/new`

Purpose:
Post open job.

UI:
- Fields
- Deadline
- Submit

## 12. Job Detail `/jobs/[jobId]`

Purpose:
View job and proposals.

UI:
- Status
- Deadline
- Count
- Content
- CTA

## 13. Proposals `/jobs/[jobId]/proposals`

Purpose:
Compare proposals.

UI:
- Cards
- Price
- Message
- Profile
- Work
- Accept CTA

## 14. Proposal Create `/jobs/[jobId]/proposals/new`

Purpose:
Send proposal.

UI:
- Fields
- Submit

## 15. Job Search `/jobs`

Purpose:
Browse jobs.

UI:
- Filters
- Cards
- Infinite scroll

## 16. Chats `/chats`

Purpose:
Chat list.

UI:
- Unread count
- Rows

## 17. Chat Room `/chats/[chatId]`

Purpose:
Communicate.

UI:
- Header
- Messages
- Input
- CTAs

## 18. Notifications `/notifications`

Purpose:
View events.

UI:
- List
- Unread highlight

## 19. Admin Users `/admin/users`

Purpose:
Search users.

UI:
- Filters
- Table

## 20. Admin User Detail `/admin/users/[userId]`

Purpose:
Manage user.

UI:
- Info
- Logs
- Actions

## 21. Admin Reports `/admin/reports`

Purpose:
View reports.

UI:
- Table

## 22. Admin Report Detail `/admin/reports/[reportId]`

Purpose:
Handle report.

UI:
- Info
- Actions
- Logs

# Root `/`

Simple placeholder + link to `/lp`

# Implementation Notes

- Clear main CTAs
- Separate guest vs login
- Separate requester/photographer/admin flows
- Use status badges
- Forms with validation
- Empty states include CTA
- Dummy links `#`
- No payments/reviews/image chat/verification
- Static testimonial-like text allowed on LP
```
