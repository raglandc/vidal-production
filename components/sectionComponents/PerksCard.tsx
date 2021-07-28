//libaray imports
import Image from "next/image";

//styles
import styles from "./PerksCard.module.css";

type PerksCardProps = {
  key: string;
  svgLink: string;
  description: string;
};

const PerksCard = (props: PerksCardProps) => {
  return (
    <div>
      <Image src={props.svgLink} alt="svg image" width={500} height={500} />
      <p>{props.description}</p>
    </div>
  );
};
