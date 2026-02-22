# ghxgit Website

This directory contains the official website for the ghxgit CLI tool.

## Files

- `index.html` - Main landing page
- `styles.css` - Website styling
- `script.js` - Interactive features
- `_config.yml` - GitHub Pages configuration
- `.nojekyll` - Disables Jekyll processing

## Hosting on GitHub Pages

The website is automatically deployed to GitHub Pages from the `main` branch at:
https://jay-panickerLJ.github.io/ghxgit/

### Setup

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose branch: `main`
4. Choose folder: `/docs`
5. Save

The site will be published within seconds!

## Local Development

To test the website locally, use any simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# macOS
open http://localhost:8000/docs/
```

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode Ready** - Uses CSS variables for easy theming
- **Interactive Tabs** - Showcase different command examples
- **FAQ Accordion** - Expandable Q&A section
- **Fast Loading** - No external dependencies, pure HTML/CSS/JS
- **Accessible** - Keyboard navigation and ARIA labels

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #3b82f6;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    /* ... more variables */
}
```

### Content

Update the HTML in `index.html`:

- `<section id="features">` - Feature cards
- `<section id="commands">` - Command reference
- `<section id="examples">` - Usage examples
- `<section class="faq">` - FAQ items

## Performance

The website is optimized for speed:

- Pure static HTML/CSS/JS (no build step needed)
- No external dependencies or CDN
- Minimal JavaScript for interactivity
- CSS is not minified for maintainability

## Browser Support

Works on:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

To contribute to the website:

1. Edit files in the `docs/` folder
2. Test locally with `python -m http.server 8000`
3. Submit a pull request

## License

Same as the main ghxgit project - MIT License
