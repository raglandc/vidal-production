//library
import Head from "next/head";
///components////
import BannerSection from "../components/sections/HomePageSections/BannerSection";
import PerkSection from "../components/sections/HomePageSections/PerkSection";
import StatsSection from "../components/sections/HomePageSections/StatsSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Vidal - Dream | Design | Develop</title>
        <meta
          name="description"
          content="Welcome to the future of web design. Simple, clean and elegant designs that are quick and responsive."
        />
      </Head>
      <BannerSection />
      <PerkSection />
      <StatsSection />
    </>
  );
};

export default HomePage;
