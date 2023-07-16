import Home from "./Home.js";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.main}>
      <div className={styles.fristColumn}>
        <div className={styles.subLogo} alt="Logo" />
      </div>
      <div className={styles.mainContent}></div>
      <div className={styles.secondColumn}></div>
    </div>
  );
}

export default Dashboard;
