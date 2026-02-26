# Image Optimization Guide

This document provides guidelines for optimizing images on the St. Mary's HSS Mawpdang website.

## Image Requirements

### Supported Formats
- **JPEG**: Best for photos (use .jpg extension)
- **PNG**: Best for graphics with transparency (use .png extension)
- **WebP**: Modern format with better compression (use .webp extension)

### Recommended Dimensions
- **Gallery Images**: 800x600 pixels (max 150KB each)
- **Achievement Images**: 600x450 pixels (max 100KB each)
- **Thumbnails**: 400x300 pixels (max 50KB each)

## Compression Guidelines

### Before Uploading
1. **Compress all images** before uploading to the website
2. Use tools like:
   - [TinyPNG](https://tinypng.com) - Web-based compression
   - [ImageOptim](https://imageoptim.com) - macOS app
   - [Squoosh](https://squoosh.app) - Google web app
   - [JPEGmini](https://jpegmini.com) - Reduce JPEG size

### Target File Sizes
| Image Type | Target Size | Maximum |
|------------|-------------|---------|
| Large photos | 100-150 KB | 200 KB |
| Medium photos | 50-100 KB | 150 KB |
| Thumbnails | 20-50 KB | 75 KB |
| Icons/Graphics | 10-30 KB | 50 KB |

### Quality Settings
- **Photos**: 75-85% quality (JPEG)
- **Graphics**: Lossless or 90-95% quality
- **WebP**: Use `cwebp -q 80` for good balance

## Naming Conventions

Use descriptive, lowercase names with hyphens:
```
✓ campus-main-building.jpg
✓ independence-day-2025.jpg
✓ science-exhibition-2024.jpg
✗ IMG_1234.jpg
✗ DSCN0023.PNG
```

## Folder Structure

```
assets/images/
├── gallery/
│   ├── campus1.jpg
│   ├── campus2.jpg
│   ├── independence1.jpg
│   ├── science1.jpg
│   ├── culture1.jpg
│   ├── sports1.jpg
│   └── class11.jpg
└── achievements/
    ├── football.jpg
    ├── science_exhibition.jpg
    ├── culture_day.jpg
    └── board_results.jpg
```

## Lazy Loading

All images include `loading="lazy"` attribute for better performance:

```html
<img src="image.jpg" alt="Description" loading="lazy" width="400" height="300">
```

## Alt Text Guidelines

Every image must have descriptive alt text:
- Describe the image content
- Include context (event, location)
- Keep under 125 characters
- Be specific, not generic

## Responsive Images

For different screen sizes, consider using srcset:

```html
<img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-600.jpg 600w,
             image-800.jpg 800w"
     alt="Description"
     loading="lazy">
```

## Quick Checklist

- [ ] Compress all images before upload
- [ ] Use appropriate file format (JPEG/PNG/WebP)
- [ ] Include descriptive alt text
- [ ] Add width and height attributes
- [ ] Include loading="lazy" attribute
- [ ] Use consistent naming convention
- [ ] Test on mobile devices
- [ ] Check file sizes are under limits
