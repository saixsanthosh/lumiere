import type { MenuItem } from "@/types";

/* All images use verified Unsplash photo IDs (each item has a UNIQUE image). */
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
    price: 170, image: U("photo-1485808191679-5f86510681a2"), category: "espresso", tags: ["hot"],
  },
  {
    id: "esp-3", name: "Ristretto",
    description: "A shorter, more concentrated pull for the true espresso connoisseur.",
    price: 160, image: U("photo-1504630083234-14187a9df0f5"), category: "espresso", tags: ["hot"],
  },
  {
    id: "esp-4", name: "Doppio",
    description: "A full-bodied double espresso with notes of dark chocolate and caramel.",
    price: 180, image: U("photo-1510707577719-ae7c14805e3a"), category: "espresso", tags: ["hot"],
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
    price: 240, image: U("photo-1561882468-9110e03e0f78"), category: "coffee", tags: ["hot", "bestseller"], bestseller: true,
  },
  {
    id: "cof-3", name: "Flat White",
    description: "Double ristretto with velvety microfoam — smooth, bold, and beautifully balanced.",
    price: 200, image: U("photo-1577968897966-3d4325b36b61"), category: "coffee", tags: ["hot"],
  },
  {
    id: "cof-4", name: "Hazelnut Latte",
    description: "Creamy espresso latte infused with toasted hazelnut syrup and a nutty finish.",
    price: 250, image: U("photo-1541167760496-1628856ab772"), category: "coffee", tags: ["hot"],
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
    price: 220, image: U("photo-1461023058943-07fcbe16d735"), category: "cold-brew", tags: ["cold", "bestseller"], bestseller: true,
  },
  {
    id: "cb-2", name: "Salted Caramel Cold Brew",
    description: "Cold brew swirled with salted caramel and topped with sweet cream foam.",
    price: 260, image: U("photo-1572490122747-3968b75cc699"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-3", name: "Nitro Cold Brew",
    description: "Infused with nitrogen for a creamy, cascading pour — no milk needed.",
    price: 280, image: U("photo-1592663527359-cf6642f54cff"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-4", name: "Iced Mocha",
    description: "Chilled espresso, dark chocolate, cold milk, and crushed ice.",
    price: 240, image: U("photo-1534778101976-62847782c213"), category: "cold-brew", tags: ["cold"],
  },
  {
    id: "cb-5", name: "Vietnamese Iced Coffee",
    description: "Slow-drip dark roast over condensed milk — intensely sweet and bold.",
    price: 230, image: U("photo-1517701550927-30cf4ba1dba5"), category: "cold-brew", tags: ["cold"],
  },

  {
    id: "cb-6", name: "Iced Spanish Latte",
    description: "Bold espresso over ice, sweetened with condensed milk for a smooth, caramel finish.",
    price: 250, image: U("photo-1517959105821-eaf2591984ca"), category: "cold-brew", tags: ["cold"], isNew: true,
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
    price: 180, image: U("photo-1597318181409-cf64d0b5d8a2"), category: "tea", tags: ["hot"], bestseller: true,
  },
  {
    id: "tea-3", name: "Earl Grey Lavender",
    description: "Bergamot-scented black tea with French lavender and a touch of honey.",
    price: 200, image: U("photo-1597481499750-3e6b22637e12"), category: "tea", tags: ["hot"],
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
    price: 280, image: U("photo-1638176066666-ffb2f013c7dd"), category: "smoothies", tags: ["cold", "gluten-free"],
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
  {
    id: "sm-5", name: "Strawberry Banana Smoothie",
    description: "Sun-ripe strawberries and banana whipped with creamy yogurt and honey.",
    price: 280, image: U("photo-1502741224143-90386d7f8c82"), category: "smoothies", tags: ["cold", "gluten-free"], isNew: true,
  },

  // ──── PASTRIES ────
  {
    id: "pas-1", name: "Almond Croissant",
    description: "Buttery, flaky layers filled with frangipane cream and toasted almonds.",
    price: 150, image: U("photo-1555507036-ab1f4038808a"), category: "pastries", tags: [], bestseller: true,
  },
  {
    id: "pas-2", name: "Pain au Chocolat",
    description: "French classic with layers of butter pastry and dark chocolate batons.",
    price: 160, image: U("photo-1530610476181-d83430b64dcd"), category: "pastries", tags: [],
  },
  {
    id: "pas-3", name: "Cinnamon Swirl",
    description: "Warm, gooey cinnamon sugar rolled into soft brioche dough.",
    price: 140, image: U("photo-1607920591413-4ec007e70023"), category: "pastries", tags: [],
  },
  {
    id: "pas-4", name: "Blueberry Muffin",
    description: "Bursting with wild blueberries, topped with a crunchy streusel crumble.",
    price: 130, image: U("photo-1607958996333-41aef7caefaa"), category: "pastries", tags: [],
  },
  {
    id: "pas-5", name: "Pistachio Danish",
    description: "Flaky pastry filled with pistachio cream and topped with crushed pistachios.",
    price: 170, image: U("photo-1623334044303-241021148842"), category: "pastries", tags: [],
  },

  {
    id: "pas-6", name: "Chocolate Chip Cookie",
    description: "Warm, gooey cookie loaded with molten dark-chocolate chunks and a sea-salt finish.",
    price: 120, image: U("photo-1499636136210-6f4ee915583e"), category: "pastries", tags: [], isNew: true,
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
    price: 260, image: U("photo-1517673400267-0251440c45dc"), category: "breakfast", tags: ["gluten-free", "organic"],
  },
  {
    id: "br-4", name: "Smoked Salmon Bagel",
    description: "Toasted bagel with cream cheese, smoked salmon, capers, and dill.",
    price: 350, image: U("photo-1509722747041-616f39b57569"), category: "breakfast", tags: [],
  },
  {
    id: "br-5", name: "Buttermilk Pancakes",
    description: "Fluffy stack with maple syrup, fresh berries, and a melt of salted butter.",
    price: 290, image: U("photo-1567620905732-2d1ec7ab7445"), category: "breakfast", tags: [], isNew: true,
  },
  {
    id: "br-6", name: "Grilled Veggie Sandwich",
    description: "Roasted peppers, zucchini, pesto, and mozzarella pressed on artisan sourdough.",
    price: 280, image: U("photo-1539252554453-80ab65ce3586"), category: "breakfast", tags: [], isNew: true,
  },

  {
    id: "br-7", name: "Chicken Club Sandwich",
    description: "Triple-stacked grilled chicken, crispy bacon, lettuce, tomato, and herb mayo.",
    price: 340, image: U("photo-1528735602780-2552fd46c7af"), category: "breakfast", tags: [], isNew: true,
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
  {
    id: "bru-4", name: "Classic Smash Burger",
    description: "Double smashed patties, melted cheddar, house sauce, and pickles in a brioche bun.",
    price: 360, image: U("photo-1568901346375-23c9450c58cd"), category: "brunch", tags: [], isNew: true,
  },
  {
    id: "bru-5", name: "Truffle Mushroom Pasta",
    description: "Hand-tossed tagliatelle in a creamy wild-mushroom truffle sauce with parmesan.",
    price: 390, image: U("photo-1551183053-bf91a1d81141"), category: "brunch", tags: [], isNew: true,
  },
  {
    id: "bru-6", name: "Margherita Flatbread",
    description: "Wood-fired flatbread with San Marzano tomato, fresh mozzarella, and basil.",
    price: 340, image: U("photo-1574071318508-1cdbab80d002"), category: "brunch", tags: [], isNew: true,
  },

  {
    id: "bru-7", name: "Caesar Salad",
    description: "Crisp romaine, shaved parmesan, garlic croutons, and creamy Caesar dressing.",
    price: 300, image: U("photo-1550304943-4f24f54ddde9"), category: "brunch", tags: [], isNew: true,
  },

  // ──── DESSERTS ────
  {
    id: "des-1", name: "Tiramisu",
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
    price: 280, image: U("photo-1571877227200-a0d98ea607e9"), category: "desserts", tags: [], bestseller: true,
  },
  {
    id: "des-2", name: "French Macarons",
    description: "Delicate almond-meringue shells with silky ganache filling — a rainbow of flavours.",
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
  {
    id: "des-5", name: "Belgian Waffle",
    description: "Crisp golden waffle with whipped cream, chocolate sauce, and fresh strawberries.",
    price: 260, image: U("photo-1562376552-0d160a2f238d"), category: "desserts", tags: [], isNew: true,
  },

  {
    id: "des-6", name: "Fudge Brownie",
    description: "Dense, fudgy dark-chocolate brownie served warm with a scoop of vanilla gelato.",
    price: 190, image: U("photo-1610450949065-1f2841536c88"), category: "desserts", tags: [], isNew: true,
  },
  {
    id: "des-7", name: "Red Velvet Slice",
    description: "Velvety cocoa sponge layered with tangy cream-cheese frosting.",
    price: 240, image: U("photo-1586788680434-30d324b2d46f"), category: "desserts", tags: [], isNew: true,
  },

  // ──── VEGAN ────
  {
    id: "veg-1", name: "Oat Milk Latte",
    description: "Our signature espresso with creamy barista oat milk — naturally sweet.",
    price: 220, image: U("photo-1559056199-641a0ac8b55e"), category: "vegan", tags: ["vegan", "hot"],
  },
  {
    id: "veg-2", name: "Vegan Buddha Bowl",
    description: "Quinoa, roasted chickpeas, avocado, greens, and tahini dressing.",
    price: 360, image: U("photo-1512621776951-a57141f2eefd"), category: "vegan", tags: ["vegan", "gluten-free", "organic"],
  },
  {
    id: "veg-3", name: "Coconut Chia Pudding",
    description: "Overnight chia seeds in coconut milk with mango and passion fruit.",
    price: 220, image: U("photo-1590080875515-8a3a8dc5735e"), category: "vegan", tags: ["vegan", "gluten-free"],
  },
  {
    id: "veg-4", name: "Acai Bowl",
    description: "Blended acai, banana, granola, coconut flakes, and fresh berries.",
    price: 340, image: U("photo-1511690656952-34342bb7c2f2"), category: "vegan", tags: ["vegan", "gluten-free", "organic"],
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
    price: 290, image: U("photo-1551030173-122aabc4489c"), category: "specials", tags: ["hot"], isNew: true,
  },
  {
    id: "spc-3", name: "Affogato al Cioccolato",
    description: "Double espresso poured over artisan vanilla gelato with dark chocolate shavings.",
    price: 310, image: U("photo-1568649929103-28ffbefaca1e"), category: "specials", tags: ["cold"],
  },
  {
    id: "spc-4", name: "Saffron Honey Latte",
    description: "Warm milk steeped with Kashmiri saffron, raw honey, and a dash of cinnamon.",
    price: 320, image: U("photo-1626074353765-517a681e40be"), category: "specials", tags: ["hot", "organic"], isNew: true,
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
