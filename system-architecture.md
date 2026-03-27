# System Architecture: Around-U

Around-U is a hyper-local service discovery platform connecting users with service providers (workers) in their vicinity based on location and service category.

## 1. Frontend Architecture

Around-U uses a dual-client strategy to reach users on both web and mobile platforms.

### 1.1 Web Client (Next.js)
- **Framework**: Next.js 16 (App Router)
- **React version**: 19
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **UI Components**: Radix UI (base), Lucide React (icons), Framer Motion (animations)
- **State Management**: React Server Components (RSC) + Client Components with `useState`/`useContext`
- **API Fetching**: Native Fetch API / Axios

### 1.2 Mobile Client (Expo)
- **Framework**: Expo (React Native)
- **React version**: 19
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **Animations**: React Native Reanimated
- **Icons**: Expo Vector Icons (Tabler/Lucide)
- **Build Tool**: Expo Application Services (EAS)

---

## 2. Backend Architecture

A centralized Node.js server serves both the web and mobile clients.

- **Platform**: Node.js (Latest LTS)
- **Framework**: Express.js v5 (Alpha/Beta - modern async support)
- **Language**: TypeScript (using ES Modules)
- **API Style**: RESTful API
- **Middleware**: 
    - `cors`: Cross-Origin Resource Sharing
    - `express.json()`: Body parsing
    - `dotenv`: Environment variable management

---

## 3. Database Architecture

- **Engine**: MongoDB
- **ORM/ODM**: Mongoose
- **Scaling**: Indexing on `pincode` and `service` for fast geo-proximal searches.

### 3.1 Data Models (High-Level)
- **User**: Profile info, authentication data, saved providers.
- **Provider**: Professional details, service category, location (pincode/city), contact info.
- **Review**: Ratings and feedback linking Users to Providers.

---

## 4. API & Integration Layer

The server exposes a REST API used by both clients.

### 4.1 Key Endpoints
- `GET /api/search`: Search providers by service and location/pincode.
- `GET/POST /api/worker`: Management of provider profiles.
- `AUTH`: (Planned) User and Provider authentication/onboarding.

---

## 5. Deployment & DevOps

- **Version Control**: Git (GitHub)
- **Backend Hosting**: Render, Railway, or AWS App Runner
- **Web Frontend**: Vercel (optimized for Next.js)
- **Mobile Distribution**: App Store (iOS) and Google Play (Android) via Expo EAS
- **Database**: MongoDB Atlas (Managed Cloud MongoDB)
- **CI/CD**: GitHub Actions for automated testing and deployment

---

## 7. Implementation Roadmap & Task Breakdown

This roadmap outlines the steps to build the full Around-U platform.

### Phase 1: Foundation (P0)
- [ ] **Task 1: Database Refinement** → Verify: Mongoose schemas for User, Provider, and Review are finalized.
    - Agent: `database-architect` | Skill: `database-design`
- [ ] **Task 2: API Base Setup** → Verify: Express server with base routes and error handling is operational.
    - Agent: `backend-specialist` | Skill: `api-patterns`

### Phase 2: Core Features (P1)
- [ ] **Task 3: Search Implementation** → Verify: `GET /api/search` returns providers based on pincode/service.
    - Agent: `backend-specialist` | Skill: `api-patterns`
- [ ] **Task 4: Web Frontend Core** → Verify: Next.js search page with Radix UI components is responsive.
    - Agent: `frontend-specialist` | Skill: `frontend-design`
- [ ] **Task 5: Mobile App Navigation** → Verify: Expo app with Bottom Tabs (Home, Search, Profile) is running.
    - Agent: `mobile-developer` | Skill: `mobile-design`

### Phase 3: Advanced Features (P2)
- [ ] **Task 6: Real-time Notifications** → Verify: Socket.io server integrated for instant alerts.
    - Agent: `backend-specialist` | Skill: `nodejs-best-practices`
- [ ] **Task 7: Review & Rating System** → Verify: Users can submit reviews and see provider ratings.
    - Agent: `frontend-specialist` / `mobile-developer`

### Phase X: Verification
- [ ] **Lint & Type Check**: `npm run lint` and `tsc --noEmit`
- [ ] **Security Scan**: `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .`
- [ ] **UX Audit**: `python .agent/skills/frontend-design/scripts/ux_audit.py .`
- [ ] **Build Check**: `npm run build` in each directory.

---

## 8. Development Commands
```bash
# Start backend
cd server && npm run dev

# Start web client
cd client && npm run dev

# Start mobile app
cd app && npx expo start
```
