import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTop from "../ui/ScrollToTop";

type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <div className="antialiased font-primary scroll-smooth bg-black min-h-screen">
      <Header />
      <div>{children}</div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BaseLayout;
