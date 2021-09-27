//library
import Head from "next/head";
//local
import ContactFormSection from "../components/sections/ContactPageSections/ContactFormSection";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Vidal - Contact</title>
      </Head>
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
