//styles
import styles from "./AboutVideoSection.module.css";

const AboutVideoSection = () => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/v0KFCzRaLAY"
        title="Team Member Video"
        allowFullScreen
        allow="controls; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default AboutVideoSection;
