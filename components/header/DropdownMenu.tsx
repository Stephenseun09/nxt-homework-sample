import Link from "next/link";
import React from "react";
import { headerData } from "../../constants";
import { ArrowRight } from "../ui/svg";

const DropdownMenu = () => {
  const { dropdownLink } = headerData;
  return (
    <div className="relative group px-2 py-2 ">
      <button
        className="z-10 flex items-center capitalize text-base font-semibold  text-[#999999] transition duration-150 ease-in-out  focus:border-none focus:outline-none"
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        aria-controls=""
      >
        {/*---------------------*/}
        {/*---- Main navlink----*/}
        {/*---------------------*/}
        <span className="mr-2">More</span>
        <ArrowRight className="w-3 h-3 rotate-90" />
      </button>
      {/*---- Main navlink----*/}
      {/*---------------------*/}

      {/*----------------------*/}
      {/*---- dropdown link----*/}
      {/*----------------------*/}
      <div
        className="invisible absolute group-hover:visible min-w-max py-4 bg-primary backdrop-blur-lg border-secondary-gray text-base z-50 list-none rounded shadow-lg border transition-all ease-in
    origin-top-right"
      >
        <div aria-labelledby="" role="menu">
          <ul className="py-2">
            {dropdownLink.map((link, index) => (
              <li key={index} className="">
                <Link href="#">
                  <a className="text-sm hover:bg-gray-100  text-secondary-dark block px-4 py-2 pr-8">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*---- dropdown link----*/}
      {/*----------------------*/}
    </div>
  );
};

export default DropdownMenu;
