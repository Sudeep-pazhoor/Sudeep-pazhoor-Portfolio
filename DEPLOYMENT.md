# 🚀 Deployment Guide

## Quick Deploy to GitHub Pages

### Prerequisites
- Git installed
- GitHub account
- Repository access

### Step 1: Update vite.config.js

Add the base URL for GitHub Pages:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Your repository name
})
```

### Step 2: Build the Project

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Step 3: Deploy to GitHub Pages

#### Option A: Using gh-pages package

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

#### Option B: Manual Deployment

```bash
# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize git
git init
git add -A
git commit -m 'Deploy'

# Push to gh-pages branch
git push -f git@github.com:Sudeep-Pazhoor/Portfolio.git main:gh-pages

cd ..
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Your site will be live at: `https://sudeep-pazhoor.github.io/Portfolio/`

## Alternative Deployment Options

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

### Netlify Drop (Drag & Drop)

1. Build your project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done!

## Environment Variables

If you need environment variables:

1. Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. For production, set environment variables in your hosting platform

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress images
   - Use WebP format
   - Lazy load images

2. **Code Splitting**
   - Already handled by Vite
   - Check bundle size: `npm run build`

3. **Minification**
   - Automatically done by Vite
   - CSS and JS are minified

4. **Caching**
   - Add cache headers in hosting platform
   - Use CDN for static assets

## Post-Deployment Checklist

- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Verify animations work
- [ ] Test contact form (if any)
- [ ] Check loading speed
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check accessibility
- [ ] Verify social media links
- [ ] Test download resume link

## Monitoring

### Google Analytics (Optional)

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

Use tools like:
- Google PageSpeed Insights
- Lighthouse
- GTmetrix
- WebPageTest

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check `base` in `vite.config.js` matches your repository name

### Issue: 404 on refresh

**Solution**: Add `_redirects` file in `public` folder:
```
/*    /index.html   200
```

### Issue: Assets not loading

**Solution**: Ensure all asset paths are relative or use `import`

### Issue: Slow loading

**Solution**: 
- Optimize images
- Enable compression
- Use CDN
- Lazy load components

## Custom Domain (Optional)

### GitHub Pages

1. Add `CNAME` file in `public` folder with your domain
2. Configure DNS settings:
   - Add A records pointing to GitHub IPs
   - Or add CNAME record pointing to `username.github.io`
3. Enable HTTPS in GitHub Pages settings

### Vercel/Netlify

1. Go to domain settings
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL is automatic

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Support

For issues or questions:
- Email: sudeeppazhoor@gmail.com
- GitHub: [@Sudeep-Pazhoor](https://github.com/Sudeep-Pazhoor)

---

**Last Updated**: November 2025
