import mcdonald from "@/assets/icon/mcdonald.png";
import arby from "@/assets/icon/Arby's_logo.svg.png";
import burgerKing from "@/assets/icon/Burger_King_2020.svg.png";
import carl from "@/assets/icon/Carl%27s_Jr._2022_Vertical.png";
import chipotle from "@/assets/icon/Chipotle_Mexican_Grill_logo.svg.png";
import dominos from "@/assets/icon/Dominos_pizza_logo.svg.png";
import jackbox from "@/assets/icon/JackInTheBoxLogo.svg.png";
import jerseyMike from "@/assets/icon/Jersey_Mike's_logo.svg";
import jj from "@/assets/icon/Jimmy_John's_(logo).svg.png";
import kfc from "@/assets/icon/kfc.png";
import panda from "@/assets/icon/Panda_Express.svg.png";
import papa from "@/assets/icon/Papa_John's_Logo_2019.svg";
import popeye from "@/assets/icon/Popeyes_Logo_2020.svg.png";
import sonic from "@/assets/icon/SONIC_New_Logo_2020.svg";
import subway from "@/assets/icon/Subway_icon.svg";
import tacoBell from "@/assets/icon/Taco_Bell_Logo.svg.png";
import littleCaeser from "@/assets/icon/The_Little_Caesers.png";
import wendy from "@/assets/icon/Wendy's_full_logo_2012.svg.png";
import fastfodd from "@/assets/icon/fastfood.png";
function getIcon(brand: string) {
  switch (brand) {
    case "McDonald's":
      return mcdonald.src;

    case "Subway":
      return subway.src;

    case "Taco Bell":
      return tacoBell.src;

    case "Jack In The Box":
      return jackbox.src;

    case "Burger King":
      return burgerKing.src;

    case "Little Caesars Pizza":
      return littleCaeser.src;

    case "Domino's Pizza":
      return dominos.src;

    case "Panda Express":
      return panda.src;

    case "Wendy's":
      return wendy.src;

    case "Sonic Drive-In":
      return sonic.src;

    case "Chipotle Mexican Grill":
      return chipotle.src;

    case "Jimmy John's":
      return jj.src;

    case "Carl's Jr.":
      return carl.src;

    case "Jersey Mike's":
      return jerseyMike.src;

    case "Papa John's Pizza":
      return papa.src;

    case "KFC":
      return kfc.src;

    case "Arby's":
      return arby.src;

    case "Popeyes Louisiana Kitchen":
      return popeye.src;

    default:
      return fastfodd.src;
  }
}

export default function getBrandIcon(brand: string) {
  const img = document.createElement("img");
  img.src = getIcon(brand);

  img.style.height = "96px";

  return img;
}
