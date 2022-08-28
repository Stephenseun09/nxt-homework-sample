import { OurServicesCardDataTypes } from "../../constants/ourServices/ourServices.types";

const CardWrapper = ({ title, description }: OurServicesCardDataTypes) => {
  return (
    <div className="grow flex flex-col bg-primary px-8 py-12 rounded-xl space-y-16 w-fit min-h-full">
      {/*---- title of card ----*/}
      <h4 className="grow h-full max-w-[80%] font-medium text-secondary-dark text-[22px] md:text-[24px] lg:text-[26px] leading-tight">
        {title}
      </h4>

      {/*---- description of card ----*/}
      <p className=" h-full max-w-[80%] text-secondary-dark text-[16px] md:text-[18px] lg:text-[20px] leading-normal ">
        {description}
      </p>
    </div>
  );
};

export default CardWrapper;
