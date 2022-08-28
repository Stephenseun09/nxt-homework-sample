import { motion } from "framer-motion";
import Link from "next/link";
import { headerData } from "../../constants";

interface Props {
  onClose?: () => void;
}

// framer motion animation variants
const navVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {},
  },
};
const ulVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const listVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.15,
    },
  }),
  exit: (index: number) => ({
    y: -20,
    opacity: 0,
    transition: {
      delay: index * 0.15,
    },
  }),
};

const MobileNav = ({ onClose }: Props) => {
  const { navItems, dropdownLink } = headerData;
  return (
    <motion.nav
      className="md:hidden h-screen w-full  fixed inset-0  
    border-opacity-10 bg-black  backdrop-blur-lg  z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.ul
        className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-primary text-2xl uppercase font-bold tracking-widest space-y-6 "
        variants={ulVariants}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="list-none"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            custom={index}
            onClick={onClose}
          >
            <Link href={item.link}>
              <a className="inline-block text-center border-b-4 border-transparent hover:text-primary hover:border-primary transition-all">
                {item.name}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNav;
