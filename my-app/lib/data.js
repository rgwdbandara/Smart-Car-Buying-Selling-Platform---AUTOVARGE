export const featuredCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28999,
    images: ["/1.png"],
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 15000,
    color: "White",
    wishlisted: false,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 26499,
    images: ["/2.webp"],
    transmission: "Manual",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 12000,
    color: "Blue",
    wishlisted: true,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 42999,
    images: ["/3.jpg"],
    transmission: "Automatic",
    fuelType: "Electric",
    bodyType: "Sedan",
    mileage: 8000,
    color: "Red",
    wishlisted: false,
  },
];

export const carMakes = [
  { id: 1, name: "Hyundai", image: "/make/hyundai.webp" },
  { id: 2, name: "Honda", image: "/make/honda.webp" },
  { id: 3, name: "BMW", image: "/make/bmw.webp" },
  { id: 4, name: "Tata", image: "/make/tata.webp" },
  { id: 5, name: "Mahindra", image: "/make/mahindra.webp" },
  { id: 6, name: "Ford", image: "/make/ford.webp" },
];

export const bodyTypes = [
  { id: 1, name: "SUV", image: "/body/suv.webp" },
  { id: 2, name: "Sedan", image: "/body/sedan.webp" },
  { id: 3, name: "Hatchback", image: "/body/hatchback.webp" },
  { id: 4, name: "Convertible", image: "/body/convertible.webp" },
];

export const faqItems = [
  {
    question: "What is the Blue-T Grading System in AutoVerge?",
    answer:
      "The Blue-T Grading System is a unique vehicle evaluation method in AutoVerge that displays the condition and quality of a car using a clear grade. It helps buyers easily understand how reliable and well-maintained a vehicle is before purchasing.",
  },
  {
    question: "How does the AI Price Estimation work?",
    answer:
      "AutoVerge uses AI to analyze vehicle details such as model, year, mileage, condition, and current Sri Lankan market trends. It then estimates whether the price is fair, overpriced, or underpriced to help users make better buying and selling decisions.",
  },
  {
    question: "Can I search for a car using an image?",
    answer:
      "Yes. AutoVerge allows you to upload a car image. The system analyzes the image using AI and recommends similar cars based on its shape, color, and model.",
  },
  {
    question: "Is the AutoVerge platform safe to use?",
    answer:
      "Yes. AutoVerge provides verified listings, secure authentication, and an admin-monitored system to reduce fraud and improve trust between buyers and sellers.",
  },
  {
    question: "What tools are available for buyers?",
    answer:
      "Buyers can use smart recommendations, image-based search, Blue-T grading, AI price estimation, car comparisons, and an integrated EMI calculator for better financial planning.",
  },
  {
    question: "What tools are available for sellers?",
    answer:
      "Sellers can upload and manage multiple listings, receive pricing recommendations, track performance, and connect with genuine buyers more efficiently.",
  },
];
