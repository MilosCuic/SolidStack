# SolidStack - Software Development Team

A modern, high-converting presentation website for a professional software development team. Built with Next.js, TypeScript, and Tailwind CSS, featuring automatic language detection (Serbian/English).

## 🌟 Features

- **Bilingual Support**: Automatically detects browser language (Serbian/English)
- **Modern Design**: Dark theme with indigo/violet gradient accents, inspired by Stripe, Linear, and Vercel
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, OpenGraph, and semantic HTML structure
- **Smooth Animations**: Hover effects, transitions, and scroll behavior
- **High Performance**: Built with Next.js 14+ and optimized for speed

## 🎨 Design System

### Color Palette
- **Background**: `#0B0F17` / `#0F172A`
- **Primary Accent**: `#6366F1` (Indigo)
- **Secondary Accent**: `#8B5CF6` (Violet)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1AA`
- **Cards**: `#111827` with subtle borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

## 📄 Sections

1. **Hero Section** - Main headline with CTA buttons and floating visual cards
2. **Trust Strip** - Team credentials and key differentiators
3. **Problem/Solution** - Clear value proposition for non-technical clients
4. **Services** - 6 core service offerings in a responsive grid
5. **Process** - 6-step timeline showing our workflow
6. **Why Us** - 5 key advantages of working with the team
7. **Contact** - Conversion-focused form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone git@github.com:MilosCuic/SolidStack.git
cd solidstack

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## 🌍 Language Detection

The website automatically detects the user's browser language:
- **Serbian** (`sr`): Shows Serbian content
- **All other languages**: Defaults to English

Language detection happens on the client side using `navigator.language`.

## 📁 Project Structure

```
solidstack/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── TrustStrip.tsx   # Trust indicators
│   ├── ProblemSolution.tsx
│   ├── Services.tsx     # Service cards
│   ├── Process.tsx      # Timeline
│   ├── WhyUs.tsx        # Benefits
│   └── Contact.tsx      # Contact form
├── lib/
│   ├── i18n.ts          # Translation strings
│   └── hooks/
│       └── useLanguage.ts
└── public/              # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Dependencies

```json
{
  "next": "^16.2.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4",
  "lucide-react": "latest"
}
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MilosCuic/SolidStack)

### Other Platforms
- **Netlify**: Connect your repository and deploy
- **AWS Amplify**: Use the Next.js preset
- **Docker**: Build with `npm run build` and serve with a Node.js container

## 📝 Customization

### Updating Content

Edit translations in `lib/i18n.ts`:

```typescript
export const translations = {
  sr: { /* Serbian translations */ },
  en: { /* English translations */ }
};
```

### Changing Colors

Update Tailwind classes in components or modify the color palette in `tailwind.config.js`.

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add translations to `lib/i18n.ts`

## 🎯 Conversion Optimization

The website is optimized for lead generation:
- Clear CTAs in hero section
- Direct scroll-to-contact functionality
- Simple, non-intimidating contact form
- Trust indicators throughout
- Business-focused messaging for non-technical clients

## 📄 License

This project is proprietary and confidential.

## 👥 Team

Built for a team of:
- 6 Software Engineers
- 2 Project Managers

Offering MVP development, full product development, system optimization, and team augmentation services.

---

**Need help?** Contact us through the website or open an issue in this repository.
