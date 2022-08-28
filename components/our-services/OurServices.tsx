import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Cards from "./Cards";
import { motion } from "framer-motion";
import { fadeInBottom } from "../ui/animations";
import { ourServicesData } from "../../constants";

const OurServices = () => {
  const { title, description } = ourServicesData;
  return (
    <SectionWrapper>
      <div className="space-y-4 md:space-y-6 max-w-full overflow-x-hidden">
        <motion.h2
          className="text-[#97C3F9] text-center text-xl md:text-[24px] lg:text-2xl leading-none"
          variants={fadeInBottom}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {/*---- Section Title ----*/}
        {/*-----------------------*/}

        {/*-----------------------------*/}
        {/*---- Section Description ----*/}
        <motion.h3
          className="text-center text-primary text-3xl  lg:text-4xl xl:text-5xl basis-2/4 md:max-w-[28ch] lg:max-w-[25ch] mx-auto"
          variants={fadeInBottom}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          {description}
        </motion.h3>
        {/*---- Section Description ----*/}
        {/*-----------------------------*/}

        {/* <Cards /> */}
        <div className="pt-4">
          <Cards />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurServices;
