# agree2disagree.org

Can you agree to disagree?

## Deployment Status

The project is automatically deployed to Vercel. Visit [agree2disagree.org](https://agree2disagree.org) to see the latest production version.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Deployment

Deployments are automated via GitHub Actions. Pushing to the main branch triggers a production deployment to Vercel.

======================================================================
"Agree to Disagree" – Comprehensive Task List
======================================================================
Legend

---

● Smallest atomic task
◎ Epic or milestone grouping related tasks
⮑ Parallel‑friendly tasks (can be worked on independently)

---

0. Project Kick‑Off & Planning
   ◎ 0.1 Define product vision, core features, MVP scope
   ◎ 0.2 Choose tech stack versions (Next.js 14+, TypeScript 5+, Node 20, PostgreSQL 16, Prisma ORM)
   ● 0.3 Create mono‑repo (pnpm workspaces) with `apps/` and `packages/`
   ● 0.4 Configure GitHub project board with labels, milestones, CI status checks
   ● 0.5 Write CONTRIBUTING.md and code style (ESLint, Prettier, 4‑space indent)

1. UX & UI Design
   ◎ 1.1 Produce low‑fidelity wireframes of all screens
   ◎ 1.2 Design high‑fidelity Figma mockups
   ● 1.3 Create component library in Storybook (Button, Card, Modal, VideoPane, QuestionStepper)
   ● 1.4 Define responsive breakpoints/mobile‑first grid
   ● 1.5 Draft accessibility checklist (WCAG 2.2 AA targets)
   ● 1.6 Write copy for onboarding, tooltips, error states

2. Database & Data Modeling
   ◎ 2.1 Identify entities (User, Session, Question, Answer, Match, Blocklist)
   ● 2.2 Draft ER diagram (DBML)
   ● 2.3 Create Prisma schema with migrations
   ● 2.4 Seed database with sample questions and test users
   ● 2.5 Add pgvector extension for future similarity matching

3. Backend / API Layer
   ◎ 3.1 Bootstrap Next.js API route handlers (or separate Fastify service if preferred)
   ● 3.2 Implement auth endpoints (email‑magic‑link + OAuth)
   ● 3.3 Build questions feed endpoint with pagination
   ● 3.4 Build matchmaking endpoint (POST /match → returns roomId or queue position)
   ● 3.5 Secure WebSocket gateway for real‑time queue updates
   ● 3.6 Add rate‑limit middleware and input validation with Zod
   ● 3.7 Write unit tests with Vitest for each handler
   ● 3.8 Generate OpenAPI spec and publish to docs site

4. WebRTC Signaling Service
   ◎ 4.1 Select signaling method (WebSocket server under /api/signaling)
   ● 4.2 Implement join‑room, offer, answer, candidate message types
   ● 4.3 Store transient session state in Redis
   ● 4.4 Add STUN/TURN config (eg. Google STUN + Coturn on Fly.io)
   ● 4.5 Handle disconnect/reconnect and timeout cleanup

5. Frontend – Core Pages
   ◎ 5.1 Landing page with marketing copy and CTA
   ◎ 5.2 Onboarding flow (profile setup, consent, quick mic/cam test)
   ◎ 5.3 Questions stepper component (multiple choice, sliders, etc.)
   ◎ 5.4 Waiting room screen with queue status and cancel option
   ◎ 5.5 Video chat room page (two video elements, min/max layouts)
   ◎ 5.6 Post‑chat feedback modal (thumbs‑up/down, report, add friend)
   ● 5.7 Settings page (audio/video devices, privacy toggles)
   ● 5.8 Error pages (offline, unsupported browser)

6. Frontend – State Management & Hooks
   ● 6.1 Install React Query (TanStack) for API calls
   ● 6.2 Build `useAuth`, `useQuestions`, `useMatchQueue`, `useWebRTC` hooks
   ● 6.3 Implement optimistic updates for answer submission
   ● 6.4 Integrate Zustand for lightweight global UI state (theme, toasts)

7. Styling & Theming
   ● 7.1 Set up Tailwind CSS with custom color palette
   ● 7.2 Create reusable utility classes for video aspect‑ratio boxes
   ● 7.3 Build dark/light themes using CSS variables
   ● 7.4 Animate page transitions with Framer Motion

8. DevOps / Tooling
   ◎ 8.1 Configure Turborepo pipelines (build, test, lint, type‑check)
   ● 8.2 Add GitHub Actions CI: lint + unit tests + Cypress e2e matrix
   ● 8.3 Set up Renovate for dependency updates
   ● 8.4 Provision Vercel project, link GitHub repo, set env vars
   ● 8.5 Add preview deployments on pull requests
   ● 8.6 Create production database on Neon, connect via Prisma
   ● 8.7 Add upstash Redis for signaling state

9. Testing
   ◎ 9.1 Unit tests (Vitest) for utils, hooks, API handlers
   ◎ 9.2 Component tests (React Testing Library)
   ◎ 9.3 End‑to‑end tests (Cypress) covering happy paths
   ● 9.4 WebRTC integration test script using Playwright with fake devices
   ● 9.5 Accessibility audit with axe‑playwright

10. Security & Privacy
    ● 10.1 Enforce HTTPS, HSTS headers
    ● 10.2 Helmet middleware for common headers
    ● 10.3 Add Content Security Policy permitting WebRTC & Vercel assets
    ● 10.4 Implement JWT rotation and refresh flow
    ● 10.5 Comply with GDPR/CCPA data deletion requests
    ● 10.6 Enable Sentry for error tracking (scrub PII)

11. Observability
    ● 11.1 Integrate Vercel Analytics dashboards
    ● 11.2 Add logging middleware (pino) shipping to Logflare
    ● 11.3 Create Grafana Cloud dashboard for STUN/TURN metrics
    ● 11.4 Monitor WebRTC connection stats and drop‑off reasons

12. Performance & Scalability
    ● 12.1 Enable Next.js Image Optimization for avatars
    ● 12.2 Lazy‑load heavy components (video chat) behind dynamic import
    ● 12.3 Add server‑side streaming for initial HTML payload
    ● 12.4 Implement exponential back‑off in matchmaking queue polling
    ● 12.5 Horizontal‑scale signaling service behind Vercel Edge Functions

13. Documentation
    ● 13.1 Write README with local dev instructions
    ● 13.2 Add architectural decision records (ADRs)
    ● 13.3 Publish API reference (Redoc) at /docs
    ● 13.4 Produce user guide and FAQ for launch
    ● 13.5 Record short Loom demos for onboarding contributors

14. Launch & Post‑Launch
    ● 14.1 Run load test using k6 cloud on matchmaking endpoints
    ● 14.2 Perform final pen‑test sweep
    ● 14.3 Tag v1.0.0 release, promote to production
    ● 14.4 Announce on Product Hunt, Hacker News, socials
    ● 14.5 Schedule week‑one user feedback survey
    ● 14.6 Plan roadmap v1.1 (mobile PWA, topic filters, group chats)

======================================================================
