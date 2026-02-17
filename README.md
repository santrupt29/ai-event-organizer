# Evento

**Evento** is a modern, AI-powered event organization platform that empowers users to create, discover, and manage events seamlessly. Leveraging **Google Gemini AI**, Evento assists organizers in generating compelling event details, while providing a smooth experience for attendees with secure ticketing and real-time updates.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript / JavaScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Backend & Database:** [Convex](https://www.convex.dev/)
- **Authentication:** [Clerk](https://clerk.com/)
- **AI Integration:** [Google Generative AI](https://ai.google.dev/) (Gemini 2.0 Flash)
- **Payment & Ticketing:** Custom logic for Free/Paid events with QR Code generation (`html5-qrcode`, `react-qr-code`)
- **Forms:** React Hook Form + Zod

## ✨ Features

- **🤖 AI-Powered Event Creation:** Generate event titles, descriptions, and categories instantly using Google Gemini AI.
- **🔐 Secure Authentication:** Seamless sign-up and login via Clerk.
- **📅 Event Management:** diverse tools to create, update, and manage events.
- **🎟️ Smart Ticketing System:** 
  - Support for Free and Paid events.
  - Generates unique QR codes for every ticket.
  - Real-time check-in status tracking.
- **🔍 Explore & Search:** Dynamic search and filtering by category to discover events.
- **📱 Responsive Design:** Fully optimized for mobile and desktop devices.
- **📊 Organizer Dashboard:** Track registrations and event performance.

## 📂 Project Structure

```bash
ai-event-organizer/
├── app/
│   ├── (auth)/          # Authentication routes (Sign-in, Sign-up)
│   ├── (main)/          # Protected routes (Create Event, My Events, Tickets)
│   ├── (public)/        # Public routes (Explore, Event Details)
│   ├── api/             # API Endpoints (AI Generation)
│   └── layout.js        # Root layout with Providers
├── components/          # Reusable UI components
├── convex/              # Backend logic
│   ├── schema.js        # Database schema
│   ├── auth.config.js   # Auth configuration
│   └── *.js             # Backend functions (events, users, tickets)
├── lib/                 # Utility functions
├── public/              # Static assets
├── .env.local           # Environment variables
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Accounts for [Clerk](https://clerk.com/), [Convex](https://www.convex.dev/), and [Google AI Studio](https://aistudio.google.com/).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/santrupt29/ai-event-organizer.git
   cd ai-event-organizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add the following keys:
   ```env
   # Convex
   CONVEX_DEPLOYMENT=...
   NEXT_PUBLIC_CONVEX_URL=...

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...

   # Google Gemini AI
   GEMINI_API_KEY=...
   
   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the Backend**
   Run the Convex development server:
   ```bash
   npx convex dev
   ```

5. **Start the Frontend**
   Run the Next.js development server:
   ```bash
   npm run dev
   ```

6. **Open the App**
   Visit `http://localhost:3000` in your browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
