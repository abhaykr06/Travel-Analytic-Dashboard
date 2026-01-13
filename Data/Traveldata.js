// const travelData = {
//   IN: {
//     dailyCost: "₹4,500/day",
//     visa: "eVisa, Visa-free for Citizens",
//     bestTime: "October – March, pleasant",
//     food: ["Biryani", "Butter Chicken"],
//     hotelCost: "₹2,500/night (3–5 star)"
//   },
//   US: {
//     dailyCost: "$150/day",
//     visa: "B1/B2 Tourist Visa",
//     bestTime: "April – June, warm",
//     food: ["Burger", "BBQ"],
//     hotelCost: "$120/night (3–5 star)"
//   },
//   UK: {
//     dailyCost: "£110/day",
//     visa: "Schengen Visa (UK separate)",
//     bestTime: "May – September, mild",
//     food: ["Fish & Chips", "Shepherd’s Pie"],
//     hotelCost: "£90/night (3–5 star)"
//   },
//   CA: {
//     dailyCost: "C$140/day",
//     visa: "Visitor Visa, eTA",
//     bestTime: "June – September, cool",
//     food: ["Poutine", "Maple Syrup"],
//     hotelCost: "C$100/night (3–5 star)"
//   },
//   AU: {
//     dailyCost: "A$140/day",
//     visa: "Visitor Visa (Subclass 600)",
//     bestTime: "September – November, sunny",
//     food: ["Meat Pie", "Lamington"],
//     hotelCost: "A$110/night (3–5 star)"
//   },
//   japan: {
//     dailyCost: "¥12,000/day",
//     visa: "Visa-free (short stay), Tourist Visa",
//     bestTime: "March – May, cherry blossom",
//     food: ["Sushi", "Ramen"],
//     hotelCost: "¥10,000/night (3–5 star)"
//   },
//   china: {
//     dailyCost: "¥700/day",
//     visa: "Tourist Visa (L)",
//     bestTime: "April – October, clear",
//     food: ["Dumplings", "Peking Duck"],
//     hotelCost: "¥500/night (3–5 star)"
//   },
//   france: {
//     dailyCost: "€120/day",
//     visa: "Schengen Visa",
//     bestTime: "April – June, mild",
//     food: ["Croissant", "Escargot"],
//     hotelCost: "€90/night (3–5 star)"
//   },
//   germany: {
//     dailyCost: "€110/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, pleasant",
//     food: ["Bratwurst", "Pretzel"],
//     hotelCost: "€85/night (3–5 star)"
//   },
//   italy: {
//     dailyCost: "€115/day",
//     visa: "Schengen Visa",
//     bestTime: "April – June, sunny",
//     food: ["Pizza", "Pasta"],
//     hotelCost: "€95/night (3–5 star)"
//   },
//   spain: {
//     dailyCost: "€100/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, festive",
//     food: ["Paella", "Tapas"],
//     hotelCost: "€80/night (3–5 star)"
//   },
//   brazil: {
//     dailyCost: "R$250/day",
//     visa: "Visa-free (many countries)",
//     bestTime: "December – March, carnival",
//     food: ["Feijoada", "Churrasco"],
//     hotelCost: "R$200/night (3–5 star)"
//   },
//   mexico: {
//     dailyCost: "$70/day",
//     visa: "Tourist Card (FMM)",
//     bestTime: "November – April, dry",
//     food: ["Tacos", "Enchiladas"],
//     hotelCost: "$70/night (3–5 star)"
//   },
//   argentina: {
//     dailyCost: "ARS 8,000/day",
//     visa: "Visa-free (many countries)",
//     bestTime: "March – May, cool",
//     food: ["Steak", "Empanadas"],
//     hotelCost: "ARS 5,000/night (3–5 star)"
//   },
//   russia: {
//     dailyCost: "₽6,000/day",
//     visa: "Tourist Visa",
//     bestTime: "May – September, mild",
//     food: ["Borscht", "Pelmeni"],
//     hotelCost: "₽4,000/night (3–5 star)"
//   },
//   south_africa: {
//     dailyCost: "R1,200/day",
//     visa: "Visitor Visa",
//     bestTime: "May – September, safari",
//     food: ["Braai", "Bunny Chow"],
//     hotelCost: "R1,000/night (3–5 star)"
//   },
//   egypt: {
//     dailyCost: "£E900/day",
//     visa: "eVisa, On-arrival",
//     bestTime: "October – April, cool",
//     food: ["Koshari", "Falafel"],
//     hotelCost: "£E700/night (3–5 star)"
//   },
//   thailand: {
//     dailyCost: "฿2,000/day",
//     visa: "Visa-free, On-arrival",
//     bestTime: "November – February, dry",
//     food: ["Pad Thai", "Green Curry"],
//     hotelCost: "฿1,500/night (3–5 star)"
//   },
//   singapore: {
//     dailyCost: "S$180/day",
//     visa: "Visa-free (many countries)",
//     bestTime: "February – April, clear",
//     food: ["Laksa", "Chicken Rice"],
//     hotelCost: "S$120/night (3–5 star)"
//   },
//   malaysia: {
//     dailyCost: "RM250/day",
//     visa: "Visa-free (many countries)",
//     bestTime: "March – October, dry",
//     food: ["Nasi Lemak", "Satay"],
//     hotelCost: "RM180/night (3–5 star)"
//   },
//   indonesia: {
//     dailyCost: "Rp1,000,000/day",
//     visa: "Visa-free, On-arrival",
//     bestTime: "May – September, sunny",
//     food: ["Nasi Goreng", "Satay"],
//     hotelCost: "Rp700,000/night (3–5 star)"
//   },
//   vietnam: {
//     dailyCost: "₫1,000,000/day",
//     visa: "eVisa, Visa-free",
//     bestTime: "November – April, cool",
//     food: ["Pho", "Banh Mi"],
//     hotelCost: "₫700,000/night (3–5 star)"
//   },
//   philippines: {
//     dailyCost: "₱2,500/day",
//     visa: "Visa-free, On-arrival",
//     bestTime: "December – May, dry",
//     food: ["Adobo", "Lechon"],
//     hotelCost: "₱2,000/night (3–5 star)"
//   },
//   nepal: {
//     dailyCost: "₨3,500/day",
//     visa: "Visa-on-arrival",
//     bestTime: "October – November, trekking",
//     food: ["Momo", "Dal Bhat"],
//     hotelCost: "₨3,000/night (3–5 star)"
//   },
//   sri_lanka: {
//     dailyCost: "Rs4,500/day",
//     visa: "eVisa (ETA)",
//     bestTime: "December – March, sunny",
//     food: ["Rice & Curry", "Hoppers"],
//     hotelCost: "Rs4,000/night (3–5 star)"
//   },
//   pakistan: {
//     dailyCost: "₨3,500/day",
//     visa: "eVisa",
//     bestTime: "October – March, cool",
//     food: ["Biryani", "Chapli Kebab"],
//     hotelCost: "₨3,000/night (3–5 star)"
//   },
//   bangladesh: {
//     dailyCost: "৳3,500/day",
//     visa: "Visa-on-arrival",
//     bestTime: "November – February, mild",
//     food: ["Hilsa Fish", "Biriyani"],
//     hotelCost: "৳3,000/night (3–5 star)"
//   },
//   turkey: {
//     dailyCost: "₺900/day",
//     visa: "eVisa, Schengen alternative",
//     bestTime: "April – June, pleasant",
//     food: ["Kebab", "Baklava"],
//     hotelCost: "₺700/night (3–5 star)"
//   },
//   greece: {
//     dailyCost: "€100/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, sunny",
//     food: ["Moussaka", "Souvlaki"],
//     hotelCost: "€85/night (3–5 star)"
//   },
//     switzerland: {
//     dailyCost: "CHF 160/day",
//     visa: "Schengen Visa",
//     bestTime: "June – September, alpine",
//     food: ["Fondue", "Rösti"],
//     hotelCost: "CHF 140/night (3–5 star)"
//   },
//   netherlands: {
//     dailyCost: "€110/day",
//     visa: "Schengen Visa",
//     bestTime: "April – May, tulips",
//     food: ["Stroopwafel", "Herring"],
//     hotelCost: "€95/night (3–5 star)"
//   },
//   belgium: {
//     dailyCost: "€105/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, mild",
//     food: ["Waffles", "Moules-frites"],
//     hotelCost: "€90/night (3–5 star)"
//   },
//   austria: {
//     dailyCost: "€115/day",
//     visa: "Schengen Visa",
//     bestTime: "June – August, scenic",
//     food: ["Schnitzel", "Sachertorte"],
//     hotelCost: "€95/night (3–5 star)"
//   },
//   sweden: {
//     dailyCost: "SEK 1,200/day",
//     visa: "Schengen Visa",
//     bestTime: "June – August, bright",
//     food: ["Meatballs", "Gravlax"],
//     hotelCost: "SEK 1,000/night (3–5 star)"
//   },
//   norway: {
//     dailyCost: "NOK 1,300/day",
//     visa: "Schengen Visa",
//     bestTime: "June – August, fjords",
//     food: ["Salmon", "Kjøttkaker"],
//     hotelCost: "NOK 1,100/night (3–5 star)"
//   },
//   finland: {
//     dailyCost: "€120/day",
//     visa: "Schengen Visa",
//     bestTime: "June – August, lakes",
//     food: ["Karjalanpiirakka", "Salmon Soup"],
//     hotelCost: "€100/night (3–5 star)"
//   },
//   denmark: {
//     dailyCost: "DKK 900/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, cozy",
//     food: ["Smørrebrød", "Frikadeller"],
//     hotelCost: "DKK 800/night (3–5 star)"
//   },
//   poland: {
//     dailyCost: "€80/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, warm",
//     food: ["Pierogi", "Bigos"],
//     hotelCost: "€70/night (3–5 star)"
//   },
//   czech_republic: {
//     dailyCost: "€85/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, lively",
//     food: ["Goulash", "Trdelník"],
//     hotelCost: "€75/night (3–5 star)"
//   },
//   hungary: {
//     dailyCost: "€80/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, festive",
//     food: ["Goulash", "Langos"],
//     hotelCost: "€70/night (3–5 star)"
//   },
//   portugal: {
//     dailyCost: "€95/day",
//     visa: "Schengen Visa",
//     bestTime: "May – September, sunny",
//     food: ["Bacalhau", "Pastel de Nata"],
//     hotelCost: "€80/night (3–5 star)"
//   },
//   ireland: {
//     dailyCost: "€110/day",
//     visa: "Schengen Visa (ETIAS soon)",
//     bestTime: "May – September, green",
//     food: ["Irish Stew", "Soda Bread"],
//     hotelCost: "€90/night (3–5 star)"
//   },
//   iceland: {
//     dailyCost: "ISK 20,000/day",
//     visa: "Schengen Visa",
//     bestTime: "June – August, bright",
//     food: ["Lamb", "Skyr"],
//     hotelCost: "ISK 18,000/night (3–5 star)"
//   },
//   new_zealand: {
//     dailyCost: "NZ$150/day",
//     visa: "Visitor Visa, eTA",
//     bestTime: "December – March, warm",
//     food: ["Pavlova", "Lamb Roast"],
//     hotelCost: "NZ$120/night (3–5 star)"
//   },
//   uae: {
//     dailyCost: "AED 600/day",
//     visa: "Tourist Visa, On-arrival",
//     bestTime: "November – March, cool",
//     food: ["Shawarma", "Machboos"],
//     hotelCost: "AED 500/night (3–5 star)"
//   },
//   qatar: {
//     dailyCost: "QAR 550/day",
//     visa: "Visa-free, eVisa",
//     bestTime: "November – March, mild",
//     food: ["Harees", "Machboos"],
//     hotelCost: "QAR 450/night (3–5 star)"
//   },
//   saudi_arabia: {
//     dailyCost: "SAR 500/day",
//     visa: "Tourist eVisa",
//     bestTime: "November – March, cool",
//     food: ["Kabsa", "Shawarma"],
//     hotelCost: "SAR 400/night (3–5 star)"
//   },
//   israel: {
//     dailyCost: "$130/day",
//     visa: "Tourist Visa, Visa-free",
//     bestTime: "March – May, pleasant",
//     food: ["Falafel", "Shakshuka"],
//     hotelCost: "$110/night (3–5 star)"
//   },
//   morocco: {
//     dailyCost: "MAD 900/day",
//     visa: "Visa-free (many countries)",
//     bestTime: "March – May, mild",
//     food: ["Tagine", "Couscous"],
//     hotelCost: "MAD 700/night (3–5 star)"
//   }
// }

