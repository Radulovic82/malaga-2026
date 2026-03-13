export const DAYS = [
  {
    id: 1,
    date: "2026-03-20",
    dayLabel: "Day 1 — Friday, Mar 20",
    title: "Arrival: Málaga → Frigiliana → Nerja",
    emoji: "🌊",
    color: "#e84b2e",
    route: ["Málaga", "Frigiliana", "Nerja"],
    coordinates: { lat: 36.7491, lng: -3.8784 },
    driving: {
      segments: [
        { from: "Málaga Airport", to: "Frigiliana", km: 52, time: "55 min" },
        { from: "Frigiliana", to: "Nerja", km: 8, time: "15 min" }
      ],
      totalKm: 60,
      totalTime: "1h 10min"
    },
    accommodation: {
      name: "Hotel Mena Plaza",
      location: "Nerja",
      checkIn: "15:00",
      checkOut: "12:00",
      amenities: ["Breakfast"],
      parking: {
        reserved: true,
        pricePerDay: 14,
        notes: "Hotel garage, reserved. Pick up remote at reception on arrival."
      },
      highlights: ["Near beach", "Balcón de Europa steps away"],
      cost: 71.10,
      mapsQuery: "Hotel+Mena+Plaza+Nerja+Spain"
    },
    reminders: [],
    attractions: [
      {
        name: "Balcón de Europa",
        emoji: "🌅",
        description: "Iconic clifftop promenade with breathtaking Mediterranean views — perfect sunset spot!",
        category: "Viewpoint",
        mustBook: false,
        duration: "30–45 min",
        mapsLink: "https://maps.google.com/?q=Balcón+de+Europa+Nerja"
      },
      {
        name: "Frigiliana",
        emoji: "🏘️",
        description: "One of Spain's most beautiful white villages (pueblos blancos). The Moorish Barrio Alto is a maze of flower-lined alleys.",
        category: "Village",
        mustBook: false,
        duration: "2–3 hrs",
        mapsLink: "https://maps.google.com/?q=Frigiliana+Spain"
      },
      {
        name: "Cueva de Nerja",
        emoji: "🦇",
        description: "Famous prehistoric caves with giant stalactites and cave paintings, 3 km from the village.",
        category: "Attraction",
        mustBook: true,
        bookingTip: "Book online to skip queues",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Cueva+de+Nerja"
      },
      {
        name: "Playa de Burriana",
        emoji: "🏖️",
        description: "Nerja's best beach — wide sandy bay with good restaurants. Perfect late afternoon swim.",
        category: "Beach",
        mustBook: false,
        duration: "1.5–3 hrs",
        mapsLink: "https://maps.google.com/?q=Playa+de+Burriana+Nerja"
      }
    ],
    food: [
      {
        name: "Espetos de sardinas",
        type: "Local specialty",
        description: "Grilled sardines on bamboo skewers — only authentic at beach chiringuitos. Don't miss them!",
        duration: "~1 hr"
      },
      {
        name: "El Pulguilla",
        type: "Restaurant",
        description: "Iconic local spot, just steps from Balcón de Europa. Always busy — worth the wait.",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=El+Pulguilla+Nerja"
      },
      {
        name: "Frigiliana village tapas",
        type: "Tapas bars",
        description: "Stop for a drink and free tapas in the village square before driving to Nerja.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Frigiliana+tapas+bars"
      }
    ]
  },
  {
    id: 2,
    date: "2026-03-21",
    dayLabel: "Day 2 — Saturday, Mar 21",
    title: "Nerja → Coffee Plantation → Granada",
    emoji: "☕",
    color: "#c1440e",
    route: ["Nerja", "La Herradura", "Granada", "Loja"],
    coordinates: { lat: 37.1666, lng: -4.1497 },
    driving: {
      segments: [
        { from: "Nerja", to: "La Herradura (Herradura Farm)", km: 20, time: "25 min" },
        { from: "La Herradura", to: "Granada", km: 70, time: "1h 10min" },
        { from: "Granada", to: "Hotel El Mirador (Loja)", km: 55, time: "45 min" }
      ],
      totalKm: 145,
      totalTime: "2h 20min"
    },
    accommodation: {
      name: "Hotel El Mirador",
      location: "Loja (30 min from Granada)",
      checkIn: "14:00",
      checkOut: "12:00",
      amenities: ["Breakfast", "Gym", "Wellness & Spa (19€/person)"],
      parking: {
        reserved: false,
        pricePerDay: 10,
        notes: "Hotel garage, no reservation needed. Book spa in advance for 15% café discount."
      },
      highlights: ["30 min from Granada", "En route to Córdoba", "Spa & wellness available"],
      cost: 109.80,
      mapsQuery: "Hotel+El+Mirador+Loja+Granada+Spain"
    },
    reminders: [
      {
        id: "alhambra",
        text: "Book Alhambra tickets",
        details: "The Alhambra sells out weeks in advance! Book at alhambra-patronato.es",
        urgent: true,
        link: "https://www.alhambra-patronato.es"
      },
      {
        id: "herradura",
        text: "Book Herradura Farm coffee tour at 10:00",
        details: "Europe's only coffee plantation! Tour lasts 1h 10min. Book the 10:00 slot.",
        urgent: false,
        link: "https://www.herradura.farm"
      },
      {
        id: "mirador-spa",
        text: "Reserve Hotel El Mirador spa (19€/person)",
        details: "15% discount at hotel café when you book wellness. Reserve in advance.",
        urgent: false
      }
    ],
    attractions: [
      {
        name: "Herradura Farm ☕",
        emoji: "🌱",
        description: "Europe's ONLY coffee plantation! Morning tour at 10:00 (1h 10min). Unique experience — a must-do on the way to Granada.",
        category: "Unique",
        mustBook: true,
        bookingTip: "Book the 10:00 slot — it's perfectly on the way from Nerja to Granada",
        duration: "~1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Herradura+Farm+La+Herradura+Granada"
      },
      {
        name: "La Alhambra",
        emoji: "🏰",
        description: "UNESCO World Heritage marvel — the pinnacle of Moorish architecture. Most visited monument in Spain. Don't miss the Nasrid Palaces.",
        category: "Monument",
        mustBook: true,
        bookingTip: "BOOK WEEKS IN ADVANCE at alhambra-patronato.es — tickets sell out fast!",
        duration: "3–4 hrs",
        mapsLink: "https://maps.google.com/?q=Alhambra+Granada"
      },
      {
        name: "Albaicín Quarter",
        emoji: "🕌",
        description: "Ancient Moorish neighbourhood on the hill opposite the Alhambra. Mirador de San Nicolás for the iconic sunset Alhambra view.",
        category: "Neighbourhood",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Albaicin+Granada"
      },
      {
        name: "Sacromonte Caves",
        emoji: "🎸",
        description: "Gypsy cave neighbourhood famous for flamenco. Authentic zambra shows in cave venues — magical at night.",
        category: "Culture",
        mustBook: false,
        duration: "1.5–2 hrs (evening)",
        mapsLink: "https://maps.google.com/?q=Sacromonte+Granada"
      },
      {
        name: "Granada Cathedral",
        emoji: "⛪",
        description: "Impressive Renaissance cathedral. The Royal Chapel next door has the tombs of Ferdinand and Isabella.",
        category: "Monument",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Granada+Cathedral+Spain"
      }
    ],
    food: [
      {
        name: "Free tapas culture — bar hop Plaza Nueva",
        type: "Granada tradition",
        description: "Granada is unique in Spain — every drink comes with a free tapa! Bar hop around Calle Navas and Plaza Nueva.",
        duration: "1–2 hrs",
        mapsLink: "https://maps.google.com/?q=Plaza+Nueva+Granada"
      },
      {
        name: "Bar Los Diamantes",
        type: "Bar",
        description: "Granada institution — standing room only, chalk menu, legendary free tapas with every drink. Try the seafood tapas.",
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Bar+Los+Diamantes+Granada"
      },
      {
        name: "Piononos — Pastelería López Mezquita",
        type: "Pastry shop",
        description: "Tiny rolls of sponge cake soaked in sweet syrup — a Granada original. Pick some up at this legendary pastry shop.",
        duration: "~20 min",
        mapsLink: "https://maps.google.com/?q=Pasteleria+Lopez+Mezquita+Granada"
      }
    ]
  },
  {
    id: 3,
    date: "2026-03-22",
    dayLabel: "Day 3 — Sunday, Mar 22",
    title: "Granada → Córdoba",
    emoji: "🕌",
    color: "#8B4513",
    route: ["Granada", "Córdoba"],
    coordinates: { lat: 37.8882, lng: -4.7794 },
    driving: {
      segments: [
        { from: "Loja (Hotel El Mirador)", to: "Córdoba", km: 145, time: "1h 30min" }
      ],
      totalKm: 145,
      totalTime: "1h 30min"
    },
    accommodation: {
      name: "Hotel Marisa",
      location: "Córdoba Center",
      checkIn: "15:00",
      checkOut: "12:00",
      amenities: ["Breakfast"],
      parking: {
        reserved: true,
        pricePerDay: 18,
        notes: "Hotel garage, reserved. Pick up remote at reception. Photo instructions in Booking.com chat."
      },
      highlights: ["City center", "Beautiful Spanish garden", "Steps from Mezquita"],
      cost: 86.40,
      mapsQuery: "Hotel+Marisa+Cordoba+Spain"
    },
    reminders: [
      {
        id: "mezquita",
        text: "Book Mezquita-Catedral tickets online",
        details: "Book at catedraldecordoba.es to skip queues, especially on Sunday morning.",
        urgent: false,
        link: "https://www.catedraldecordoba.es"
      },
      {
        id: "marisa-remote",
        text: "Pick up parking remote at Hotel Marisa reception",
        details: "Córdoba garage remote — check Booking.com chat for photo instructions.",
        urgent: false
      }
    ],
    attractions: [
      {
        name: "Mezquita-Catedral",
        emoji: "🕌",
        description: "One of the world's greatest architectural achievements — a Gothic cathedral built inside a breathtaking Moorish mosque. Unmissable.",
        category: "Monument",
        mustBook: true,
        bookingTip: "Book morning entry online at catedraldecordoba.es",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Mezquita+Catedral+Cordoba"
      },
      {
        name: "Judería (Jewish Quarter)",
        emoji: "⭐",
        description: "Labyrinth of medieval streets, whitewashed walls, and flower-filled alleyways. The 14th-century synagogue is one of only three remaining in Spain.",
        category: "Neighbourhood",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Juderia+Cordoba+Spain"
      },
      {
        name: "Alcázar de los Reyes Cristianos",
        emoji: "🏰",
        description: "Medieval fortress with gorgeous Moorish-inspired gardens and reflective pools. Columbus presented his New World plans here.",
        category: "Monument",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Alcazar+de+los+Reyes+Cristianos+Cordoba"
      },
      {
        name: "Patios de Córdoba",
        emoji: "🌸",
        description: "Córdoba's famous flower-filled courtyards are especially beautiful in spring. Many private homes open them — ask at the tourist office.",
        category: "Culture",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Patios+de+Cordoba"
      },
      {
        name: "Puente Romano",
        emoji: "🌉",
        description: "Ancient Roman bridge spanning the Guadalquivir. Best at sunset with the Mezquita lit up behind you.",
        category: "Monument",
        mustBook: false,
        duration: "~30 min",
        mapsLink: "https://maps.google.com/?q=Puente+Romano+Cordoba"
      }
    ],
    food: [
      {
        name: "Taberna Casa Pepe de la Judería",
        type: "Traditional tavern",
        description: "Legendary Córdoba tavern inside the Jewish Quarter. Order salmorejo, rabo de toro and flamenquín — all house specialties.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Taberna+Casa+Pepe+de+la+Juderia+Cordoba"
      },
      {
        name: "Bodega Guzmán",
        type: "Wine bar",
        description: "One of Córdoba's oldest bodegas — wine barrels stacked to the ceiling, locals only, excellent tapas.",
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Bodega+Guzman+Cordoba"
      },
      {
        name: "Mercado Victoria",
        type: "Food market",
        description: "Beautifully restored 19th-century market with gourmet stalls — a great lunch stop with salmorejo and flamenquín.",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Mercado+Victoria+Cordoba"
      }
    ]
  },
  {
    id: 4,
    date: "2026-03-23",
    dayLabel: "Day 4 — Monday, Mar 23",
    title: "Córdoba → Sevilla (Day 1/2)",
    emoji: "💃",
    color: "#e8a020",
    route: ["Córdoba", "Sevilla"],
    coordinates: { lat: 37.3891, lng: -6.0331 },
    driving: {
      segments: [
        { from: "Córdoba", to: "Sevilla (Camas)", km: 145, time: "1h 30min" }
      ],
      totalKm: 145,
      totalTime: "1h 30min"
    },
    accommodation: {
      name: "IBERflat Vega de Triana",
      location: "Camas (15 min drive to Sevilla center)",
      checkIn: "15:00",
      checkOut: "12:00",
      amenities: ["Washing machine"],
      parking: {
        reserved: false,
        pricePerDay: 6,
        notes: "Garage parking, no reservation. 100€ refundable deposit (returned within 1 week). Entry code sent before arrival. Deposit payment link arrives a few days before."
      },
      highlights: ["Near Triana district", "Metro: San Juan Bajo → Puerta Jerez (20 min walk)", "Keypad entry"],
      cost: 122.00,
      mapsQuery: "IBERflat+Vega+de+Triana+Camas+Sevilla"
    },
    reminders: [
      {
        id: "alcazar",
        text: "Book Real Alcázar Sevilla tickets",
        details: "Sevilla's Alcázar sells out quickly. Book at alcazarsevilla.org",
        urgent: false,
        link: "https://www.alcazarsevilla.org"
      },
      {
        id: "iberflat-deposit",
        text: "IBERflat: watch for deposit link (100€)",
        details: "Link for deposit payment arrives a few days before arrival. Also receive check-in code and instructions.",
        urgent: false
      }
    ],
    attractions: [
      {
        name: "Real Alcázar",
        emoji: "🏯",
        description: "Stunning royal palace still in official use — oldest royal residence in Europe. Mix of Mudéjar, Gothic, and Renaissance. Game of Thrones filming location!",
        category: "Monument",
        mustBook: true,
        bookingTip: "Book online — queues without a ticket are very long",
        duration: "2–3 hrs",
        mapsLink: "https://maps.google.com/?q=Real+Alcazar+Sevilla"
      },
      {
        name: "Sevilla Cathedral & La Giralda",
        emoji: "⛪",
        description: "The world's largest Gothic cathedral. Climb La Giralda tower via a ramp for sweeping city views. Columbus is buried inside.",
        category: "Monument",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Catedral+de+Sevilla"
      },
      {
        name: "Barrio de Santa Cruz",
        emoji: "🍊",
        description: "Magical old Jewish quarter with orange-tree lined alleys, plazas, and tapas bars. Get intentionally lost.",
        category: "Neighbourhood",
        mustBook: false,
        duration: "1–2 hrs",
        mapsLink: "https://maps.google.com/?q=Barrio+de+Santa+Cruz+Sevilla"
      },
      {
        name: "Triana — YOUR neighbourhood!",
        emoji: "🎭",
        description: "Authentic working-class district, home of Sevilla's flamenco roots, ceramics workshops, and the best local tapas bars. Right outside your door!",
        category: "Neighbourhood",
        mustBook: false,
        duration: "2–3 hrs",
        mapsLink: "https://maps.google.com/?q=Triana+Sevilla"
      },
      {
        name: "Plaza de España",
        emoji: "✨",
        description: "Magnificent semicircular plaza from the 1929 Expo. Ceramic tile maps of every Spanish province. Boat rides on the canal.",
        category: "Monument",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Plaza+de+España+Sevilla"
      }
    ],
    food: [
      {
        name: "Mercado de Triana",
        type: "Market",
        description: "Triana's covered market right next to your apartment! Fresh fish, jamón, cheese, wine. Great tapas bars inside.",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Mercado+de+Triana+Sevilla"
      },
      {
        name: "Bar El Jamón",
        type: "Tapas bar",
        description: "Classic Triana tapas bar — locals only, great montaditos and wine. Right near your apartment.",
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Bar+El+Jamon+Triana+Sevilla"
      },
      {
        name: "Casa Cuesta",
        type: "Traditional restaurant",
        description: "Beloved Triana institution since 1880. Excellent traditional Sevillano food and local wines.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Casa+Cuesta+Triana+Sevilla"
      }
    ]
  },
  {
    id: 5,
    date: "2026-03-24",
    dayLabel: "Day 5 — Tuesday, Mar 24",
    title: "Sevilla Day 2/2",
    emoji: "🌸",
    color: "#d4900a",
    route: ["Sevilla"],
    coordinates: { lat: 37.3891, lng: -6.0331 },
    accommodation: null,
    sameAccommodationAs: 4,
    driving: {
      segments: [
        { from: "Sevilla", to: "Italica (optional day trip)", km: 9, time: "15 min" }
      ],
      totalKm: 18,
      totalTime: "~30 min (round trip, if going to Italica)",
      optional: true
    },
    reminders: [],
    attractions: [
      {
        name: "Metropol Parasol (Las Setas)",
        emoji: "🍄",
        description: "The world's largest wooden structure — giant mushroom-shaped walkway with rooftop promenade and panoramic city views. Best at sunset.",
        category: "Architecture",
        mustBook: false,
        duration: "45 min–1 hr",
        mapsLink: "https://maps.google.com/?q=Metropol+Parasol+Sevilla"
      },
      {
        name: "Casa de Pilatos",
        emoji: "🎨",
        description: "Exquisite Renaissance palace with Mudéjar tilework, Roman statues, and a gorgeous patio garden. Less crowded than the Alcázar.",
        category: "Monument",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Casa+de+Pilatos+Sevilla"
      },
      {
        name: "Flamenco Show",
        emoji: "💃",
        description: "Sevilla is the birthplace of flamenco. Museum of Flamenco (Museo del Baile Flamenco) or Tablao El Arenal for an authentic intimate show.",
        category: "Culture",
        mustBook: true,
        bookingTip: "Book evening show in advance — intimate venues fill up",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Museo+del+Baile+Flamenco+Sevilla"
      },
      {
        name: "Italica (Day Trip)",
        emoji: "🏛️",
        description: "Ancient Roman city 9 km from Sevilla — birthplace of emperors Trajan and Hadrian. Huge amphitheatre. Game of Thrones filming location!",
        category: "Day trip",
        mustBook: false,
        duration: "2–2.5 hrs",
        mapsLink: "https://maps.google.com/?q=Italica+Roman+Ruins+Santiponce+Sevilla"
      }
    ],
    food: [
      {
        name: "El Rinconcillo",
        type: "Historic bar",
        description: "Oldest bar in Sevilla (opened 1670!). Chalk bill on the counter. Order espinacas con garbanzos — a Sevilla classic.",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=El+Rinconcillo+Sevilla"
      },
      {
        name: "Bodega Santa Cruz (Las Columnas)",
        type: "Standing bar",
        description: "No seats, chalk menu, perpetually busy — the classic Sevillano experience in Santa Cruz quarter.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Bodega+Santa+Cruz+Las+Columnas+Sevilla"
      },
      {
        name: "Bar Altozano",
        type: "Vermut bar",
        description: "Pre-lunch vermouth on the Triana riverside — best views of the Torre del Oro across the water.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Bar+Altozano+Triana+Sevilla"
      }
    ]
  },
  {
    id: 6,
    date: "2026-03-25",
    dayLabel: "Day 6 — Wednesday, Mar 25",
    title: "Sevilla → Grazalema → Setenil → Ronda",
    emoji: "🌉",
    color: "#228B22",
    route: ["Sevilla", "Sierra de Grazalema", "Setenil de las Bodegas", "Ronda"],
    coordinates: { lat: 36.7462, lng: -5.1610 },
    driving: {
      segments: [
        { from: "Sevilla (Camas)", to: "Sierra de Grazalema", km: 140, time: "1h 45min" },
        { from: "Grazalema", to: "Setenil de las Bodegas", km: 25, time: "35 min" },
        { from: "Setenil de las Bodegas", to: "Ronda", km: 28, time: "40 min" }
      ],
      totalKm: 193,
      totalTime: "3h 00min"
    },
    accommodation: {
      name: "Hotel San Francisco",
      location: "Ronda",
      checkIn: "14:00",
      checkOut: "11:00",
      amenities: ["Breakfast", "🚲 Bicycle parking in hotel!"],
      parking: {
        reserved: false,
        pricePerDay: 18,
        notes: "External garage (not inside hotel). BICYCLE PARKING available within the hotel complex!"
      },
      highlights: ["Bicycle storage on-site", "Terrace with gorge views", "Steps from Puente Nuevo"],
      cost: 87.97,
      mapsQuery: "Hotel+San+Francisco+Ronda+Spain"
    },
    reminders: [],
    attractions: [
      {
        name: "Puente Nuevo",
        emoji: "🌉",
        description: "Ronda's legendary bridge spanning a 120-metre deep gorge. The view from El Tajo trail below is even more dramatic than from the bridge.",
        category: "Monument",
        mustBook: false,
        duration: "30–45 min",
        mapsLink: "https://maps.google.com/?q=Puente+Nuevo+Ronda"
      },
      {
        name: "El Tajo Gorge Trail",
        emoji: "🏔️",
        description: "Descend into the gorge bottom via Cueva del Gato path for the jaw-dropping upward view of Puente Nuevo. About 45 min return.",
        category: "Nature",
        mustBook: false,
        duration: "~1.5 hrs",
        mapsLink: "https://maps.google.com/?q=El+Tajo+Gorge+Ronda"
      },
      {
        name: "Setenil de las Bodegas",
        emoji: "🪨",
        description: "Extraordinary village where houses are literally built INTO overhanging rock cliffs. The main street runs under a roof of solid rock. 20 min from Ronda.",
        category: "Village",
        mustBook: false,
        duration: "1–2 hrs",
        mapsLink: "https://maps.google.com/?q=Setenil+de+las+Bodegas"
      },
      {
        name: "Sierra de Grazalema",
        emoji: "🏞️",
        description: "One of Andalusia's most dramatic natural parks — limestone peaks, vulture colonies, and traditional white villages. Stop in Grazalema village.",
        category: "Nature",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Grazalema+village+Spain"
      },
      {
        name: "Plaza de Toros de Ronda",
        emoji: "🐂",
        description: "One of Spain's oldest and most beautiful bullrings (1785). Visit the museum to understand the history.",
        category: "Cultural",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Plaza+de+Toros+de+Ronda"
      }
    ],
    food: [
      {
        name: "Restaurante Pedro Romero",
        type: "Traditional restaurant",
        description: "Named after Ronda's most famous bullfighter, opposite the bullring. Best rabo de toro in Ronda.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Restaurante+Pedro+Romero+Ronda"
      },
      {
        name: "Setenil cave cafés",
        type: "Unique experience",
        description: "Have coffee or tapas at a bar literally built inside a cave under the rock overhang. The main calle is lined with them.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Calle+Cuevas+del+Sol+Setenil+de+las+Bodegas"
      },
      {
        name: "La Tienda de la Abuela (Grazalema)",
        type: "Local products",
        description: "Tiny shop in Grazalema village selling the famous local cheeses, honey, and charcuterie. Perfect picnic supplies.",
        duration: "~20 min",
        mapsLink: "https://maps.google.com/?q=Grazalema+village+cheese+shop"
      }
    ]
  },
  {
    id: 7,
    date: "2026-03-26",
    dayLabel: "Day 7 — Thursday, Mar 26",
    title: "Ronda → Caminito del Rey → Torremolinos",
    emoji: "🧗",
    color: "#4169E1",
    route: ["Ronda", "Caminito del Rey", "Torremolinos"],
    coordinates: { lat: 36.6212, lng: -4.5003 },
    driving: {
      segments: [
        { from: "Ronda", to: "Caminito del Rey (El Chorro)", km: 55, time: "1h 00min" },
        { from: "El Chorro", to: "Torremolinos", km: 60, time: "1h 00min" }
      ],
      totalKm: 115,
      totalTime: "2h 00min"
    },
    accommodation: {
      name: "Apartamentos María del Carmen",
      location: "Torremolinos",
      checkIn: "12:00–15:00 (or until 22:00 with advance notice)",
      checkOut: "11:00",
      amenities: [],
      parking: {
        reserved: false,
        pricePerDay: 0,
        notes: "Apartment garage, FREE! No reservation needed. Car can stay in garage after checkout on the last day."
      },
      highlights: ["Beachfront location", "Free parking", "Car stays after checkout"],
      cost: 237.00,
      mapsQuery: "Apartamentos+Maria+del+Carmen+Torremolinos"
    },
    reminders: [
      {
        id: "caminito",
        text: "Book Caminito del Rey tickets",
        details: "Very popular — morning slots sell out weeks ahead. Book at caminitodelrey.info. Choose morning entry for best light.",
        urgent: true,
        link: "https://www.caminitodelrey.info"
      }
    ],
    attractions: [
      {
        name: "Caminito del Rey 🎫",
        emoji: "🧗",
        description: "The most spectacular walk in Spain — a narrow path pinned to sheer 300m cliffs in El Chorro gorge. Once the world's most dangerous path, now fully safe. BOOK IN ADVANCE!",
        category: "Adventure",
        mustBook: true,
        bookingTip: "Book at caminitodelrey.info — popular slots sell out weeks ahead",
        duration: "4–5 hrs (incl. transfer)",
        mapsLink: "https://maps.google.com/?q=Caminito+del+Rey+El+Chorro"
      },
      {
        name: "Embalse del Guadalhorce",
        emoji: "💧",
        description: "Three linked turquoise reservoirs at the foot of the Caminito. Stunning contrast of water and limestone cliffs.",
        category: "Nature",
        mustBook: false,
        duration: "~30 min",
        mapsLink: "https://maps.google.com/?q=Embalse+del+Guadalhorce+El+Chorro"
      },
      {
        name: "Playa de la Carihuela",
        emoji: "🐟",
        description: "The best part of Torremolinos — old fishing village with authentic chiringuitos and great seafood.",
        category: "Beach",
        mustBook: false,
        duration: "1.5–3 hrs",
        mapsLink: "https://maps.google.com/?q=Playa+de+la+Carihuela+Torremolinos"
      }
    ],
    food: [
      {
        name: "Restaurante El Roqueo",
        type: "Seafood restaurant",
        description: "Excellent fresh fish on La Carihuela beach. Celebrate the Caminito with grilled fish and local wine.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Restaurante+El+Roqueo+Torremolinos"
      },
      {
        name: "Casa Juan Los Mellizos",
        type: "Seafood restaurant",
        description: "One of the best chiringuitos on La Carihuela — known for their superb fresh fish and seafood.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Casa+Juan+Los+Mellizos+Torremolinos"
      }
    ]
  },
  {
    id: 8,
    date: "2026-03-27",
    dayLabel: "Day 8 — Friday, Mar 27",
    title: "Torremolinos → Málaga City",
    emoji: "🎨",
    color: "#9B59B6",
    route: ["Torremolinos", "Málaga"],
    coordinates: { lat: 36.7213, lng: -4.4214 },
    driving: {
      segments: [
        { from: "Torremolinos", to: "Málaga city", km: 14, time: "20 min" },
        { from: "Málaga city", to: "El Palo", km: 5, time: "10 min" },
        { from: "El Palo", to: "Torremolinos", km: 19, time: "25 min" }
      ],
      totalKm: 38,
      totalTime: "~55 min driving"
    },
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Picasso Museum",
        emoji: "🎨",
        description: "Málaga is Picasso's birthplace! The museum in Buenavista Palace holds 233 works. Don't miss his birthplace house (Casa Natal) nearby.",
        category: "Museum",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Museo+Picasso+Malaga"
      },
      {
        name: "Alcazaba de Málaga",
        emoji: "🏰",
        description: "Moorish fortress rising above the city — one of the best-preserved Alcazabas in Spain. Free on Sundays. Combine with the Teatro Romano at its base.",
        category: "Monument",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Alcazaba+de+Malaga"
      },
      {
        name: "El Palo Fishing Village",
        emoji: "🎣",
        description: "5 km east of Málaga center — the authentic village where espetos were invented. The best espetos in the world served here on the beach.",
        category: "Neighbourhood",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=El+Palo+Malaga"
      },
      {
        name: "Mercado de Atarazanas",
        emoji: "🏛️",
        description: "Stunning 19th-century market hall with magnificent stained glass. Sample local charcuterie, cheeses, and wines at bar counters inside.",
        category: "Market",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Mercado+de+Atarazanas+Malaga"
      },
      {
        name: "Centro Pompidou Málaga",
        emoji: "🖼️",
        description: "Satellite of Paris's Centre Pompidou — contemporary art in a striking glass cube on the port. Less crowded than the French original.",
        category: "Museum",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Centre+Pompidou+Malaga"
      }
    ],
    food: [
      {
        name: "El Pimpi",
        type: "Málaga institution",
        description: "Most famous bar in Málaga — wine barrels signed by Antonio Banderas, right next to the Alcazaba. Don't miss the Moscatel wine.",
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=El+Pimpi+Malaga"
      },
      {
        name: "Espetos at El Palo beach",
        type: "Beach restaurant",
        description: "The ritual: sardine espetos cooked in a traditional boat on the sand at El Palo. Eat with local white wine. This IS Málaga.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=El+Palo+chiringuito+Malaga"
      },
      {
        name: "Mercado de Atarazanas tapas bars",
        type: "Market bars",
        description: "Grab a glass of Málaga wine and fresh boquerones en vinagre at the bar counters inside the market.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Mercado+de+Atarazanas+Malaga"
      }
    ]
  },
  {
    id: 9,
    date: "2026-03-28",
    dayLabel: "Day 9 — Saturday, Mar 28",
    title: "Costa del Sol: Mijas, Benalmádena & Marbella",
    emoji: "🏔️",
    color: "#E74C3C",
    route: ["Torremolinos", "Benalmádena", "Mijas", "Marbella"],
    coordinates: { lat: 36.6212, lng: -4.5003 },
    driving: {
      segments: [
        { from: "Torremolinos", to: "Benalmádena", km: 8, time: "15 min" },
        { from: "Benalmádena", to: "Mijas Pueblo", km: 15, time: "20 min" },
        { from: "Mijas", to: "Marbella", km: 30, time: "40 min" },
        { from: "Marbella", to: "Torremolinos", km: 50, time: "50 min" }
      ],
      totalKm: 103,
      totalTime: "~2h 05min"
    },
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Mijas Pueblo",
        emoji: "🫏",
        description: "Impossibly pretty white hilltop village with classic Andalusian streets, donkey taxis, and panoramic views over the Costa del Sol.",
        category: "Village",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Mijas+Pueblo+Spain"
      },
      {
        name: "Benalmádena Cable Car",
        emoji: "🚠",
        description: "The Teleférico ascends 800m to Monte Calamorro for panoramic views of the Costa del Sol, Gibraltar, and Africa on clear days.",
        category: "Attraction",
        mustBook: false,
        duration: "1–1.5 hrs",
        mapsLink: "https://maps.google.com/?q=Teleferico+Benalmadena"
      },
      {
        name: "Marbella Old Town",
        emoji: "🌺",
        description: "Behind the glamour of Puerto Banús lies a genuinely beautiful 16th-century old town. Orange-blossom plazas, white walls, excellent seafood.",
        category: "Town",
        mustBook: false,
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Marbella+Old+Town"
      },
      {
        name: "Puerto Banús",
        emoji: "⛵",
        description: "Marbella's famous marina — superyachts, Ferraris, designer shops. Fun to walk around even just window-shopping.",
        category: "Marina",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Puerto+Banus+Marbella"
      }
    ],
    food: [
      {
        name: "Restaurante El Mirlo Blanco (Mijas)",
        type: "Spanish restaurant",
        description: "Charming restaurant in Mijas village with panoramic terrace views — excellent grilled fish and local specialties.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Restaurante+El+Mirlo+Blanco+Mijas"
      },
      {
        name: "Marbella Old Town restaurants",
        type: "Spanish",
        description: "Go two streets back from the port for excellent Spanish food at fair prices. Plaza de los Naranjos has great terraces.",
        duration: "1.5–2 hrs",
        mapsLink: "https://maps.google.com/?q=Plaza+de+los+Naranjos+Marbella"
      }
    ]
  },
  {
    id: 10,
    date: "2026-03-29",
    dayLabel: "Day 10 — Sunday, Mar 29",
    title: "Departure — Last Morning on the Costa",
    emoji: "✈️",
    color: "#7f8c8d",
    route: ["Torremolinos", "Málaga Airport"],
    coordinates: { lat: 36.6212, lng: -4.5003 },
    driving: {
      segments: [
        { from: "Torremolinos", to: "Málaga Airport", km: 13, time: "20 min" }
      ],
      totalKm: 13,
      totalTime: "20 min"
    },
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Morning beach walk",
        emoji: "🌅",
        description: "Last sunrise stroll along La Carihuela beach. The Costa del Sol in the morning light is unforgettable.",
        category: "Beach",
        mustBook: false,
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=Playa+de+la+Carihuela+Torremolinos"
      },
      {
        name: "Souvenir shopping",
        emoji: "🛍️",
        description: "Last chance: local olive oil, Málaga sweet wine, Ronda ceramics, Sierra Nevada honey. Torremolinos shops open early on Sunday.",
        category: "Shopping",
        mustBook: false,
        duration: "~1 hr",
        mapsLink: "https://maps.google.com/?q=Torremolinos+town+center"
      }
    ],
    food: [
      {
        name: "Last breakfast — Tostada con tomate",
        type: "Spanish breakfast café",
        description: "The perfect send-off — toasted bread with fresh tomato and olive oil. Order at any local café before heading to the airport.",
        duration: "~45 min",
        mapsLink: "https://maps.google.com/?q=cafes+Torremolinos"
      }
    ]
  }
];

