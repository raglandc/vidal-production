//library
import { useFormik } from "formik";
import * as Yup from "yup";

//type
interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

//styles
import styles from "./ContactForm.module.css";

const ContactForm = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
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
      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
