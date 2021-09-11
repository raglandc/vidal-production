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
      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
