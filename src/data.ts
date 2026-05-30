import { MenuItem, RestaurantInfo, Review } from "./types";

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "SPICY BAWARCHI",
  tagline: "Every Bite Tells A Story",
  address: "Near Forbesganj College Flyover, In Front of Sant Nirankari Satsang Bhawan, Forbesganj, Bihar 854318",
  phone: "076430 97915",
  whatsapp: "917643097915", // formatted for WhatsApp direct links
  hours: "11:00 AM - 11:00 PM (Everyday)",
  email: "spicybawarchi.forbesganj@gmail.com"
};

export const MENU_CATEGORIES = [
  { id: "all", name: "✨ All Masterpieces" },
  { id: "vegetables", name: "🥦 Vegetarian Specialties" },
  { id: "special-thali", name: "🍱 Royal Thalis" },
  { id: "tandoor-se", name: "🔥 From the Tandoor" },
  { id: "appetizers", name: "🥟 Starters & Pakoda" },
  { id: "soup", name: "🍵 Imperial Soups" },
  { id: "beverages", name: "🥤 Refreshing Beverages" },
  { id: "momos", name: "🥢 Himalayan Momos" },
  { id: "chilly-specials", name: "🌶️ Indo-Chinese Chilly Specials" },
  { id: "noodles", name: "🍝 Wok-Tossed Noodles" },
  { id: "rice", name: "🍚 Aromatic Rice & Pulao" },
  { id: "dal", name: "🥣 Slow-Cooked Dal" },
  { id: "roti-naan", name: "🫓 Breads & Naan" }
];

