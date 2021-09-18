//library
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//local imports

//type
interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

//styles
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  //state for message status
  const [messageStatusState, setMessageStatusState] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, "Please enter your full name")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email adress").required("Required"),
      message: Yup.string()
        .min(1, "Please describe how Vidal can help you")
        .required("Required"),
    }),
    onSubmit: (values, actions) => {
      //after the form is submitied i will call an async function
      //to take the values and send them to google
      apiFetcher(values);
      //reset form values
      actions.resetForm();
    },
  });

  const apiFetcher = async (values: MyFormValues) => {
    const { name, email } = values;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.status === 200) {
        setMessageStatusState(true);
      } else {
        setMessageStatusState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      {/* the below div is for message status */}
      {messageStatusState && (
        <div className={styles.messageStatusSucceed}>
          Your message has been sent!
        </div>
      )}
      <h1>Contact</h1>
      <label className={styles.formLabel} htmlFor="name">
        Name
      </label>
      <input
        className={styles.formInput}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.errorMessage}>{formik.errors.name}</div>
      ) : null}

      {/* email input below */}
      <label className={styles.formLabel} htmlFor="email">
        Email
      </label>
      <input
        className={styles.formInput}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.errorMessage}>{formik.errors.email}</div>
      ) : null}

      {/* message input below */}
      <label className={styles.formLabel} htmlFor="message">
        Message
      </label>
      <input
        className={styles.formInput}
        id="message"
        name="message"
        type="text-area"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className={styles.errorMessage}>{formik.errors.message}</div>
      ) : null}
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.formButton} ${styles.formButtonReset}`}
          type="reset"
          onClick={() => {
            formik.resetForm();
            setMessageStatusState(false);
          }}
        >
          Reset
        </button>
        <button
          className={`${styles.formButton} ${styles.formButtonSubmit}`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
