// Men's Formal
import menFormalGreySuit from "../assets/men-formal-grey-check-suit.png";
import newMenFormalNavySuit from "../assets/new-men-formal-navy-suit.png";

// Men's Casual
import newMenCasualOliveShirt from "../assets/new-men-casual-olive-linen-shirt.png";
import saleMenDenimJacket from "../assets/sale-men-washed-denim-jacket.png";

// Women's Formal
import newWomenFormalBurgundySuit from "../assets/new-women-formal-burgundy-suit.png";
import saleWomenWrapDress from "../assets/sale-women-draped-wrap-dress.png";

// Women's Casual
import newWomenBlackTshirt from "../assets/new-women-casual-black-oversized-tshirt.png";
import newWomenWhiteShirt from "../assets/new-women-casual-white-linen-shirt.png";
import saleWomenCoordSet from "../assets/sale-women-two-piece-coord-set.png";

// Accessories
import goldNecklace from "../assets/gold-layered-necklace.png";
import silverWatch from "../assets/silver-stainless-watch.png";
import blackHandbag from "../assets/new-black-leather-handbag.png";

const products = [

  {
    id: 1,
    name: "Black Oversized T-Shirt",
    image: newWomenBlackTshirt,
    category: "Women's Casual",
    gender: "Women",
    status: "New",
    price: 3200,
    oldPrice: null,
    rating: 4.6,
    reviews: 101,
    brand: "Velvet Vogue",
    colours: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    stock: 25,
    sku: "VV-WC-001",
    material: "100% Premium Cotton",
    fit: "Oversized Fit",
    shortDescription: "Soft oversized cotton t-shirt for everyday casual comfort.",
    description: "This oversized t-shirt is made from premium breathable cotton, providing exceptional comfort throughout the day. Its relaxed silhouette and minimalist style make it easy to pair with jeans, shorts, or skirts for a modern casual look.",
    careInstructions: "Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat."   

  },

 

  {
    id: 2,
    name: "Navy Formal Suit",
    image: newMenFormalNavySuit,
    category: "Men's Formal",
    gender: "Men",
    status: "New",
    price: 19900,
    oldPrice: null,
    rating: 4.9,
    reviews: 96,
    brand: "Velvet Vogue",
     colours: ["Navy", "Charcoal", "Black"],
     sizes: ["M", "L", "XL"],
     stock: 12,
    sku: "VV-MF-001",
    material: "Premium Wool Blend",
    fit: "Slim Fit",
    shortDescription: "Elegant formal suit designed for business and special occasions.",
    description: "Crafted from a premium wool blend, this navy formal suit offers a sharp tailored appearance with exceptional comfort. Perfect for business meetings, weddings, and formal events, it combines sophistication with modern styling.",
    careInstructions: "Dry clean only. Store on a hanger. Steam when required."
  },

  {
    id: 3,
    name: "Olive Linen Shirt",
    image: newMenCasualOliveShirt,
    category: "Men's Casual",
    gender: "Men",
    status: "New",
    price: 6200,
    oldPrice: null,
    rating: 4.7,
    reviews: 58,
    brand: "Velvet Vogue",
    colours: ["Olive", "White", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    sku: "VV-MC-001",
    material: "100% Linen",
    fit: "Regular Fit",
    shortDescription: "Lightweight linen shirt for relaxed everyday wear.",
    description: "Made from premium linen fabric, this olive shirt delivers excellent breathability and comfort. Its versatile design makes it suitable for both casual outings and smart-casual occasions throughout the year.",
     careInstructions: "Machine wash cold. Hang dry. Iron on medium heat."
  },

  {
    id: 4,
    name: "Washed Denim Jacket",
    image: saleMenDenimJacket,
    category: "Men's Casual",
    gender: "Men",
    status: "Sale",
    price: 8900,
    oldPrice: 11900,
    rating: 4.8,
    reviews: 73,
     brand: "Velvet Vogue",
    colours: ["Blue", "Black"],
    sizes: ["M", "L", "XL"],
    stock: 15,
    sku: "VV-MC-002",
    material: "Cotton Denim",
    fit: "Regular Fit",
    shortDescription: "Classic washed denim jacket with a timeless casual style.",
    description: "Designed with durable cotton denim, this washed jacket features a vintage-inspired finish that complements any casual outfit. Ideal for layering during cooler weather while maintaining a fashionable appearance.",
    careInstructions: "Machine wash inside out. Do not bleach. Air dry."
  },


  {
    id: 5,
    name: "Burgundy Suit",
    image: newWomenFormalBurgundySuit,
    category: "Women's Formal",
    gender: "Women",
    status: "New",
    price: 16900,
    oldPrice: null,
    rating: 4.9,
    reviews: 84,
    brand: "Velvet Vogue",
    colours: ["Burgundy", "Black", "Navy"],
    sizes: ["S", "M", "L"],
    stock: 10,
    sku: "VV-WF-001",
    material: "Premium Polyester Blend",
    fit: "Tailored Fit",
    shortDescription: "Elegant tailored suit designed for formal occasions and business wear.",
    description: "This sophisticated burgundy suit features a tailored fit that delivers both comfort and confidence. Crafted from a premium polyester blend, it is perfect for office meetings, formal events, and celebrations while maintaining a polished appearance.",
    careInstructions: "Dry clean only. Store on a hanger. Steam when necessary."
  },

   {
    id: 6,
    name: "Grey Check Suit",
    image: menFormalGreySuit,
    category: "Men's Formal",
    gender: "Men",
    status: "",
    price: 18500,
    oldPrice: null,
    rating: 4.8,
    reviews: 124,
    brand: "Velvet Vogue",
    colours: ["Grey", "Charcoal", "Black"],
    sizes: ["M", "L", "XL"],
    stock: 14,
    sku: "VV-MF-002",
    material: "Premium Wool Blend",
    fit: "Slim Fit",
    shortDescription: "Modern grey check suit with a refined and professional look.",
    description: "Designed with a stylish check pattern, this formal suit combines premium comfort with contemporary tailoring. It is suitable for business meetings, weddings, and other formal occasions where a sharp appearance matters.",
    careInstructions: "Dry clean only. Keep on a suit hanger after use."
  },

  {
    id: 7,
    name: "Draped Wrap Dress",
    image: saleWomenWrapDress,
    category: "Women's Formal",
    gender: "Women",
    status: "Sale",
    price: 7900,
    oldPrice: 9900,
    rating: 4.8,
    reviews: 66,
    brand: "Velvet Vogue",
    colours: ["Red", "Black", "Emerald Green"],
    sizes: ["S", "M", "L"],
    stock: 18,
    sku: "VV-WF-002",
    material: "Soft Crepe Fabric",
    fit: "Regular Fit",
    shortDescription: "Elegant wrap dress with a flattering draped silhouette.",
    description: "This draped wrap dress is designed to provide both elegance and comfort. The flowing fabric creates a graceful appearance, making it an excellent choice for parties, dinners, and formal gatherings.",
    careInstructions: "Hand wash or machine wash on a delicate cycle. Hang to dry."
  },

  {
    id: 8,
    name: "Gold Layered Necklace",
    image: goldNecklace,
    category: "Accessories",
    gender: "Women",
    status: "",
    price: 2900,
    oldPrice: null,
    rating: 4.9,
    reviews: 142,
    brand: "Velvet Vogue",
    colours: ["Gold", "Rose Gold"],
    sizes: ["One Size"],
    stock: 35,
    sku: "VV-AC-001",
    material: "18K Gold-Plated Stainless Steel",
    fit: "Adjustable Chain",
    shortDescription: "Stylish layered necklace that adds elegance to any outfit.",
    description: "This beautifully crafted layered necklace features a timeless design with an adjustable chain for a comfortable fit. Its polished finish makes it suitable for both everyday wear and special occasions.",
    careInstructions: "Keep away from water and perfumes. Wipe with a soft cloth after use and store in a dry place."
  },

 

  {
    id: 9,
    name: "White Linen Shirt",
    image: newWomenWhiteShirt,
    category: "Women's Casual",
    gender: "Women",
    status: "New",
    price: 4800,
    oldPrice: null,
    rating: 4.8,
    reviews: 92,
    brand: "Velvet Vogue",
    colours: ["White", "Beige", "Light Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 22,
    sku: "VV-WC-002",
    material: "100% Linen",
    fit: "Regular Fit",
    shortDescription: "Classic linen shirt offering breathable comfort and timeless style.",
    description: "Made from premium linen fabric, this white shirt delivers exceptional breathability and comfort throughout the day. Its clean and elegant design makes it suitable for casual outings, office wear, and weekend occasions.",
    careInstructions: "Machine wash cold with similar colours. Hang dry. Iron on medium heat."
  },

  {
    id: 10,
    name: "Two-Piece Coord Set",
    image: saleWomenCoordSet,
    category: "Women's Casual",
    gender: "Women",
    status: "Sale",
    price: 7200,
    oldPrice: 9200,
    rating: 4.7,
    reviews: 64,
    brand: "Velvet Vogue",
    colours: ["Beige", "Black", "Sage Green"],
    sizes: ["S", "M", "L"],
    stock: 16,
    sku: "VV-WC-003",
    material: "Premium Cotton Blend",
    fit: "Relaxed Fit",
    shortDescription: "Modern two-piece coord set designed for effortless everyday fashion.",
    description: "This stylish coord set combines comfort and elegance with its relaxed fit and soft premium fabric. The matching top and bottom create a coordinated look that is perfect for casual outings, shopping, and weekend wear.",
    careInstructions: "Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if required."
  },


  {
    id: 11,
    name: "Silver Stainless Watch",
    image: silverWatch,
    category: "Accessories",
    gender: "Unisex",
    status: "",
    price: 12500,
    oldPrice: null,
    rating: 4.9,
    reviews: 88,
    brand: "Velvet Vogue",
    colours: ["Silver", "Black"],
    sizes: ["One Size"],
    stock: 28,
    sku: "VV-AC-002",
    material: "Stainless Steel",
    fit: "Adjustable Strap",
    shortDescription: "Elegant stainless steel watch with a modern minimalist design.",
    description: "Designed with premium stainless steel, this watch combines durability with timeless elegance. The minimalist dial and adjustable strap make it suitable for everyday wear as well as formal occasions.",
    careInstructions: "Avoid contact with chemicals and water for extended periods. Clean with a soft microfiber cloth."
  },

  {
    id: 12,
    name: "Black Leather Handbag",
    image: blackHandbag,
    category: "Accessories",
    gender: "Women",
    status: "New",
    price: 9800,
    oldPrice: null,
    rating: 4.8,
    reviews: 57,
    brand: "Velvet Vogue",
    colours: ["Black", "Brown", "Beige"],
    sizes: ["One Size"],
    stock: 14,
    sku: "VV-AC-003",
    material: "Genuine Leather",
    fit: "Medium Size",
    shortDescription: "Premium leather handbag designed for everyday elegance and practicality.",
    description: "Crafted from genuine leather, this handbag offers a spacious interior with multiple compartments to organize your daily essentials. Its elegant design complements both casual and formal outfits, making it a versatile wardrobe accessory.",
     careInstructions: "Clean with a soft dry cloth. Avoid prolonged exposure to direct sunlight and moisture. Store in a dust bag when not in use."
  },
];

export default products;