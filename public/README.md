# Public Assets Directory

This directory contains all public assets for the Neda Labs website.

## Structure

```
public/
├── assets/
│   ├── logos/          # Brand logos (PNG, SVG, etc.)
│   └── images/         # Product images, screenshots, etc.
└── favicon.ico         # Website favicon
```

## Usage

### Logos
Place your brand logos in `public/assets/logos/`:
- `logo.svg` - Main logo (SVG format recommended)
- `logo-dark.svg` - Dark mode variant
- `logo-light.svg` - Light mode variant
- `favicon.png` - Favicon

### Images
Place product images and screenshots in `public/assets/images/`:
- Product screenshots
- Feature images
- Team photos
- Hero images

## Referencing Assets

In your components, reference assets using the public path:

```jsx
// Logo
<img src="/assets/logos/logo.svg" alt="Neda Labs" />

// Images
<img src="/assets/images/product-screenshot.png" alt="Product" />
```

## Best Practices

- Use SVG format for logos (scalable and small file size)
- Optimize images before uploading (use tools like TinyPNG)
- Use descriptive filenames
- Keep file sizes minimal for better performance
- Use WebP format for images when possible
