# JanSahay AI – Smart Government Welfare Assistant
> **Project Viksit Bharat 2026 | Public Services (Problem Statement 11)**  
> *One Platform. Every Government Scheme.*

JanSahay AI is an enterprise-grade AI-powered Government Welfare Scheme Discovery & Application Platform designed to eliminate paperwork, middlemen, and confusion for Indian citizens. It enables seamless discovery, instant eligibility calculation, document OCR auto-filling, direct application submission, and real-time status tracking across 1,000+ central and state schemes.

---

## 🌟 Key Features

1. **AI-Powered Scheme Discovery Engine**:
   - Matches citizen profiles (Age, Income, Occupation, Location, Social Category, Special Status) against government regulations in real-time.
   - Calculates percentage match scores, eligibility criteria checklists, and missing document prompts.

2. **Multilingual Text & Voice AI Assistant**:
   - Supports **12 Indian Languages** (English, Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Malayalam, Punjabi, Bengali, Odia, Urdu).
   - Voice search, speech-to-text input, and text-to-speech audio synthesis for hands-free public accessibility.

3. **AI Document Vault & OCR Scanner**:
   - Extracts structured details from Aadhaar, PAN, Income Certificates, Caste Certificates, and Bank Passbooks with >98% confidence.
   - Auto-fills complex application wizard forms.

4. **Multi-Role Portals**:
   - **Citizen Hub**: Application lifecycle timeline, saved bookmarks, verified document vault, and citizen reward points.
   - **Officer Portal**: Department review queue, document inspection panel, 1-click DBT approval triggers, and workload analytics.
   - **Admin Console**: Scheme catalog editor, department onboarding, audit logs, and AI fraud guard monitoring.

5. **Interactive Nearby Assistance Locator**:
   - Map of Common Service Centers (CSC), Digital Seva Kendras, Tehsil Offices, and Bank Kiosks with direct Google Maps navigation.

6. **WCAG 2.2 Accessibility Compliance**:
   - Built-in High Contrast mode, Font Size Scaler (A / A+ / A++), Dark Mode, and Screen Reader labels.

---

## 🏗️ Architecture & Tech Stack

- **Frontend**: Next.js 15 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Recharts.
- **Backend & Database**: Next.js API Routes, PostgreSQL, Prisma ORM.
- **AI Services**: Rule & Similarity Eligibility Engine, Document OCR Parser, Multilingual NLP & Voice Synthesis.
- **Security**: AES-256 Data Encryption, eKYC Sandboxing, MeitY Guidelines Compliance.

---

## 🚀 Quick Start Instructions

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma ORM schema
npx prisma generate

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Docker Deployment

```bash
# Start Next.js App & PostgreSQL Database via Docker Compose
docker-compose up -d --build
```

---

## 📄 License
Designed for **Project Viksit Bharat 2026** • MeitY Public Infrastructure.
