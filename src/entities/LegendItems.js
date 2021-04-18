import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#741B74",
    (cases) => cases >= 1_000_000,
  ),

  new LegendItem(
    "500,000 - 999,999",
    "#9F3C9F",
    (cases) => cases >= 500_000 && cases < 1_000_000,
  ),

  new LegendItem(
    "200,000 - 499,999",
    "#C06DC0",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "50,000 - 199,999",
    "#CD9DCD",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 49,999",
    "#D8BFD8",
    (cases) => cases > 0 && cases < 50_000
  ),

  new LegendItem("Unknow", "#E6E6FA", (cases) => true),
];

export default legendItems;

