import styles from "./Confirmation.module.css";
import check from "../../assets/images/check.jpg";

const Confirmation = () => {
  setTimeout(() => {
    window.location.reload(true);
  }, "3000");

  return (
    <div className={styles.confirmation}>
      <img src={check} alt="loading..." />
      <p>Buyurtmangiz qabul qilindi va 45 daqiqa ichida yetqazib beriladi</p>
    </div>
  );
};

export default Confirmation;
