import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import Sidebar from "./Sidebar";

// Sample destinations + highlights
const destinations = [
  {
    name: "Paris, France",
    category: "International",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The City of Love, famous for the Eiffel Tower, art, and cuisine.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1200,
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"],
    highlightImages: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/40/70/4a.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWXUkutBWgaWiNk7Fb0zVZ6SjYrOksXFbBw&s",
      "https://cdn.britannica.com/29/255529-050-63A22A3C/notre-dame-de-paris-cathedral-paris-france.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAkM74NfkyZcqYemZ38kxypf6rgZCZL63wg&s"
    ],
    flights: [
      { airline: "Air France", departure: "10:00 AM", arrival: "2:00 PM", price: 600 },
      { airline: "Emirates", departure: "12:00 PM", arrival: "4:00 PM", price: 750 }
    ],
    routes: [
      {
        start: "New York, USA",
        stops: ["Chicago, USA", "London, UK"],
        end: "Paris, France",
        duration: "10 hours"
      }
    ],
    localCuisine: ["Croissants", "Escargot", "Coq au Vin"],
    bestTimeToVisit: "April to June and September to October",
    culturalTips: "Learn a few basic French phrases to enhance your experience."

  },
  {
    name: "Tokyo, Japan",
    category: "International",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c",
    description: "A bustling metropolis blending tradition and technology.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 6,
    cost: 1500,
    highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"],
    highlightImages: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7c/eb/cb/photo0jpg.jpg?w=800&h=500&s=1",
      "https://www.advantour.com/img/japan/tokyo/tokyo-tower.jpg",
      "https://images.unsplash.com/photo-1557409518-691ebcd96038",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST96tu70lhczNj0_2x_SiV4guusD0M7XonLg&s"
    ],
    flights: [
      { airline: "Japan Airlines", departure: "9:00 AM", arrival: "3:00 PM", price: 700 },
      { airline: "ANA", departure: "11:00 AM", arrival: "5:00 PM", price: 720 }
    ],
    routes: [
      {
        start: "Los Angeles, USA",
        stops: ["San Francisco, USA", "Honolulu, HI"],
        end: "Tokyo, Japan",
        duration: "12 hours"
      }
    ],
    localCuisine: ["Sushi", "Ramen", "Tempura"],
    bestTimeToVisit: "March to May and September to November",
    culturalTips: "Be respectful and follow local customs, such as bowing."
  },
  {
    name: "Santorini, Greece",
    category: "Beach",
    image: "https://static.vecteezy.com/system/resources/thumbnails/008/009/829/small/oia-at-sunset-santorini-island-greece-artistic-sunset-landscape-with-beautiful-panorama-and-sun-rays-sea-view-fantastic-summer-vacation-and-holiday-concept-peaceful-nature-scenery-photo.jpg",
    description: "Famous for its white-washed houses and sunset views.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1300,
    highlights: ["Oia Village", "Blue Domes", "Red Beach"],
    highlightImages: [
      "https://images.santorini-view.com/0c58dcb9_63d5_4de7_b7ba_0a63c5ddda50.limghandler.jpg?i=aT0lMmZ1cGxvYWRlZGZpbGVzJTJmMjAyNCUyZjExJTJmMTIlMmYwYzU4ZGNiOS02M2Q1LTRkZTctYjdiYS0wYTYzYzVkZGRhNTAuanBlZyZ3PTcyMCZoPTU0MCZzdD10cnVlJmJnPTE2Nzc3MjE1JmNyPXRydWUmYXQ9NA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fpOVkKoMVWOgWhu8AVTv2Q8S4sUF7Z_kRQ&s",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKZQOYNREfzY30lwBH5QMOD9edWTPZjIwpg&s"
    ],
    flights: [
      { airline: "Air France", departure: "10:00 AM", arrival: "2:00 PM", price: 600 },
      { airline: "Emirates", departure: "12:00 PM", arrival: "4:00 PM", price: 750 }
    ],
    routes: [
      { start: "New York, USA", stops: ["Chicago, USA", "London, UK"], end: "Paris, France", duration: "10 hours" }
    ]
  },
  {
    name: "Dubai, UAE",
    category: "International",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99uRMw9HiarqIHNDa_VGN2bY_GG1yxE7j9Q&s",
    description: "A luxury hub with futuristic architecture and shopping.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1700,
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Marina"],
    highlightImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/fd/1b/d6.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMg4_qqkZnjXJpsuKr9ydxGrYloRK_JuVD6w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQ5r_ohDfif5DmAi7hgGigD145BvGNYeouw&s"
    ],
    flights: [
      { airline: "Emirates", departure: "9:00 AM", arrival: "6:00 PM", price: 800 },
      { airline: "Etihad", departure: "11:00 AM", arrival: "8:00 PM", price: 820 }
    ],
    routes: [
      { start: "London, UK", stops: ["Rome, Italy"], end: "Dubai, UAE", duration: "7 hours" }
    ]
  },
  {
    name: "Khajuraho Temples, Madhya Pradesh",
    category: "Heritage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNemzzVQ4UCMR-JvvNhQcDqnq2FYJ2oi2weA&s",
    description: "World-famous temples known for their intricate sculptures and carvings.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 3,
    cost: 750,
    highlights: ["Kandariya Mahadev Temple", "Lakshmana Temple", "Devi Jagadambi Temple"],
    highlightImages: [
      "https://images.pexels.com/photos/164204/pexels-photo-164204.jpeg",
      "https://images.pexels.com/photos/338516/pexels-photo-338516.jpeg",
      "https://images.pexels.com/photos/338517/pexels-photo-338517.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHocN-0J8pfN_pcNy61rTZ7j2JZjLl0HXW7i37vNY2JhjJ_y1ZuDVXBCQznHwQiSXemdE&usqp=CAU"
    ],
    flights: [
      { airline: "IndiGo", departure: "7:00 AM", arrival: "9:00 AM", price: 120 },
      { airline: "Air India", departure: "10:00 AM", arrival: "12:00 PM", price: 150 }
    ],
    routes: [
      { start: "Delhi, India", stops: ["Jhansi, India"], end: "Khajuraho, India", duration: "4 hours" }
    ]
  },
  {
    name: "Bangkok, Thailand",
    category: "Cultural",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoJi_wuRlu_KOfBMKWpiKcqAUFoMx9_73IQ&s",
    description: "A vibrant city famous for temples, nightlife, and street food.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 4,
    cost: 900,
    highlights: ["Grand Palace", "Wat Arun", "Floating Markets"],
    highlightImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgiOx1CgmJMDCVy68WDB3m4pkdI0r1cqv3g&s",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc",
      "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/65b61ce396669b00025e9a6a/files/best-temples-in-bangkok-main-image-hd-op.webp"
      
    ],
    flights: [
      { airline: "Thai Airways", departure: "6:00 AM", arrival: "12:00 PM", price: 550 },
      { airline: "Singapore Airlines", departure: "8:00 AM", arrival: "2:00 PM", price: 600 }
    ],
    routes: [
      { start: "Singapore", stops: ["Kuala Lumpur"], end: "Bangkok", duration: "5 hours" }
    ]
  },
  {
    name: "Cairo, Egypt",
    category: "Historical",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdwSFW114Ne4c1NOoMnLFbcGzSQAX6_lJAA&s",
    description: "The gateway to the Pyramids of Giza and ancient wonders.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 4,
    cost: 1100,
    highlights: ["Pyramids of Giza", "Sphinx", "Egyptian Museum"],
    highlightImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMrJHogBbXhXJr9BvjGQvBZuj5cKvFKhMQqVeLYF_vuz6JxlAyLPdyDeJttHxFvWFApQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO5tuoMZA3vi1DUYGuMFZW1VDrrTCkgTKKQ&s",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2igXjMqqyOhvjHzF-bl5r0c_WR3QeaAq2Q&s"
    ],
    flights: [
      { airline: "EgyptAir", departure: "9:00 AM", arrival: "1:00 PM", price: 500 },
      { airline: "Lufthansa", departure: "10:00 AM", arrival: "2:00 PM", price: 650 }
    ],
    routes: [
      { start: "London, UK", stops: ["Rome, Italy"], end: "Cairo, Egypt", duration: "6 hours" }
    ]
  },
  {
   name: "Rio de Janeiro, Brazil",
    category: "Beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4xtE9Py6ao8QvyW7Ej7uQ2iVktwS9ufFA&s",
    description: "A lively city with Christ the Redeemer and Copacabana.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1300,
    highlights: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
    highlightImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLNl0sT4w893W6BvHIc7uDWXaHD6mnZh_fg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTvYhq9ca1CN1NsOMPINPRQZAwhQN21cYOw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGXv4e_1VLUgSoqNZJu7SJgu5I6QnjE2f7w&s",
      "https://ychef.files.bbci.co.uk/1280x720/p0fhg1x1.jpg"
    ],
    flights: [
      { airline: "LATAM Airlines", departure: "8:00 AM", arrival: "6:00 PM", price: "$700" },
      { airline: "Emirates", departure: "10:00 AM", arrival: "8:00 PM", price: "$850" }
    ],
    travelRoutes: {
      from: "New York, USA",
      stops: ["Miami, USA", "Sao Paulo, Brazil"],
      to: "Rio de Janeiro, Brazil",
      duration: "12 hours"
    },
    additionalInfo: {
      localCuisine: ["Feijoada", "Pão de Queijo", "Brigadeiro"],
      bestTimeToVisit: "December to March",
      culturalTips: "Learn basic Portuguese greetings and enjoy Carnival if visiting in February."
    }
  },
  {
    name: "Singapore",
    category: "Modern",
    image: "https://images.pexels.com/photos/1204698/pexels-photo-1204698.jpeg",
    description: "A city of futuristic architecture, gardens, and diverse culture.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 4,
    cost: 1400,
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
    highlightImages: [
      "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYwUOik4Hsqalx-24kT-QLM4OFH9BI3IgXg&s",
      "https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxi5TckOab4pTYuYxiLrLZtQ-WzGagw09yQ&s"
    ],
    flights: [
      { airline: "Singapore Airlines", departure: "9:00 AM", arrival: "3:00 PM", price: "$900" },
      { airline: "Emirates", departure: "11:00 AM", arrival: "5:00 PM", price: "$950" }
    ],
    travelRoutes: {
      from: "New York, USA",
      stops: ["Dubai, UAE"],
      to: "Singapore",
      duration: "18 hours"
    },
    additionalInfo: {
      localCuisine: ["Hainanese Chicken Rice", "Laksa", "Chilli Crab"],
      bestTimeToVisit: "February to April",
      culturalTips: "Respect local laws and cleanliness; Singapore is very strict about littering."
    }
  },
  {
    name: "Athens, Greece",
    category: "Historical",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGkAbGSffI31HTOHlMQ9O9NmUhJchZldlPw&s",
    description: "The birthplace of democracy and home to the Acropolis.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1300,
    highlights: ["Acropolis", "Parthenon", "Temple of Olympian Zeus"],
    highlightImages: [
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
      "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1D1r-crwCbi7GmABgg4pV9kAF6NQVz9_dA&s"
    ],
    flights: [
      { airline: "Aegean Airlines", departure: "7:00 AM", arrival: "3:00 PM", price: "$650" },
      { airline: "Delta Airlines", departure: "9:00 AM", arrival: "5:00 PM", price: "$700" }
    ],
    travelRoutes: {
      from: "New York, USA",
      stops: ["London, UK"],
      to: "Athens, Greece",
      duration: "11 hours"
    },
    additionalInfo: {
      localCuisine: ["Moussaka", "Souvlaki", "Baklava"],
      bestTimeToVisit: "March to May and September to November",
      culturalTips: "Carry cash; many small shops do not accept cards."
    }
  },
  {
    name: "London, UK",
    category: "Cultural",
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
    description: "A global city rich in history, modern attractions, and royal landmarks.",
    hotelAvailability: "Rooms Available: Yes",
    stay: 5,
    cost: 1600,
    highlights: ["Big Ben", "Tower Bridge", "Buckingham Palace"],
    highlightImages: [
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
      "https://images.pexels.com/photos/50632/pexels-photo-50632.jpeg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/bb/big-ben.jpg?w=900&h=500&s=1&pcx=1033&pcy=310&pchk=v1_bf93e1170e1f1f8d4cea"
    ],
    flights: [
      { airline: "British Airways", departure: "8:00 AM", arrival: "8:00 PM", price: "$750" },
      { airline: "American Airlines", departure: "10:00 AM", arrival: "10:00 PM", price: "$780" }
    ],
    travelRoutes: {
      from: "New York, USA",
      stops: ["Reykjavik, Iceland"],
      to: "London, UK",
      duration: "9 hours"
    },
    additionalInfo: {
      localCuisine: ["Fish and Chips", "Sunday Roast", "Shepherd's Pie"],
      bestTimeToVisit: "May to September",
      culturalTips: "Mind the local etiquette; queueing is very important in public places."
    }
  },
  {
  name: "Great Wall of China",
  category: "Historical Wonder",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUAwW-GL8WYUryLy7nJ8y9ivbWOY8ltxNQw&s",
  description: "One of the Seven Wonders of the World, stretching across northern China.",
  hotelAvailability: "Hotels and guesthouses nearby",
  stay: "4 days",
  cost: "Approx. $1500",
  highlights: ["Badaling", "Mutianyu", "Jinshanling"],
  highlightImages: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzWTFbc9mS-J__R0KRBMv0EwmJEqDfe11nA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGLoaL7i4jqV7RFeQ4J_sUEeXB5GKTlvCLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqsfFSqng0dw9qvQ5aR465GcH_Hz73Xxz-A&s"
  ],
  flights: [
    { airline: "Air China", departure: "6:00 AM", arrival: "6:00 PM", price: "$800" },
    { airline: "United Airlines", departure: "9:00 AM", arrival: "9:00 PM", price: "$850" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Tokyo, Japan"],
    to: "Beijing, China",
    duration: "14 hours"
  },
  additionalInfo: {
    localCuisine: ["Peking Duck", "Dumplings", "Hot Pot"],
    bestTimeToVisit: "April to October",
    culturalTips: "Wear comfortable shoes; the wall involves a lot of walking and climbing."
  }
},
{
  name: "Toronto, Canada",
  category: "Modern",
  image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
  description: "A multicultural city known for its skyline and Niagara Falls nearby.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 5,
  cost: 1500,
  highlights: ["CN Tower", "Toronto Islands", "Niagara Falls"],
  highlightImages: [
    "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    "https://images.pexels.com/photos/667484/pexels-photo-667484.jpeg",
    "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
  ],
  flights: [
    { airline: "Air Canada", departure: "7:00 AM", arrival: "11:00 AM", price: "$500" },
    { airline: "Delta Airlines", departure: "9:00 AM", arrival: "1:00 PM", price: "$520" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Buffalo, USA"],
    to: "Toronto, Canada",
    duration: "3 hours"
  },
  additionalInfo: {
    localCuisine: ["Poutine", "Maple Syrup Desserts", "Peameal Bacon Sandwich"],
    bestTimeToVisit: "May to September",
    culturalTips: "Carry a jacket even in summer; weather can be unpredictable."
  }
},
{
  name: "New York City, USA",
  category: "Modern",
  image: "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg",
  description: "The city that never sleeps, full of skyscrapers and culture.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 6,
  cost: 1800,
  highlights: ["Statue of Liberty", "Central Park", "Times Square"],
  highlightImages: [
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
    "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg"
  ],
  flights: [
    { airline: "Delta Airlines", departure: "10:00 AM", arrival: "2:00 PM", price: "$600" },
    { airline: "United Airlines", departure: "12:00 PM", arrival: "4:00 PM", price: "$650" }
  ],
  travelRoutes: {
    from: "Los Angeles, USA",
    stops: ["Chicago, USA"],
    to: "New York City, USA",
    duration: "6 hours"
  },
  additionalInfo: {
    localCuisine: ["New York Pizza", "Bagels", "Cheesecake"],
    bestTimeToVisit: "April to June and September to November",
    culturalTips: "Walk and use subways; traffic is heavy during rush hours."
  }
},
{
  name: "Bali, Indonesia",
  category: "Beach & Culture",
  image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
  description: "An Indonesian paradise known for beaches, temples, and lush rice terraces.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 6,
  cost: 1200,
  highlights: ["Ubud Rice Fields", "Tanah Lot Temple", "Kuta Beach"],
  highlightImages: [
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    "https://images.pexels.com/photos/21014/pexels-photo.jpg",
    "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2023/12/theworldtravelguy.com_.jpg"
  ],
  flights: [
    { airline: "Garuda Indonesia", departure: "8:00 AM", arrival: "10:00 PM", price: "$750" },
    { airline: "Singapore Airlines", departure: "9:00 AM", arrival: "11:00 PM", price: "$780" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Singapore"],
    to: "Denpasar, Bali",
    duration: "22 hours"
  },
  additionalInfo: {
    localCuisine: ["Babi Guling", "Nasi Goreng", "Satay"],
    bestTimeToVisit: "April to October",
    culturalTips: "Respect local temple rules and dress modestly when visiting."
  }
},
{
  name: "Taj Mahal, India",
  category: "Historical",
  image: "https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg",
  description: "One of the Seven Wonders of the World, a symbol of love in Agra.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 3,
  cost: 800,
  highlights: ["Mausoleum", "Yamuna River View", "Mughal Gardens"],
  highlightImages: [
    "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg",
    "https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg",
    "https://images.pexels.com/photos/1583333/pexels-photo-1583333.jpeg"
  ],
  flights: [
    { airline: "Air India", departure: "6:00 AM", arrival: "4:00 PM", price: "$700" },
    { airline: "IndiGo", departure: "8:00 AM", arrival: "6:00 PM", price: "$650" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Delhi, India"],
    to: "Agra, India",
    duration: "20 hours"
  },
  additionalInfo: {
    localCuisine: ["Petha", "Tandoori Chicken", "Dal Makhani"],
    bestTimeToVisit: "October to March",
    culturalTips: "Visit early morning to avoid crowds and heat."
  }
},
{
  name: "Red Fort, Delhi",
  category: "Heritage",
  image: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-delhi-1-musthead-hero?qlt=82&ts=1742170564889",
  description: "A UNESCO World Heritage Site, symbol of India’s rich Mughal architecture.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 2,
  cost: 600,
  highlights: ["Lahori Gate", "Diwan-i-Aam", "Diwan-i-Khas"],
  highlightImages: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcFcTbfKS_bHqkS8LE4wXT19r3uHtJBk_Fw&s",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
  ],
  flights: [
    { airline: "Air India", departure: "6:00 AM", arrival: "4:00 PM", price: "$700" },
    { airline: "IndiGo", departure: "8:00 AM", arrival: "6:00 PM", price: "$650" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Delhi, India"],
    to: "Red Fort, Delhi",
    duration: "20 hours"
  },
  additionalInfo: {
    localCuisine: ["Butter Chicken", "Chaat", "Paratha"],
    bestTimeToVisit: "October to March",
    culturalTips: "Hire a local guide for full historical context."
  }
},
{
  name: "Jaipur, Rajasthan",
  category: "Cultural",
  image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  description: "The Pink City famous for forts, palaces, and vibrant culture.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 4,
  cost: 1000,
  highlights: ["Hawa Mahal", "Amber Fort", "City Palace"],
  highlightImages: [
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    "https://images.pexels.com/photos/1619561/pexels-photo-1619561.jpeg",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
  ],
  flights: [
    { airline: "IndiGo", departure: "6:00 AM", arrival: "10:00 AM", price: "$600" },
    { airline: "Air India", departure: "8:00 AM", arrival: "12:00 PM", price: "$650" }
  ],
  travelRoutes: {
    from: "New Delhi, India",
    stops: [],
    to: "Jaipur, Rajasthan",
    duration: "1 hour"
  },
  additionalInfo: {
    localCuisine: ["Dal Baati Churma", "Laal Maas", "Ghewar"],
    bestTimeToVisit: "October to March",
    culturalTips: "Respect the dress code when visiting religious sites."
  }
},
{
  name: "Varanasi, India",
  category: "Spiritual",
  image: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg",
  description: "The spiritual capital of India, known for Ganga ghats and temples.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 3,
  cost: 700,
  highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Evening Aarti"],
  highlightImages: [
    "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg",
    "https://images.pexels.com/photos/2051000/pexels-photo-2051000.jpeg",
    "https://images.pexels.com/photos/2050998/pexels-photo-2050998.jpeg"
  ],
  flights: [
    { airline: "IndiGo", departure: "7:00 AM", arrival: "9:00 AM", price: "$200" },
    { airline: "SpiceJet", departure: "9:00 AM", arrival: "11:00 AM", price: "$220" }
  ],
  travelRoutes: {
    from: "New Delhi, India",
    stops: [],
    to: "Varanasi, India",
    duration: "2 hours"
  },
  additionalInfo: {
    localCuisine: ["Kachori Sabzi", "Banarasi Paan", "Lassi"],
    bestTimeToVisit: "October to March",
    culturalTips: "Participate respectfully in Ganga Aarti ceremonies."
  }
},
{
  name: "Ellora Caves, Maharashtra",
  category: "Historical",
  image: "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg",
  description: "Ancient rock-cut temples representing Hindu, Buddhist, and Jain cultures.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 2,
  cost: 650,
  highlights: ["Kailasa Temple", "Buddhist Monasteries", "Cave Murals"],
  highlightImages: [
    "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg",
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
  ],
  flights: [
    { airline: "Air India", departure: "6:00 AM", arrival: "8:00 AM", price: "$150" },
    { airline: "IndiGo", departure: "8:00 AM", arrival: "10:00 AM", price: "$160" }
  ],
  travelRoutes: {
    from: "Mumbai, India",
    stops: [],
    to: "Ellora Caves, Maharashtra",
    duration: "2 hours by car from Aurangabad"
  },
  additionalInfo: {
    localCuisine: ["Puran Poli", "Vada Pav", "Thali"],
    bestTimeToVisit: "October to March",
    culturalTips: "Wear comfortable shoes; caves involve a lot of walking."
  }
},
{
  name: "Statue of Liberty, USA",
  category: "Modern Wonder",
  image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
  description: "A universal symbol of freedom and democracy located in New York Harbor.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 2,
  cost: 1200,
  highlights: ["Crown View", "Ellis Island", "Liberty Museum"],
  highlightImages: [
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
    "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
    "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg"
  ],
  flights: [
    { airline: "Delta Airlines", departure: "9:00 AM", arrival: "1:00 PM", price: "$500" },
    { airline: "United Airlines", departure: "11:00 AM", arrival: "3:00 PM", price: "$520" }
  ],
  travelRoutes: {
    from: "New York City, USA",
    stops: [],
    to: "Statue of Liberty, USA",
    duration: "30 mins by ferry"
  },
  additionalInfo: {
    localCuisine: ["New York Pizza", "Bagels", "Cheesecake"],
    bestTimeToVisit: "April to June and September to November",
    culturalTips: "Book ferry tickets in advance to avoid long lines."
  }
},
{
  name: "Rio de Janeiro, Brazil",
  category: "Beach",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4xtE9Py6ao8QvyW7Ej7uQ2iVktwS9ufFA&s",
  description: "A lively city with Christ the Redeemer and Copacabana.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 5,
  cost: 1300,
  highlights: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"],
  highlightImages: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLNl0sT4w893W6BvHIc7uDWXaHD6mnZh_fg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTvYhq9ca1CN1NsOMPINPRQZAwhQN21cYOw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGXv4e_1VLUgSoqNZJu7SJgu5I6QnjE2f7w&s"
  ],
  flights: [
    { airline: "Emirates", departure: "10:00 AM", arrival: "10:00 PM", price: "$900" },
    { airline: "LATAM Airlines", departure: "12:00 PM", arrival: "12:00 AM", price: "$950" }
  ],
  travelRoutes: {
    from: "New York, USA",
    stops: ["Sao Paulo, Brazil"],
    to: "Rio de Janeiro, Brazil",
    duration: "15 hours"
  },
  additionalInfo: {
    localCuisine: ["Feijoada", "Pão de Queijo", "Caipirinha Cocktail"],
    bestTimeToVisit: "December to March",
    culturalTips: "Wear sunscreen and respect local beach customs."
  }
},
{
  name: "Machu Picchu, Peru",
  category: "Historical Wonder",
  image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
  description: "Ancient Incan city set high in the Andes Mountains.",
  hotelAvailability: "Hotels and guesthouses nearby",
  stay: 4,
  cost: 1500,
  highlights: ["Inti Punku", "Temple of the Sun", "Huayna Picchu"],
  highlightImages: [
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg"
  ],
  flights: [
    { airline: "LATAM Airlines", departure: "6:00 AM", arrival: "12:00 PM", price: "$700" },
    { airline: "Avianca", departure: "8:00 AM", arrival: "2:00 PM", price: "$720" }
  ],
  travelRoutes: {
    from: "Lima, Peru",
    stops: ["Cusco, Peru"],
    to: "Machu Picchu, Peru",
    duration: "8 hours including train ride"
  },
  additionalInfo: {
    localCuisine: ["Ceviche", "Lomo Saltado", "Quinoa Soup"],
    bestTimeToVisit: "April to October",
    culturalTips: "Acclimatize in Cusco for at least a day to avoid altitude sickness."
  }
},
{
  name: "Petra, Jordan",
  category: "Historical Wonder",
  image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
  description: "Ancient city carved into rose-colored cliffs.",
  hotelAvailability: "Hotels and guesthouses nearby",
  stay: 3,
  cost: 1400,
  highlights: ["The Treasury", "Monastery", "Siq Gorge"],
  highlightImages: [
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg",
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
  ],
  flights: [
    { airline: "Royal Jordanian", departure: "7:00 AM", arrival: "12:00 PM", price: "$650" },
    { airline: "Emirates", departure: "9:00 AM", arrival: "2:00 PM", price: "$700" }
  ],
  travelRoutes: {
    from: "Amman, Jordan",
    stops: [],
    to: "Petra, Jordan",
    duration: "3 hours by car"
  },
  additionalInfo: {
    localCuisine: ["Mansaf", "Falafel", "Kanafeh"],
    bestTimeToVisit: "March to May and September to November",
    culturalTips: "Wear comfortable shoes; Petra involves lots of walking."
  }
},
{
  name: "Sydney Opera House, Australia",
  category: "Modern Wonder",
  image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
  description: "Iconic performing arts center on Sydney Harbour.",
  hotelAvailability: "Rooms Available: Yes",
  stay: 3,
  cost: 1600,
  highlights: ["Concert Hall", "Harbour Bridge", "Royal Botanic Gardens"],
  highlightImages: [
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "https://images.pexels.com/photos/164529/pexels-photo-164529.jpeg"
  ],
  flights: [
    { airline: "Qantas", departure: "8:00 AM", arrival: "10:00 PM", price: "$900" },
    { airline: "Emirates", departure: "10:00 AM", arrival: "12:00 AM", price: "$950" }
  ],
  travelRoutes: {
    from: "Los Angeles, USA",
    stops: ["Dubai, UAE"],
    to: "Sydney, Australia",
    duration: "22 hours"
  },
  additionalInfo: {
    localCuisine: ["Meat Pie", "Pavlova", "Barramundi Fish"],
    bestTimeToVisit: "September to November and March to May",
    culturalTips: "Book Opera House tours in advance."
  }
},

];

export default function DestinationsList() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  // Fetch Firebase trips
  useEffect(() => {
    const tripsRef = ref(db, "trips");
    onValue(tripsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedTrips = Object.entries(data).map(([id, trip]) => ({
          id,
          name: trip.name,
          category: "Custom Trip",
          image: trip.imageUrl || "https://via.placeholder.com/300",
          description: trip.destination,
          hotelAvailability: "Rooms Available: Yes",
          stay: trip.duration || "N/A",
          cost: trip.price || 0,
          highlights: ["Custom Trip"],
          highlightImages: trip.imageUrl ? [trip.imageUrl] : [],
          flights: [{ airline: "Custom Airline", departure: "N/A", arrival: "N/A", price: trip.price || 0 }],
          routes: [],
          localCuisine: [],
          bestTimeToVisit: "",
          culturalTips: ""
        }));
        setTrips(loadedTrips);
      }
    });
  }, []);

  const allDestinations = [...destinations, ...trips];

  const filteredDestinations = allDestinations.filter(
    place =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "20px", width: "100%" }}>
        {/* Header & Search */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
          <h2 style={{ fontSize: "28px", margin: 0 }}>Explore Destinations</h2>
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: "10px 14px",
              width: "280px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              outline: "none"
            }}
          />
        </div>

        {/* Destinations Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {filteredDestinations.map((place, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                background: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s"
              }}
              onClick={() => setSelected(place)}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={place.image}
                alt={place.name}
                style={{ width: "100%", height: "160px", borderRadius: "10px", objectFit: "cover", marginBottom: "10px" }}
              />
              <h3 style={{ margin: "0 0 10px 0" }}>{place.name}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{place.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: 1000
          }}>
            <div style={{
              background: "#fff", padding: "30px", borderRadius: "14px",
              width: "80%", maxWidth: "800px", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              position: "relative"
            }}>
              <button onClick={() => setSelected(null)} style={{
                position: "absolute", top: "15px", right: "15px", background: "transparent", border: "none", cursor: "pointer",
                fontSize: "24px", color: "#dc2626"
              }}>&times;</button>

              <h2 style={{ marginBottom: "15px", fontSize: "26px", color: "#333" }}>{selected.name}</h2>
              <p style={{ fontSize: "16px", color: "#666" }}>{selected.description}</p>
              <p><b>Hotel Availability:</b> {selected.hotelAvailability || "Rooms Available: Yes"}</p>
              <p><b>Stay Duration:</b> {selected.stay || "N/A"} days</p>
              <p><b>Estimated Cost:</b> ${selected.cost || 0}</p>

              {selected.highlights?.length > 0 && (
                <>
                  <h3 style={{ margin: "20px 0 10px", fontSize: "20px", color: "#333" }}>Famous For</h3>
                  <ul style={{ paddingLeft: "20px" }}>{selected.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
                </>
              )}

              {selected.highlightImages?.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px", margin: "15px 0" }}>
                  {selected.highlightImages.map((img, i) => (
                    <img key={i} src={img} alt="highlight" style={{ width: "100%", height: "110px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }} />
                  ))}
                </div>
              )}

              {selected.flights?.length > 0 && (
                <>
                  <h3 style={{ margin: "20px 0 10px", fontSize: "20px", color: "#333" }}>Available Flights</h3>
                  <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "15px" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Airline</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Departure</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Arrival</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selected.flights.map((f, i) => (
                        <tr key={i}>
                          <td style={{ padding: "8px" }}>{f.airline}</td>
                          <td style={{ padding: "8px" }}>{f.departure}</td>
                          <td style={{ padding: "8px" }}>{f.arrival}</td>
                          <td style={{ padding: "8px" }}>${f.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {selected.routes?.length > 0 && (
                <>
                  <h3 style={{ margin: "20px 0 10px", fontSize: "20px", color: "#333" }}>Travel Routes</h3>
                  {selected.routes.map((route, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                      <p><b>From:</b> {route.start}</p>
                      <p><b>Stops:</b> {route.stops.join(", ")}</p>
                      <p><b>To:</b> {route.end}</p>
                      <p><b>Duration:</b> {route.duration}</p>
                    </div>
                  ))}
                </>
              )}

              <h3 style={{ margin: "20px 0 10px", fontSize: "20px", color: "#333" }}>Additional Information</h3>
              <p><b>Local Cuisine:</b> {selected.localCuisine?.join(", ") || "N/A"}</p>
              <p><b>Best Time to Visit:</b> {selected.bestTimeToVisit || "N/A"}</p>
              <p><b>Cultural Tips:</b> {selected.culturalTips || "N/A"}</p>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "20px" }}>
                <button onClick={() => navigate("/book", { state: { place: selected } })} style={{ padding: "10px 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "700" }}>Reserve Stay</button>
                <button onClick={() => navigate("/bookingticket", { state: { place: selected } })} style={{ padding: "10px 16px", background: "#16a34a", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "700" }}>Reserve Flight</button>
                <button onClick={() => setSelected(null)} style={{ padding: "10px 16px", background: "#dc2626", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "700" }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}









