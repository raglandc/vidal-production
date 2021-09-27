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
        <meta
          name="description"
          content="Meet and learn more about the team behind Vidal development"
        />
      </Head>
      <AboutIntro />
      <ThreeDSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;
