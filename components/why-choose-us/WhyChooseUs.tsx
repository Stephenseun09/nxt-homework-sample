import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import CardItem from "./CardItem";
import whyChooseUsData from "../../constants/whyChooseUs";
import { WhyChooseUsDataTypes } from "../../constants/whyChooseUs/whyChooseUs.types";
import { fadeIn, fadeInBottom } from "../ui/animations";

const WhyChooseUs = () => {
  const { heading, cards }: WhyChooseUsDataTypes = whyChooseUsData;
  return (
    <SectionWrapper>
      <div
        className="flex flex-col items-center bg-blueGradient space-y-14 py-[60px] md:py-[5rem] lg:py-[6rem]  px-8 md:px-12 lg:px-20 rounded-[40px] shadow-2xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #407BFF 0%, rgba(31, 86, 195, 0.26) 100%)",
        }}
      >
        <motion.h2
          className="text-secondary-gray text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-center capitalize font-bold leading-none"
          variants={fadeInBottom}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CardItem {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
