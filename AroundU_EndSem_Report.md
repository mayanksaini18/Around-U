---
title: "Around-U — End-Semester Capstone Report"
institute: "Indian Institute of Technology Patna"
program: "Hybrid UG Program in Artificial Intelligence and Cybersecurity"
date: "May 2026"
---

# INDIAN INSTITUTE OF TECHNOLOGY PATNA
**Bihta – 801106, Bihar, India**
**Hybrid UG Program in Artificial Intelligence and Cybersecurity**

---

# AROUND-U
## A Hyperlocal Service Marketplace Platform

### Capstone Project — End-Semester Report

---

| Field | Details |
|---|---|
| **Student Name** | Mayank Saini |
| **Roll No.** | UA2503AIH297 |
| **Group No.** | 124 |
| **Team Members** | Jatin Saini, Mayank Saini, Md Sakib, Kavya Saksham, Md Sameer Ansari |
| **Supervisor** | IIT Patna Faculty |
| **Date** | May 2026 |
| **Live URL** | https://www.aroundu.space |
| **Repository** | https://github.com/mayanksaini18/Around-U |

---

*Submitted in partial fulfilment of the requirements for the Capstone course of the Hybrid UG Program*

---

## DECLARATION

I hereby declare that this submission is my own original work and that, to the best of my knowledge and belief, it contains no material previously published or written by another person, nor material which, to a substantial extent, has been accepted for the award of any degree, diploma, or any other qualification at any university, institute, or place of learning, except where due acknowledgment has been made in the text.

The project was developed collaboratively by the team listed below. The individual contributions of each member are explicitly documented in Section 2 of this report.

**Student Name:** Mayank Saini

**Roll No.:** UA2503AIH297

**Group No.:** 124

**Date:** May 2026

**Signature:** ___________________________

---

## ABSTRACT

Around-U is a full-stack, hyperlocal service marketplace platform that bridges the gap between customers seeking everyday services and skilled, verified service professionals operating within their locality. The platform addresses a critical real-world problem: the difficulty of finding reliable, nearby workers — such as plumbers, electricians, cleaners, carpenters, painters, and tutors — quickly and without intermediary overhead.

The system is built across three interconnected components: a Node.js/Express REST API backend, a Next.js web application, and a React Native (Expo) mobile application. All components are written in TypeScript, ensuring type safety, maintainability, and production-grade code quality. The backend is deployed on Render and connected to a MongoDB Atlas database, with compound indexing on `(pincode, service)` and `(pincode, serviceAliases)` for optimised location-based queries.

This end-semester report documents significant platform evolution beyond the mid-semester submission. Major additions include a full ratings and reviews system with rolling-average computation and rate-limited submission, provider profile pages accessible from both web and mobile, an advanced search filter panel, provider availability and admin verification management endpoints, input validation via Zod schemas, production-grade security hardening with Helmet and Morgan, a service alias normalisation engine, and a seeded database of 64 real providers across eight Indian cities.

**Key Achievements (Full Project)**
- RESTful API with 8 endpoints covering provider registration, search, profile fetch, reviews, availability toggling, and admin verification
- Production-grade security: Helmet HTTP headers, rate limiting (Zod-validated), and structured error handling
- Full provider profile pages on web and mobile with star-rating review submission
- Advanced search filter panel: verified-only toggle, minimum-rating slider, and multi-field sort
- Server-side pagination across web and mobile with load-more UX
- Service alias normalisation: user input mapped to canonical service names with alias index
- Database seeded with 64 providers across 8 cities and 9 service categories
- Four additional web pages: `/how-it-works`, `/for-workers`, `/safety`, and `/providers/[id]`
- Mobile `ProviderDetailScreen` with direct-call CTA and integrated review form

**Team Members**
Jatin Saini • Mayank Saini • Md Sakib • Kavya Saksham • Md Sameer Ansari

---

## TABLE OF CONTENTS

1. Introduction
2. Individual Contributions
3. System Architecture
   - 3.1 Architecture Overview
   - 3.2 Technology Stack
4. Mid-Semester Progress Recap
5. End-Semester Technical Development
   - 5.1 Backend Enhancements
   - 5.2 Database Schema Evolution
   - 5.3 Web Application Enhancements
   - 5.4 Mobile Application Enhancements
   - 5.5 Database Seeding
6. Security and Reliability Engineering
7. Testing
8. Results and Demonstration
9. Challenges and Learnings
10. Conclusion and Future Work
    - 10.1 Conclusion
    - 10.2 Future Work
