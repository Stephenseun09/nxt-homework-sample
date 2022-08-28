import { footerData } from "../../constants";
import { FooterDataTypes } from "../../constants/footer/footer.types";
import SectionWrapper from "../ui/SectionWrapper";
import Left from "./Left";
import Right from "./Right";

const Footer = () => {
  const { footerDescription, footerLists }: FooterDataTypes = footerData;
  return (
    <footer className="pt-8 md:pt-14 lg:-mb-10 mt-12 border-t border-white border-opacity-30">
      <SectionWrapper className="">
        <div className="relative">
          <div className=" grid md:grid-cols-12 gap-12">
            {/*----------------------------------*/}
            {/*---- Left Hand Side of Footer ----*/}
            {/*----------------------------------*/}
            <div className=" w-full md:col-span-6 lg:col-5">
              <Left footerDescription={footerDescription} />
            </div>
            {/*----------------------------------*/}

            {/*----------------------------------*/}
            {/*---- Right Hand Side of Footer ----*/}
            {/*----------------------------------*/}
            <div className="flex gap-6  justify-between  md:col-start-7 md:col-end-13 lg:col-start-8 lg:col-end-13 flex-wrap md:flex-nowrap">
              <Right footerLists={footerLists} />
            </div>
            {/*----------------------------------*/}
          </div>

          <hr className="  mt-12 md:mt-14 border-slate-400" />
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#C4C4C4] text-center  mt-8 md:mt-12 opacity-60">
            © 2022 Betacare, Inc. All rights reserved
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
