import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  className?: string;
  rest?: any;
};

const CustomLink = ({ children, className, ...rest }: Props) => {
  return (
    <Link href="#">
      <a
        className={`${className} lg:h-14 font-semibold h-12 px-6 flex items-center justify-center shadow-lg rounded-lg  transition-all ease-linear duration-150 `}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