11. References

---

## 1. INTRODUCTION

In today's fast-paced world, individuals frequently require on-demand assistance for everyday tasks — from fixing a leaking pipe and rewiring electrical outlets to home cleaning and tutoring children. Despite growing urbanisation, finding reliable, nearby service professionals remains a significant challenge. Existing large-scale platforms either charge high commissions, involve lengthy onboarding processes, or fail to address hyperlocal, community-level service discovery effectively.

Around-U was conceived to solve this precise problem. The platform operates on a direct peer-to-peer model — customers search for verified professionals by service type and pincode, and connect with them instantly via a single click. There are no commissions, no opaque pricing layers, and no unnecessary delays. The platform's tagline, *"Any task. Any moment. Verified experts at your door,"* captures this philosophy succinctly.

### Problem Statement

The following real-world pain points motivated the development of Around-U:

- **Endless Calling** — Users call multiple service providers with no guarantee of availability. Around-U broadcasts the task so only available workers respond.
- **Random Pricing** — Providers quote one price on the phone and charge more on arrival. Around-U enforces upfront price negotiation before work begins.
- **The Trust Gap** — Allowing strangers into one's home is a safety concern. Around-U requires Aadhaar ID and phone verification for every provider before listing them on the platform.

### Target User Segments

- **Customers (Help Seekers)** — Individuals who need immediate, trustworthy help with household or professional tasks and want to find someone within their neighbourhood in minutes.
- **Service Professionals (Partners)** — Skilled workers who wish to offer their services flexibly, earn 100% of what they charge, and build a local client base without platform commissions eating into their income.

### Project Scope

This end-semester report covers the full development lifecycle of the Around-U platform, from initial conception through mid-semester delivery to the final, production-hardened state. It documents the significant engineering work undertaken in the second half of the project: security hardening, the reviews system, provider profile pages, advanced search filtering, pagination, service alias normalisation, and database seeding — all features that transform a working prototype into a deployable product.

---

## 2. INDIVIDUAL CONTRIBUTIONS

The project was developed collaboratively by a team of five members, with each member owning specific components of the platform. The table below summarises responsibilities across the full project lifecycle.

| Team Member | Primary Responsibilities |
|---|---|
| **Mayank Saini** | Full-Stack Engineering & Architecture: Led end-to-end system design and implementation across all three tiers. Backend: Zod validation middleware, rate limiting, Helmet/Morgan security hardening, Reviews API with rolling-average rating logic, availability toggle and admin verification endpoints, service alias normalisation engine, duplicate-registration prevention, structured error handling. Web: Provider profile pages with dynamic metadata and SEO, review form with star rating, advanced filter panel, server-side pagination, Stats/Features/CTA landing page sections, four additional pages (`/how-it-works`, `/for-workers`, `/safety`, `/providers/[id]`). Mobile: ProviderDetailScreen with call CTA and review form, load-more pagination, bio/price fields in registration, service category sync. Database: seeding script and 64-provider dataset across 8 cities. |
| **Kavya Saksham** | Product Strategy & Data Engineering: Validated market fit through structured user research; contributed to competitive analysis and database content curation for the seeded provider dataset. |
| **Md Sameer Ansari** | UX Research & Interface Design: Conducted field interviews with target users; mapped customer and provider journeys; provided UX feedback that informed filter panel design and mobile screen flows. |
| **Md Sakib** | Resource Procurement & Vendor Management: Sourced real service provider data (names, locations, services, pincodes) used in the database seeding script; coordinated with local tradespeople to validate platform usability. |
| **Jatin Saini** | Project Management & Quality Assurance: Coordinated sprint planning, cross-functional communication, and milestone tracking; led end-to-end functional and regression testing across both web and mobile surfaces; oversaw data integrity of the seeded database. |

---

## 3. SYSTEM ARCHITECTURE

Around-U follows a three-tier, multi-platform architecture designed for scalability, maintainability, and cross-platform reach. The system cleanly separates concerns across the presentation layer (web and mobile clients), business logic layer (Express.js API), and data layer (MongoDB Atlas).

### 3.1 Architecture Overview

Both client applications communicate with the backend exclusively over HTTPS via a RESTful API. The backend exposes eight endpoints covering all platform operations.

