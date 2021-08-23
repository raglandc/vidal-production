//components
import PerksCard from "./homepageComponents/PerksCard";
import fast from "../../../public/fast.svg";
import seo from "../../../public/seo.svg";
import responsive from "../../../public/responsive.svg";
import SectionWrapper from "../../UI/SectionWrapper";

const cards: {
  key: string;
  svgLink: StaticImageData;
  description: string;
  title: string;
}[] = [
  {
    key: "card-1",
    svgLink: fast,
    description:
      "No one wants to wait for a website to load. Vidal uses technology that is lightening fast. Which means happy customers for you! Yay! ",
    title: "Fast",
  },
  {
    key: "card-2",
    svgLink: seo,
    description:
      "SEO is what search engines (Google, Bing, Etc.) use to see what your site is all about. Vidals websites are built to be extremly SEO friendly.",
    title: "SEO",
  },
  {
    key: "card-3",
    svgLink: responsive,
    description:
      "More people use their phone to surf the web than ever, having a website that works on devices of all shapes and sizes is, well, vital. Vidal has you covered.",
    title: "Responsive",
  },
];

const PerkSection = () => {
  return (
    <SectionWrapper>
      {cards.map((card) => {
        return (
          <PerksCard
            key={card.key}
            svgLink={card.svgLink}
            description={card.description}
            title={card.title}
          />
        );
      })}
    </SectionWrapper>
  );
};

export default PerkSection;
