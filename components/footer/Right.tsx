import Link from "next/link";
import {
  FooterDataTypes,
  FooterList,
} from "../../constants/footer/footer.types";

// {/*---------------------------------------------*/}
// {/*---- Each heading and its lists Component----*/}
// {/*---------------------------------------------*/}
const Lists = ({ items, heading }: FooterList) => {
  return (
    <div>
      <h5 className="font-bold mb-5 text-primary-blue text-[17px] sm:text-[18px] md:text-[19px] uppercase">
        {heading}
      </h5>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] hover:translate-x-1 transition-all text-[#E5E5E5] hover:text-primary"
          >
            <Link href={item.link}>
              <a className="peer">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
// {/*---- Each heading and its lists Component----*/}
// {/*---------------------------------------------*/}

// {/*--------------------------------------------------------------------*/}
// {/*---- All Headings and their lists Component exported as default ----*/}
// {/*--------------------------------------------------------------------*/}
const Left = ({ footerLists }: FooterDataTypes) => {
  return (
    <>
      {footerLists?.map((item, index) => {
        return <Lists key={index} items={item.items} heading={item.heading} />;
      })}
    </>
  );
};
// {/*---- All Headings and their lists Component exported as default ----*/}
// {/*--------------------------------------------------------------------*/}

export default Left;
