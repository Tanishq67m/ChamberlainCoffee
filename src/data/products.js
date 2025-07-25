// src/data/products.js
import { productImages } from '../assets'; // Import our new image hub

export const products = [
    {
        id: 1,
        name: "Strawberries & Cream Blend",
        price: "€24.95",
        rating: 4.8,
        reviewsCount: 120,
        sizes: ["250g", "500g", "1kg"],
        images: productImages.product1, // Ensure this is an array of 5 images
        description: "A luxurious blend of ripe strawberries and velvety cream, crafted for a naturally sweet and smooth coffee experience.",
        features: [
          { name: 'Tasting Notes', value: 'Sweet Strawberry, Rich Cream, Smooth Finish' },
          { name: 'Roast Level', value: 'Light-Medium' },
          { name: 'Origin', value: 'Single Origin - Ethiopia' },
        ],
      },
      {
        id: 2,
        name: "Strawberry Matcha",
        price: "€30.45",
        rating: 4.9,
        reviewsCount: 98,
        sizes: ["100g", "250g"],
        images: productImages.product2,
        description: "A vibrant fusion of sweet strawberry and earthy matcha, delivering antioxidants and calm energy.",
        features: [
          { name: 'Tasting Notes', value: 'Vibrant Berry, Umami, Smooth' },
          { name: 'Grade', value: 'Ceremonial' },
          { name: 'Origin', value: 'Uji, Japan' },
        ],
      },
      {
        id: 3,
        name: "Vanilla Blend",
        price: "€20.45",
        rating: 4.9,
        reviewsCount: 6789,
        sizes: ["250g", "500g"],
        images: productImages.product3,
        description: "A rich vanilla-infused coffee blend that’s smooth, aromatic, and full of warmth.",
        features: [
          { name: 'Tasting Notes', value: 'Sweet Vanilla, Creamy, Balanced' },
          { name: 'Roast Level', value: 'Medium' },
          { name: 'Origin', value: 'Colombia & Brazil' },
        ],
      },
      {
        id: 4,
        name: "Iced Matcha",
        price: "€18.95",
        rating: 4.6,
        reviewsCount: 3210,
        sizes: ["100g", "250g"],
        images: productImages.product4,
        description: "Refreshing iced matcha blend, ideal for a cool, energizing experience.",
        features: [
          { name: 'Tasting Notes', value: 'Fresh, Earthy, Smooth' },
          { name: 'Grade', value: 'Premium' },
          { name: 'Origin', value: 'Kyoto, Japan' },
        ],
      },
      {
        id: 5,
        name: "Classic Cold Brew",
        price: "€19.99",
        rating: 4.8,
        reviewsCount: 2890,
        sizes: ["500ml", "1L"],
        images: productImages.product5,
        description: "Bold and smooth cold brew for the ultimate chilled coffee experience.",
        features: [
          { name: 'Tasting Notes', value: 'Chocolatey, Smooth, Low Acid' },
          { name: 'Roast Level', value: 'Dark' },
          { name: 'Origin', value: 'Brazil' },
        ],
      },
  // Add other products here...
];

export const faqs = [
  { question: "How do I brew this coffee?", answer: "Use hot water (90°C), steep for 4 minutes, and enjoy." },
  { question: "Is this product vegan?", answer: "Yes! All our blends are 100% vegan and organic." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide with free shipping over €60." },
];

export const reviews = [
  { user: "Priya S.", rating: 5, comment: "Absolutely love this coffee! The strawberry notes are so natural and delicious." },
  { user: "Rohan D.", rating: 4, comment: "Great flavor, perfect for my morning routine. Wish it came in a larger pack." },
  { user: "Anjali M.", rating: 5, comment: "The quality is outstanding. Smooth, not bitter at all. Highly recommend!" },
];