import { WhyChooseUsCardTypes } from "../../constants/whyChooseUs/whyChooseUs.types";

const CardItem = ({ title, description, Icon }: WhyChooseUsCardTypes) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-primary text-center">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg grid place-content-center bg-[#fbfbfb] shadow-2xl">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-xl md:text-2xl lg:text-2xl mt-3 md:mt-5 lg:mt-7">
        {title}
      </h3>
      <p className="text-[18px] md:text-[19px] text-secondary-gray text-center lg:text-start mt-3">
        {description}
      </p>
    </div>
  );
};

export default CardItem;