export const BUDGET = {
  accommodation: {
    total: 714.27,
    breakdown: [
      { label: "Hotel Mena Plaza (Nerja)", nights: 1, cost: 71.10 },
      { label: "Hotel El Mirador (Loja)", nights: 1, cost: 109.80 },
      { label: "Hotel Marisa (Córdoba)", nights: 1, cost: 86.40 },
      { label: "IBERflat Vega de Triana (Sevilla)", nights: 2, cost: 122.00 },
      { label: "Hotel San Francisco (Ronda)", nights: 1, cost: 87.97 },
      { label: "Apartamentos María del Carmen (Torremolinos)", nights: 4, cost: 237.00 }
    ]
  },
  parking: { total: 72.00, notes: "Total estimated parking in accommodations" },
  car: { total: 280.00, notes: "10-day rental car" },
  grandTotal: 1066.27
};

export const DRIVING_TOTALS = {
  totalKm: 957,
  totalDrivingTime: "~14h 30min across 10 days",
  longestDay: { day: 6, km: 193, route: "Sevilla → Grazalema → Setenil → Ronda" },
  shortestDay: { day: 10, km: 13, route: "Torremolinos → Málaga Airport" }
};

export const TRIP_REMINDERS = [
  {
    id: "alhambra",
    text: "Book Alhambra tickets (Granada)",
    details: "Sells out weeks in advance! Book at alhambra-patronato.es — must choose a specific entry time slot for the Nasrid Palaces.",
    urgent: true,
    day: 2,
    link: "https://www.alhambra-patronato.es"
  },
  {
    id: "caminito",
    text: "Book Caminito del Rey tickets",
    details: "Very popular — morning slots sell out fast. Book at caminitodelrey.info. Choose morning entry for best light in the gorge.",
    urgent: true,
    day: 7,
    link: "https://www.caminitodelrey.info"
  },
  {
    id: "herradura",
    text: "Book Herradura Farm coffee tour at 10:00",
    details: "Europe's only coffee plantation near La Herradura. Book the 10:00 slot — on the way from Nerja to Granada. Tour ~1h 10min.",
    urgent: false,
    day: 2,
    link: "https://www.herradura.farm"
  },
  {
    id: "alcazar",
    text: "Book Real Alcázar Sevilla tickets",
    details: "Queues are very long without advance booking. Book at alcazarsevilla.org",
    urgent: false,
    day: 4,
    link: "https://www.alcazarsevilla.org"
  },
  {
    id: "mezquita",
    text: "Book Mezquita-Catedral Córdoba",
    details: "Book online at catedraldecordoba.es to skip queues, especially on Sunday morning.",
    urgent: false,
    day: 3,
    link: "https://www.catedraldecordoba.es"
  },
  {
    id: "mirador-spa",
    text: "Reserve Hotel El Mirador spa (19€/person)",
    details: "15% discount at hotel café when you book wellness. Reserve in advance.",
    urgent: false,
    day: 2
  },
  {
    id: "iberflat-deposit",
    text: "IBERflat: deposit payment link (100€)",
    details: "Link for deposit payment arrives a few days before arrival. Also receive entry code and check-in instructions. Day 4.",
    urgent: false,
    day: 4
  },
  {
    id: "nerja-remote",
    text: "Pick up parking remote at Mena Plaza reception",
    details: "Hotel Mena Plaza, Nerja — pick up garage remote at reception on check-in. Day 1.",
    urgent: false,
    day: 1
  },
  {
    id: "marisa-remote",
    text: "Pick up parking remote at Hotel Marisa reception",
    details: "Hotel Marisa, Córdoba — pick up garage remote at reception. See Booking.com chat for photo instructions. Day 3.",
    urgent: false,
    day: 3
  }
];
