import {
  AccessibilityIcon,
  SecureIcon,
  WalletIcon,
} from "../../components/ui/svg";

const heading = "Why Choose Us";
const cards = [
  {
    title: "Affordability", // card title
    description:
      "At BetaCare, with little as one dollar, you can receive healthcare services from qualified medical practitioners.", // card description
    Icon: WalletIcon, // import WalletIcon from "../components/ui/svg/WalletIcon";
  },
  {
    title: "Accessibility",
    description:
      "We provide a digital space whereby telehealth services can be provided to our customers anywhere in the world.",
    Icon: AccessibilityIcon,
  },
  {
    title: "Quality",
    description:
      "We collaborate with medical doctors and specialists to deliver high-quality healthcare to everyone, everywhere.",
    Icon: SecureIcon,
  },
];

const whyChooseUsData = {
  heading,
  cards,
};

export default whyChooseUsData;
