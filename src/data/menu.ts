import type { MenuItem } from "@/types";

/* All images use verified Unsplash photo IDs with proper crop params */
const U = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const menuItems: MenuItem[] = [
  // ──── ESPRESSO ────
  {
    id: "esp-1", name: "Classic Espresso",
    description: "Bold, rich double shot pulled from our signature roast. Pure intensity in a cup.",
    price: 150, image: U("photo-1510591509098-f4fdc6d0ff04"), category: "espresso", tags: ["hot"], bestseller: true,
  },
  {
    id: "esp-2", name: "Espresso Macchiato",
    description: "Velvety espresso kissed with a dollop of steamed milk foam.",
    price: 170, image: U("photo-1514432324607-a09d9b4aefda"), category: "espresso", tags: ["hot"],
  },
  {
    id: "esp-3", name: "Ristretto",
    description: "A shorter, more concentrated pull for the true espresso connoisseur.",
    price: 160, image: U("photo-1504630083234-14187a9df0f5"), category: "espresso", tags: ["hot"],
  },
  {
    id: "esp-4", name: "Doppio",
    description: "A full-bodied double espresso with notes of dark chocolate and caramel.",
    price: 180, image: U("photo-1485808191679-5f86510681a2"), category: "espresso", tags: ["hot"],
  },

  // ──── COFFEE ────
  {
    id: "cof-1", name: "Classic Cappuccino",
    description: "Perfectly balanced espresso, steamed milk, and a crown of silky microfoam.",
    price: 180, image: U("photo-1572442388796-11668a67e53d"), category: "coffee", tags: ["hot", "bestseller"], bestseller: true,
  },
  {
    id: "cof-2", name: "Caramel Macchiato",
    description: "Layered vanilla milk, espresso, and house-made caramel drizzle.",
    price: 240, image: U("photo-1485808191679-5f86510681a2"), category: "coffee", tags: ["hot", "bestseller"], bestseller: true,
  },
  {
    id: "cof-3", name: "Flat White",
    description: "Double ristretto with velvety microfoam — smooth, bold, and beautifully balanced.",
    price: 200, image: U("photo-1577968897966-3d4325b36b61"), category: "coffee", tags: ["hot"],
  },
  {
    id: "cof-4", name: "Hazelnut Latte",
    description: "Creamy espresso latte infused with toasted hazelnut syrup and a nutty finish.",
    price: 250, image: U("photo-1461023058943-07fcbe16d735"), category: "coffee", tags: ["hot"],
  },
  {
    id: "cof-5", name: "Mocha Royale",
    description: "Rich espresso blended with Belgian dark chocolate and topped with whipped cream.",
    price: 270, image: U("photo-1578314675249-a6910f80cc4e"), category: "coffee", tags: ["hot"],
  },
  {
    id: "cof-6", name: "Vanilla Bean Latte",
    description: "Hand-scraped Madagascar vanilla infused into our creamy signature latte.",
    price: 240, image: U("photo-1517701604599-bb29b565090c"), category: "coffee", tags: ["hot"],
  },
  {
    id: "cof-7", name: "Cortado",
    description: "Equal parts espresso and warm silky milk — bold yet smooth.",
    price: 190, image: U("photo-1559496417-e7f25cb247f3"), category: "coffee", tags: ["hot"],
  },

  // ──── COLD BREW ────
  {
    id: "cb-1", name: "Classic Cold Brew",
    description: "18-hour steeped single-origin cold brew. Smooth, low-acid, deeply refreshing.",
    price: 220, image: U("photo-1517701550847-12e3749ceda0"), category: "cold-brew", tags: ["cold", "bestseller"], bestseller: true,
  },
  {
    id: "cb-2", name: "Salted Caramel Cold Brew",
    description: "Cold brew swirled with salted caramel and topped with sweet cream foam.",
    price: 260, image: U("photo-1553909489-cd47e0907980"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-3", name: "Nitro Cold Brew",
    description: "Infused with nitrogen for a creamy, cascading pour — no milk needed.",
    price: 280, image: U("photo-1592663527359-cf6642f54cff"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-4", name: "Iced Mocha",
    description: "Chilled espresso, dark chocolate, cold milk, and crushed ice.",
    price: 240, image: U("photo-1461023058943-07fcbe16d735"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-5", name: "Vietnamese Iced Coffee",
    description: "Slow-drip dark roast over condensed milk — intensely sweet and bold.",
    price: 230, image: U("photo-1514432324607-a09d9b4aefda"), category: "cold-brew", tags: ["cold"],
  },

  // ──── TEA ────
  {
    id: "tea-1", name: "Matcha Latte",
    description: "Ceremonial-grade Japanese matcha whisked with steamed oat milk.",
    price: 260, image: U("photo-1515823064-d6e0c04616a7"), category: "tea", tags: ["hot", "vegan", "organic"],
  },
  {
    id: "tea-2", name: "Chai Masala",
    description: "House-blended spices simmered in milk — cardamom, cinnamon, ginger, and clove.",
    price: 180, image: U("photo-1563639788-2c3e14e1af7d"), category: "tea", tags: ["hot"], bestseller: true,
  },
  {
    id: "tea-3", name: "Earl Grey Lavender",
    description: "Bergamot-scented black tea with French lavender and a touch of honey.",
    price: 200, image: U("photo-1571934811356-5cc061b6821f"), category: "tea", tags: ["hot"],
  },
  {
    id: "tea-4", name: "Iced Peach Green Tea",
    description: "Light Japanese green tea with ripe peach nectar over ice.",
    price: 190, image: U("photo-1556679343-c7306c1976bc"), category: "tea", tags: ["cold", "vegan"],
  },

  // ──── SMOOTHIES ────
  {
    id: "sm-1", name: "Berry Bliss Smoothie",
    description: "Blueberries, strawberries, banana, and Greek yogurt blended to perfection.",
    price: 280, image: U("photo-1553530666-ba11a7da3888"), category: "smoothies", tags: ["cold", "gluten-free"],
  },
  {
    id: "sm-2", name: "Mango Sunshine",
    description: "Fresh Alphonso mango, coconut milk, and a hint of turmeric.",
    price: 290, image: U("photo-1623065422902-30a2d299bbe4"), category: "smoothies", tags: ["cold", "vegan", "gluten-free"],
  },
  {
    id: "sm-3", name: "Green Detox",
    description: "Spinach, apple, ginger, lemon, and chia seeds for a fresh start.",
    price: 270, image: U("photo-1610970881699-44a5587cabec"), category: "smoothies", tags: ["cold", "vegan", "organic"],
  },
  {
    id: "sm-4", name: "Peanut Butter Banana",
    description: "Roasted peanut butter, ripe banana, oat milk, and cacao nibs.",
    price: 290, image: U("photo-1577805947697-89e18249d767"), category: "smoothies", tags: ["cold", "vegan"],
  },

  // ──── PASTRIES ────
  {
    id: "pas-1", name: "Almond Croissant",
    description: "Buttery, flaky layers filled with frangipane cream and toasted almonds.",
    price: 150, image: U("photo-1509365390695-33aee754301f"), category: "pastries", tags: [], bestseller: true,
  },
  {
    id: "pas-2", name: "Pain au Chocolat",
    description: "French classic with layers of butter pastry and dark chocolate batons.",
    price: 160, image: U("photo-1530610476181-d83430b64dcd"), category: "pastries", tags: [],
  },
  {
    id: "pas-3", name: "Cinnamon Swirl",
    description: "Warm, gooey cinnamon sugar rolled into soft brioche dough.",
    price: 140, image: U("photo-1509365465985-25d11c17e812"), category: "pastries", tags: [],
  },
  {
    id: "pas-4", name: "Blueberry Muffin",
    description: "Bursting with wild blueberries, topped with a crunchy streusel crumble.",
    price: 130, image: U("photo-1607958996333-41aef7caefaa"), category: "pastries", tags: [],
  },
  {
    id: "pas-5", name: "Pistachio Danish",
    description: "Flaky pastry filled with pistachio cream and topped with crushed pistachios.",
    price: 170, image: U("photo-1555507036-ab1f4038024a"), category: "pastries", tags: [],
  },

  // ──── BREAKFAST ────
  {
    id: "br-1", name: "Avocado Toast",
    description: "Smashed avocado, cherry tomatoes, microgreens, and chili flakes on sourdough.",
    price: 320, image: U("photo-1541519227354-08fa5d50c44d"), category: "breakfast", tags: ["vegan"], bestseller: true,
  },
  {
    id: "br-2", name: "Eggs Benedict",
    description: "Poached eggs, smoked ham, and hollandaise on toasted English muffin.",
    price: 380, image: U("photo-1608039829572-78524f79c4c7"), category: "breakfast", tags: ["hot"],
  },
  {
    id: "br-3", name: "Granola Bowl",
    description: "House-made granola with Greek yogurt, seasonal fruits, and honey drizzle.",
    price: 260, image: U("photo-1484723091739-30a097e8f929"), category: "breakfast", tags: ["gluten-free", "organic"],
  },
  {
    id: "br-4", name: "Smoked Salmon Bagel",
    description: "Toasted bagel with cream cheese, smoked salmon, capers, and dill.",
    price: 350, image: U("photo-1509722747041-616f39b57569"), category: "breakfast", tags: [],
  },

  // ──── BRUNCH ────
  {
    id: "bru-1", name: "French Toast Royale",
    description: "Brioche French toast with mascarpone, berries, maple syrup, and edible flowers.",
    price: 380, image: U("photo-1484723091739-30a097e8f929"), category: "brunch", tags: [],
  },
  {
    id: "bru-2", name: "Shakshuka",
    description: "Poached eggs in spiced tomato-pepper sauce with crusty sourdough for dipping.",
    price: 340, image: U("photo-1590412200988-a436970781fa"), category: "brunch", tags: ["gluten-free"],
  },
  {
    id: "bru-3", name: "Mushroom Truffle Omelette",
    description: "Free-range eggs, wild mushrooms, gruyere, and a drizzle of truffle oil.",
    price: 420, image: U("photo-1525351484163-7529414344d8"), category: "brunch", tags: ["gluten-free"],
  },

  // ──── DESSERTS ────
  {
    id: "des-1", name: "Tiramisu",
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
    price: 280, image: U("photo-1571877227200-a0d98ea607e9"), category: "desserts", tags: [], bestseller: true,
  },
  {
    id: "des-2", name: "Creme Brulee",
    description: "Classic vanilla custard with a perfectly caramelized sugar crust.",
    price: 260, image: U("photo-1470124182917-cc6e71b22ecc"), category: "desserts", tags: ["gluten-free"],
  },
  {
    id: "des-3", name: "Dark Chocolate Fondant",
    description: "Warm 70% Valrhona chocolate cake with a molten center and vanilla gelato.",
    price: 320, image: U("photo-1606313564200-e75d5e30476c"), category: "desserts", tags: [],
  },
  {
    id: "des-4", name: "New York Cheesecake",
    description: "Dense, creamy cheesecake on a buttery graham crust with berry compote.",
    price: 280, image: U("photo-1533134242443-d4fd215305ad"), category: "desserts", tags: [],
  },

  // ──── VEGAN ────
  {
    id: "veg-1", name: "Oat Milk Latte",
    description: "Our signature espresso with creamy barista oat milk — naturally sweet.",
    price: 220, image: U("photo-1517701604599-bb29b565090c"), category: "vegan", tags: ["vegan", "hot"],
  },
  {
    id: "veg-2", name: "Vegan Buddha Bowl",
    description: "Quinoa, roasted chickpeas, avocado, greens, and tahini dressing.",
    price: 360, image: U("photo-1512621776951-a57141f2eefd"), category: "vegan", tags: ["vegan", "gluten-free", "organic"],
  },
  {
    id: "veg-3", name: "Coconut Chia Pudding",
    description: "Overnight chia seeds in coconut milk with mango and passion fruit.",
    price: 220, image: U("photo-1490474418585-ba9bad8fd0ea"), category: "vegan", tags: ["vegan", "gluten-free"],
  },
  {
    id: "veg-4", name: "Acai Bowl",
    description: "Blended acai, banana, granola, coconut flakes, and fresh berries.",
    price: 340, image: U("photo-1590301157890-4810ed352733"), category: "vegan", tags: ["vegan", "gluten-free", "organic"],
  },

  // ──── SPECIALS ────
  {
    id: "spc-1", name: "Lumiere Signature Blend",
    description: "Our exclusive house blend — notes of dark cherry, cocoa, and toasted walnut.",
    price: 300, image: U("photo-1495474472287-4d71bcdd2085"), category: "specials", tags: ["hot", "bestseller"], bestseller: true, isNew: true,
  },
  {
    id: "spc-2", name: "Rose Cardamom Latte",
    description: "Persian-inspired latte with rose water, ground cardamom, and pistachio dust.",
    price: 290, image: U("photo-1572442388796-11668a67e53d"), category: "specials", tags: ["hot"], isNew: true,
  },
  {
    id: "spc-3", name: "Affogato al Cioccolato",
    description: "Double espresso poured over artisan vanilla gelato with dark chocolate shavings.",
    price: 310, image: U("photo-1514432324607-a09d9b4aefda"), category: "specials", tags: ["cold"],
  },
  {
    id: "spc-4", name: "Saffron Honey Latte",
    description: "Warm milk steeped with Kashmiri saffron, raw honey, and a dash of cinnamon.",
    price: 320, image: U("photo-1578314675249-a6910f80cc4e"), category: "specials", tags: ["hot", "organic"], isNew: true,
  },
  {
    id: "spc-5", name: "Lavender Oat Cortado",
    description: "French lavender-infused espresso with oat milk — floral, smooth, unforgettable.",
    price: 280, image: U("photo-1509042239860-f550ce710b93"), category: "specials", tags: ["hot", "vegan"], isNew: true,
  },
];

export const categoryLabels: Record<string, string> = {
  espresso: "Espresso",
  coffee: "Coffee",
  "cold-brew": "Cold Brew",
  tea: "Tea",
  smoothies: "Smoothies",
  pastries: "Pastries",
  breakfast: "Breakfast",
  brunch: "Brunch",
  desserts: "Desserts",
  vegan: "Vegan",
  specials: "Specials",
};
