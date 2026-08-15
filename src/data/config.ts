export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bgColor: string;         // Tailwind CSS class (gradient start/end)
  accentHex: string;       // Custom inline CSS color (glow, text highlight)
  bottleBgHex: string;     // Color representation of the juice for CSS effects
  image: string;           // Local path to the generated bottle asset
  price: string;
  rating: number;
  reviewsCount: number;
  nutrition: {
    calories: number;
    sugar: string;
    vitaminC: string;
    organic: string;
  };
  benefits: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path outline or emoji
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const brandConfig = {
  name: "Panda",
  logo: "🐼 Panda Juices",
  tagline: "Wildly Fresh, Purely Pressed",
  description: "100% raw, cold-pressed premium juices crafted to revitalize your body and soul. Born in the wild, bottled for you.",
  contactEmail: "wild@pandajuices.com",
  
  hero: {
    title: "Unleash the Wild",
    highlightTitle: "Freshness",
    subtitle: "Premium organic, cold-pressed juices crafted to energize your daily ritual. No added sugar, no preservatives, just pure nature.",
    primaryCta: "Shop Flavors",
    secondaryCta: "Our Process",
  },
  
  flavors: [
    {
      id: "mango-fusion",
      name: "Panda Mango Fusion",
      tagline: "Tropical Sunset in a Bottle",
      description: "A luscious, vibrant blend of sun-ripened organic mangoes, tropical passion fruit, and a refreshing hint of wild garden mint.",
      bgColor: "from-amber-400 via-orange-500 to-red-600",
      accentHex: "#f59e0b",
      bottleBgHex: "#fbbf24",
      image: "/images/mango-fusion.jpg",
      price: "$5.99",
      rating: 4.9,
      reviewsCount: 142,
      nutrition: {
        calories: 110,
        sugar: "16g",
        vitaminC: "120%",
        organic: "100%"
      },
      benefits: ["Immune Support", "Digestive Health", "Natural Energy Boost"]
    },
    {
      id: "berry-blast",
      name: "Panda Berry Blast",
      tagline: "Antioxidant Powerhouse",
      description: "A rich, deep berry fusion packed with wild blueberries, organic blackberries, sweet raspberries, and a bright splash of lime.",
      bgColor: "from-pink-500 via-purple-600 to-indigo-800",
      accentHex: "#ec4899",
      bottleBgHex: "#db2777",
      image: "/images/berry-blast.jpg",
      price: "$6.49",
      rating: 5.0,
      reviewsCount: 218,
      nutrition: {
        calories: 85,
        sugar: "12g",
        vitaminC: "95%",
        organic: "100%"
      },
      benefits: ["Rich in Antioxidants", "Skin Glow Vitality", "Cellular Repair"]
    },
    {
      id: "green-detox",
      name: "Panda Green Detox",
      tagline: "Crisp Green Hydration",
      description: "A refreshing, alkalizing green elixir loaded with crisp English cucumbers, celery, leafy spinach, green apples, and zesty ginger.",
      bgColor: "from-emerald-400 via-green-500 to-teal-700",
      accentHex: "#10b981",
      bottleBgHex: "#34d399",
      image: "/images/green-detox.jpg",
      price: "$5.99",
      rating: 4.8,
      reviewsCount: 96,
      nutrition: {
        calories: 45,
        sugar: "5g",
        vitaminC: "150%",
        organic: "100%"
      },
      benefits: ["Alkalizing & Hydrating", "Deep Cellular Detox", "Packed with Phytonutrients"]
    }
  ] as Flavor[],
  
  features: [
    {
      id: "cold-pressed",
      title: "100% Cold-Pressed",
      description: "Extracted under high pressure without heating, preserving every vital nutrient, enzyme, and pure fruit flavor.",
      icon: "M12 3v18M3 12h18"
    },
    {
      id: "organic",
      title: "100% USDA Organic",
      description: "Sourced exclusively from certified organic family farms. No synthetic chemicals, pesticides, or GMOs ever.",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
    },
    {
      id: "no-added-sugar",
      title: "Zero Added Sugar",
      description: "Naturally sweet. We never add sugars, sweeteners, water, or concentrates. It is just pure, unadulterated fruit juice.",
      icon: "M9 12l2 2 4-4"
    }
  ] as Feature[],
  
  process: [
    {
      step: "01",
      title: "Wild Organic Harvesting",
      description: "We pick our fruits and vegetables at peak ripeness from certified sustainable partner farms early in the morning.",
      details: "Picked at dawn, processed at noon. Minimal transport time keeps nutrients intact."
    },
    {
      step: "02",
      title: "Pneumatic Cold Pressing",
      description: "We gently press our produce using state-of-the-art hydraulic cold-press technology, extracting juice without generating heat.",
      details: "Unlike traditional centrifugal juicing, cold pressing avoids oxidization and keeps delicate enzymes active."
    },
    {
      step: "03",
      title: "HPP Safety & Bottling",
      description: "We bottle immediately in biodegradable glass, then use High-Pressure Processing (HPP) to destroy bacteria without heat.",
      details: "HPP extends shelf-life naturally by applying hydrostatic pressure, maintaining raw flavor and complete nutrition."
    }
  ] as ProcessStep[],
  
  testimonials: [
    {
      name: "Marcus Vance",
      role: "Certified Fitness Trainer",
      rating: 5,
      comment: "Panda Juices have become an indispensable part of my workout routine. The Mango Fusion tastes unbelievable, and the lack of artificial sugars means no post-workout crash.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Wellness Consultant",
      rating: 5,
      comment: "I frequently recommend the Green Detox to clients looking for a gentle, raw-nutrient cleanse. The high-pressure cold extraction keeps the mineral content bioavailable, which is key.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Chloe Harrison",
      role: "Creative Director",
      rating: 5,
      comment: "The branding is gorgeous, but the flavor is the real winner. The Berry Blast is a liquid dessert but completely healthy. I order a case every week!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ] as Testimonial[],
  
  footer: {
    links: {
      shop: [
        { label: "Our Flavors", href: "/#flavors" },
        { label: "Subscriptions", href: "/buy" },
        { label: "Gift Cards", href: "/buy" },
        { label: "Bulk Ordering", href: "/buy" }
      ],
      company: [
        { label: "Our Story", href: "/#process" },
        { label: "Cold Pressed Info", href: "/#process" },
        { label: "Sustainability", href: "/#features" },
        { label: "Careers", href: "/#testimonials" }
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "FDA Disclosure", href: "/fda" },
        { label: "Refund Policy", href: "/refund" }
      ]
    },
    address: {
      street: "888 Wild Bamboo Forest Way",
      city: "San Francisco, CA 94111",
      phone: "+1 (800) 555-RAW-JUICE"
    }
  }
};
