# Project Name: Learnonn

---

## Technologies Used
- **HTML5** – Semantic page structure  
- **CSS3** – Styling and custom overrides  
- **Bootstrap 5.x** – Responsive layout and UI components  
- **JavaScript** – Interactive functionality  
- **WebP** – Optimized image format for faster loading  

---

## Project Structure
```
📁 assets
├── 📁 css
│   └── custom.css
├── 📁 fonts
│   ├── 📁 montserrat
│   └── 📁 quantro
├── 📁 images
│   ├── 📁 contact
│   │   └── contact-icon.svg
│   ├── 📁 header
│   │   ├── favicon.ico
│   │   ├── favicon.png
│   │   ├── logo-white.svg
│   │   └── logo.svg
│   ├── 📁 home
│   │   ├── core-icon.svg
│   │   ├── mission-icon.svg
│   │   ├── tagline-banner-letsconnect.webp
│   │   └── vision-icon.svg
│   ├── 📁 join
│   │   ├── join-icon.svg
│   │   └── joinus-bg.webp
│   ├── 📁 program
│   │   ├── communication-skill.webp
│   │   ├── customer-service-training.webp
│   │   ├── leadership-training.webp
│   │   ├── productivity-management.webp
│   │   ├── programs-bg.webp
│   │   ├── sales-marketing-training.webp
│   │   └── stress-management.webp
│   └── 📁 slider
│       ├── about.webp
│       ├── contact.webp
│       ├── join.webp
│       └── training.webp
├── 📁 js
│   ├── include.js
│   └── slider.js

📁 contact
└── index.html

📁 includes
├── contact.html
├── footer.html
├── header.html
├── navbar.html
├── program.html
├── slider.html
├── tagline.html
├── vision.html
└── whyus.html

📁 join
└── index.html

📁 training-program
└── index.html

📄 favicon.ico  
📄 favicon.png  
📄 index.html  
📄 read.me
```

---

## How to Run Locally

You can run this project using **Live Server** or any local development server of your choice:

### Option 1: Visual Studio Code with Live Server
1. Open the root project folder in VS Code.
2. Make sure [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is installed.
3. Right-click `index.html` → click **"Open with Live Server"**.
4. Your browser will open automatically at `http://127.0.0.1:5500/`.

### Option 2: Manual Browser Preview
1. Open the `index.html` file with Chrome, Firefox, or Safari.
2. You can use the `file://` protocol or run a local server via Python, Node.js, or any static server tool.

Example (Python 3):
```bash
cd path/to/project
python -m http.server 8000
```
Then go to: `http://localhost:8000/`

---

## Deployment
- Upload the entire project folder to your web host or CDN.
- Make sure file structure is preserved to maintain correct asset paths.

---

## Customization

To update the content or behavior:
- Modify HTML content in each section or included file under `/includes`
- Adjust styles in `/assets/css/custom.css`
- Modify JS behavior inside `/assets/js/include.js` and `/assets/js/slider.js`

---

## SEO Canonical Links

Update canonical URLs in each `<head>` as needed:
- About Us: `https://learnonn.com/`
- Training Programs: `https://learnonn.com/training-program/`
- Join Us: `https://learnonn.com/join/`
- Contact Us: `https://learnonn.com/contact`

---

## Browser & Mobile Compatibility
Tested across:
- Google Chrome
- Mozilla Firefox
- Safari
- iOS & Android responsive devices

---

## Credits
- UI Framework: [Bootstrap 5](https://getbootstrap.com/)
- Fonts: Montserrat, Quantro  
- Icons & Assets: Custom SVG & WebP for optimization