
# 🚀 Ajay Negi Portfolio

A modern, minimalist portfolio website built with **Astro** and optimized for performance. Features a clean design, technical blog and showcase of projects and skills.


<!-- ![Portfolio Banner](https://ajaynegi.web.app/AjayNegiPortfolioSEOBanner.avif) -->

## ✨ Features

- **⚡ Lightning Fast** - Built with Astro for optimal performance
- **📱 Responsive Design** - Mobile-first approach with modern UI/UX
- **🔍 SEO Optimized** - Meta tags, sitemaps, and structured data 
- **♿ Accessible** - WCAG compliant with proper ARIA labels
- **🌙 Performance First** - Lazy loading, code splitting, and optimizations
<!--  - **📝 Technical Blog** - Advanced search functionality with blur effects -->
<!-- - **🎨 Modern Animations** - Smooth interactions and hover effects -->


## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: CSS with CSS Variables for theming
- **Content**: Markdown with MDX support
- **Deployment**: Firebase Hosting
- **Performance**: Optimized images, lazy loading, minimal JavaScript



## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── blog/              # Blog images
│   └── sound/             # Audio files
├── src/
│   ├── assets/            # Optimized images and icons
│   ├── components/        # Reusable Astro components
│   ├── content/           # Blog posts in Markdown
│   ├── layouts/           # Page layouts
│   └── pages/            # Route pages
├── astro.config.mjs       # Astro configuration
└── package.json
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: 'Your Post Title'
description: 'Brief description for SEO'
pubDate: 'Jan 21 2025'
heroImage: '/blog/your-image.svg'
substack: 'https://your-substack-link' # Optional
---

Your blog content here...
```


## 📊 Performance Metrics

- **Lighthouse Score**: 100/100/100/100 (Performance/Accessibility/Best Practices/SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

⭐ **Star this repo** if you found it helpful!
