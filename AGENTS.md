<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Information

### Project Overview
MindFuture - A modern, futuristic mental health website with advanced animations and unique visual design.

### Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Project Structure
```
mental-health-site/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and animations
├── public/
│   ├── images/
│   │   ├── profissionais/  # Add professional photos here
│   │   ├── servicos/       # Add service images here
│   │   ├── pacientes/      # Add patient photos here
│   │   └── hero/           # Add hero image here
│   └── videos/
│       ├── profissionais/  # Add professional videos here
│       └── apresentacao.mp4 # Main presentation video
└── README.md             # Detailed documentation
```

### Key Features
- Animated loader with brain icon
- Particle background effect
- Dynamic gradient animations
- Interactive hover effects on all elements
- Futuristic color palette (purple, cyan, pink)
- Responsive design
- Smooth scroll behavior

### Adding Images and Videos
See README.md for detailed instructions on where to place images and videos, and how to integrate them into the code.

### Customization
- Colors: Modify Tailwind classes in `app/page.tsx`
- Animations: Adjust Framer Motion properties
- Content: Update text directly in `app/page.tsx`
- Styles: Add custom CSS in `app/globals.css`