```
┌──────────────────────────────────────────────────────────────────┐
│                            CLIENTS                               │
│                                                                  │
│   ┌───────────────────────┐   ┌──────────────────────────────┐  │
│   │   Next.js Web App      │   │  React Native (Expo) App     │  │
│   │   aroundu.space        │   │   iOS / Android              │  │
│   └──────────┬─────────────┘   └─────────────┬────────────────┘  │
└──────────────┼──────────────────────────────── ┼ ─────────────────┘
               │         HTTPS / REST API         │
               ▼                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│           BACKEND: Node.js + Express.js (TypeScript)             │
│           Deployed on Render                                     │
│           https://around-u-ma5e.onrender.com                    │
│                                                                  │
│  Middleware Stack                                                │
│  ├── Helmet (HTTP security headers)                              │
│  ├── CORS (allowlist-based origin control)                       │
│  ├── express.json (body parser, 100 KB limit)                    │
│  ├── Morgan (HTTP request logging)                               │
│  ├── Zod validate (per-route schema validation)                  │
│  └── express-rate-limit (per-route)                              │
│                                                                  │
│  Routes                                                          │
│  GET  /api/search                  → Search providers            │
│  GET  /api/worker/:id              → Fetch single provider       │
│  POST /api/worker/register         → Register new provider       │
│  PATCH /api/worker/:id/availability → Toggle availability        │
│  PATCH /api/worker/:id/verify      → Admin: mark verified        │
│  POST /api/review/:id              → Submit review               │
│                                                                  │
│  Error Middleware                                                │
│  ├── notFound (404 handler)                                      │
│  └── errorHandler (500 handler)                                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
             ┌─────────────────────────────────┐
             │         MongoDB Atlas            │
             │      Provider Collection         │
             │                                  │
             │  Indexes:                        │
             │  ├── (pincode, service)           │
             │  ├── (pincode, serviceAliases)    │
             │  └── (phone, service) — unique   │
             └─────────────────────────────────┘
```

### 3.2 Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Backend Runtime | Node.js (TypeScript, ESM) | — |
| Backend Framework | Express.js | v5.2.1 |
| Validation | Zod | v4.3.6 |
| Security Headers | Helmet | v8.1.0 |
| Rate Limiting | express-rate-limit | v8.3.2 |
| HTTP Logging | Morgan | v1.10.1 |
| Database | MongoDB (Mongoose ODM) | v8.9.5 |
| Web Frontend | Next.js (App Router) | v16.1.6 |
| Web UI Library | React | v19.2.3 |
| Styling | Tailwind CSS | v4 |
| Animation | Motion (Framer Motion) | v12.30.0 |
| UI Components | Radix UI, Lucide React, Tabler Icons | — |
| Mobile Framework | React Native (Expo) | v54.0.33 |
| Mobile Navigation | React Navigation (Stack + Bottom Tabs) | v7 |
| Mobile Animations | React Native Reanimated | v4.1.1 |
| Language (all) | TypeScript | v5.9 |
| Deployment | Render (backend) | — |
| Database Hosting | MongoDB Atlas | — |

---

## 4. MID-SEMESTER PROGRESS RECAP

The mid-semester submission (March 2026) established the foundational platform:

- **Backend**: Two-endpoint REST API (`POST /api/worker/register`, `GET /api/search`) with basic CORS and dotenv configuration, deployed on Render.
- **Database**: Provider collection in MongoDB Atlas with a compound index on `(pincode, service)`, storing six fields: name, phone, pincode, location, service, city.
- **Web Client**: Three-page Next.js application — landing page with hero, problem grid, how-it-works, and testimonials sections; a find-help search page; and a partner registration form.
- **Mobile App**: React Native (Expo) app with three screens — Home (onboarding), Find Help, and Partner — structured via Stack + Bottom-Tab navigation.

This foundation proved that the core search-and-register loop worked end-to-end across platforms. The second half of the project focused on hardening the platform for production, enriching the data model, and delivering the features that would make Around-U genuinely useful to real users: reviews, provider profiles, filtering, and pagination.

---

## 5. END-SEMESTER TECHNICAL DEVELOPMENT

### 5.1 Backend Enhancements

#### 5.1.1 Input Validation with Zod

A reusable `validate` middleware was introduced to enforce request schemas at the route level using Zod. Every mutation endpoint now validates all inputs before they reach business logic, returning structured 400 errors on invalid data. This eliminates an entire class of runtime errors and injection vectors.

