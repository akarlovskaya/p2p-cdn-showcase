# Peer-to-Peer CDN Showcase

![https://p2p-cdn-showcase.vercel.app/dashboard]

A frontend showcase for a decentralized Content Delivery Network (CDN) platform where peers can rent out their edge servers and customers can save on traffic costs.

## 🚀 Features

- **Peer Dashboard**: View server stats, earnings, and network performance
- **Customer Dashboard**: Analyze cost savings and traffic distribution
- **Server Marketplace**: Browse available edge servers with real-time pricing
- **Interactive Analytics**: Visualize network data with Chart.js
- **Responsive Design**: Works on desktop and mobile devices

## 🛠 Tech Stack

**Frontend:**
- ⚛️ React with TypeScript
- 🔼 Next.js (App Router)
- 🎨 Tailwind CSS
- 📊 Chart.js for data visualization
- 📝 React Hook Form for forms
- � React Testing Library + Jest (unit tests)
- 🎁 Playwright (E2E tests)

**Backend (Mock):**
- Next.js API Routes
- JSON-server for mock data

**Design Decisions:**
State Management:
- React Query for server state (API data)
- useState/useContext for client state UI

Testing Strategy:
- Unit tests for components and utils
- Integration tests for complex workflows
- E2E tests for critical user journeys

Performance Optimizations:
- Dynamic imports for heavy components
- Image optimization with Next.js
- Code splitting


## 📂 Project Structure
p2p-cdn-showcase/
├── app/ # Next.js app router
│ ├── api/ # Mock API endpoints
│ ├── (dashboard)/ # Protected routes
│ │ ├── peer/ # Peer dashboard
│ │ └── customer/ # Customer dashboard
│ └── layout.tsx # Root layout
├── components/ # Reusable components
├── features/ # Feature-based modules
│ ├── servers/ # Server marketplace
│ └── analytics/ # Data visualization
├── lib/ # Utilities and helpers
├── public/ # Static assets
├── styles/ # Global styles
├── tests/ # Test files
└── types/ # TypeScript types
