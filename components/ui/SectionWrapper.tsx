type WrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className="">
      <div
        className={`${className} max-w-[86rem] mx-auto px-4 sm:px-5 md:px-7 py-8 md:py-12 lg:py-16`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
