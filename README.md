# Neda Labs Website

A modern, high-conversion fintech website for Neda Labs - building the future of finance in East Africa.

## Features

- 🎨 Modern, trustworthy design with clean typography (Neue Haas Grotesk)
- 🎯 High-conversion layout optimized for fintech
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS
- 🔄 Auto-sliding hero section showcasing all products

## Products Highlighted

1. **BOT-Regulated Stablecoins** - Tanzania-focused digital currency
2. **Instant Global Payments** - Lightning-fast transactions
3. **Developer APIs** - Global payout infrastructure
4. **JUKUMU Network** - Regenerative finance for community impact

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
neda-labs-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroSlider.tsx      # Auto-sliding hero section
│   │   ├── Products.tsx        # Product showcase
│   │   ├── Features.tsx        # Key features
│   │   ├── JUKUMU.tsx          # JUKUMU Network section
│   │   ├── Developers.tsx      # Developer API section
│   │   ├── CTA.tsx             # Call-to-action
│   │   └── Footer.tsx          # Footer
│   ├── fonts/                  # Custom fonts (Neue Haas Grotesk)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- **Primary**: Blue tones for trust and stability
- **Accent**: Purple/pink for innovation
- **Dark**: Professional dark grays

### Typography

The website uses Neue Haas Grotesk font. To use it:
1. Add font files to `app/fonts/` directory
2. Font files needed:
   - `NeueHaasDisplay-Roman.woff2`
   - `NeueHaasDisplay-Medium.woff2`
   - `NeueHaasDisplay-Bold.woff2`

Alternatively, use system fonts by removing the font configuration in `app/layout.tsx`.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the .next folder
```

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

© 2024 Neda Labs. All rights reserved.

## Contact

- **Location**: Dar es Salaam, Tanzania
- **Email**: hello@nedalabs.com
- **Phone**: +255 123 456 789
