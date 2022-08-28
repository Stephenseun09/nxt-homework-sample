import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import CustomLink from "../ui/CustomLink";
import { fadeInBottom } from "../ui/animations";
import { getStartedDescription } from "../../constants";

const GetStarted = () => {
  return (
    <SectionWrapper>
      <div className="relative lg:grid grid-cols-5 place-content-center bg-primary-blue pt-[60px] md:pt-[8rem] pb-[60px] md:pb-[8rem] px-8 md:px-12 lg:px-24 rounded-[40px] overflow-hidden">
        <div className=" space-y-14 col-span-3">
          {/*------------------------------------------------*/}
          {/*---- Description Text on Get Started Section----*/}
          {/*------------------------------------------------*/}
          <motion.h2
            className="text-secondary-gray text-[1.5rem] md:text-[1.8rem] lg:text-[2.1rem] font-bold leading-snug md:max-w-[40ch] lg:max-w-[30ch] "
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
          >
            {getStartedDescription}
          </motion.h2>
          {/*---- Description Text on Get Started Section----*/}
          {/*------------------------------------------------*/}

          {/*---------------------------------------*/}
          {/*---- CTA Btn on Get Started Section----*/}
          {/*---------------------------------------*/}
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            <CustomLink className="shadow-2xl  bg-primary text-primary-blue md:w-[40%] ">
              Get Started for Free
            </CustomLink>
          </motion.div>
          {/*---- CTA Btn on Get Started Section----*/}
          {/*---------------------------------------*/}
        </div>

        {/*--------------------------*/}
        {/*---- Circles container----*/}
        {/*--------------------------*/}
        <div className="hidden lg:flex col-span-2 justify-center">
          <div className="absolute bg-white -top-[35%]  w-[431.76px] h-[431.76px] rounded-[50%]" />
          <div className="absolute bg-[#97C3F9] -bottom-[35%]  w-[431.76px] h-[431.76px] rounded-[50%]" />
        </div>
        {/*---- Circles container----*/}
        {/*--------------------------*/}
      </div>
    </SectionWrapper>
  );
};

export default GetStarted;
