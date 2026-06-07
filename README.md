# Voxellab Shopify Theme

Bilingual (Arabic/English) Shopify 2.0 theme for Voxellab. This folder is **self-contained** — use it as the root of a GitHub repo to push changes directly to Shopify.

## Folder structure

```
shopify/                 ← push THIS folder to GitHub (theme root)
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
├── templates/
├── shopify.theme.toml   ← Shopify CLI config
└── .github/workflows/   ← optional auto-deploy
```

---

## Option A — GitHub repo (recommended)

Use a **separate GitHub repository** whose root is this `shopify/` folder.

```bash
cd shopify
git init
git add .
git commit -m "Initial Voxellab Shopify theme"
git remote add origin https://github.com/YOUR_ORG/voxellab-shopify-theme.git
git push -u origin main
```

Then connect Shopify to GitHub:

1. **Shopify Admin** → **Online Store** → **Themes**
2. **Add theme** → **Connect from GitHub**
3. Select your repo and branch (`main`)
4. Theme directory: **`.`** (repo root — no subdirectory needed)

Every push to `main` syncs the theme to Shopify.

---

## Option B — Shopify CLI (local push)

### Setup

```bash
npm install -g @shopify/cli @shopify/theme
cd shopify
```

Edit `shopify.theme.toml` and replace the store name:

```toml
[environments.development]
store = "your-store.myshopify.com"
```

### Login & deploy

```bash
shopify auth login
shopify theme dev      # live preview with hot reload
shopify theme push     # upload to store (creates unpublished theme)
shopify theme pull     # download changes from Shopify admin
```

---

## Option C — GitHub Actions auto-deploy

A workflow is included at `.github/workflows/shopify-theme-push.yml`.

Add these **GitHub Secrets** (repo → Settings → Secrets → Actions):

| Secret | Value |
|--------|-------|
| `SHOPIFY_CLI_THEME_TOKEN` | Theme access token from Shopify Admin |
| `SHOPIFY_STORE` | `your-store.myshopify.com` |

Optional **GitHub Variable**: `SHOPIFY_THEME_ID` — target theme ID after first upload.

Get a theme token: **Shopify Admin** → **Online Store** → **Themes** → **⋯** → **Edit code** → bottom of sidebar → **Generate theme access token**.

---

## Manual zip upload (no Git)

```bash
cd shopify
zip -r ../voxellab-shopify-theme.zip . -x "*.git*" -x ".DS_Store"
```

Upload in **Shopify Admin** → **Themes** → **Add theme** → **Upload zip file**.

---

## Post-import setup

### 1. Enable Arabic

**Settings** → **Languages** → add **Arabic** and publish.

### 2. Navigation menus

Create in **Online Store** → **Navigation**:

| Handle | Links |
|--------|-------|
| `main-menu` | About (`/pages/about`), Contact (`/pages/contact`) |

### 3. Pages

| Title | Handle | Template |
|-------|--------|----------|
| About | `about` | `page.about` |
| Contact | `contact` | `page.contact` |

### 4. Collections

Create collections for product categories (Lighting, Vases, Planters, etc.). Assign them in the theme editor under **Featured collections**.

### 5. Product metafields (optional)

**Settings** → **Custom data** → **Products**:

| Namespace | Key | Type |
|-----------|-----|------|
| custom | badge | Single line |
| custom | dimensions | Single line |
| custom | material | Single line |
| custom | weight_grams | Number |
| custom | pieces_count | Number |
| custom | designer_name | Single line |
| custom | designer_avatar | File |

### 6. Theme settings

**Theme editor** → **Theme settings**: brand name, contact info, hero images, show/hide prices.

---

## Pages

| Page | Template |
|------|----------|
| Homepage | `index.json` |
| Shop / collection | `collection.json` |
| Product | `product.json` |
| Cart | `cart.json` |
| About | `page.about.json` |
| Contact | `page.contact.json` |
| 404 | `404.json` |
