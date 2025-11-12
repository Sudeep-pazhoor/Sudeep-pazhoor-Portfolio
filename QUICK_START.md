# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

Your portfolio will be running at `http://localhost:5173`

### 3️⃣ Build for Production

```bash
npm run build
```

## 📝 What's Included

### Modern Design Features
✅ Glassmorphism effects with backdrop blur  
✅ Purple-blue gradient accents (#667eea → #764ba2)  
✅ Smooth GSAP animations  
✅ Responsive design (mobile, tablet, desktop)  
✅ Dark theme with professional aesthetics  
✅ Inter font family from Google Fonts  

### Sections
✅ Hero - Bold introduction with gradient text  
✅ About - Professional summary  
✅ Skills - Animated marquee  
✅ Projects - Featured work showcase  
✅ Experience - Professional timeline  
✅ Education - Academic background  
✅ Certificates - Achievements  
✅ Contact - Social links and CTAs  

## 🎨 Customization

### Change Colors

Edit `src/index.css`:

```css
:root {
  --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent: #667eea;
  --accent-secondary: #764ba2;
}
```

### Update Content

Edit component files in `src/components/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About me
- `ProjectsShowcase.jsx` - Projects
- `Experience.jsx` - Work history
- `Education.jsx` - Academic info
- `Certificates.jsx` - Certifications
- `ContactCTA.jsx` - Contact section

### Change Font

Replace in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

## 🔗 Update Your Links

### Navigation (src/App.jsx)
```javascript
<a href="https://github.com/YOUR-USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE">LinkedIn</a>
```

### Hero Section (src/components/Hero.jsx)
```javascript
<a href="https://linkedin.com/in/YOUR-PROFILE">Let's Connect</a>
<a href="/YOUR-RESUME.pdf">My Resume</a>
```

### Contact Section (src/components/ContactCTA.jsx)
```javascript
<a href="mailto:YOUR-EMAIL@gmail.com">Email Me</a>
```

## 📱 Test Responsiveness

### Desktop
- Open `http://localhost:5173`
- Resize browser window

### Mobile
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Select mobile device

## 🚀 Deploy

### GitHub Pages (Recommended)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Your site will be live at:  
`https://YOUR-USERNAME.github.io/Portfolio/`

### Vercel (Alternative)

```bash
npm i -g vercel
vercel
```

### Netlify (Alternative)

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deploy
Check `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Portfolio/', // Must match repo name
})
```

## 📚 Learn More

- [Full Features List](FEATURES.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Redesign Notes](REDESIGN_NOTES.md)
- [Main README](README.md)

## 💡 Tips

1. **Test on Real Devices**: Use your phone/tablet
2. **Check All Links**: Verify they work
3. **Optimize Images**: Compress before adding
4. **Update Resume**: Keep PDF current
5. **Test Animations**: Ensure smooth performance
6. **Check Accessibility**: Use Lighthouse
7. **Validate HTML**: Use W3C validator
8. **Test Loading Speed**: Use PageSpeed Insights

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ⬜ Update personal information
4. ⬜ Add your projects
5. ⬜ Update experience
6. ⬜ Add certificates
7. ⬜ Test on mobile
8. ⬜ Build for production
9. ⬜ Deploy to hosting
10. ⬜ Share your portfolio!

## 📞 Need Help?

- **Email**: sudeeppazhoor@gmail.com
- **GitHub**: [@Sudeep-Pazhoor](https://github.com/Sudeep-Pazhoor)
- **LinkedIn**: [Sudeep P S](https://www.linkedin.com/in/sudeep-p-s-a5a1a0253)

---

**Happy Coding! 🎉**
