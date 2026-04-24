# MIT Muslim Students Association Website

The official website for the MIT Muslim Students Association (MSA).

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (HashRouter for static hosting)
- **Vanilla CSS** - Custom design system with CSS variables

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build
```

This generates static files in the `dist/` folder that can be deployed to any static hosting service, including MIT Athena.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── pages/               # Page components (Home, About, Prayer, etc.)
├── styles/              # CSS architecture
│   ├── index.css        # Main entry point
│   ├── variables.css    # Design tokens (colors, spacing, etc.)
│   ├── reset.css        # CSS reset
│   ├── layout.css       # Page structure styles
│   ├── components.css   # Reusable component styles
│   ├── utilities.css    # Utility classes
│   └── main.css         # Page-specific styles
└── assets/              # Images and icons
```

## Deployment to MIT Athena

Run the deployment script from the project root:

```bash
chmod +x deploy.sh
./deploy.sh
```

The site uses `HashRouter` which works without server-side routing configuration.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for coding standards and guidelines.

## License

MIT Muslim Students Association
