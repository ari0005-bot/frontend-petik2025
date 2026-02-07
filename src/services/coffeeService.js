const COFFEE_API_BASE = "https://api.sampleapis.com/coffee";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const coffeeService = {
  getAllCoffee: async () => {
    try {
      return getMockHotCoffee();
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      return getMockHotCoffee();
    }
  },

  getCoffeeById: async (id) => {
    try {
      const mockData = getMockHotCoffee();
      return (
        mockData.find((coffee) => coffee.id === parseInt(id)) || mockData[0]
      );
    } catch (error) {
      console.error("Error fetching coffee details:", error);
      throw error;
    }
  },

  getIcedCoffee: async () => {
    try {
      return getMockIcedCoffee();
    } catch (error) {
      console.error("Error fetching iced coffee data:", error);
      return getMockIcedCoffee();
    }
  },

  getCoffeeRecipes: async () => {
    try {
      const response = await fetchData(
        "https://coffee.alexflipnote.dev/random.json",
      );
      return response;
    } catch (error) {
      console.error("Error fetching coffee recipe:", error);
      throw error;
    }
  },

  getCoffeeNews: async () => {
    try {
      const response = await fetchData(
        `https://newsapi.org/v2/everything?q=coffee&apiKey=YOUR_API_KEY&pageSize=10`,
      );
      return response.articles;
    } catch (error) {
      console.log("Using fallback coffee news data");
      return getMockCoffeeNews();
    }
  },
};

const getMockCoffeeNews = () => [
  {
    id: 1,
    title: "Tren Kopi Cold Brew Terbaru 2024",
    description:
      "Temukan berbagai inovasi cold brew yang sedang populer di kalangan milenial",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
    date: new Date().toISOString(),
    source: "Coffee Magazine",
  },
  {
    id: 2,
    title: "Manfaat Kopi untuk Kesehatan Otak",
    description:
      "Studi terbaru menunjukkan kopi dapat meningkatkan fungsi kognitif",
    image: "https://images.unsplash.com/photo-1511920183311-f32d5a0f4ea2?w=400",
    date: new Date().toISOString(),
    source: "Health Journal",
  },
  {
    id: 3,
    title: "Teknik Barista: Latte Art untuk Pemula",
    description: "Panduan lengkap membuat latte art yang indah dan profesional",
    image: "https://images.unsplash.com/photo-1527839035401-71ca854c7b80?w=400",
    date: new Date().toISOString(),
    source: "Barista Guide",
  },
  {
    id: 4,
    title: "Asal Usul Kopi Arabica vs Robusta",
    description:
      "Mengenal perbedaan dan karakteristik unik dari dua jenis kopi utama",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
    date: new Date().toISOString(),
    source: "Coffee Origins",
  },
  {
    id: 5,
    title: "Coffee Shop Terbaik di Jakarta 2024",
    description:
      "Rekomendasi tempat ngopi dengan suasana dan cita rasa terbaik",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
    date: new Date().toISOString(),
    source: "Urban Coffee",
  },
];

const getMockHotCoffee = () => [
  {
    id: 1,
    title: "Espresso",
    description:
      "Kopi pekat yang dibuat dengan menembuskan air panas melalui bubuk kopi yang dipadatkan. Dasar dari semua minuman kopi.",
    ingredients: ["Bubuk kopi", "Air panas"],
    price: "Rp 15.000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
  },
  {
    id: 2,
    title: "Cappuccino",
    description:
      "Espresso dengan steamed milk dan foam yang seimbang. Rasa kopi yang kuat dengan tekstur creamy.",
    ingredients: ["Espresso", "Susu", "Foam"],
    price: "Rp 25.000",
    image: "https://images.unsplash.com/photo-1527839035401-71ca854c7b80?w=400",
  },
  {
    id: 3,
    title: "Caffe Latte",
    description:
      "Espresso dengan lebih banyak steamed milk dan sedikit foam. Pilihan yang lebih lembut untuk yang tidak suka kopi terlalu kuat.",
    ingredients: ["Espresso", "Susu", "Sedikit foam"],
    price: "Rp 28.000",
    image: "https://images.unsplash.com/photo-1511920183311-f32d5a0f4ea2?w=400",
  },
  {
    id: 4,
    title: "Americano",
    description:
      "Espresso yang diencerkan dengan air panas. Rasa kopi yang kuat namun lebih ringan dari espresso murni.",
    ingredients: ["Espresso", "Air panas"],
    price: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
  },
  {
    id: 5,
    title: "Macchiato",
    description:
      "Espresso dengan sedikit foam di atasnya. Rasa kopi yang dominan dengan sentuhan susu.",
    ingredients: ["Espresso", "Foam susu"],
    price: "Rp 22.000",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
  },
];

const getMockIcedCoffee = () => [
  {
    id: 6,
    title: "Iced Coffee",
    description:
      "Kopi hitam yang disajikan dingin dengan es batu. Segar dan menyegarkan.",
    ingredients: ["Kopi", "Es batu"],
    price: "Rp 20.000",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400",
  },
  {
    id: 7,
    title: "Iced Latte",
    description: "Espresso dengan susu dingin dan es batu. Creamy dan segar.",
    ingredients: ["Espresso", "Susu dingin", "Es batu"],
    price: "Rp 30.000",
    image: "https://images.unsplash.com/photo-1512416420420-dbeabc19e5a6?w=400",
  },
  {
    id: 8,
    title: "Cold Brew",
    description:
      "Kopi yang diseduh dengan air dingin selama 12-24 jam. Rasa yang lebih smooth dan less acidic.",
    ingredients: ["Bubuk kopi", "Air dingin", "Waktu 12-24 jam"],
    price: "Rp 35.000",
    image: "https://images.unsplash.com/photo-1551030602-c1c2b513f1e1?w=400",
  },
  {
    id: 9,
    title: "Iced Caramel Macchiato",
    description:
      "Espresso, susu, es batu, dan caramel sauce. Manis dan creamy.",
    ingredients: ["Espresso", "Susu", "Caramel", "Es batu"],
    price: "Rp 38.000",
    image: "https://images.unsplash.com/photo-1542991284-943849e60e04?w=400",
  },
  {
    id: 10,
    title: "Frappuccino",
    description:
      "Kopi blended dengan es dan berbagai topping. Minuman kopi dingin yang creamy.",
    ingredients: ["Espresso", "Es batu", "Susu", "Whipped cream"],
    price: "Rp 42.000",
    image: "https://images.unsplash.com/photo-1494314671902-955e45c6b4d4?w=400",
  },
];
