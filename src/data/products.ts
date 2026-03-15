import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shirt1 from "@/assets/shirt-1.jpg";
import shorts1 from "@/assets/shorts-1.jpg";
import hoodie1 from "@/assets/hoodie-1.jpg";
import cap1 from "@/assets/cap-1.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "air-max-alpha",
    name: "Air Max Alpha",
    category: "Running Shoes",
    price: 120,
    description: "Engineered for maximum velocity. The Air Max Alpha features a responsive foam midsole and breathable mesh upper for relentless performance on any surface.",
    image: shoe1,
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "velocity-trainer",
    name: "Velocity Trainer",
    category: "Training Shoes",
    price: 95,
    description: "Built for explosive movements. Wide base stability platform with multi-directional traction pattern for gym and cross-training sessions.",
    image: shoe2,
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "dri-fit-elite",
    name: "Dri-FIT Elite",
    category: "Sports T-Shirt",
    price: 45,
    description: "Sweat-wicking Dri-FIT technology keeps you cool and dry. Lightweight construction with strategic ventilation zones for peak performance.",
    image: shirt1,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "pro-shorts",
    name: "Pro Shorts",
    category: "Athletic Shorts",
    price: 35,
    description: "Lightweight and flexible with an internal drawcord for a secure fit. Mesh side panels provide superior airflow during intense training.",
    image: shorts1,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "therma-hoodie",
    name: "Therma Hoodie",
    category: "Hoodie",
    price: 85,
    description: "Therma fabric traps heat to keep you warm without adding bulk. Full-zip design with kangaroo pockets for versatile layering.",
    image: hoodie1,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "aero-cap",
    name: "Aero Cap",
    category: "Sports Cap",
    price: 28,
    description: "Aerodynamic fit with moisture-wicking sweatband. Adjustable back closure for a customized fit during any activity.",
    image: cap1,
    sizes: ["ONE SIZE"],
  },
];
