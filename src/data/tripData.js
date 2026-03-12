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
        mustBook: false
      },
      {
        name: "Frigiliana",
        emoji: "🏘️",
        description: "One of Spain's most beautiful white villages (pueblos blancos). The Moorish Barrio Alto is a maze of flower-lined alleys.",
        category: "Village",
        mustBook: false
      },
      {
        name: "Cueva de Nerja",
        emoji: "🦇",
        description: "Famous prehistoric caves with giant stalactites and cave paintings, 3 km from the village.",
        category: "Attraction",
        mustBook: true,
        bookingTip: "Book online to skip queues"
      },
      {
        name: "Playa de Burriana",
        emoji: "🏖️",
        description: "Nerja's best beach — wide sandy bay with good restaurants. Perfect late afternoon swim.",
        category: "Beach",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Espetos de sardinas",
        type: "Local specialty",
        description: "Grilled sardines on bamboo skewers — only authentic at beach chiringuitos. Don't miss them!"
      },
      {
        name: "Gambas al pil-pil",
        type: "Seafood",
        description: "Garlic prawns sizzling in olive oil. Order at any bar near Balcón de Europa."
      },
      {
        name: "Frigiliana honey & wine",
        type: "Local products",
        description: "The village is famous for artisan honey and sweet wines. Pick some up at village shops."
      },
      {
        name: "El Pulguilla",
        type: "Restaurant",
        description: "Iconic local spot, just steps from Balcón de Europa. Always busy — worth the wait."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Coastal N-340 Stretch",
          distance: "15 km one way",
          difficulty: "easy",
          description: "Scenic coastal ride from Nerja towards Almuñécar. Mostly flat along the coast with sea views.",
          tag: "Road"
        },
        {
          name: "Nerja to Frigiliana Climb",
          distance: "8 km",
          difficulty: "hard",
          description: "Challenging climb up to the white village (280m elevation gain). Rewarded with stunning panoramic views.",
          tag: "Climb"
        }
      ],
      rentalNote: "Bikes available from Nerja Bikes or Moto Rent near town center"
    }
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
        bookingTip: "Book the 10:00 slot — it's perfectly on the way from Nerja to Granada"
      },
      {
        name: "La Alhambra",
        emoji: "🏰",
        description: "UNESCO World Heritage marvel — the pinnacle of Moorish architecture. Most visited monument in Spain. Don't miss the Nasrid Palaces.",
        category: "Monument",
        mustBook: true,
        bookingTip: "BOOK WEEKS IN ADVANCE at alhambra-patronato.es — tickets sell out fast!"
      },
      {
        name: "Albaicín Quarter",
        emoji: "🕌",
        description: "Ancient Moorish neighbourhood on the hill opposite the Alhambra. Mirador de San Nicolás for the iconic sunset Alhambra view.",
        category: "Neighbourhood",
        mustBook: false
      },
      {
        name: "Sacromonte Caves",
        emoji: "🎸",
        description: "Gypsy cave neighbourhood famous for flamenco. Authentic zambra shows in cave venues — magical at night.",
        category: "Culture",
        mustBook: false
      },
      {
        name: "Granada Cathedral",
        emoji: "⛪",
        description: "Impressive Renaissance cathedral. The Royal Chapel next door has the tombs of Ferdinand and Isabella.",
        category: "Monument",
        mustBook: false
      }
    ],
    food: [
      {
        name: "FREE tapas with every drink",
        type: "Granada tradition",
        description: "Granada is unique in Spain — every drink comes with a free tapa! Bar hop around Calle Navas and Plaza Nueva."
      },
      {
        name: "Jamón ibérico",
        type: "Cured ham",
        description: "Granada province produces excellent mountain-cured ham. Try at Los Diamantes bar near the Cathedral."
      },
      {
        name: "Piononos de Santa Fe",
        type: "Local pastry",
        description: "Tiny rolls of sponge cake soaked in sweet syrup — a Granada original named after Pope Pius IX."
      },
      {
        name: "Bar Los Diamantes",
        type: "Bar",
        description: "Granada institution — standing room only, chalk menu, legendary free tapas with every drink."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Vega de Granada Flatlands",
          distance: "20–40 km",
          difficulty: "easy",
          description: "Flat farmland cycling on the fertile plain south of Granada. Follow the Acequia Gorda irrigation canal route.",
          tag: "Road/Path"
        },
        {
          name: "Alhambra Forest Loop",
          distance: "10 km",
          difficulty: "moderate",
          description: "Cycle through wooded hills of the Alhambra complex. Scenic forest roads with city views.",
          tag: "Forest"
        }
      ],
      rentalNote: "Bike rentals at BiciGranada or near Plaza Nueva in the city center"
    }
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
        bookingTip: "Book morning entry online at catedraldecordoba.es"
      },
      {
        name: "Judería (Jewish Quarter)",
        emoji: "⭐",
        description: "Labyrinth of medieval streets, whitewashed walls, and flower-filled alleyways. The 14th-century synagogue is one of only three remaining in Spain.",
        category: "Neighbourhood",
        mustBook: false
      },
      {
        name: "Alcázar de los Reyes Cristianos",
        emoji: "🏰",
        description: "Medieval fortress with gorgeous Moorish-inspired gardens and reflective pools. Columbus presented his New World plans to the Catholic Monarchs here.",
        category: "Monument",
        mustBook: false
      },
      {
        name: "Patios de Córdoba",
        emoji: "🌸",
        description: "Córdoba's famous flower-filled courtyards are especially beautiful in spring. Many private homes open them — ask at the tourist office.",
        category: "Culture",
        mustBook: false
      },
      {
        name: "Puente Romano",
        emoji: "🌉",
        description: "Ancient Roman bridge spanning the Guadalquivir. Best at sunset with the Mezquita lit up behind you.",
        category: "Monument",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Salmorejo",
        type: "Córdoba specialty",
        description: "Córdoba's answer to gazpacho — richer, creamier cold tomato soup topped with hard-boiled egg and jamón. Order it everywhere."
      },
      {
        name: "Rabo de toro",
        type: "Traditional",
        description: "Slow-braised oxtail stew with red wine — a Córdoba institution. Deeper and richer than anywhere else."
      },
      {
        name: "Flamenquín",
        type: "Córdoba invention",
        description: "Ham wrapped in pork loin, breaded and fried. Córdoba claims to have invented it, and they do it best."
      },
      {
        name: "Taberna Luque",
        type: "Traditional tavern",
        description: "Wine barrels stacked to the ceiling, locals only, excellent food at fair prices. Near the Mezquita."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Guadalquivir Riverside Path",
          distance: "12 km round trip",
          difficulty: "easy",
          description: "Flat cycling alongside the river from the Roman Bridge through parkland. Perfect morning or evening ride.",
          tag: "Path"
        },
        {
          name: "Via Verde de la Subbética",
          distance: "55 km total (do any section)",
          difficulty: "easy",
          description: "Old railway converted to a greenway through olive groves and limestone hills. Completely flat — one of the best vías verdes in Andalusia.",
          tag: "Greenway"
        }
      ],
      rentalNote: "Córdoba is very flat — ideal for cycling. Rentals at Alquiler de Bicicletas near the Mezquita."
    }
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
        description: "Stunning royal palace still in official use — oldest royal residence in Europe. Mix of Mudéjar, Gothic, and Renaissance. Used as Game of Thrones filming location!",
        category: "Monument",
        mustBook: true,
        bookingTip: "Book online — queues without a ticket are very long"
      },
      {
        name: "Sevilla Cathedral & La Giralda",
        emoji: "⛪",
        description: "The world's largest Gothic cathedral. Climb La Giralda tower via a ramp (no stairs!) for sweeping city views. Columbus is buried inside.",
        category: "Monument",
        mustBook: false
      },
      {
        name: "Barrio de Santa Cruz",
        emoji: "🍊",
        description: "Magical old Jewish quarter with orange-tree lined alleys, plazas, and tapas bars. Get intentionally lost.",
        category: "Neighbourhood",
        mustBook: false
      },
      {
        name: "Triana — YOUR neighbourhood!",
        emoji: "🎭",
        description: "Authentic working-class district that resisted gentrification. Home of Sevilla's flamenco roots, ceramics workshops, and the best local tapas bars. Right outside your door!",
        category: "Neighbourhood",
        mustBook: false
      },
      {
        name: "Plaza de España",
        emoji: "✨",
        description: "Magnificent semicircular plaza from the 1929 Expo. Ceramic tile maps of every Spanish province. Boat rides on the canal. One of Spain's most photogenic spots.",
        category: "Monument",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Tapas in Triana",
        type: "Neighbourhood bars",
        description: "Bar El Jamón, Casa Cuesta, Bar Bistec — the real Triana experience is right outside your door. Stand at the bar, order local wines and montaditos."
      },
      {
        name: "Pescaíto frito",
        type: "Fried seafood",
        description: "Mixed fried seafood in a paper cone — squid, prawns, anchovies, cod. The Andalusian street food staple."
      },
      {
        name: "Mercado de Triana",
        type: "Market",
        description: "Triana's covered market right next to your apartment! Fresh fish, jamón, cheese, wine. Great tapas bars inside."
      },
      {
        name: "Gazpacho & Salmorejo",
        type: "Cold soups",
        description: "March in Sevilla is warm (18-22°C). Cold soups are on every menu and excellent here."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Triana Bridge to City Center",
          distance: "5 km loop",
          difficulty: "easy",
          description: "Cross the Triana bridge and cycle through the historic center. Sevilla has 180 km of dedicated bike lanes — Spain's best cycling city!",
          tag: "City"
        },
        {
          name: "Guadalquivir Riverside North",
          distance: "20 km round trip",
          difficulty: "easy",
          description: "Flat riverside cycling north from Triana bridge through parkland past Torre del Oro.",
          tag: "River"
        },
        {
          name: "Parque María Luisa Loop",
          distance: "8 km",
          difficulty: "easy",
          description: "Cycle through the beautiful city park past Plaza de España. Combine with a coffee stop at the park café.",
          tag: "Park"
        }
      ],
      rentalNote: "Sevici public bikes available across the city (day pass). Or rent from Sevilla Cycling or Orange City Bikes near center."
    }
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
    reminders: [],
    attractions: [
      {
        name: "Metropol Parasol (Las Setas)",
        emoji: "🍄",
        description: "The world's largest wooden structure — giant mushroom-shaped walkway with rooftop promenade and panoramic city views. Best at sunset.",
        category: "Architecture",
        mustBook: false
      },
      {
        name: "Casa de Pilatos",
        emoji: "🎨",
        description: "Exquisite Renaissance palace with Mudéjar tilework, Roman statues, and a gorgeous patio garden. Less crowded than the Alcázar.",
        category: "Monument",
        mustBook: false
      },
      {
        name: "Flamenco Show",
        emoji: "💃",
        description: "Sevilla is the birthplace of flamenco. Museum of Flamenco (Museo del Baile Flamenco) or Tablao El Arenal for an authentic intimate show.",
        category: "Culture",
        mustBook: true,
        bookingTip: "Book evening show in advance — intimate venues fill up"
      },
      {
        name: "Italica (Day Trip)",
        emoji: "🏛️",
        description: "Ancient Roman city 9 km from Sevilla — birthplace of emperors Trajan and Hadrian. Huge amphitheatre. Game of Thrones filmed here!",
        category: "Day trip",
        mustBook: false
      }
    ],
    food: [
      {
        name: "El Rinconcillo",
        type: "Historic bar",
        description: "Oldest bar in Sevilla (opened 1670!). Chalk bill on the counter. Order espinacas con garbanzos — a Sevilla classic."
      },
      {
        name: "Bodega Santa Cruz (Las Columnas)",
        type: "Standing bar",
        description: "No seats, chalk menu, perpetually busy — classic Sevillano experience in Santa Cruz quarter."
      },
      {
        name: "Vermut in Triana",
        type: "Local tradition",
        description: "Pre-lunch vermouth is a ritual in Triana. Try Bar Altozano on the riverside."
      },
      {
        name: "Churros con chocolate",
        type: "Breakfast",
        description: "The Sevillano way to start the day. Bar El Comercio near the Cathedral is legendary for them."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Sevilla to Italica",
          distance: "18 km round trip",
          difficulty: "easy",
          description: "Cycle via the riverside path and parkways to ancient Roman ruins. Mostly flat all the way.",
          tag: "Historical"
        },
        {
          name: "Full City Exploration",
          distance: "25 km",
          difficulty: "easy",
          description: "Use the 180 km of dedicated bike lanes to link all major sights. Sevilla is completely flat — perfect cycling city!",
          tag: "City tour"
        }
      ],
      rentalNote: "Sevici day pass available from any of the 250+ docking stations across the city."
    }
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
        mustBook: false
      },
      {
        name: "El Tajo Gorge Trail",
        emoji: "🏔️",
        description: "Descend into the gorge bottom via Cueva del Gato path for the jaw-dropping upward view of Puente Nuevo. About 45 min return.",
        category: "Nature",
        mustBook: false
      },
      {
        name: "Setenil de las Bodegas",
        emoji: "🪨",
        description: "Extraordinary village where houses are literally built INTO overhanging rock cliffs. The main street runs under a roof of solid rock. 20 min from Ronda.",
        category: "Village",
        mustBook: false
      },
      {
        name: "Sierra de Grazalema",
        emoji: "🏞️",
        description: "One of Andalusia's most dramatic natural parks — limestone peaks, vulture colonies, and traditional white villages. Pass through on the way.",
        category: "Nature",
        mustBook: false
      },
      {
        name: "Plaza de Toros de Ronda",
        emoji: "🐂",
        description: "One of Spain's oldest and most beautiful bullrings (1785). Visit the museum to understand the history.",
        category: "Cultural",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Rabo de toro rondeño",
        type: "Mountain specialty",
        description: "Ronda's version of oxtail stew — richer and spicier, cooked with Serranía mountain herbs. Order at Restaurante Pedro Romero."
      },
      {
        name: "Grazalema cheese",
        type: "Artisan cheese",
        description: "Sierra de Grazalema produces exceptional raw-milk sheep and goat cheeses. Buy from village shops or Ronda market."
      },
      {
        name: "Migas serranas",
        type: "Mountain breakfast",
        description: "Breadcrumbs fried with chorizo, bacon and peppers — hearty mountain breakfast. Fuel for cycling!"
      },
      {
        name: "Setenil cave cafés",
        type: "Unique experience",
        description: "Have coffee or tapas at a bar literally built inside a cave under the rock overhang. Unforgettable."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Ronda Gorge Perimeter",
          distance: "12 km",
          difficulty: "moderate",
          description: "Circuit around the old city along the rim of El Tajo gorge. Spectacular views with some short climbs.",
          tag: "Scenic"
        },
        {
          name: "Ronda to Setenil de las Bodegas",
          distance: "40 km round trip",
          difficulty: "moderate",
          description: "Rolling hills through the Serranía de Ronda. Mix of descents into valleys and climbs out. Arrive in Setenil from above for the best rock-village views.",
          tag: "Road"
        },
        {
          name: "Sierra de Grazalema Puertos",
          distance: "45 km loop",
          difficulty: "hard",
          description: "Serious mountain cycling through the natural park. Puerto de las Palomas (1,357m) and pine forests. Epic descents.",
          tag: "Mountain"
        }
      ],
      rentalNote: "Hotel has dedicated bicycle parking! Bike rental in Ronda at Ronda Cicloturismo."
    }
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
        description: "The most spectacular walk in Spain — a narrow path pinned to sheer 300m cliffs in El Chorro gorge. Once the world's most dangerous path, now fully safe and maintained. BOOK IN ADVANCE!",
        category: "Adventure",
        mustBook: true,
        bookingTip: "Book at caminitodelrey.info — popular slots sell out weeks ahead"
      },
      {
        name: "Embalse del Guadalhorce",
        emoji: "💧",
        description: "Three linked turquoise reservoirs at the foot of the Caminito. Stunning contrast of water and limestone cliffs.",
        category: "Nature",
        mustBook: false
      },
      {
        name: "Playa de la Carihuela",
        emoji: "🐟",
        description: "The best part of Torremolinos — old fishing village with authentic chiringuitos. Great seafood, away from the tourist strip.",
        category: "Beach",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Pack lunch for Caminito!",
        type: "Essential tip",
        description: "No food on the trail — bring water, energy bars, and snacks. The walk takes 3–4 hours. Buy supplies in El Chorro village or Ardales the night before."
      },
      {
        name: "La Carihuela chiringuitos",
        type: "Beach restaurants",
        description: "Celebrate the Caminito with fresh fish at La Carihuela beach. Try Restaurante El Roqueo or Casa Juan for excellent grilled fish."
      },
      {
        name: "Recovery dinner",
        type: "Traditional",
        description: "After the walk, a proper dinner at one of the beachfront restaurants. You'll be hungry!"
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "El Chorro MTB Trails",
          distance: "Various",
          difficulty: "hard",
          description: "The El Chorro area has excellent mountain biking around the reservoirs and gorge. Several marked trails for all levels. Best combined with the Caminito visit.",
          tag: "MTB"
        }
      ],
      rentalNote: "MTB rental available at El Chorro village."
    }
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
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Picasso Museum",
        emoji: "🎨",
        description: "Málaga is Picasso's birthplace! The museum in Buenavista Palace holds 233 works. Don't miss his birthplace house (Casa Natal) nearby.",
        category: "Museum",
        mustBook: false
      },
      {
        name: "Alcazaba de Málaga",
        emoji: "🏰",
        description: "Moorish fortress rising above the city — one of the best-preserved Alcazabas in Spain. Free on Sundays. Combine with the Teatro Romano at its base.",
        category: "Monument",
        mustBook: false
      },
      {
        name: "El Palo Fishing Village",
        emoji: "🎣",
        description: "5 km east of Málaga center — the authentic village where espetos were invented. The best espetos in the world are served here on the beach.",
        category: "Neighbourhood",
        mustBook: false
      },
      {
        name: "Mercado de Atarazanas",
        emoji: "🏛️",
        description: "Stunning 19th-century market hall with magnificent stained glass. Sample local charcuterie, cheeses, and wines at bar counters inside.",
        category: "Market",
        mustBook: false
      },
      {
        name: "Centro Pompidou Málaga",
        emoji: "🖼️",
        description: "Satellite of Paris's Centre Pompidou — contemporary art in a striking glass cube on the port. Less crowded than the French original.",
        category: "Museum",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Espetos at El Palo",
        type: "The original",
        description: "The ritual: sit on the beach at El Palo, order sardine espetos cooked in a traditional boat on the sand. Eat with local white wine. This is Málaga."
      },
      {
        name: "Málaga sweet wines (Moscatel)",
        type: "Local wines",
        description: "Unique sweet wines made from sun-dried Muscatel grapes. Try at any wine bar — completely different to anything you've had before."
      },
      {
        name: "Boquerones en vinagre",
        type: "Málaga staple",
        description: "Fresh anchovies marinated in white vinegar with garlic and parsley. Incredibly fresh in Málaga — order at any market bar."
      },
      {
        name: "El Pimpi",
        type: "Málaga institution",
        description: "Most famous bar in Málaga — wine barrels signed by Antonio Banderas and celebrities, right next to the Alcazaba."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Senda Litoral Coastal Path",
          distance: "14 km one way",
          difficulty: "easy",
          description: "Dedicated coastal cycling path from Torremolinos to Málaga city. Flat, traffic-free, sea views the entire way. Perfect morning ride into the city.",
          tag: "Coastal"
        },
        {
          name: "Málaga Port & Centre Loop",
          distance: "10 km",
          difficulty: "easy",
          description: "Cycle along the port promenade, past the Alcazaba, to El Palo fishing village and back.",
          tag: "City"
        }
      ],
      rentalNote: "Bike rental at Málaga Bike Tours near the port, or ride in from Torremolinos on the Senda Litoral."
    }
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
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Mijas Pueblo",
        emoji: "🫏",
        description: "Impossibly pretty white hilltop village with classic Andalusian streets, donkey taxis, and panoramic views over the Costa del Sol. 30 min from Torremolinos.",
        category: "Village",
        mustBook: false
      },
      {
        name: "Benalmádena Cable Car",
        emoji: "🚠",
        description: "The Teleférico ascends 800m to Monte Calamorro for panoramic views of the Costa del Sol, Gibraltar, and Africa on clear days.",
        category: "Attraction",
        mustBook: false
      },
      {
        name: "Marbella Old Town",
        emoji: "🌺",
        description: "Behind the glamour of Puerto Banús lies a genuinely beautiful 16th-century old town. Orange-blossom plazas, white walls, excellent seafood.",
        category: "Town",
        mustBook: false
      },
      {
        name: "Puerto Banús",
        emoji: "⛵",
        description: "Marbella's famous marina — superyachts, Ferraris, designer shops. Fun to walk around even just window-shopping. Great tapas in the port area.",
        category: "Marina",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Marbella old town restaurants",
        type: "Spanish",
        description: "Avoid overpriced port restaurants — go two streets back in the old town for excellent Spanish food at half the price. Plaza de los Naranjos has great terraces."
      },
      {
        name: "Fresh orange juice",
        type: "Local produce",
        description: "Andalusia grows the best oranges in Europe — freshly squeezed juice is everywhere and cheap. A daily ritual."
      },
      {
        name: "Ajoblanco",
        type: "Málaga specialty",
        description: "White gazpacho made with almonds and garlic — a Málaga original, smoother and nuttier than red gazpacho. Available all along the Costa."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Costa del Sol Bike Path",
          distance: "30 km Torremolinos → Fuengirola",
          difficulty: "easy",
          description: "Dedicated seafront cycling path running along the entire Costa del Sol. Completely flat, traffic-free, and scenic. World-class urban cycling infrastructure.",
          tag: "Coastal"
        },
        {
          name: "Mijas Mountain Ascent",
          distance: "20 km round trip",
          difficulty: "hard",
          description: "Climb from the coast up to Mijas village — 450m of elevation gain. Epic views from the top. Follow the old mule track.",
          tag: "Climb"
        }
      ],
      rentalNote: "Use the Senda Litoral coastal path from Torremolinos — bikes available at various rental points along the route."
    }
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
    accommodation: null,
    sameAccommodationAs: 7,
    reminders: [],
    attractions: [
      {
        name: "Morning beach walk",
        emoji: "🌅",
        description: "Last sunrise stroll along La Carihuela beach. The Costa del Sol in the morning light is unforgettable.",
        category: "Beach",
        mustBook: false
      },
      {
        name: "Souvenir shopping",
        emoji: "🛍️",
        description: "Last chance: local olive oil, Málaga sweet wine, Ronda ceramics, Sierra Nevada honey. Torremolinos shops open early on Sunday.",
        category: "Shopping",
        mustBook: false
      }
    ],
    food: [
      {
        name: "Tostada con tomate y aceite",
        type: "Spanish breakfast",
        description: "The perfect send-off — toasted bread rubbed with fresh tomato, drizzled with extra-virgin olive oil, sprinkled with sea salt. Order at any café."
      },
      {
        name: "Café con leche",
        type: "Breakfast",
        description: "A classic Spanish coffee breakfast. Town cafés are much better than the airport — enjoy your last one before heading to the flight."
      }
    ],
    cycling: {
      available: true,
      routes: [
        {
          name: "Morning Coastal Ride",
          distance: "10 km",
          difficulty: "easy",
          description: "A final morning ride along the beach path before packing up. Torremolinos to Benalmádena and back — flat, fresh sea air, perfect final memory.",
          tag: "Easy"
        }
      ],
      rentalNote: "Return rental bikes before checkout at 11:00."
    }
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
  parking: {
    total: 72.00,
    notes: "Total estimated parking in accommodations"
  },
  car: {
    total: 280.00,
    notes: "10-day rental car"
  },
  grandTotal: 1066.27
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
