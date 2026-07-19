# Portfolio

Static site source for [Saffron's AI Projects](https://judziah.github.io/Portfolio/), a GitHub Pages site.

## Setup still needed

**1. Enable GitHub Pages** (one-time, must be done in the GitHub UI):
- Repo → Settings → Pages
- Under "Build and deployment", set Source to "Deploy from a branch"
- Branch: `main`, folder: `/ (root)`
- Save. The site will be live at `https://judziah.github.io/Portfolio/` within a minute or two of the next push to `main`.

**2. Cloudflare Web Analytics** (free, cookieless):
- Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com)
- Go to Web Analytics → Add a site → enter the Pages URL above → choose "I don't have a DNS zone" / JS snippet option
- Copy the `token` value from the generated snippet
- In `index.html`, find the `<script>` tag near the bottom with `YOUR_CLOUDFLARE_TOKEN_HERE` and replace it with the real token
- Commit and push — analytics will start recording from the next visit

## Structure

- `index.html` — the whole site (single page)
- `assets/css/style.css` — styles
