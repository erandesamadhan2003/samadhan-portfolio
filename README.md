# Samadhan Erande – Portfolio

A futuristic, premium engineering portfolio built with React + Framer Motion.

## Tech Stack
- **React 18** – UI framework
- **Vite** – Build tool
- **Tailwind CSS** – Styling
- **Framer Motion** – Animations & transitions
- **Lucide React** – Icons

## Design
- Warm matte black background (#0F0F0F)
- Burnt orange accent (#FF7A00) + amber (#FFB347)
- Sora + Space Grotesk + JetBrains Mono typography
- Glassmorphism cards with animated borders
- Custom cursor, floating cards, animated subtitles

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag the `dist/` folder into Netlify dashboard
```

### GitHub Pages
```bash
npm run build
# Push contents of dist/ to gh-pages branch
```

## Customization

- **Photo**: Replace `public/samadhan.jpg` with any photo
- **Content**: Edit component files in `src/components/`
- **Colors**: Modify CSS variables in `src/index.css`
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`

## Project Structure
```
samadhan-portfolio/
├── public/
│   ├── samadhan.jpg      # Profile photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Cursor.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
