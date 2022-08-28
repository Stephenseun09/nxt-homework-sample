import Link from "next/link";
import { BlogDataTypes } from "../../constants/knowledgeHub/knowledgeHub.types";
import ArrowRight from "../ui/svg/ArrowRight";

const CardItem = ({ title, date, image, link }: BlogDataTypes) => {
  // animate-pulse
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`flex items-end justify-center   bg-gray-600 px-8 py-12 rounded-xl min-h-[350px] lg:min-h-[380px] mx-auto`}
    >
      {/*---- blog post starts ----*/}
      <div className=" flex flex-col min-h-[200px] p-4 w-full bg-primary rounded-lg text-secondary-dark text-[15px] shadow-lg">
        <span>{date}</span>
        <h5 className="grow mt-4 max-w-[90%] text-primary-blue text-xl font-medium">
          {title}
        </h5>
        <Link href={link}>
          <a className="group mt-8 p-1 flex items-center w-fit">
            Read more{" "}
            <ArrowRight className="h-3 w-3 text-black group-hover:ml-3 ml-2 font-bold transition-all ease-in duration-200  " />{" "}
          </a>
        </Link>
        {/*---- blog post ends ----*/}
      </div>
    </div>
  );
};

export default CardItem;
