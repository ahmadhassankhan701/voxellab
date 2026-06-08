# Voxellab Shopify Theme

Bilingual (Arabic/English) Shopify 2.0 theme. This repo syncs directly with Shopify via **GitHub integration** — no GitHub Actions required.

## GitHub ↔ Shopify sync

1. Push changes to the `main` branch of this repo
2. Shopify pulls the theme automatically (if connected in admin)

**Connect in Shopify Admin:**
**Online Store → Themes → Add theme → Connect from GitHub**

| Setting | Value |
|---------|-------|
| Repository | `ahmadhassankhan701/voxellab` |
| Branch | `main` |
| Theme directory | `.` (repo root) |

## Workflow

```bash
# Edit theme files locally, then:
git add .
git commit -m "Describe your change"
git push origin main
```

Shopify will sync within a minute or two after each push.

## Theme structure

```
assets/       CSS, JavaScript
config/       Theme settings
layout/       theme.liquid
locales/      en.default.json, ar.json
sections/     Page sections
snippets/     Reusable partials
templates/    JSON page templates
```

## Setup after first import

### Arabic language
**Settings → Languages** → add **Arabic** and publish.

### Navigation
Create menu `main-menu` with About and Contact page links.

### Pages

| Title | Handle | Template |
|-------|--------|----------|
| About | `about` | `page.about` |
| Contact | `contact` | `page.contact` |

### Product metafields (optional)
**Settings → Custom data → Products**: `badge`, `dimensions`, `material`, `weight_grams`, `pieces_count`, `designer_name`.

### Theme settings
**Theme editor → Theme settings**: brand info, contact details, hero images, show/hide prices.
