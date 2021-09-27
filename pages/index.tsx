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
        <title>Vidal - Dream | Design | Develope</title>
      </Head>
      <BannerSection />
      <PerkSection />
      <StatsSection />
    </>
  );
};

export default HomePage;
