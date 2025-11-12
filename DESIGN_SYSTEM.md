# 🎨 Design System Reference

## Color Palette

### Primary Colors
```css
--bg-primary: #0a0a0f        /* Deep dark blue-black */
--bg-secondary: #13131a      /* Slightly lighter dark */
--text-primary: #ffffff      /* Pure white */
--text-secondary: #a8b2d1    /* Light blue-gray */
--text-muted: #8892b0        /* Muted blue-gray */
```

### Accent Colors
```css
--accent: #667eea            /* Primary purple-blue */
--accent-secondary: #764ba2  /* Secondary purple */
--accent-glow: rgba(102, 126, 234, 0.4)  /* Glow effect */
```

### Gradient
```css
--bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Surface Colors
```css
--card-bg: rgba(255, 255, 255, 0.05)      /* Card background */
--card-bg-hover: rgba(255, 255, 255, 0.08) /* Card hover */
--border: rgba(255, 255, 255, 0.1)         /* Border color */
--border-hover: rgba(102, 126, 234, 0.5)   /* Border hover */
```

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700
- **Extra-bold**: 800

### Font Sizes

#### Headings
```css
h1: clamp(48px, 8vw, 88px)   /* Hero headline */
h2: clamp(36px, 6vw, 56px)   /* Section titles */
h3: 22px                      /* Card titles */
h4: 20px                      /* Subsection titles */
h5: 18px                      /* Small headings */
h6: 16px                      /* Tiny headings */
```

#### Body Text
```css
Large: 20px      /* Hero description */
Regular: 16px    /* Body text */
Small: 14px      /* Secondary text */
Tiny: 12px       /* Labels, badges */
```

### Line Heights
```css
Tight: 1.1       /* Headlines */
Normal: 1.6      /* Body text */
Relaxed: 1.8     /* Descriptions */
```

### Letter Spacing
```css
Tight: -3px      /* Large headlines */
Normal: -1px     /* Regular headlines */
Wide: 0.5px      /* Small text */
Extra-wide: 2px  /* Uppercase labels */
```

## Spacing System

### Scale (8px base)
```css
xs: 4px    (0.25rem)
sm: 8px    (0.5rem)
md: 16px   (1rem)
lg: 24px   (1.5rem)
xl: 32px   (2rem)
2xl: 40px  (2.5rem)
3xl: 48px  (3rem)
4xl: 64px  (4rem)
5xl: 80px  (5rem)
```

### Section Padding
```css
Mobile: 60px 20px
Tablet: 80px 24px
Desktop: 100px 24px
```

### Card Padding
```css
Small: 20px
Medium: 30px
Large: 40px
```

### Gap Sizes
```css
Tight: 8px
Normal: 20px
Relaxed: 30px
Loose: 40px
```

## Border Radius

### Sizes
```css
Small: 8px       /* Buttons, inputs */
Medium: 12px     /* Small cards */
Large: 16px      /* Medium cards */
XL: 20px         /* Large cards */
2XL: 24px        /* Hero cards */
Round: 50%       /* Circles */
Pill: 50px       /* Badges */
```

## Shadows

### Elevation Levels
```css
--shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-md: 0 10px 30px rgba(0, 0, 0, 0.3)
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.4)
--shadow-glow: 0 0 40px var(--accent-glow)
```

### Usage
- **sm**: Subtle elevation (buttons)
- **md**: Medium elevation (cards)
- **lg**: High elevation (modals)
- **glow**: Accent highlights

## Effects

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Gradient Overlay
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
opacity: 0.1;
```

### Hover Lift
```css
transform: translateY(-10px);
transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Glow Effect
```css
box-shadow: 0 0 40px rgba(102, 126, 234, 0.4);
```

## Animations

### Timing Functions
```css
ease-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-in: cubic-bezier(0.4, 0, 1, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Durations
```css
Fast: 0.2s       /* Quick feedback */
Normal: 0.3s     /* Standard transitions */
Slow: 0.4s       /* Smooth animations */
Very-slow: 0.6s  /* Entrance animations */
```

### Common Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Gradient Flow */
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

## Components

### Button Styles

#### Primary Button
```css
background: var(--bg-gradient);
color: var(--text-primary);
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
box-shadow: var(--shadow-glow);
```

#### Ghost Button
```css
background: transparent;
border: 2px solid var(--accent);
color: var(--accent);
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
```

### Card Styles

#### Standard Card
```css
background: var(--card-bg);
backdrop-filter: blur(10px);
border: 1px solid var(--border);
border-radius: 24px;
padding: 40px;
transition: all 0.4s ease;
```

#### Card Hover
```css
transform: translateY(-10px);
border-color: var(--accent);
background: var(--card-bg-hover);
box-shadow: var(--shadow-glow);
```

### Badge Styles

#### Status Badge
```css
display: inline-flex;
align-items: center;
gap: 8px;
padding: 12px 24px;
background: var(--card-bg);
backdrop-filter: blur(10px);
border: 1px solid var(--border);
border-radius: 50px;
font-size: 14px;
font-weight: 500;
```

### Icon Styles

#### Social Icon
```css
width: 50px;
height: 50px;
background: var(--card-bg);
backdrop-filter: blur(10px);
border: 1px solid var(--border);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
```

## Breakpoints

### Media Queries
```css
/* Mobile */
@media (max-width: 600px) { }

/* Tablet */
@media (min-width: 601px) and (max-width: 900px) { }

/* Desktop */
@media (min-width: 901px) and (max-width: 1200px) { }

/* Large Desktop */
@media (min-width: 1201px) { }

/* Ultra-wide */
@media (min-width: 1920px) { }
```

## Accessibility

### Focus States
```css
outline: 2px solid var(--accent);
outline-offset: 4px;
border-radius: 8px;
```

### Color Contrast
- **Text on Dark**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear visual feedback

### Touch Targets
- **Minimum Size**: 44x44px
- **Spacing**: 8px between targets
- **Visual Feedback**: Hover and active states

## Best Practices

### Do's ✅
- Use CSS custom properties for consistency
- Apply glassmorphism to cards and overlays
- Use gradient for accent elements
- Implement smooth transitions (0.3-0.4s)
- Add hover effects to interactive elements
- Maintain consistent spacing (8px scale)
- Use semantic HTML
- Provide focus indicators
- Test on multiple devices

### Don'ts ❌
- Don't use pure black (#000000)
- Don't mix different gradient colors
- Don't use transitions longer than 0.6s
- Don't forget mobile responsiveness
- Don't skip accessibility features
- Don't use too many animations
- Don't ignore performance
- Don't forget to test

## Usage Examples

### Creating a New Card
```css
.my-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.my-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: var(--shadow-glow);
}
```

### Creating a Gradient Button
```css
.gradient-btn {
  background: var(--bg-gradient);
  color: var(--text-primary);
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gradient-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}
```

### Creating Gradient Text
```css
.gradient-text {
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

**Design System Version**: 2.0  
**Last Updated**: November 2025  
**Maintained by**: Sudeep PS
