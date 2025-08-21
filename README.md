# M.A. Raheem Siddiqui - Portfolio Website

A modern, professional portfolio website showcasing graphic design expertise with specialization in wedding and event design.

## 🌟 Features

- **Modern Dark Theme** with glassmorphism effects
- **Fully Responsive** design for all devices
- **Interactive Animations** and micro-interactions
- **Custom Cursor** with hover effects
- **Mobile-First Navigation** with hamburger menu
- **Wedding & Events Specialization** section
- **Professional Contact Form** with project type selection
- **Smooth Scroll** animations and parallax effects

## 🎨 Design Highlights

- **Premium Visual Effects**: Gradient backgrounds, backdrop blur, floating elements
- **Professional Typography**: Modern font stack with perfect spacing
- **Interactive Elements**: Hover animations, loading states, counter animations
- **Cross-Browser Compatibility**: Works on Chrome, Firefox, Safari, Edge
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── README.md          # This file
└── assets/            # (Optional - for future images/assets)
```

## 🚀 Quick Start

### Option 1: Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/RaheemSiddiqui527/portfolio.git
   cd portfolio-website
   ```

2. **Open in browser**:
   - Double-click `index.html`
   - Or use Live Server in VS Code

3. **Start customizing**!

### Option 2: Deploy Online
Deploy to any of these **free hosting platforms**:

#### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live!

#### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployment

#### GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Select source branch
4. Your site is live at `username.github.io/repository-name`

## ⚙️ Customization Guide

### 1. Personal Information
Update these sections in `index.html`:

```html
<!-- Update your name -->
<div class="logo">Your Name</div>

<!-- Update hero section -->
<h1>Your Title</h1>

<!-- Update about section -->
<p>Your bio here...</p>

<!-- Update contact information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 2. Colors & Styling
Customize the color scheme in CSS variables:

```css
:root {
    --primary: #0a0a0a;        /* Main background */
    --secondary: #1a1a1a;      /* Secondary background */
    --accent: #ff6b35;         /* Primary accent color */
    --accent-2: #6c5ce7;       /* Secondary accent color */
    --text-light: #ffffff;     /* Main text color */
    --text-muted: #a0a0a0;     /* Muted text color */
}
```

### 3. Portfolio Projects
Add your projects in the portfolio section:

```html
<div class="portfolio-item fade-in">
    <div class="portfolio-image">
        <!-- Add your project image or icon -->
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="portfolio-content">
        <h3 class="portfolio-title">Your Project Title</h3>
        <p class="portfolio-description">Project description...</p>
        <div class="portfolio-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

### 4. Services
Customize your services in the services section:

```html
<div class="service-card fade-in">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3 class="service-title">Your Service</h3>
    <p class="service-description">Service description...</p>
</div>
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Hamburger menu** for mobile navigation
- **Touch-friendly** buttons and interactions
- **Optimized layouts** for all screen sizes
- **Fast loading** on mobile networks

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **JavaScript ES6+**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized animations** with `requestAnimationFrame`
- **Intersection Observer** for scroll animations
- **CSS Grid & Flexbox** for layouts
- **Minimal dependencies** (only Font Awesome)

## 📞 Contact Form Setup

The contact form is currently a demo. To make it functional:

### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Get your form endpoint
4. Update the form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Configure email service
3. Add EmailJS script and configuration

### Option 3: Netlify Forms
If hosting on Netlify, simply add `netlify` attribute:
```html
<form netlify>
```

## 🛠️ Development

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Git (for version control)

### Recommended VS Code Extensions
- **Live Server**: For local development server
- **Prettier**: Code formatting
- **Auto Rename Tag**: HTML tag editing
- **CSS Peek**: CSS navigation

### Local Development
```bash
# Clone the repo
git clone https://github.com/RaheemSiddiqui527/portfolio.git

# Navigate to directory
cd portfolio-website

# Open in VS Code
code .

# Start Live Server (if extension installed)
# Right-click index.html → "Open with Live Server"
```

## 🚀 Deployment Options

### Free Hosting Platforms
1. **Netlify** - Best for beginners, drag & drop deployment
2. **Vercel** - Great for developers, GitHub integration
3. **GitHub Pages** - Free with GitHub, perfect for portfolios
4. **Firebase Hosting** - Google's platform, fast CDN
5. **Surge.sh** - Simple command-line deployment

### Custom Domain Setup
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Configure DNS settings in hosting platform
3. Enable HTTPS (usually automatic)

## 📈 SEO Optimization

The website includes:
- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Fast loading** performance
- **Mobile-friendly** design
- **Structured content** for search engines

Add these meta tags to improve SEO:
```html
<meta name="description" content="M.A. Raheem Siddiqui - Professional Graphic Designer specializing in Wedding and Event Design">
<meta name="keywords" content="graphic design, wedding design, event design, branding, logo design">
<meta name="author" content="M.A. Raheem Siddiqui">
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**M.A. Raheem Siddiqui**
- Portfolio: https://raheemdesigns.vercel.app/
- Email: raheemdesignstudio@gmail.com
- Instagram: [@raheemdesignstudio](https://instagram.com/@raheemdesignstudio)
- LinkedIn: [M.A. Raheem Siddiqui](https://linkedin.com/in/M.A. Raheem Siddiqui)

## 🙏 Acknowledgments

- **Font Awesome** for the beautiful icons
- **Google Fonts** for the Inter font family
- **CSS Tricks** for inspiration and techniques
- **Modern web development community** for best practices

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

### Wedding Section
![Wedding Section](screenshots/wedding-section.png)

---

⭐ **If you found this helpful, please give it a star!**

Made with ❤️ for the design community
