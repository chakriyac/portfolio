# Portfolio Website

A modern, animated portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient accents
- **Smooth Animations**: AOS (Animate On Scroll) and GSAP animations throughout
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, transitions, and interactive components
- **Photo Upload**: Upload photos for trophy moments and profile pictures
- **Smooth Scrolling**: Smooth navigation between sections
- **Custom Cursor**: Animated custom cursor effect (desktop only)

## 📦 Libraries Used

All libraries are loaded via CDN (no installation required):

- **AOS (Animate On Scroll)** v2.3.1 - Scroll animations
- **GSAP** v3.12.5 - Advanced animations and ScrollTrigger
- **Font Awesome** v6.5.1 - Icons
- **Google Fonts (Inter)** - Typography

## 🎨 Sections

1. **Hero Section** - Eye-catching introduction with profile photo
2. **About Me** - Personal introduction and contact information
3. **Achievements** - Award cards with animations
4. **Trophy Moments** - Photo cards with upload functionality
5. **Skills** - Animated progress bars for technical skills
6. **Experience** - Animated timeline of work history
7. **Languages** - Language proficiency cards
8. **Projects** - Project showcase cards
9. **Contact** - Contact form and information
10. **Social Media** - Social media links with hover effects

## 🎯 Getting Started

1. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

2. **Add your images**:
   - Replace placeholder images in `/assets/images/` folder:
     - `profile.jpg` - Hero section profile photo
     - `about.jpg` - About section photo
   - Or click on photo placeholders to upload images directly

3. **Customize content**:
   - Edit `index.html` to update text, links, and information
   - Modify `css/style.css` to change colors and styles
   - Update `js/main.js` to adjust animations

## 🎨 Color Scheme

```css
--primary-red: #E63946
--primary-green: #10B981
--primary-purple: #6366F1
--primary-blue: #02569B
--dark-red: #8E0320
--gold: #FFD700
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## ⚡ Performance

- All libraries loaded via CDN
- Optimized animations with GSAP
- Lazy loading for images
- Smooth 60fps animations

## 🎭 Animations

- **Hero Section**: Slide down, zoom in, fade effects
- **Scroll Animations**: Elements animate as you scroll
- **Hover Effects**: Interactive card hover states
- **Timeline**: Alternating slide animations
- **Skills Bars**: Animated progress on scroll
- **Trophy Cards**: Zoom in with decorative elements
- **Social Links**: Scale and rotate on hover

## 📝 Customization

### Update Personal Information

Edit the HTML file to update:
- Name and title
- Experience years and age
- Contact information (email, phone, location)
- Social media links
- Work experience details
- Skills and proficiency levels

### Change Colors

Edit `css/style.css` CSS variables at the top:
```css
:root {
    --primary-red: #YOUR_COLOR;
    --primary-green: #YOUR_COLOR;
    /* ... more colors */
}
```

### Adjust Animations

Edit `js/main.js` to modify:
- Animation duration
- Delay times
- Easing functions
- Scroll triggers

## 🖼️ Adding Images

### Method 1: Replace Files
Place your images in `/assets/images/` with these names:
- `profile.jpg` (550x550px recommended)
- `about.jpg` (400x600px recommended)

### Method 2: Click to Upload
Click on any photo placeholder to upload an image directly through the browser.

## 🚀 Deployment

1. **GitHub Pages**:
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Your site will be live at `username.github.io/repository-name`

2. **Netlify**:
   - Drag and drop the `portfolio` folder to Netlify
   - Instant deployment

3. **Vercel**:
   - Import GitHub repository
   - Automatic deployment on push

## 📄 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # All JavaScript/animations
├── assets/
│   └── images/        # Image folder
└── README.md          # This file
```

## 💡 Tips

1. **High-Quality Images**: Use high-resolution images for best results
2. **Mobile Testing**: Test on actual mobile devices for best experience
3. **Performance**: Consider lazy loading images for better performance
4. **Accessibility**: Add alt text for all images
5. **SEO**: Update meta tags in HTML head section

## 🔧 Troubleshooting

**Animations not working?**
- Check browser console for errors
- Ensure CDN links are loading properly
- Try refreshing the page

**Images not loading?**
- Check file paths in HTML
- Ensure images are in correct folder
- Check image file extensions

**Mobile menu not working?**
- Check JavaScript console for errors
- Ensure viewport meta tag is present

## 📞 Support

For issues or questions:
- Check browser console for error messages
- Verify all CDN links are accessible
- Ensure JavaScript is enabled in browser

## 🎉 Credits

- **Design**: CHHIM CHAKRIYA
- **Animations**: AOS & GSAP
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📜 License

Free to use for personal and commercial projects.

---

**Made with ❤️ in Cambodia**

Enjoy your new animated portfolio website! 🚀
