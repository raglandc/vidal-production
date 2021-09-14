//library
import Image from "next/image";

//local
import ContactForm from "./contactPageComponents/ContactForm";
import ContactSvg from "../../../public/images/contact/contact.svg";

//styles
import styles from "./ContactFormSection.module.css";

const ContactFormSection = () => {
  return (
    <>
      <div className={styles.contactFormSectionContainer}>
        <ContactForm />
        <Image
          src={ContactSvg}
          alt={"simple cartoon of person on phone."}
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default ContactFormSection;
