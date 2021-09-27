//library
import Head from "next/head";
//local
import ContactFormSection from "../components/sections/ContactPageSections/ContactFormSection";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Vidal - Contact</title>
        <meta
          name="description"
          content="Reach out to the Vidal team and discuss possible business partnerships and opportunities."
        />
      </Head>
      <ContactFormSection />
    </>
  );
};

export default ContactPage;
