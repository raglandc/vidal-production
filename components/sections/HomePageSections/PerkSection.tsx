//components
import SectionWrapper from "../../UI/SectionWrapper";

//styles
import styles from "./PerkSection.module.css";

const cardInfo: { key: string; svgLink: string; description: string }[] = [
  {
    key: "card-1",
    svgLink: "../../../svg/fast.svg",
    description:
      "Your website will be built with technology that is blazing fast. Making your customers happy they do not have to wait on pages to load. ",
  },
];

const PerkSection = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default PerkSection;