**Registration schema (key constraints)**:
- `name`: 2–80 characters
- `phone`: matches Indian mobile regex (`/^(\+?91)?[6-9]\d{9}$/`)
- `pincode`: exactly 6 digits
- `bio`: max 300 characters (optional)
- `price`: max 30 characters (optional)

**Review schema**:
- `rating`: integer 1–5
- `comment`: max 500 characters (optional)

#### 5.1.2 Rate Limiting

`express-rate-limit` was applied per-route to prevent abuse:

| Endpoint | Limit |
|---|---|
| `POST /api/worker/register` | 10 registrations per IP per hour |
| `POST /api/review/:id` | 5 reviews per IP per 24 hours |

Both limiters use standard headers and return a descriptive JSON error message on violation.

#### 5.1.3 Reviews API

**`POST /api/review/:id`** — Accepts `{ rating: 1–5, comment?: string }`, computes a rolling weighted average, and persists the updated `rating` and `reviewCount` on the provider document.

Rolling average formula:
```
newRating = (previousRating × previousCount + newRating) / (previousCount + 1)
```

The result is rounded to two decimal places. The response returns the updated `rating` and `reviewCount` so both web and mobile clients can refresh without re-fetching the full provider.

#### 5.1.4 Provider Fetch by ID

**`GET /api/worker/:id`** — Returns a single provider document by MongoDB ObjectId. Uses `.lean()` for minimal overhead. Returns a 404 if the ID does not match any document and a 400 if the ID is not a valid ObjectId.

This endpoint is the foundation of the provider profile pages on both web and mobile.

#### 5.1.5 Availability Toggle

**`PATCH /api/worker/:id/availability`** — Accepts `{ available: boolean }` and updates the provider's availability status. Returns only `name` and `available` to minimise response payload. This enables the future self-service dashboard where providers can mark themselves offline.

#### 5.1.6 Admin Verification Endpoint

**`PATCH /api/worker/:id/verify`** — A protected endpoint that sets `verified: true` on a provider document. Access requires the `x-admin-secret` header to match the `ADMIN_SECRET` environment variable. Returns 403 on invalid or missing credentials. This is the backend mechanism for the manual verification workflow described in the partner onboarding flow.

#### 5.1.7 Service Alias Normalisation

A `serviceAliases.ts` library maps common user inputs to canonical service names and stores synonyms in the `serviceAliases` array field. For example, a user entering "AC Repair" produces canonical `"ac repair"` and aliases such as `["ac", "air conditioning", "air conditioner"]`. The search controller queries against both the `service` field and the `serviceAliases` array, ensuring that a search for "air conditioning" returns providers registered as "ac repair."

This normalisation engine powers two additional compound indexes on the Provider collection:
- `(pincode, serviceAliases)` — for alias-based location search
- `(phone, service)` — unique constraint preventing duplicate registrations

#### 5.1.8 Duplicate Registration Prevention

Before inserting a new provider document, the registration endpoint checks for an existing record with the same `(phone, service)` pair. If a match exists, it returns a `409 Conflict` with the message "Already registered for this service." A database-level unique compound index on `(phone, service)` acts as a second safety net, catching any race conditions.

#### 5.1.9 Security Hardening

