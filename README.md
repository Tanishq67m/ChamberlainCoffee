☕ Chamberlain Coffee Clone
A modern, responsive React + Vite project that replicates the design and feel of Chamberlain Coffee. Built with Framer Motion, GSAP animations, and deployed on Vercel.

🚀 Features
✅ React + Vite for blazing-fast development

✅ Framer Motion for smooth animations

✅ GSAP + ScrollTrigger for interactive scrolling effects

✅ Responsive Design with Tailwind CSS

✅ Cloudinary-hosted assets

✅ Vercel Deployment with SPA-friendly routing

🛠️ Tech Stack
Frontend: React (Vite)

Styling: Tailwind CSS

Animations: Framer Motion, GSAP

Deployment: Vercel

Image Hosting: Cloudinary

📂 Project Structure
php
Copy
Edit
project-root/
├── public/
├── src/
│   ├── assets/         # Static images, icons
│   ├── components/     # Reusable React components
│   ├── pages/          # Main page components
│   ├── App.jsx         # App entry point
│   └── main.jsx        # React DOM rendering
├── vite.config.js      # Vite configuration
├── package.json
└── vercel.json         # SPA routing config for Vercel
⚡ Installation & Setup
Clone this repository and install dependencies:

bash
Copy
Edit
git clone <your-repo-link>
cd chamberlain-coffee
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
Preview production build:

bash
Copy
Edit
npm run preview
🌍 Deployment (Vercel)
Connect your GitHub repo to Vercel.

Add this vercel.json in your project root to handle SPA routing:

json
Copy
Edit
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
Push your code to GitHub and Vercel will auto-deploy.

🔗 Live Demo
👉 View Live Site

📸 Preview
Add a screenshot or GIF of your website here:

scss
Copy
Edit
![Preview](./screenshot.png)
🧩 Animations Used
Product Section: Scroll-triggered canvas animation (62 frames)

About Section: Framer Motion text/image reveal

Other Sections: Smooth fade-in and motion effects

👤 About Creator
This is a fan-made project inspired by Chamberlain Coffee for learning and portfolio purposes.
Original Brand: Chamberlain Coffee

✅ Notes
If /products or any route returns 404 on Vercel, ensure vercel.json exists with the rewrite rule above.

All images are hosted on Cloudinary.

📜 License
This project is for educational purposes only.
All rights belong to their respective owners.
