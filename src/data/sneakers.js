import { useState, useEffect } from "react";

const sneakersData = [
  {
    id: 1,
    name: 'Jordan 1 Retro High OG SP "Travis Scott Mocha"',
    image: "/images/aj1HiTravisMocha.jpg",
    description:
      "The Air Jordan 1 Travis Scott, released in May 2019 for $175, is the first collaboration between Travis Scott and Nike, featuring a unique design that deviates from traditional Air Jordan 1 elements. Key design features include reversed side Swooshes with tails facing the toe, side-stitched woven tongue tags, and a hidden stash pocket in the collar. The sneaker has a white leather upper with Mocha suede overlays and black reversed Swooshes, accented by red on the tongue. A debossed Cactus Jack logo on the heel, along with a yellowed midsole and Mocha outsole, complete the look.",
    price: "$1284",
  },
  {
    id: 2,
    name: 'Jordan 1 Retro High "Royal Toe"',
    image: "/images/aj1HiRoyalToe.jpg",
    description: "The Jordan 1 Retro High Royal Toe, available on StockX, offers a fresh take on a classic silhouette. Inspired by the original 1985 Jordan 1 Royal colorway and incorporating design elements from the Black Toe 1, this sneaker blends familiar aesthetics with a modern twist. It features a white and royal leather upper, black leather overlays, and detailing, complemented by a white midsole, royal outsole, and a branded leather tongue tag. Released in May 2020, the retail price for these sneakers was $170 USD.",
    price: "$159",
  },
  {
    id: 3,
    name: 'Jordan 1 Retro High "UNC to Chi (Women\'s)"',
    image: "/images/aj1HiUnc2Chi.jpg",
    description: "The women's Jordan 1 Retro High NC to Chi Leather, available on StockX, celebrates Michael Jordan's journey from UNC to becoming a six-time NBA champion with the Chicago Bulls. The sneaker features a black tumbled leather upper accented with red and university blue overlays. It is completed with a white midsole, red outsole, and classic Nike branding on the tongue. Released in February 2020, these sneakers retailed for $170.",
    price: "$120",
  },
  {
    id: 4,
    name: 'Jordan 1 Retro High OG "Heritage"',
    image: "/images/aj1HiHeritage.jpg",
    description: "The Air Jordan 1 Retro High OG Heritage offers a bold reinterpretation of the classic Chicago colorway. It features a white and University Red smooth leather upper, complemented by black leather collars and red Swooshes. A black and red woven Nike tongue label and an Air sole complete the design. Released in 2022, these sneakers retailed for $170.",
    price: "$119",
  },
  {
    id: 5,
    name: 'Jordan 1 Retro High OG "Chicago Lost and Found"',
    image: "/images/aj1HiLost.jpg",
    description: "The original Air Jordan 1 Chicago colorway was first introduced in 1985 and has only been retroed a few times since. But 2022 is the year that the colorway returns with an added vintage look. Pre-yellowed accents and cracked leather uppers showcase a fabricated look of age and wear. The Air Jordan 1 Lost and Found Chicago released in November of 2022 for $180.",
    price: "$300",
  },
  {
    id: 6,
    name: 'Jordan 1 Retro High OG "Mauve"',
    image: "/images/aj1HiMauve.jpg",
    description: "The Jordan 1 Retro High OG Mauve, part of Nike’s Holiday 2023 Retro Footwear line-up, blends archival inspiration with a modern design. This high-top sneaker features a clean White and Sky J Mauve colorway, with a white base complemented by Sky J Mauve leather overlays, synthetic inner liner, laces, Swoosh logos, and ‘NIKE AIR’ branding on the tongue. The rubber outsole also showcases Sky J Mauve, providing a striking contrast to the white midsole and stitching. Notably, the Wings detailing on the lateral ankle is in White, differing from the traditional Black found on other models. Released on October 14, 2023, these sneakers retailed for $180.",
    price: "$81",
  },
  {
    id: 7,
    name: 'Jordan 1 Retro High "Bloodline"',
    image: "/images/aj1HiBlood.jpg",
    description: "The Jordan 1 Retro High Bloodline, available on StockX, pays tribute to the origins of the Jordan legacy, drawing inspiration from the Black Toe design and celebrating the Chicago Bulls with its bold colorway. The sneaker features a white leather upper with black overlays and red trimming that matches the laces and outsole. It is completed with 'Nike Air' branding on the tongues and the phrase 'Who Said Man Was Not Meant To Fly' printed on the insoles. Released in November 2019, these sneakers retailed for $160.",
    price: "$216",
  },
  {
    id: 8,
    name: 'Jordan 1 Retro High OG Defiant SB "LA to Chicago"',
    image: "/images/aj1HiLa2Chi.jpg",
    description: "The Jordan 1 Retro High OG Defiant SB Lakers is a striking sneaker that combines classic style with vibrant accents. It features a white upper adorned with blue and yellow highlights, including a yellow Nike 'Swoosh.' The design is completed with a white midsole and a black outsole. Released in May 2019, these sneakers retailed for $175.",
    price: "$284",
  },
  {
    id: 9,
    name: 'Nike Dunk High "Panda Black White (2021/2024)"',
    image: "/images/dunkHiPanda.jpg",
    description: "The Nike Dunk High Panda Black White 2021 showcases a sleek design with a smooth white leather upper featuring perforations on the toe box. It has black leather overlays, eyestays, and Swooshes that coordinate with the black laces. The black rubber outsole features a concentric-circles pattern for traction, while the white midsole highlights visible threading. Black Nike branding is present on the white tongue, and the heel features a black loop with arcs of white-on-white horizontal threading beneath it. Released on January 27, 2022, these sneakers retailed for $115 and saw a re-release in 2024.",
    price: "$72",
  },
  {
    id: 10,
    name: 'Nike Dunk High "Tan Suede White"',
    image: "/images/dunkHiTan.jpg",
    description: "The Nike Dunk High Tan Suede White features a neutral tan and white colorway, presenting a stylish and versatile design. The sneaker boasts a white-grained leather upper adorned with light tan suede overlays, including the Swoosh, laces, and ankle flap. The off-white midsole is complemented by a beige serrated outsole. The tongue is dressed in tan with a white Nike inscription, while the white insoles feature a tan inscription. The perforated leather toe box is white, reinforced with a tan suede overlay. The Swoosh extends past the heel pull tab, both in tan. Released on September 17, 2022, these sneakers retailed for $125, and their two-tone colorway makes them a strong contender for first-pick options.",
    price: "$95",
  },
  {
    id: 11,
    name: 'Vans SK-8 Hi Reconstructed "Black"',
    image: "/images/vansSk8Recon.jpg",
    description: "Reimagined version of the classic Vans high-top.",
    price: "$80",
  },
  {
    id: 12,
    name: 'Vans SK-8 Hi Japan Market "Black"',
    image: "/images/vansSk8Jp.jpg",
    description: "Special edition inspired by Japanese street style.",
    price: "$85",
  },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function useSneakers() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const assignRandomDays = () => {
      const shuffledDays = shuffleArray([...days]);
      return sneakersData.map((sneaker, index) => ({
        ...sneaker,
        day: shuffledDays[index % 7],
      }));
    };

    setSneakers(assignRandomDays());

    // Reassign days every week (604800000 ms = 7 days)
    const intervalId = setInterval(() => {
      setSneakers(assignRandomDays());
    }, 604800000);

    return () => clearInterval(intervalId);
  }, []);

  return sneakers;
}

export default useSneakers;
