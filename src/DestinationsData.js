// src/DestinationsData.js
const destinations = [
  {
    id: 1,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    description: `
Paris, often called the "City of Light," is one of the most enchanting and historically rich destinations in the world. With its timeless architecture, romantic boulevards, world-class cuisine, and a vibrant cultural scene, Paris has captivated travelers for centuries...
    `,
    air: "Charles de Gaulle International Airport (CDG), connected to 200+ destinations worldwide.",
    hotels: [
      "Hotel Plaza Athénée",
      "Le Bristol Paris",
      "Shangri-La Hotel Paris",
      "Budget: Ibis Styles Paris, Generator Hostel"
    ],
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre Dame Cathedral",
      "Montmartre"
    ],
    moreImages: [
      "https://images.unsplash.com/photo-1543340713-8a9b7f3a1a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    ],
    routes: [
      "London → Paris: 1h 20m (direct flight)",
      "New York → Paris: 7h 30m (direct flight)",
      "Dubai → Paris: 6h 45m (direct flight)"
    ],
    flights: [
      { airline: "Air France", time: "08:00 AM - 10:30 AM", from: "London Heathrow (LHR)" },
      { airline: "Delta Airlines", time: "07:00 PM - 08:30 AM +1", from: "New York (JFK)" },
      { airline: "Emirates", time: "02:00 AM - 07:00 AM", from: "Dubai (DXB)" }
    ]
  },
  {
    id: 2,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    description: `
Tokyo, Japan’s pulsating capital, is a mesmerizing fusion of ultramodern technology and deep-rooted tradition...
    `,
    air: "Haneda Airport (HND) & Narita International Airport (NRT) serve Tokyo with global connections.",
    hotels: [
      "Park Hyatt Tokyo",
      "The Peninsula Tokyo",
      "Mandarin Oriental",
      "Budget: APA Hotels, Capsule Hotels"
    ],
    attractions: [
      "Shibuya Crossing",
      "Tokyo Tower",
      "Meiji Shrine",
      "Akihabara Electric Town",
      "Tsukiji Fish Market"
    ],
    moreImages: [
      "https://images.unsplash.com/photo-1526481280691-7a96e1d110d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1505067216369-2fcb0c5c0f14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    ],
    routes: [
      "Los Angeles → Tokyo: 11h 30m (direct flight)",
      "Singapore → Tokyo: 7h 0m (direct flight)",
      "Sydney → Tokyo: 9h 20m (direct flight)"
    ],
    flights: [
      { airline: "ANA", time: "10:00 AM - 02:30 PM", from: "Los Angeles (LAX)" },
      { airline: "Japan Airlines", time: "01:00 PM - 08:00 PM", from: "Singapore (SIN)" },
      { airline: "Qantas", time: "09:00 AM - 06:20 PM", from: "Sydney (SYD)" }
    ]
  },
  {
    id: 3,
    name: "Santorini",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    description: `
Santorini, Greece, is a volcanic island jewel in the Aegean Sea, famous for its dramatic cliffs and sunsets...
    `,
    air: "Santorini (Thira) International Airport (JTR) connects via Athens and European hubs.",
    hotels: [
      "Canaves Oia Suites",
      "Mystique Santorini",
      "Grace Hotel Santorini",
      "Budget: Villa Manos, Youth Hostel Oia"
    ],
    attractions: [
      "Oia Village",
      "Akrotiri Archaeological Site",
      "Red Beach",
      "Fira Town",
      "Santo Wines Winery"
    ],
    moreImages: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    ],
    routes: [
      "Athens → Santorini: 50m (direct flight)",
      "London → Santorini: 3h 50m (seasonal direct flight)",
      "Rome → Santorini: 2h 20m (direct flight)"
    ],
    flights: [
      { airline: "Aegean Airlines", time: "09:00 AM - 09:50 AM", from: "Athens (ATH)" },
      { airline: "Ryanair", time: "12:00 PM - 03:50 PM", from: "London Stansted (STN)" },
      { airline: "Alitalia", time: "08:00 AM - 10:20 AM", from: "Rome (FCO)" }
    ]
  }
];

export default destinations;
