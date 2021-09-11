//library

//local
import ContactForm from "./contactPageComponents/ContactForm";

//styles
import styles from "./ContactFormSection.module.css";

const ContactFormSection = () => {
  return (
    <div className={styles.contactFormSectionContainer}>
      <ContactForm />
    </div>
  );
};

export default ContactFormSection;
