//library
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

//local
import ContactForm from "./contactPageComponents/ContactForm";
import ContactSvg from "../../../public/images/contact/contact.svg";

//styles
import styles from "./ContactFormSection.module.css";

const ContactFormSection = () => {
  const divStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div
        style={divStyles}
        className={styles.contactFormSectionContainer}
      >
        <ContactForm />
        <Image
          src={ContactSvg}
          alt={"simple cartoon of person on phone."}
          width={500}
          height={500}
        />
      </animated.div>
    </>
  );
};

export default ContactFormSection;