export const MENU_ITEMS: MenuItem[] = [
  // VEGETABLES
  {
    id: "v1",
    name: "Paneer Butter Masala",
    price: 210,
    rating: 4.9,
    category: "vegetables",
    description: "Rich culinary masterpiece. Fresh cottage cheese cubes simmered in our signature velvet smooth, spiced tomato butter gravy, finished with fresh malai.",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "v2",
    name: "Paneer Kadhai",
    price: 220,
    rating: 4.8,
    category: "vegetables",
    description: "Cottage cheese wok-tossed with fresh bell peppers, onions, and freshly ground whole spices in a robust, semi-dry gravy.",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v3",
    name: "Paneer Do Pyaza",
    price: 210,
    rating: 4.7,
    category: "vegetables",
    description: "Succulent paneer cooked in an aromatic, onion-rich gravy with double layers of crisp, caramelized baby onions.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v4",
    name: "Mutter Paneer",
    price: 200,
    rating: 4.6,
    category: "vegetables",
    description: "Traditional comfort food at its finest. Tender green peas and paneer cubes in an exquisitely spiced tomato-onion reduction.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v5",
    name: "Shahi Paneer",
    price: 240,
    rating: 4.9,
    category: "vegetables",
    description: "A royal Mughal delicacy. Tender cottage cheese cooked in an ultra-luxurious white cashew-nut and saffron infused gravy.",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v6",
    name: "Paneer Tikka Masala",
    price: 260,
    rating: 4.9,
    category: "vegetables",
    description: "Charcoal-grilled paneer pieces simmered in a rich, deeply smoked tandoori masala gravy.",
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "v7",
    name: "Soya Chaap Masala",
    price: 200,
    rating: 4.7,
    category: "vegetables",
    description: "Marinated soy chops roasted in clay tandoor and then tossed in a deeply aromatic, spiced gravy.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v8",
    name: "Boil Soy Masala",
    price: 220,
    rating: 4.5,
    category: "vegetables",
    description: "Succulent boiled soy protein chunks slow-braised in healthy, ground traditional Forbesganj herbs and spices.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v9",
    name: "Mix Veg",
    price: 220,
    rating: 4.6,
    category: "vegetables",
    description: "Fresh handpicked seasonal vegetables wok-tossed with aromatic herbs and light pan spices.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v10",
    name: "Special Mix Veg",
    price: 250,
    rating: 4.8,
    category: "vegetables",
    description: "Chef's gourmet creation containing garden herbs, paneer florets, fresh broccoli, carrots, and sweetcorn simmered in rich gravy.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "v11",
    name: "Malai Kofta",
    price: 250,
    rating: 4.9,
    category: "vegetables",
    description: "Incredibly soft dumplings of grated paneer and potato filled with dry fruits, served in a creamy saffron cashmere sauce.",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v12",
    name: "Potato And Pyaza",
    price: 160,
    rating: 4.4,
    category: "vegetables",
    description: "Crispy pan-fried baby potatoes paired with aromatic whole-caramelized country shallots.",
    imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v13",
    name: "Aloo Dum",
    price: 150,
    rating: 4.5,
    category: "vegetables",
    description: "Kashmiri style baby potatoes, pricked and deep-fried, then slow-cooked in a dynamic, chili-laced tomato infusion.",
    imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v14",
    name: "Aloo Kadhai",
    price: 160,
    rating: 4.3,
    category: "vegetables",
    description: "Pan-roasted potato wedges cooked with fresh green peppers and fresh-cracked kadhai dry spices.",
    imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v15",
    name: "Veg Jhalfrezi",
    price: 190,
    rating: 4.5,
    category: "vegetables",
    description: "Colorful assortment of semi-dry sautéed garden vegetables with a touch of tangy vinegar and green peppers.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v16",
    name: "Aloo Matar",
    price: 150,
    rating: 4.4,
    category: "vegetables",
    description: "Homestyle boiled potatoes and sweet farm peas cooked in a light, nourishing onion-spiced broth.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v17",
    name: "Mushroom Masala",
    price: 220,
    rating: 4.8,
    category: "vegetables",
    description: "Earthy, plumb button mushrooms simmered and glazed in a spicy, comforting brown masala.",
    imageUrl: "https://images.unsplash.com/photo-1594911774802-8822a707cacf?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v18",
    name: "Mushroom Kadhai",
    price: 220,
    rating: 4.7,
    category: "vegetables",
    description: "Premium sliced mushrooms sautéed in high wok heat with colorful bell peppers and rich, fiery spices.",
    imageUrl: "https://images.unsplash.com/photo-1594911774802-8822a707cacf?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v19",
    name: "Green Peas Masala",
    price: 200,
    rating: 4.5,
    category: "vegetables",
    description: "Nourishing, plump sweet peas in a dense, heavily reduced masala gravy with freshly grated ginger.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "v20",
    name: "Tawa Veg (Bawarchi Special)",
    price: 250,
    rating: 4.9,
    category: "vegetables",
    description: "Our signature Bawarchi special. Assorted fine vegetables marinated in secret local herbs, grilled on traditional iron griddle.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "v21",
    name: "Mushroom Do Pyaza",
    price: 210,
    rating: 4.6,
    category: "vegetables",
    description: "Fresh mushrooms cooked with a generous quantity of small and large diced country sweet onions.",
    imageUrl: "https://images.unsplash.com/photo-1594911774802-8822a707cacf?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // SPECIAL THALI
  {
    id: "t1",
    name: "Special Thali",
    price: 210,
    rating: 5.0,
    category: "special-thali",
    description: "The complete Indian royal feast. Includes: 2 Butter Roti or 1 Butter Naan, Crispy Roasted Papad, luxurious Dal Makhani, fresh Mix Veg, velvety Paneer Butter Masala, aromatic Jeera Rice, and cooling Garden Salad.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isBestseller: true
  },

  // TANDOOR SE
  {
    id: "tan1",
    name: "Paneer Tikka",
    price: 240,
    rating: 4.9,
    category: "tandoor-se",
    description: "Cottage cheese slabs steeped in yellow mustard oil and aromatic spices, roasted with golden edges in our charcoal clay oven.",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "tan2",
    name: "Hara Bhara Kebab",
    price: 190,
    rating: 4.8,
    category: "tandoor-se",
    description: "Beautiful emerald patties made of fresh spinach, green peas, and mashed potato, served with mint-coriander dynamic reduction.",
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "tan3",
    name: "Tandoori Momo",
    price: 160,
    rating: 4.9,
    category: "tandoor-se",
    description: "Our famous hand-folded momos marinated in special tandoori red yogurt spice and flame-charred in the clay tandoor.",
    imageUrl: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a20?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "tan4",
    name: "Soya Chaap",
    price: 220,
    rating: 4.7,
    category: "tandoor-se",
    description: "Tender chunks of soy skewer-grilled to perfection with rich aromatic Indian spices.",
    imageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // APPETIZERS
  {
    id: "ap1",
    name: "Veg Pakoda",
    price: 120,
    rating: 4.6,
    category: "appetizers",
    description: "Super crispy mix vegetable fritters seasoned with carom seeds and local spices, deep-fried to a golden perfection.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "ap2",
    name: "Paneer Pakoda",
    price: 160,
    rating: 4.8,
    category: "appetizers",
    description: "Thick double-layered paneer sandwiches coated in crisp-fried spiced chickpea batter.",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "ap3",
    name: "French Fries",
    price: 110,
    rating: 4.5,
    category: "appetizers",
    description: "Premium import cold-cut potatoes, fried golden and tossed in chef's secret pink salt and pepper mix.",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // SOUP
  {
    id: "s1",
    name: "Hot & Sour Soup",
    price: 90,
    rating: 4.6,
    category: "soup",
    description: "Spicy and tangy oriental broth loaded with finely chopped garden greens and seasoned with soy-pepper-vinegar splash.",
    imageUrl: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "s2",
    name: "Veg Manchow Soup",
    price: 90,
    rating: 4.7,
    category: "soup",
    description: "Garlicky, ginger-infused dynamic thick broth loaded with seasonal vegetables and served with crunchy fried home-cut noodles.",
    imageUrl: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // BEVERAGES
  {
    id: "b1",
    name: "Mineral Water",
    price: 20,
    rating: 4.9,
    category: "beverages",
    description: "Chilled mineral water bottle for superior refreshment.",
    imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb1b468b?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "b2",
    name: "Coke",
    price: 30,
    rating: 4.8,
    category: "beverages",
    description: "Crisp and classic original Coca-Cola served ice-cold.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "b3",
    name: "Fanta",
    price: 30,
    rating: 4.7,
    category: "beverages",
    description: "Joyful orange flavor soda served ice-cold and bubbly.",
    imageUrl: "https://images.unsplash.com/photo-1624517531393-0129e578f773?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "b4",
    name: "Mazza",
    price: 30,
    rating: 4.8,
    category: "beverages",
    description: "Premium rich mango nectar drink crafted from real Alphonso farm-grown mangoes.",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "b5",
    name: "Sting",
    price: 30,
    rating: 4.6,
    category: "beverages",
    description: "Energy drink with a sweet strawberry burst to charge up.",
    imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "b6",
    name: "Lassi",
    price: 30,
    rating: 4.9,
    category: "beverages",
    description: "Traditional sweet yogurt blended beautifully with pure cardamoms, dynamic rose syrup, and saffron layers.",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "b7",
    name: "Masala Coke",
    price: 50,
    rating: 4.9,
    category: "beverages",
    description: "Classic cola spiked with our secret sour-spicy masala mix, fresh mint leaves, and a generous squeeze of hand-picked lemons.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // MOMOS
  {
    id: "m1",
    name: "Veg Momo",
    price: 70,
    rating: 4.6,
    category: "momos",
    description: "Exquisitely shaped steamed momos packed with dynamic garden vegetables and served with hot fire-chili garlic dip.",
    imageUrl: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a20?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "m2",
    name: "Fry Momo",
    price: 90,
    rating: 4.7,
    category: "momos",
    description: "Steamed momo dumplings quick fried in clean peanut oil to create a beautiful crisp exterior.",
    imageUrl: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a20?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "m3",
    name: "Chilly Momo",
    price: 140,
    rating: 4.8,
    category: "momos",
    description: "Fried vegetable momos tossed in a blazing hot, savory wok-reduction of garlic, bell peppers, soy, and fiery pepper glaze.",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "m4",
    name: "Jhol Momo",
    price: 150,
    rating: 4.9,
    category: "momos",
    description: "Stunning Nepalese specialty. Warm, spiced sesame and tomato broth with soft steamed dumplings submerged inside.",
    imageUrl: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a20?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "m5",
    name: "Sizzler Momo",
    price: 170,
    rating: 4.9,
    category: "momos",
    description: "Sizzling iron hot plate loaded with charred momos, fresh cabbage leaves, and a heavy, smoking black-pepper garlic reduction.",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },

  // CHILLY SPECIALS
  {
    id: "cs1",
    name: "Baby Corn Crispy",
    price: 220,
    rating: 4.7,
    category: "chilly-specials",
    description: "Crunchy golden fried baby corn tossed with rich scallions, sweet chili, and savory herbs.",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs2",
    name: "Baby Corn Chilly",
    price: 220,
    rating: 4.6,
    category: "chilly-specials",
    description: "Tender baby corn spikes tossed in severe wok heat with severe soy-chili garlic sauce and peppers.",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs3",
    name: "Chilly Potato",
    price: 150,
    rating: 4.5,
    category: "chilly-specials",
    description: "French fries tossed in wok with classic dark soy, standard vinegar, and a dry-spiced hot chili glaze.",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs4",
    name: "Honey Potato",
    price: 140,
    rating: 4.6,
    category: "chilly-specials",
    description: "Stunning crisp potato wedges glazed in organic sweet honey, crushed sesame seeds, and mild soy.",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs5",
    name: "Crispy Potato",
    price: 140,
    rating: 4.4,
    category: "chilly-specials",
    description: "Hand-cut supreme crispy fried potato chips seasoned with fine rock salt, white pepper and dry chili flakes.",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs6",
    name: "Paneer Chilly",
    price: 220,
    rating: 4.9,
    category: "chilly-specials",
    description: "A country favorite. Velvety cottage cheese cubes crispy coated and wok tossed with premium spring onion, soy and vinegar.",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "cs7",
    name: "Paneer 65",
    price: 210,
    rating: 4.8,
    category: "chilly-specials",
    description: "Fiery red deep-fried paneer marinated in South Indian ginger-curry leaf-yogurt complex.",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs8",
    name: "Mushroom Chilly",
    price: 220,
    rating: 4.7,
    category: "chilly-specials",
    description: "Crunchy batter fried button mushrooms tossed beautifully in dark soy sauce and strong chili garlic sauce.",
    imageUrl: "https://images.unsplash.com/photo-1594911774802-8822a707cacf?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "cs9",
    name: "Veg Manchurian",
    price: 180,
    rating: 4.8,
    category: "chilly-specials",
    description: "Substantial dark golden vegetable bullets dipped in the classic rich, garlic-scented, dark soy, hot coriander gravy.",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },

  // NOODLES
  {
    id: "n1",
    name: "Chowmein",
    price: 120,
    rating: 4.6,
    category: "noodles",
    description: "Traditional street-style stir fried thick noodles packed with shredded cabbage, carrot strips, capiscum, and light soy seasoning.",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "n2",
    name: "Paneer Chowmein",
    price: 140,
    rating: 4.8,
    category: "noodles",
    description: "Classic vegetable stir-fried noodles decorated with high-quality small soft paneer rectangles.",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "n3",
    name: "Schezwan Noodles",
    price: 140,
    rating: 4.7,
    category: "noodles",
    description: "Dynamic work-charred noodles dressed in a spicy, fiery Schezwan dressing infused with real dry red peppers.",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "n4",
    name: "Veg Sizzler",
    price: 200,
    rating: 4.9,
    category: "noodles",
    description: "A majestic smoking hot sizzling meal of premium stir-fry noodles, potato bullets, sautéed mix vegetables, and rich pepper-garlic glaze.",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "n5",
    name: "Veg Mix Noodles",
    price: 160,
    rating: 4.8,
    category: "noodles",
    description: "Luxury noodles tossed with crisp babycorn, button mushrooms, cottage cheese cubes, and mixed herbs.",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // RICE
  {
    id: "r1",
    name: "Steam Rice",
    price: 70,
    rating: 4.5,
    category: "rice",
    description: "Premium fragrant, fluffy boiled Basmati rice lines.",
    imageUrl: "https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "r2",
    name: "Jeera Rice",
    price: 100,
    rating: 4.7,
    category: "rice",
    description: "Aromatic Basmati rice tossed in heavy golden ghee, tempered with toasted cumin seeds and green coriander.",
    imageUrl: "https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "r3",
    name: "Fried Rice",
    price: 130,
    rating: 4.8,
    category: "rice",
    description: "Wok-fried Basmati rice layered beautifully with diced spring greens, carrots, and light soy glaze.",
    imageUrl: "https://images.unsplash.com/photo-1603133872878-685b30b4ac12?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "r4",
    name: "Road Pulao",
    price: 150,
    rating: 4.8,
    category: "rice",
    description: "Traditional local specialty pulao! Heavily aromatic long-grain Basmati steamed with fresh whole cloves, raisins, and bay leaves.",
    imageUrl: "https://images.unsplash.com/photo-1603133872878-685b30b4ac12?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "r5",
    name: "Green Peas Pulao",
    price: 140,
    rating: 4.6,
    category: "rice",
    description: "Fragrant, lightly buttered saffron Pulao with plenty of sweet green country peas.",
    imageUrl: "https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // DAL
  {
    id: "d1",
    name: "Dal Fry",
    price: 100,
    rating: 4.6,
    category: "dal",
    description: "Creamy boiled yellow lentils tempered with chopped tomatoes, country onions, and double garlic fried in pure ghee.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "d2",
    name: "Yellow Dal Tadka",
    price: 140,
    rating: 4.8,
    category: "dal",
    description: "Richly wholesome yellow Toor dal cooked till tender and finished with an explosive, crackling tadka of dry red chili and cumin.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "d3",
    name: "Dal Makhani",
    price: 170,
    rating: 4.9,
    category: "dal",
    description: "Slow woodfire simmered black lentils and red kidney beans, enriched over hours with fresh white cream and pure artisanal butter.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "d4",
    name: "Black Dal Tadka",
    price: 170,
    rating: 4.7,
    category: "dal",
    description: "Nourishing black split urad dal simmered beautifully and tempered with dry red peppers and raw local spices.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },

  // ROTI & NAAN
  {
    id: "rt1",
    name: "Tandoori Roti",
    price: 15,
    rating: 4.5,
    category: "roti-naan",
    description: "Clay-oven baked crisp and healthy whole wheat Indian flatbread.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "rt2",
    name: "Butter Tandoori Roti",
    price: 20,
    rating: 4.6,
    category: "roti-naan",
    description: "Crisp baked tandoori wheat bread glazed beautifully with pure yellow butter.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "rt3",
    name: "Plain Naan",
    price: 35,
    rating: 4.6,
    category: "roti-naan",
    description: "Rich leavened clay-baked flatbread, incredibly soft and tearable.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "rt4",
    name: "Butter Naan",
    price: 45,
    rating: 4.9,
    category: "roti-naan",
    description: "Exquisite layered soft naan, baked in the high-heat tandoor and thoroughly brushed with melted butter.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "rt5",
    name: "Garlic Naan",
    price: 60,
    rating: 4.9,
    category: "roti-naan",
    description: "Our signature garlic luxury naan. Rolled with freshly-crushed garlic pearls and fresh parsley, baked till heavily charred.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  },
  {
    id: "rt6",
    name: "Kulcha",
    price: 60,
    rating: 4.7,
    category: "roti-naan",
    description: "Fluffy, tany wheat bread infused with custom ground coriander and robust baking spices.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true
  },
  {
    id: "rt7",
    name: "Cheese Naan",
    price: 80,
    rating: 4.9,
    category: "roti-naan",
    description: "Luxurious clay-baked flatbread stuffed internally with rich, molten mozzarella and cheddar cheese strings.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=700&q=80",
    isVeg: true,
    isBestseller: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    name: "Vikas Pathak",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Spicy Bawarchi has completely revolutionised the food standards in Forbesganj. The Butter Naan and Paneer Butter Masala are exceptionally soft, cooked exactly like five-star standards! Strongly recommended.",
    date: "1 week ago",
    verified: true
  },
  {
    id: "rev2",
    name: "Anjali Kumari",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The special thali is a work of art. Dal makhani is intensely creamy, and the paneer butter masala is sweet-savory perfect. It's the cleanest, most delicious spot to visit with family.",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "rev3",
    name: "Raman Khanna",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Outstanding momos! Sizzler Momo and Tandoori Momo are on another level compared to standard shops. Excellent service and pristine dark premium packaging.",
    date: "3 days ago",
    verified: true
  }
];

export const GALLERY_IMAGES = [
  {
    id: "gal1",
    url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    title: "Signature Paneer Butter Masala",
    category: "Pure Shahi Magic"
  },
  {
    id: "gal2",
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    title: "Royal Maharaja Thali",
    category: "Full Indian Feast"
  },
  {
    id: "gal3",
    url: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a20?auto=format&fit=crop&w=800&q=80",
    title: "Artisanal Tandoori Momos",
    category: "Himalayan Fusion"
  },
  {
    id: "gal4",
    url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    title: "Charred Paneer Tikka Skewer",
    category: "Clay Oven Grill"
  },
  {
    id: "gal5",
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    title: "Veg Sizzling Chowmein Stir-fry",
    category: "Wok Magic"
  },
  {
    id: "gal6",
    url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80",
    title: "Crispy Sizzling Pakoda Platter",
    category: "Crispy Starters"
  }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    title: "Premium Food Quality",
    description: "Every dish is meticulously curated with hand-selected rich ingredients that meet elite standards.",
    iconName: "Award",
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "Pristine Fresh Ingredients",
    description: "We source organic vegetables and fresh-whipped farm cottage cheese daily for clean, vibrant flavors.",
    iconName: "Leaf",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Swift Express Service",
    description: "Your order is prepared at full wok-heat speed, arriving hot and piping directly to your table or doorstep.",
    iconName: "Zap",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Family Friendly Environment",
    description: "Step into our elegantly designed, heavy air-conditioned dining interior made for warm familial conversations.",
    iconName: "Users",
    color: "from-gold-500 to-yellow-600"
  },
  {
    title: "Affordable Luxury Prices",
    description: "Indulge in 5-star taste profiles and flawless, generous portions without the 5-star markup.",
    iconName: "BadgeIndianRupee",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Absolute Best Taste in Town",
    description: "A solid legacy of unmatched culinary mastery in Forbesganj making every single bite tell a story.",
    iconName: "Heart",
    color: "from-rose-500 to-orange-600"
  }
];
