import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CrossIcon from "../ui/svg/CrossIcon";
import MenuIcon from "../ui/svg/MenuIcon";

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

const MenuButton = ({ isOpen = false, onClick, ...props }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!isOpen ? (
        // {/*------------------*/}
        // {/*---- menu icon----*/}
        <motion.button
          className=" text-primary"
          aria-label="open menu"
          variants={variants}
          key="open"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
        >
          <MenuIcon className="w-7 h-7" />
        </motion.button>
      ) : (
        // {/*-------------------*/}
        // {/*---- close icon----*/}
        <motion.button
          aria-label="close menu"
          variants={variants}
          key="close"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
          className="text-primary"
        >
          <CrossIcon className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MenuButton;
