# /public/images — Asset Organization

## Folder Structure

```
/public/images/
  hero/           Hero section banners and background images
  services/       Service-specific imagery
  team/           Team/staff photos
  blog/           Blog post thumbnails and article images
  case-studies/   Case study project photos (before/after, screenshots)
```

## Naming Conventions

- Use kebab-case: `sf-general-contractor-hero.jpg`
- Include dimensions in filename for clarity: `hero-banner-1440x810.jpg`
- Include source identifier for stock: `unsplash-qWwpHwip31M-construction.jpg`

## Standard Sizes (px)

| Context       | Width | Height | Aspect Ratio |
|---------------|-------|--------|--------------|
| Hero banner   | 1440  | 810    | 16:9         |
| Service card  | 800   | 534    | 3:2          |
| Blog thumb    | 800   | 450    | 16:9         |
| Case study    | 1200  | 675    | 16:9         |
| Team avatar   | 400   | 400    | 1:1          |

## Source Tracking

When adding a new image:
1. Add an entry to `lib/sources.js`
2. Use the `buildSourceEntry()` helper to generate the object
3. Include: original URL, provider, author, license
4. Note on which page(s) the image is used

## License Quick Reference

- **Unsplash License** — Free for commercial use, no attribution required (we attribute voluntarily)
- **Pexels License** — Free for commercial use, no attribution required
- **CC BY 4.0** — Free for commercial use, attribution required
- **Commercial** — Licensed for this project specifically (check individual notes)

Images without a clear license should NOT be used.
