# Sanatani Gomata Samiti — Official Web Platform

Official website of **SANATANI GOMATA SAMITI** (सनातनी गोमाता समिति / সনাতনী গোমাতা সমিতি).

An Indian organization working towards:
1. Gau Seva and Gomata Protection
2. Sustainable and Natural Agriculture
3. Animal Husbandry
4. Matri Shakti and Women's Empowerment
5. Rural Development and Self-Reliant Bharat

---

## Technology Stack
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS
- **Multilingual Support:** English, हिन्दी, বাংলা (Live reactive switcher)
- **Database & Auth:** Supabase (PostgreSQL with Row Level Security)
- **Icons:** Lucide React

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Update with your Supabase credentials.

### 3. Database Migration
Run the SQL script located at:
`supabase/migrations/001_initial_schema.sql`

### 4. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 5. Production Build
```bash
npm run build
npm run start
```

---

## Routes & Pages
- `/` - Homepage
- `/about` - About Us & Our Story
- `/gau-seva` - Gau Seva & Gomata Protection
- `/agriculture` - Natural & Sustainable Agriculture
- `/matri-shakti` - Matri Shakti & Women's Empowerment
- `/animal-husbandry` - Animal Husbandry & Rural Prosperity
- `/activities` - Activities & News
- `/gallery` - Media Vault & Documentation
- `/contact` - Inquiries & Contact Details
- `/auth/sign-in` - Sign In
- `/auth/sign-up` - Membership Registration
- `/dashboard` - Member Portal
- `/admin` - Administrator CMS & Control Center
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