- **Helmet** — Sets 14 security-relevant HTTP response headers (including `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, and `Content-Security-Policy`) on every response.
- **Morgan** — HTTP request logging in `combined` format in production and `dev` format in development. Provides an audit trail for all API calls.
- **Body size limit** — `express.json` is configured with a `100kb` payload limit to prevent JSON bomb attacks.
- **Origin allowlist** — CORS reads allowed origins from the `CORS_ORIGINS` environment variable, rejecting all unlisted origins.
- **Structured error middleware** — A `notFound` handler returns a 404 JSON response for unmatched routes. An `errorHandler` middleware catches all uncaught errors and returns a 500 with a sanitised message, preventing stack traces from leaking to clients.

### 5.2 Database Schema Evolution

The Provider schema was substantially extended to support the full platform feature set.

| Field | Type | New in End-Sem | Notes |
|---|---|---|---|
| `name` | String | — | Required |
| `phone` | String | — | Required |
| `pincode` | String | — | Required, indexed |
| `location` | String | — | Required |
| `service` | String | — | Required, lowercase, indexed |
| `city` | String | — | Required, lowercase |
| `serviceAliases` | [String] | ✓ | Normalised synonyms, indexed |
| `bio` | String | ✓ | Optional, max 300 chars |
| `rating` | Number | ✓ | 0–5, rolling average |
| `reviewCount` | Number | ✓ | Total reviews received |
| `price` | String | ✓ | Provider's stated rate (optional) |
| `image` | String | ✓ | Profile image URL (optional) |
| `badges` | [String] | ✓ | e.g., "Top Rated", "Quick Responder" |
| `verified` | Boolean | ✓ | Set by admin via verify endpoint |
| `available` | Boolean | ✓ | Provider availability flag |
| `geo` | `{lat, lng}` | ✓ | Coordinates for future map integration |
| `createdAt` | Date | — | Auto-generated |
| `updatedAt` | Date | — | Auto-generated |

**Index summary:**

| Index | Purpose |
|---|---|
| `(pincode, service)` | Primary search optimisation |
| `(pincode, serviceAliases)` | Alias-based search optimisation |
| `(phone, service)` — unique | Duplicate registration prevention |

### 5.3 Web Application Enhancements

#### 5.3.1 Provider Profile Page — `/providers/[id]`

A dynamic server-side rendered page that fetches and displays a complete provider profile. Features:

- **Header card**: Provider avatar (initial letter if no image), name, service badge, verification shield (`ShieldCheck` icon overlaid on avatar), availability indicator, star rating with review count, location, city, and price
- **Bio section**: Renders the provider's bio if present
- **Contact CTA**: A prominent "Call Now" button using `tel:` protocol for one-tap calling
- **Review form**: Interactive star rating selector (1–5) with optional comment field, form submission via `POST /api/review/:id`, and inline feedback

**SEO metadata** is generated server-side via Next.js `generateMetadata`:
```
Title: "{name} — {service} | Around-U"
Description: "{bio}" or "{name} offers {service} services in {city}."
```

Provider data is fetched with `{ next: { revalidate: 60 } }` — cached and revalidated every 60 seconds, balancing freshness with server load.

#### 5.3.2 Advanced Filter Panel — `/find-help`

A collapsible filter panel was added to the search results page, activated by a Filter icon button. Controls:

| Filter | Type | Behaviour |
|---|---|---|
| Verified Only | Toggle | Hides providers where `verified !== true` |
| Minimum Rating | 0–5 slider | Hides providers with `rating < minRating` |
| Sort By | Select | Sorts results by `rating`, `reviewCount`, or `name` |

Filters are applied client-side on the current result set, enabling instant feedback without additional API calls. The filter state is reset when a new search is initiated.

A "nearby fallback" indicator is shown when the API returns `usedNearby: true` in the response — informing the user that no exact-pincode matches were found and the results include providers from adjacent areas.

#### 5.3.3 Pagination

The find-help page implements full pagination. Each search page fetches 20 results at a time via `?page=N&limit=20` query parameters. Previous/Next page controls are rendered when more than one page of results exists. A `page` state variable is reset to 1 on every new search query.

#### 5.3.4 Landing Page Completion

Three sections held back from the mid-semester submission were enabled:

- **Stats section**: Platform metrics — "500+ Neighbours Helped", active cities, and categories served
- **Features section**: Highlights the platform's three differentiators — zero commission, verified professionals, and direct contact
- **CTA section**: A full-width call-to-action at the bottom of the landing page, driving conversions to both the Find Help and Become a Partner flows

#### 5.3.5 Additional Pages

| Page | Purpose |
|---|---|
| `/how-it-works` | Step-by-step guide to using the platform for customers |
| `/for-workers` | Dedicated landing page for service professionals explaining the partner programme |
| `/safety` | Trust and safety page outlining verification requirements and user protections |

These pages fulfil the promise made to users in the main navigation and hero CTAs, completing the full web experience.

#### 5.3.6 Expanded Service Categories

The service category list was expanded from 6 to 9 categories, aligned across web and mobile:

`Plumber • Electrician • Carpenter • Cleaner • Painter • Tutor • AC Repair • Mechanic • Gardener`

### 5.4 Mobile Application Enhancements

#### 5.4.1 ProviderDetailScreen

A new full-screen view was added to the mobile app, reachable by tapping the "Profile" button on any search result card in FindHelpScreen. The screen displays:

- **Provider header**: Avatar with verified badge overlay, service tag, name, star rating with review count
- **Detail cards**: Location, city, pincode, bio, price
- **Call CTA**: A full-width button using `Linking.openURL('tel:...')` for direct calling
- **Review form**: Star rating selector (tap to select 1–5 stars) with an optional comment input and a Submit button, wired to `POST /api/review/:id` on the deployed backend

The screen is registered in the Stack Navigator above the Bottom-Tab Navigator, so it slides in from the right and preserves the tab state on back navigation.

```
App Root
  └── Stack Navigator
        ├── HomeScreen            (Onboarding / Splash)
        ├── ProviderDetailScreen  (NEW — provider profile & review)
        └── Main Tab Navigator    (Bottom Tabs)
              ├── Find Help Screen
              └── Partner Screen
```

#### 5.4.2 Load-More Pagination — FindHelpScreen

The FindHelpScreen now renders a "Load More" button at the bottom of search results when additional pages are available. Each press fetches the next page (`?page=N`) and appends the results to the existing list, providing an infinite-scroll-like experience without full page replacement.

#### 5.4.3 Bio and Price Fields — PartnerScreen

The partner registration form on mobile was extended to match the web form — adding optional `bio` (multi-line text input, 300-character limit) and `price` (single-line text input) fields. Both fields are included in the registration API payload when filled.

#### 5.4.4 Service Category Sync

The mobile app's quick-pick category grid was updated from 4 to 9 categories, exactly matching the web client's category list. This ensures consistent service coverage expectations across both surfaces.

### 5.5 Database Seeding

A TypeScript seeding script (`seed.ts`) was written to populate the database with realistic provider data for demonstrations and testing. The seed dataset comprises:

- **64 providers** across **8 cities** (Bangalore, Chennai, Delhi, Hyderabad, Jaipur, Kolkata, Mumbai, Pune)
- **9 service categories**: Plumber, Electrician, Carpenter, Cleaner, Painter, Tutor, AC Repair, Mechanic, Gardener
- Each provider entry includes: name, phone, service, city, pincode, location, bio, price, badges, and verification status

The script is runnable via `npm run seed` and uses `upsert` semantics (matching on phone + service) to prevent duplicate inserts on re-runs.

---

## 6. SECURITY AND RELIABILITY ENGINEERING

Security was treated as a first-class concern in the end-semester phase. The following measures were implemented:

| Concern | Measure |
|---|---|
| HTTP header vulnerabilities | Helmet middleware (14 headers) |
| Request flooding | express-rate-limit (per-route limits) |
| Input injection / malformed data | Zod schema validation on all mutation endpoints |
| Oversized payloads | express.json 100 KB body limit |
| Cross-origin abuse | Origin allowlist via `CORS_ORIGINS` env var |
| Duplicate registrations | Application-level check + unique DB index |
| Unauthorised admin actions | `x-admin-secret` header gate on verify endpoint |
| Stack trace leakage | Structured `errorHandler` middleware returning sanitised messages |
| Audit trail | Morgan HTTP logging in production |

These measures collectively bring the API to a standard appropriate for public internet exposure, protecting both the platform and its users.

---

## 7. TESTING

Comprehensive testing was conducted across all three platform components to verify functional correctness, security, and robustness.

### 7.1 API Testing

All REST endpoints were tested using Postman and Thunder Client. The following scenarios were validated:

**Registration (`POST /api/worker/register`)**
- Valid registration creates a provider and returns 201 with the document
- Missing required fields return 400 with field-level Zod error messages
- Invalid phone number (non-Indian format) returns 400
- Invalid pincode (non-6-digit) returns 400
- Duplicate registration (same phone + service) returns 409
- Rate limit exceeded after 10 requests/hour returns 429

**Search (`GET /api/search`)**
- Returns matching providers filtered by `service` and `pincode`
- Alias-based search (e.g., "air conditioning") returns ac-repair providers
- `usedNearby: true` flag is set when no exact-pincode matches are found
- Pagination parameters (`page`, `limit`) return correct subsets
- Empty results return `count: 0` and `data: []`

**Provider Fetch (`GET /api/worker/:id`)**
- Valid ObjectId returns provider document
- Unknown ObjectId returns 404
- Malformed ObjectId returns 400

**Reviews (`POST /api/review/:id`)**
- Valid review updates `rating` and `reviewCount` with correct rolling average
- Rating outside 1–5 returns 400 (Zod)
- Rate limit exceeded (5 reviews/day) returns 429
- Invalid provider ID returns 400

**Availability Toggle (`PATCH /api/worker/:id/availability`)**
- Sets `available: false` and returns updated provider
- Non-boolean value returns 400

**Admin Verify (`PATCH /api/worker/:id/verify`)**
- Correct `x-admin-secret` sets `verified: true`
- Missing or wrong secret returns 403

### 7.2 Web Application Testing

- Cross-browser compatibility verified on Chrome, Safari, and Firefox
- Responsive layout tested across mobile (375 px), tablet (768 px), and desktop (1280 px+) breakpoints
- Provider profile page verified for correct metadata rendering and review submission
- Filter panel verified: verified-only toggle hides unverified providers; minimum-rating filter hides below-threshold providers; sort options produce correct ordering
- Pagination: page increment fetches next set; back to page 1 on new search
- Partner registration form: all Zod-enforced validations surfaced to the user before submission
- Additional pages (`/how-it-works`, `/for-workers`, `/safety`) render correctly on all breakpoints

### 7.3 Mobile Application Testing

- Application tested on iOS Simulator and Android Emulator via Expo Dev Tools
- ProviderDetailScreen: navigation from FindHelpScreen works; call button opens dialer; review submission shows alert with updated rating
- Load-more pagination: "Load More" button appears when additional pages exist; results append correctly
- Partner registration: bio and price fields included in API payload
- Service category grid: all 9 categories display and trigger correct search queries
- Navigation back from ProviderDetailScreen preserves FindHelpScreen state

---

## 8. RESULTS AND DEMONSTRATION

### Live Platform

The Around-U platform is fully deployed and accessible at **https://www.aroundu.space**. The backend API is live at **https://around-u-ma5e.onrender.com**.

### Platform State at End-Semester

| Metric | Value |
|---|---|
| Total API endpoints | 6 |
| Supported service categories | 9 |
| Providers in database | 64+ (across 8 cities) |
| Web pages | 7 |
| Mobile screens | 4 |
| Lines of TypeScript (approx.) | ~2,500 |
| Deployment platforms | Render (API), MongoDB Atlas (DB), Vercel-compatible (web) |

### Key User Flows

**Customer — Find a Service Provider**
1. Visit `aroundu.space/find-help`
2. Select a service category (e.g., "Electrician") or type a custom query
3. Enter a 6-digit pincode
4. Browse paginated results; apply filters (verified only, min rating, sort)
5. Click a provider card to view full profile at `/providers/[id]`
6. Tap "Call Now" to initiate direct contact

**Service Professional — Register as a Partner**
1. Visit `aroundu.space/partner`
2. Fill in name, phone, service, pincode, location, city, optional bio and price
3. Submit form → 24-hour manual verification process begins
4. Admin verifies via `PATCH /api/worker/:id/verify` with admin secret

**Customer — Submit a Review**
1. Navigate to a provider's profile page (web or mobile)
2. Select 1–5 stars; optionally enter a comment
3. Submit → rolling average updated in real time; confirmation shown

---

## 9. CHALLENGES AND LEARNINGS

### Technical Challenges

**1. Service Name Normalisation**
Users search using natural language — "AC", "air conditioning", "air conditioner", "AC repair" — but providers register under a canonical service name. Bridging this required a service alias dictionary and a second compound index on `(pincode, serviceAliases)`. The key learning was that user-facing search must always account for vocabulary mismatch, and indexing on arrays requires understanding MongoDB's multikey index semantics.

**2. Rolling Review Averages Without a Separate Reviews Collection**
The decision to store `rating` and `reviewCount` directly on the Provider document (rather than a separate Reviews collection) kept queries simple but required atomic read-modify-write logic to avoid race conditions under concurrent reviews. The current implementation is suitable for the project scale; a production system would use MongoDB's `$inc` and aggregation pipeline updates atomically.

**3. React Native Navigation State Preservation**
Placing ProviderDetailScreen inside the Stack Navigator above the Tab Navigator (rather than inside a tab) was necessary to allow the screen to slide over the entire UI, including the tab bar. Getting the navigation hierarchy right required understanding the difference between Stack and Tab navigator scopes in React Navigation.

**4. Next.js Dynamic Route Metadata**
Generating per-provider SEO metadata required using the asynchronous `generateMetadata` function in the App Router paradigm. Awaiting `params` before fetching the provider was a subtle requirement introduced in Next.js 15+ that caused an initial runtime error.

### Engineering Learnings

- **Validate early, validate everywhere** — Introducing Zod at the route level eliminated an entire class of downstream errors and simplified controller logic significantly.
- **Rate limiting is cheap to add, expensive to omit** — Public-facing mutation endpoints without rate limiting are trivially abusable; adding `express-rate-limit` took under an hour and meaningfully hardens the API.
- **Seed data is a feature** — A database with representative, realistic data is essential for demonstrating and testing the platform. The 64-provider seed dataset made every demo credible.
- **TypeScript across the full stack** — Sharing interface definitions and keeping all three tiers in TypeScript eliminated entire categories of integration bugs (e.g., field name mismatches between API and client).

---

## 10. CONCLUSION AND FUTURE WORK

### 10.1 Conclusion

The Around-U platform has evolved from a working prototype into a production-hardened, feature-complete hyperlocal service marketplace. Over the full course of the Capstone project, the team delivered a REST API with six endpoints, a web application with seven pages, and a mobile application with four screens — all sharing a single TypeScript codebase philosophy and a single backend, deployed and accessible to real users.

The end-semester phase delivered significant value beyond the mid-semester baseline:

- A reviews and ratings system that enables trust to accumulate on the platform over time
- Provider profile pages that give customers a complete picture of a professional before committing to a call
- Advanced search filtering that makes the discovery experience meaningfully more useful
- Production-grade security hardening that makes the API safe for public internet exposure
- A seeded database that demonstrates the platform's value with realistic, diverse data

The project demonstrates that modern full-stack and cross-platform technologies can be applied to solve genuine, everyday problems at the community level. The no-commission, direct peer-to-peer model remains the platform's core differentiator — a design decision that serves both customers and service professionals better than the extractive models dominant in the current market.

### 10.2 Future Work

The following enhancements are planned for subsequent development phases:

| Feature | Description |
|---|---|
| **Authentication & User Accounts** | JWT-based authentication for persistent customer and provider sessions with secure profile management. The availability toggle and review endpoints are already designed with authenticated users in mind. |
| **Real-Time Provider Matching** | WebSocket-based live availability status so customers can see which providers are currently online. The `available` field is already in the schema. |
| **In-App Messaging** | Real-time chat between customers and providers for scope, timing, and pricing negotiation before committing. |
| **Admin Dashboard** | Web UI for the verification workflow — approving provider applications, managing badges, viewing platform analytics. |
| **Payment Integration** | UPI and card-based payment processing within the platform, enabling the full transaction to occur without leaving Around-U. |
| **Map-Based Discovery** | The `geo` field (lat/lng) is already in the Provider schema; it awaits a map interface and geospatial radius query using MongoDB's `$near` operator. |
| **Push Notifications** | Expo-based push notifications for booking confirmations, review responses, and availability updates. |
| **Dedicated Reviews Collection** | Migrating from aggregated `rating`/`reviewCount` fields to a separate Reviews collection to enable sorting by reviewer, displaying individual comments, and supporting review moderation. |

---

## 11. REFERENCES

[1] Node.js Foundation. *Node.js Official Documentation.* https://nodejs.org/en/docs

[2] OpenJS Foundation. *Express.js Official Documentation.* https://expressjs.com

[3] MongoDB Inc. *MongoDB Official Documentation.* https://www.mongodb.com/docs

[4] Automattic. *Mongoose ODM Documentation.* https://mongoosejs.com/docs

[5] Vercel Inc. *Next.js Official Documentation.* https://nextjs.org/docs

[6] Expo Inc. *React Native & Expo Documentation.* https://docs.expo.dev

[7] Tailwind Labs Inc. *Tailwind CSS Documentation.* https://tailwindcss.com/docs

[8] WorkOS / Radix UI. *Radix UI Component Library.* https://www.radix-ui.com

[9] React Navigation Team. *React Navigation Documentation.* https://reactnavigation.org/docs

[10] Render Inc. *Render Cloud Deployment Documentation.* https://render.com/docs

[11] MongoDB Inc. *MongoDB Atlas — Cloud Database Service.* https://www.mongodb.com/atlas

[12] Colin McDonnell. *Zod — TypeScript-first schema validation.* https://zod.dev

[13] Evan Hahn et al. *Helmet.js — Secure Express apps with HTTP headers.* https://helmetjs.github.io

[14] Express Rate Limit Contributors. *express-rate-limit.* https://express-rate-limit.mintlify.app

[15] Morgante Pell. *Morgan — HTTP request logger middleware.* https://github.com/expressjs/morgan
