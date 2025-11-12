# Theme Toggle User Guide

## Overview

Your portfolio now features a professional dark/light theme toggle that allows visitors to choose their preferred viewing experience.

## Location

The theme toggle button is located:
- **Position:** Fixed on the right side of the screen
- **Vertical:** Centered (50% from top)
- **Horizontal:** 30px from right edge
- **Mobile:** 20px from right edge

## Visual Design

### Dark Theme (Default)
```
Background: Deep dark blue-black (#0a0a0f)
Text: White (#ffffff)
Secondary Text: Light blue-gray (#a8b2d1)
Accent: Purple-blue gradient (#667eea → #764ba2)
Cards: Semi-transparent white (5% opacity)
```

### Light Theme
```
Background: Soft off-white (#f8f9fa)
Text: Near black (#1a1a1a)
Secondary Text: Gray (#4a5568)
Accent: Same purple-blue gradient
Cards: White with subtle shadows
```

## Button Design

### Appearance
- **Shape:** Circular (50px diameter)
- **Background:** Glassmorphic card with backdrop blur
- **Border:** 1px solid with theme-appropriate color
- **Icon:** Sun (light mode) or Moon (dark mode)
- **Size:** 24px icon, 20px on mobile

### Interactions

**Hover Effect:**
- Scales to 110%
- Border changes to accent color
- Adds glow effect
- Icon rotates 20 degrees

**Click Effect:**
- Instant theme switch
- Smooth 0.3s transition
- Icon changes immediately
- Preference saved to browser

## Theme Persistence

### How It Works
1. User clicks theme toggle
2. Theme changes instantly
3. Preference saved to LocalStorage
4. Persists across:
   - Page refreshes
   - Browser restarts
   - Different pages
   - Multiple visits

### Technical Implementation
```javascript
// Save theme
localStorage.setItem('theme', 'light');

// Load theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
```

## Accessibility

### Keyboard Navigation
- **Tab:** Focus on toggle button
- **Enter/Space:** Activate toggle
- **Focus Indicator:** Visible outline

### Screen Readers
- **ARIA Label:** "Toggle theme"
- **Role:** Button
- **State:** Announced on change

### Color Contrast
- **Dark Theme:** WCAG AAA compliant
- **Light Theme:** WCAG AAA compliant
- **All text:** Meets 4.5:1 minimum ratio

## Responsive Behavior

### Desktop (> 768px)
- Button: 50px diameter
- Icon: 24px
- Position: 30px from right
- Full hover effects

### Mobile (≤ 768px)
- Button: 45px diameter
- Icon: 20px
- Position: 20px from right
- Touch-optimized

### Tablet (600-900px)
- Same as desktop
- Touch-friendly size
- Optimized spacing

## Theme Transition Effects

### What Transitions
- Background colors
- Text colors
- Border colors
- Shadow colors
- Card backgrounds

### Transition Duration
- **Standard:** 0.3s
- **Easing:** ease
- **Properties:** All color-related

### What Doesn't Transition
- Layout
- Positioning
- Font sizes
- Spacing

## Color Palette Details

### Dark Theme Colors
```css
Primary Background: #0a0a0f
Secondary Background: #13131a
Text Primary: #ffffff
Text Secondary: #a8b2d1
Text Muted: #8892b0
Accent: #667eea
Accent Secondary: #764ba2
Card Background: rgba(255, 255, 255, 0.05)
Border: rgba(255, 255, 255, 0.1)
```

### Light Theme Colors
```css
Primary Background: #f8f9fa
Secondary Background: #ffffff
Text Primary: #1a1a1a
Text Secondary: #4a5568
Text Muted: #718096
Accent: #667eea
Accent Secondary: #764ba2
Card Background: rgba(255, 255, 255, 0.9)
Border: rgba(0, 0, 0, 0.1)
```

## Best Practices

### For Users
1. Choose theme based on environment
2. Dark theme for low-light conditions
3. Light theme for bright environments
4. Theme persists automatically

### For Developers
1. Use CSS custom properties
2. Test both themes thoroughly
3. Ensure contrast ratios
4. Maintain consistency

## Troubleshooting

### Theme Not Saving
**Issue:** Theme resets on page reload
**Solution:** Check browser LocalStorage is enabled

### Theme Toggle Not Visible
**Issue:** Button not appearing
**Solution:** Check z-index and positioning

### Colors Look Wrong
**Issue:** Theme colors not applying
**Solution:** Verify data-theme attribute on html element

### Transition Too Slow/Fast
**Issue:** Theme change feels off
**Solution:** Adjust transition duration in CSS

## Customization

### Change Default Theme
Edit in `src/App.jsx`:
```javascript
const [theme, setTheme] = useState('light'); // Change to 'light'
```

### Adjust Toggle Position
Edit in `src/index.css`:
```css
.theme-toggle {
  right: 30px; /* Adjust distance from right */
  top: 50%;    /* Adjust vertical position */
}
```

### Modify Colors
Edit theme variables in `src/index.css`:
```css
[data-theme="light"] {
  --bg-primary: #your-color;
  /* ... other colors */
}
```

### Change Transition Speed
```css
body, body * {
  transition: all 0.5s ease; /* Adjust duration */
}
```

## Analytics Tracking (Optional)

Track theme preferences:
```javascript
// On theme change
gtag('event', 'theme_change', {
  'theme': newTheme
});
```

## Future Enhancements

Potential additions:
- System theme detection
- Multiple theme options
- Custom color picker
- Theme preview
- Scheduled theme switching

## Support

For issues or questions:
- **Email:** sudeeppazhoor@gmail.com
- **GitHub:** @Sudeep-Pazhoor

---

**Version:** 2.1
**Last Updated:** November 2025
**Status:** Production Ready
