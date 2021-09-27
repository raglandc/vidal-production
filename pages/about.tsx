//library
import Head from "next/head";
//components
import AboutIntro from "../components/sections/AboutPageSections/AboutIntroSection";
import ThreeDSection from "../components/sections/AboutPageSections/threeDSection";
import TeamSection from "../components/sections/AboutPageSections/TeamSection";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Vidal - Meet The Team</title>
      </Head>
      <AboutIntro />
      <ThreeDSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;
