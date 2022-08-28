import { useState } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import MobileNav from "./MobileNav";
import BetaCareLogo from "../ui/BetacareLogo";
import { headerData } from "../../constants";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { navItems } = headerData;

  return (
    <header className="">
      <div className="relative max-w-[86rem] px-4 sm:px-5 md:px-7 mx-auto z-[80] bg-black">
        <div className=" py-4 lg:py-5 flex items-center justify-between font-semibold text-base">
          <div className="flex space-x-2 lg:space-x-14 ">
            <BetaCareLogo />

            {/* <!---------------------> */}
            {/* <!-- Nav menu starts --> */}
            {/* <!---------------------> */}
            <div className="hidden md:flex items-center ">
              <nav>
                <ul className="flex items-center  lg:space-x-2 capitalize text-base">
                  <>
                    {/*----Nav Links -----*/}
                    {navItems.map((item, index) => (
                      <li key={index} className="">
                        <Link href={item.link}>
                          <a className="font-semibold  hover:bg-gray-100 hover:text-secondary-dark text-[#999999] px-4 py-2 rounded-lg  transition duration-150 ease-in-out">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                    {/* <!-- Dropdown menu --> */}
                    <DropdownMenu />
                  </>
                </ul>
              </nav>
              {/* <!-- Nav menu ends --> */}
            </div>
          </div>

          {/* <!-- MenuBtn start --> */}
          <div className="md:hidden ">
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          {/* <!-- MenuBtn ends --> */}

          {/* <!-- CTA Button starts --> */}
          <div className="hidden md:inline-flex">
            <Link href="#">
              <a
                className={`font-semibold h-12 px-8 flex items-center justify-center shadow-lg rounded-lg text-sm lg:text-base text-white hover:bg-white hover:text-black border border-white transition-all ease-linear duration-150 `}
              >
                Speak with us
              </a>
            </Link>
          </div>
          {/* <!-- CTA Button ends --> */}
        </div>
      </div>

      {/* <!-- Mobile nav starts --> */}
      {isOpen && <MobileNav onClose={() => setIsOpen(false)} />}
      {/* <!-- Mobile nav ends --> */}
      {/* <!---------------------> */}
      {/* <!-- Nav menu ends --> */}
      {/* <!---------------------> */}
    </header>
  );
};

export default Header;
