# ☕ Chamberlain Coffee Clone

A modern, responsive React + Vite project that meticulously replicates the design and feel of Chamberlain Coffee. Built with powerful animation libraries like Framer Motion and GSAP, and seamlessly deployed on Vercel for an optimal user experience.

---

## 🚀 Features

* **React + Vite**: Enjoy blazing-fast development and optimized production builds.
* **Framer Motion**: Delivers smooth, declarative animations for a polished UI.
* **GSAP + ScrollTrigger**: Creates interactive and engaging scroll-triggered animations.
* **Tailwind CSS**: Ensures a fully responsive design that looks great on any device.
* **Cloudinary-hosted Assets**: Efficiently serves all images and media for fast loading times.
* **Vercel Deployment**: Easy deployment with SPA-friendly routing for a seamless user journey.

---

## 🛠️ Tech Stack

**Frontend:** React (Vite)
**Styling:** Tailwind CSS
**Animations:** Framer Motion, GSAP
**Deployment:** Vercel
**Image Hosting:** Cloudinary

---

## 📂 Project Structure

project-root/
├── public/
├── src/
│   ├── assets/         # Static images, icons
│   ├── components/     # Reusable React components
│   ├── pages/          # Main page components
│   ├── App.jsx         # Main App entry point
│   └── main.jsx        # React DOM rendering
├── vite.config.js      # Vite configuration
├── package.json
└── vercel.json         # SPA routing configuration for Vercel



---

## ⚡ Installation & Setup

To get this project up and running on your local machine, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/chamberlain-coffee-clone.git](https://github.com/YourUsername/chamberlain-coffee-clone.git)
    cd chamberlain-coffee-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Your project will be accessible at `http://localhost:5173` (or another port as indicated in your terminal).

4.  **Build for production:**
    ```bash
    npm run build
    ```

5.  **Preview the production build:**
    ```bash
    npm run preview
    ```

---

## 🌍 Deployment (Vercel)

This project is configured for easy deployment with Vercel:

1.  **Connect your GitHub repository** to Vercel.
2.  **Ensure `vercel.json`** is in your project's root directory to handle Single Page Application (SPA) routing:
    ```json
    {
      "rewrites": [
        {
          "source": "/(.*)",
          "destination": "/"
        }
      ]
    }
    ```
3.  **Push your code** to GitHub, and Vercel will automatically deploy your application.

---

## 🔗 Live Demo

Experience the clone live:

👉 [View Live Site](YOUR_LIVE_SITE_URL_HERE)

---

## 📸 Preview

Add a screenshot or GIF of your website here:

![Chamberlain Coffee Clone Preview](https://via.placeholder.com/800x450.png?text=Your+Website+Screenshot+Here)

---

## 🧩 Animations Used

This project features a variety of intricate animations to enhance the user experience:

* **Product Section**: A captivating scroll-triggered canvas animation (62 frames) brings products to life.
* **About Section**: Framer Motion powers elegant text and image reveal effects.
* **Other Sections**: Smooth fade-in and subtle motion effects are implemented throughout.

---

## 👤 About Creator

This is a fan-made project inspired by Chamberlain Coffee, created solely for learning and portfolio purposes. All credit for the original brand and design goes to **Chamberlain Coffee**.

---

## ✅ Notes

* If you encounter a `404` error on `/products` or any other route when deployed on Vercel, please verify that the `vercel.json` file with the specified rewrite rule exists in your project's root.
* All images and assets used in this project are hosted on Cloudinary for optimal performance.

---

## 📜 License

This project is intended for educational purposes only. All rights to the original brand and its assets belong to their respective owners.
