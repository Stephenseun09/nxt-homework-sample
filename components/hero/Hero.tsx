import { motion } from "framer-motion";
import { fadeIn, fadeInBottom } from "../ui/animations";
import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import PlayIcon from "../ui/svg/PlayIcon";
import { heroData } from "../../constants";

const Hero = () => {
  const { heroDescription, heroHeading, heroImg } = heroData;
  return (
    <>
      <section className="relative pt-[5rem] pb-12 sm:pb-24 lg:pb-20 ">
        <div className="px-4 sm:px-6 md:px-8 max-w-[82rem] mx-auto ">
          <div className="md:grid md:grid-cols-12 grid-flow-row-dense items-center space-y-12 md:space-y-0">
            {/*----------------------*/}
            {/*---- Hero Heading ----*/}
            <div className="col-span-6 col-start-7">
              <motion.h1
                className="text-primary font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <span className="text-secondary-dark">The</span> Trail-blazers{" "}
                <br /> <span className="text-secondary-dark">in</span> Virtual
                Healthcare.
              </motion.h1>
              {/*---- Hero Heading ----*/}
              {/*----------------------*/}

              <motion.p
                className="max-w-[60ch] mt-6 md:mt-8  text-md  md:text-lg lg:text-xl text-secondary-light"
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                {heroDescription}
              </motion.p>
              {/*---- Hero description text ----*/}
              {/*-------------------------------*/}

              {/*--------------------*/}
              {/*---- CTA Button ----*/}
              <motion.div
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="mt-6 md:mt-8  text-sm md:text-base pt-8"
              >
                <CustomLink className="hover:bg-secondary hover:text-black  bg-primary-blue text-white w-[80%] md:w-[60%] lg:w-[50%] text-sm md:text-base">
                  Speak with us <PlayIcon className="ml-3 w-6 h-6" />
                </CustomLink>
              </motion.div>
              {/*---- CTA Button ----*/}
              {/*--------------------*/}
            </div>

            {/*--------------------*/}
            {/*---- Hero Image ----*/}
            <motion.div
              className=" overflow-hidden col-span-5 col-start-1"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={heroImg}
                alt="landing page image"
                width={470}
                height={459}
                className="bg-gray-500 rounded-lg"
                priority
              />
            </motion.div>
            {/*---- Hero Image ----*/}
            {/*--------------------*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
