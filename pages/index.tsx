import type { NextPage } from "next";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import {
  BaseLayout,
  GetStarted,
  Hero,
  KnowledgeHub,
  OurServices,
  WhyChooseUs,
} from "../components";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <GetStarted />
      <KnowledgeHub />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
