import React from "react";
import { fadeIn, fadeInBottom } from "../ui/animations";
import SectionWrapper from "../ui/SectionWrapper";
import CardItem from "./CardItem";
import { motion } from "framer-motion";
import { knwoledgeHubData } from "../../constants";
import { KnowledgeHubDataTypes } from "../../constants/knowledgeHub/knowledgeHub.types";

const KnowledgeHub = () => {
  const { blogData, description, title }: KnowledgeHubDataTypes =
    knwoledgeHubData;
  return (
    <SectionWrapper>
      <div className="space-y-4 md:space-y-6">
        {/*-----------------------*/}
        {/*---- Section Title ----*/}
        <motion.h2
          className="text-[#8BFAA4] text-center text-xl md:text-[24px] lg:text-2xl leading-none"
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
          className="text-center text-primary text-3xl  lg:text-4xl xl:text-5xl basis-2/4"
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

        {/*---- Blog Cards ----*/}
        {/*--------------------*/}
        <div className="pt-4 md:pt-6 lg:pt-9 grid grid-cols-12 gap-[30px]">
          {blogData.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="
              col-span-12 md:col-span-6 lg:col-span-4
          "
                variants={fadeIn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <CardItem {...item} />
              </motion.div>
            );
          })}
        </div>
        {/*--------------------*/}
        {/*---- Blog Cards ----*/}
      </div>
    </SectionWrapper>
  );
};

export default KnowledgeHub;
