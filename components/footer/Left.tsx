import Link from "next/link";
import BetaCareLogo from "../ui/BetacareLogo";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../ui/svg";
import { motion } from "framer-motion";
import { FooterDataTypes } from "../../constants/footer/footer.types";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/betacare",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/betacare",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/betacare",
    icon: TwitterIcon,
  },
];

const Left = ({ footerDescription }: FooterDataTypes) => {
  return (
    <>
      <div className="mb-6">
        <div className=" mb-4 ">
          {/*-----------------------*/}
          {/*---- Betacare Logo ----*/}
          <BetaCareLogo src="/images/betacare-logo-white.png " />
        </div>
        {/* ---------------------- */}

        {/*---- Footer Description ----*/}
        <p className="text-base md:text-xl text-secondary-lightGray max-w-[50ch]">
          {footerDescription}
        </p>
        {/* ---------------------- */}
      </div>

      {/*---- Social Media ----*/}
      <div className="flex items-center space-x-6 pt-4">
        {socialMedia.map((item, index) => (
          <motion.span
            key={index}
            whileHover={{
              y: -4,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
          >
            <Link href={item.url}>
              <a className="text-secondary-lightGray hover:text-secondary-darkGray">
                <item.icon className="h-6 w-6" />
              </a>
            </Link>
          </motion.span>
        ))}
        {/* ---------------------- */}
        {/* ---------------------- */}
      </div>
    </>
  );
};

export default Left;