// export default travelData;

const travelData = {
  IN: {
    dailyCost: "₹4,500/day",
    visa: "eVisa, Visa-free for Citizens",
    bestTime: "October – March, pleasant",
    food: ["Biryani", "Butter Chicken"],
    hotelCost: "₹2,500/night (3–5 star)"
  },
  US: {
    dailyCost: "$150/day",
    visa: "B1/B2 Tourist Visa",
    bestTime: "April – June, warm",
    food: ["Burger", "BBQ"],
    hotelCost: "$120/night (3–5 star)"
  },
  GB: {
    dailyCost: "£110/day",
    visa: "Schengen Visa (UK separate)",
    bestTime: "May – September, mild",
    food: ["Fish & Chips", "Shepherd’s Pie"],
    hotelCost: "£90/night (3–5 star)"
  },
  CA: {
    dailyCost: "C$140/day",
    visa: "Visitor Visa, eTA",
    bestTime: "June – September, cool",
    food: ["Poutine", "Maple Syrup"],
    hotelCost: "C$100/night (3–5 star)"
  },
  AU: {
    dailyCost: "A$140/day",
    visa: "Visitor Visa (Subclass 600)",
    bestTime: "September – November, sunny",
    food: ["Meat Pie", "Lamington"],
    hotelCost: "A$110/night (3–5 star)"
  },
  JP: {
    dailyCost: "¥12,000/day",
    visa: "Visa-free (short stay), Tourist Visa",
    bestTime: "March – May, cherry blossom",
    food: ["Sushi", "Ramen"],
    hotelCost: "¥10,000/night (3–5 star)"
  },
  CN: {
    dailyCost: "¥700/day",
    visa: "Tourist Visa (L)",
    bestTime: "April – October, clear",
    food: ["Dumplings", "Peking Duck"],
    hotelCost: "¥500/night (3–5 star)"
  },
  FR: {
    dailyCost: "€120/day",
    visa: "Schengen Visa",
    bestTime: "April – June, mild",
    food: ["Croissant", "Escargot"],
    hotelCost: "€90/night (3–5 star)"
  },
  DE: {
    dailyCost: "€110/day",
    visa: "Schengen Visa",
    bestTime: "May – September, pleasant",
    food: ["Bratwurst", "Pretzel"],
    hotelCost: "€85/night (3–5 star)"
  },
  IT: {
    dailyCost: "€115/day",
    visa: "Schengen Visa",
    bestTime: "April – June, sunny",
    food: ["Pizza", "Pasta"],
    hotelCost: "€95/night (3–5 star)"
  },
  ES: {
    dailyCost: "€100/day",
    visa: "Schengen Visa",
    bestTime: "May – September, festive",
    food: ["Paella", "Tapas"],
    hotelCost: "€80/night (3–5 star)"
  },
  BR: {
    dailyCost: "R$250/day",
    visa: "Visa-free (many countries)",
    bestTime: "December – March, carnival",
    food: ["Feijoada", "Churrasco"],
    hotelCost: "R$200/night (3–5 star)"
  },
  MX: {
    dailyCost: "$70/day",
    visa: "Tourist Card (FMM)",
    bestTime: "November – April, dry",
    food: ["Tacos", "Enchiladas"],
    hotelCost: "$70/night (3–5 star)"
  },
  AR: {
    dailyCost: "ARS 8,000/day",
    visa: "Visa-free (many countries)",
    bestTime: "March – May, cool",
    food: ["Steak", "Empanadas"],
    hotelCost: "ARS 5,000/night (3–5 star)"
  },
  RU: {
    dailyCost: "₽6,000/day",
    visa: "Tourist Visa",
    bestTime: "May – September, mild",
    food: ["Borscht", "Pelmeni"],
    hotelCost: "₽4,000/night (3–5 star)"
  },
  ZA: {
    dailyCost: "R1,200/day",
    visa: "Visitor Visa",
    bestTime: "May – September, safari",
    food: ["Braai", "Bunny Chow"],
    hotelCost: "R1,000/night (3–5 star)"
  },
  EG: {
    dailyCost: "£E900/day",
    visa: "eVisa, On-arrival",
    bestTime: "October – April, cool",
    food: ["Koshari", "Falafel"],
    hotelCost: "£E700/night (3–5 star)"
  },
  TH: {
    dailyCost: "฿2,000/day",
    visa: "Visa-free, On-arrival",
    bestTime: "November – February, dry",
    food: ["Pad Thai", "Green Curry"],
    hotelCost: "฿1,500/night (3–5 star)"
  },
  SG: {
    dailyCost: "S$180/day",
    visa: "Visa-free (many countries)",
    bestTime: "February – April, clear",
    food: ["Laksa", "Chicken Rice"],
    hotelCost: "S$120/night (3–5 star)"
  },
  MY: {
    dailyCost: "RM250/day",
    visa: "Visa-free (many countries)",
    bestTime: "March – October, dry",
    food: ["Nasi Lemak", "Satay"],
    hotelCost: "RM180/night (3–5 star)"
  },
  ID: {
    dailyCost: "Rp1,000,000/day",
    visa: "Visa-free, On-arrival",
    bestTime: "May – September, sunny",
    food: ["Nasi Goreng", "Satay"],
    hotelCost: "Rp700,000/night (3–5 star)"
  },
  VN: {
    dailyCost: "₫1,000,000/day",
    visa: "eVisa, Visa-free",
    bestTime: "November – April, cool",
    food: ["Pho", "Banh Mi"],
    hotelCost: "₫700,000/night (3–5 star)"
  },
  PH: {
    dailyCost: "₱2,500/day",
    visa: "Visa-free, On-arrival",
    bestTime: "December – May, dry",
    food: ["Adobo", "Lechon"],
    hotelCost: "₱2,000/night (3–5 star)"
  },
  NP: {
    dailyCost: "₨3,500/day",
    visa: "Visa-on-arrival",
    bestTime: "October – November, trekking",
    food: ["Momo", "Dal Bhat"],
    hotelCost: "₨3,000/night (3–5 star)"
  },
  LK: {
    dailyCost: "Rs4,500/day",
    visa: "eVisa (ETA)",
    bestTime: "December – March, sunny",
    food: ["Rice & Curry", "Hoppers"],
    hotelCost: "Rs4,000/night (3–5 star)"
  },
  PK: {
    dailyCost: "₨3,500/day",
    visa: "eVisa",
    bestTime: "October – March, cool",
    food: ["Biryani", "Chapli Kebab"],
    hotelCost: "₨3,000/night (3–5 star)"
  },
  BD: {
    dailyCost: "৳3,500/day",
    visa: "Visa-on-arrival",
    bestTime: "November – February, mild",
    food: ["Hilsa Fish", "Biriyani"],
    hotelCost: "৳3,000/night (3–5 star)"
  },
  TR: {
    dailyCost: "₺900/day",
    visa: "eVisa, Schengen alternative",
    bestTime: "April – June, pleasant",
    food: ["Kebab", "Baklava"],
    hotelCost: "₺700/night (3–5 star)"
  },
  GR: {
    dailyCost: "€100/day",
    visa: "Schengen Visa",
    bestTime: "May – September, sunny",
    food: ["Moussaka", "Souvlaki"],
    hotelCost: "€85/night (3–5 star)"
  },
  CH: {
    dailyCost: "CHF 160/day",
    visa: "Schengen Visa",
    bestTime: "June – September, alpine",
    food: ["Fondue", "Rösti"],
    hotelCost: "CHF 140/night (3–5 star)"
  },
    NL: {
    dailyCost: "€110/day",
    visa: "Schengen Visa",
    bestTime: "April – May, tulips",
    food: ["Stroopwafel", "Herring"],
    hotelCost: "€95/night (3–5 star)"
  },
  BE: {
    dailyCost: "€105/day",
    visa: "Schengen Visa",
    bestTime: "May – September, mild",
    food: ["Waffles", "Moules-frites"],
    hotelCost: "€90/night (3–5 star)"
  },
  AT: {
    dailyCost: "€115/day",
    visa: "Schengen Visa",
    bestTime: "June – August, scenic",
    food: ["Schnitzel", "Sachertorte"],
    hotelCost: "€95/night (3–5 star)"
  },
  SE: {
    dailyCost: "SEK 1,200/day",
    visa: "Schengen Visa",
    bestTime: "June – August, bright",
    food: ["Meatballs", "Gravlax"],
    hotelCost: "SEK 1,000/night (3–5 star)"
  },
  NO: {
    dailyCost: "NOK 1,300/day",
    visa: "Schengen Visa",
    bestTime: "June – August, fjords",
    food: ["Salmon", "Kjøttkaker"],
    hotelCost: "NOK 1,100/night (3–5 star)"
  },
  FI: {
    dailyCost: "€120/day",
    visa: "Schengen Visa",
    bestTime: "June – August, lakes",
    food: ["Karjalanpiirakka", "Salmon Soup"],
    hotelCost: "€100/night (3–5 star)"
  },
  DK: {
    dailyCost: "DKK 900/day",
    visa: "Schengen Visa",
    bestTime: "May – September, cozy",
    food: ["Smørrebrød", "Frikadeller"],
    hotelCost: "DKK 800/night (3–5 star)"
  },
  PL: {
    dailyCost: "€80/day",
    visa: "Schengen Visa",
    bestTime: "May – September, warm",
    food: ["Pierogi", "Bigos"],
    hotelCost: "€70/night (3–5 star)"
  },
  CZ: {
    dailyCost: "€85/day",
    visa: "Schengen Visa",
    bestTime: "May – September, lively",
    food: ["Goulash", "Trdelník"],
    hotelCost: "€75/night (3–5 star)"
  },
  HU: {
    dailyCost: "€80/day",
    visa: "Schengen Visa",
    bestTime: "May – September, festive",
    food: ["Goulash", "Langos"],
    hotelCost: "€70/night (3–5 star)"
  },
  PT: {
    dailyCost: "€95/day",
    visa: "Schengen Visa",
    bestTime: "May – September, sunny",
    food: ["Bacalhau", "Pastel de Nata"],
    hotelCost: "€80/night (3–5 star)"
  },
  IE: {
    dailyCost: "€110/day",
    visa: "Schengen Visa (ETIAS soon)",
    bestTime: "May – September, green",
    food: ["Irish Stew", "Soda Bread"],
    hotelCost: "€90/night (3–5 star)"
  },
  IS: {
    dailyCost: "ISK 20,000/day",
    visa: "Schengen Visa",
    bestTime: "June – August, bright",
    food: ["Lamb", "Skyr"],
    hotelCost: "ISK 18,000/night (3–5 star)"
  },
  NZ: {
    dailyCost: "NZ$150/day",
    visa: "Visitor Visa, eTA",
    bestTime: "December – March, warm",
    food: ["Pavlova", "Lamb Roast"],
    hotelCost: "NZ$120/night (3–5 star)"
  },
  AE: {
    dailyCost: "AED 600/day",
    visa: "Tourist Visa, On-arrival",
    bestTime: "November – March, cool",
    food: ["Shawarma", "Machboos"],
    hotelCost: "AED 500/night (3–5 star)"
  },
  QA: {
    dailyCost: "QAR 550/day",
    visa: "Visa-free, eVisa",
    bestTime: "November – March, mild",
    food: ["Harees", "Machboos"],
    hotelCost: "QAR 450/night (3–5 star)"
  },
  SA: {
    dailyCost: "SAR 500/day",
    visa: "Tourist eVisa",
    bestTime: "November – March, cool",
    food: ["Kabsa", "Shawarma"],
    hotelCost: "SAR 400/night (3–5 star)"
  },
  IL: {
    dailyCost: "$130/day",
    visa: "Tourist Visa, Visa-free",
    bestTime: "March – May, pleasant",
    food: ["Falafel", "Shakshuka"],
    hotelCost: "$110/night (3–5 star)"
  },
  MA: {
    dailyCost: "MAD 900/day",
    visa: "Visa-free (many countries)",
    bestTime: "March – May, mild",
    food: ["Tagine", "Couscous"],
    hotelCost: "MAD 700/night (3–5 star)"
  }
}
export default travelData;
