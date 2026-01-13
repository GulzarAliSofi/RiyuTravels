const packages = [
  {
    id: "kb-1",
    title: "Srinagar Getaway — 2 Days",
    summary: "Shikara ride, Mughal gardens and a houseboat stay in Srinagar.",
    price: 4999,
    image: "/assets/images/houseboat.svg",
    alt: "Houseboat on Dal Lake",
    days: 2,
    details:
      "A relaxing 2-day escape designed for those short on time — stay on an authentic houseboat, glide across Dal Lake on a shikara at sunrise or sunset, and visit the famed Mughal gardens. Enjoy leisurely market strolls, local Wazwan flavours and a gentle introduction to Kashmiri culture and hospitality.",
    includes: ["Srinagar", "Dal Lake", "Mughal Gardens"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Shikara",
        activities:
          "Arrive Srinagar, check-in to houseboat, evening Shikara ride on Dal Lake and explore floating markets.",
      },
      {
        day: 2,
        title: "Mughal Gardens & Departure",
        activities:
          "Visit Shalimar and Nishat gardens, short city tour, transfer to onward journey.",
      },
    ],
    inclusions: [
      "Accommodation (houseboat / hotel as specified)",
      "Daily breakfast",
      "Airport pick-up and drop (Srinagar)",
      "Shikara ride on Dal Lake",
      "Local English-speaking guide for city tours",
      "All applicable taxes and permits",
    ],
    exclusions: [
      "International / domestic flights",
      "Lunches and dinners unless mentioned",
      "Personal expenses and tips",
      "Travel insurance",
      "Any optional activities",
    ],
    accommodation: "Houseboat / hotel (twin-share)",
    transport: "Private car with driver",
    difficulty: "Easy",
  },
  {
    id: "kb-2",
    title: "Gulmarg Adventure — 3 Days",
    summary: "Gondola, meadow walks and winter sports (seasonal).",
    price: 8999,
    image: "/assets/images/gulmarg-pkg.svg",
    alt: "Gondola ride in Gulmarg",
    days: 3,
    details:
      "A short adventure in the mountains — experience the famous Gulmarg gondola, explore alpine meadows and try seasonal winter sports or easy hikes. Perfect for both thrill-seekers and those looking for fresh mountain air, with transfers and local guidance included for a hassle-free trip.",
    includes: ["Gulmarg", "Gondola", "Meadows"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Gondola",
        activities:
          "Transfer to Gulmarg, easy meadow walk, gondola ride (subject to weather).",
      },
      {
        day: 2,
        title: "Skiing / Sightseeing",
        activities:
          "Full day for skiing (winter) or local exploration and meadow walks; optional activities available.",
      },
      {
        day: 3,
        title: "Return",
        activities:
          "Morning at leisure and transfer back to Srinagar for onward travel.",
      },
    ],
    inclusions: [
      "Accommodation (hotel)",
      "Daily breakfast",
      "Transfers as per itinerary",
      "One-way Gondola ticket (subject to conditions)",
      "Local guide for transfers and activities",
    ],
    exclusions: [
      "Ski equipment / lessons (unless booked)",
      "Lunches and dinners",
      "Flights to/from Srinagar",
      "Personal expenses and insurance",
    ],
    accommodation: "Hotel (standard category)",
    transport: "Private car or shared transfer",
    difficulty: "Moderate (depends on activities)",
  },

  {
    id: "kb-3",
    title: "Kashmir Valley Explorer — 5 Days",
    summary:
      "Srinagar, Gulmarg, Pahalgam — guided transfers and local experiences.",
    price: 17999,
    image: "/assets/images/valley.svg",
    alt: "Valley panorama in Kashmir",
    days: 5,
    details:
      "A thoughtfully paced 5-day circuit of the Kashmir Valley combining scenic drives, comfortable stays and guided experiences — from houseboats in Srinagar to the meadows of Gulmarg and the pastoral charm of Pahalgam. Ideal for first-time visitors who want to see the region’s signature landscapes and authentic local life without rushing.",
    includes: ["Srinagar", "Gulmarg", "Pahalgam"],
    itinerary: [
      {
        day: 1,
        title: "Arrival Srinagar",
        activities:
          "Check into houseboat, evening Shikara ride and relaxed walk around the waterfront.",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        activities:
          "Drive to Gulmarg; explore meadows and optional gondola ride.",
      },
      {
        day: 3,
        title: "Gulmarg Activities",
        activities: "Skiing or meadow walks; return to Srinagar in evening.",
      },
      {
        day: 4,
        title: "Pahalgam",
        activities:
          "Drive to Pahalgam, riverside walk and short treks; overnight stay in Pahalgam.",
      },
      {
        day: 5,
        title: "Return & Departure",
        activities:
          "Return to Srinagar with en-route stops and departure transfer.",
      },
    ],
    inclusions: [
      "Accommodation (Hotels and houseboat as specified)",
      "Daily breakfast",
      "All transfers as per itinerary",
      "Experienced local guide",
      "Entrance fees listed in the itinerary",
    ],
    exclusions: [
      "Flights to/from Srinagar",
      "Meals not specified",
      "Personal expenses & tips",
      "Adventure activity fees (if any)",
    ],
    accommodation: "Hotels & houseboat (comfortable stays)",
    transport: "Private vehicles",
    difficulty: "Easy to Moderate",
  },

  {
    id: "ld-1",
    title: "Leh Ladakh Explorer — 6 Days",
    summary:
      "Leh, Nubra Valley, Pangong with acclimatized drives and local guides.",
    price: 39999,
    image: "/assets/images/leh-pkg.svg",
    alt: "Leh panorama",
    days: 6,
    details:
      "An acclimatized Leh-Ladakh journey designed to balance spectacular high-altitude scenery with safe, gradual travel — visit monasteries, cross iconic high passes like Khardung La, and explore Nubra Valley and Pangong Tso. The itinerary includes expert local guidance, permit support and comfortable lodging to help you enjoy the region responsibly.",
    includes: ["Leh", "Nubra", "Pangong"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Leh",
        activities:
          "Arrive Leh, rest and short walks in Leh market; acclimatize.",
      },
      {
        day: 2,
        title: "Leh Local & Transfer to Nubra",
        activities:
          "Morning monastery visits; drive over Khardung La to Nubra Valley; overnight in Nubra.",
      },
      {
        day: 3,
        title: "Explore Nubra",
        activities:
          "Visit Diskit monastery, sand dunes and local villages; optional camel ride.",
      },
      {
        day: 4,
        title: "Nubra to Pangong",
        activities:
          "Drive to Pangong Tso with scenic stops and evening at the lake.",
      },
      {
        day: 5,
        title: "Pangong to Leh",
        activities:
          "Morning at Pangong, then return to Leh via picturesque routes.",
      },
      {
        day: 6,
        title: "Departure",
        activities: "Transfer to airport for onward travel.",
      },
    ],
    inclusions: [
      "Accommodation (3-star or similar)",
      "Breakfasts and some dinners as indicated",
      "All ground transfers by SUV",
      "Experienced driver-guide",
      "Inner-line permits (where required)",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Lunches and personal meals unless specified",
      "Travel insurance and medical expenses",
      "Anything not mentioned in inclusions",
    ],
    accommodation: "3-star hotels / guesthouses",
    transport: "SUV / Innova with driver",
    difficulty: "Moderate (altitude acclimatization required)",
  },
  {
    id: "ld-2",
    title: "Pangong & Nubra — 4 Days",
    summary: "Short immersive trip to Pangong Tso and Nubra Valley.",
    price: 24999,
    image: "/assets/images/pangong-pkg.svg",
    alt: "Pangong lake at sunset",
    days: 4,
    details:
      "A concentrated 4-day trip to two of Ladakh’s most iconic landscapes — from the colourful shores of Pangong Tso to the dramatic sand dunes of Nubra Valley. Includes scenic drives, lakeside stays and local guides; perfect for travellers wanting a compact yet immersive Ladakh experience.",
    includes: ["Pangong", "Nubra"],
    itinerary: [
      {
        day: 1,
        title: "Leh to Nubra",
        activities:
          "Drive to Nubra via Khardung La, explore Diskit and local dunes.",
      },
      {
        day: 2,
        title: "Nubra Exploration",
        activities:
          "Village visits, sand dunes and cultural interactions in Nubra.",
      },
      {
        day: 3,
        title: "Nubra to Pangong",
        activities:
          "Drive to Pangong Tso with scenic stops and overnight at lakeside camp.",
      },
      {
        day: 4,
        title: "Return to Leh",
        activities: "Return to Leh and depart or continue onwards.",
      },
    ],
    inclusions: [
      "Accommodation (as specified)",
      "Breakfasts and select dinners",
      "All ground transfers and driver",
      "Guided local visits",
    ],
    exclusions: [
      "Flights and airport taxes",
      "Meals not specified",
      "Personal expenses and insurance",
    ],
    accommodation: "Comfortable camps / hotels depending on location",
    transport: "Private SUV",
    difficulty: "Moderate",
  },
  {
    id: "jm-1",
    title: "Jammu Pilgrimage — 3 Days",
    summary: "Katra base for Vaishno Devi darshan and local temples.",
    price: 7999,
    image: "/assets/images/jammu-pkg.svg",
    alt: "Vaishno Devi trail",
    days: 3,
    details:
      "A pilgrimage-focused package offering comfortable transfers, assistance for darshan planning and flexible options (trek/pony) for Vaishno Devi. Designed for pilgrims who prefer structured support and simple lodging while focusing on devotion and efficient logistics.",
    includes: ["Katra", "Vaishno Devi"],
    itinerary: [
      {
        day: 1,
        title: "Arrival to Katra",
        activities:
          "Arrive Katra and prepare for the pilgrimage; overnight stay in Katra.",
      },
      {
        day: 2,
        title: "Vaishno Devi Darshan",
        activities:
          "Early morning trek / pony option to Vaishno Devi shrine and return to Katra.",
      },
      {
        day: 3,
        title: "Local Jammu & Departure",
        activities:
          "Short Jammu city visit or departure to onward destination.",
      },
    ],
    inclusions: [
      "Shared transfers between Jammu and Katra",
      "Accommodation in Katra",
      "Local support for darshan planning",
      "Pick-up and drop from Jammu (if arranged)",
    ],
    exclusions: [
      "Pony / palki charges and optional services",
      "Temple donation and personal expenses",
      "Lunch / dinner unless specified",
      "Travel insurance",
    ],
    accommodation: "Simple hotels / lodges in Katra",
    transport: "Shared / private transfers",
    difficulty: "Easy (pilgrimage walk)",
  },
  {
    id: "jm-2",
    title: "Patnitop Escape — 2 Days",
    summary: "Short hill station retreat near Jammu with scenic walks.",
    price: 4999,
    image: "/assets/images/patnitop.svg",
    alt: "Patnitop meadows",
    days: 2,
    details:
      "A short hill-station retreat ideal for family getaways and couples — enjoy easy meadow walks, scenic viewpoints and relaxed evenings at cozy hillside hotels. A quick, refreshing break from city life with straightforward logistics and local walking trails.",
    includes: ["Patnitop"],
    itinerary: [
      {
        day: 1,
        title: "Drive to Patnitop",
        activities:
          "Drive from Jammu, check-in and evening at leisure among the meadows.",
      },
      {
        day: 2,
        title: "Local walks & Return",
        activities:
          "Morning walks, local viewpoint visits and return to Jammu.",
      },
    ],
    inclusions: [
      "Accommodation in Patnitop",
      "Breakfast",
      "Local transfers",
      "Guided walks and sightseeing",
    ],
    exclusions: [
      "Meals other than breakfast",
      "Travel insurance",
      "Anything not specified in inclusions",
    ],
    accommodation: "Hillside hotels / cottages",
    transport: "Private car / shared vehicle",
    difficulty: "Easy",
  },
];

export default packages;
