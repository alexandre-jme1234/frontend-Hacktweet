import styles from "../styles/Home.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";

function Home(props) {
  const [confirmeConnexion, SetConfirmeConnexion] = useState(null);
  
  const stateLogged = (e) => {
    SetConfirmeConnexion(e)
    console.log("ValidationConfirmeConnexion", confirmeConnexion);
    if (confirmeConnexion === true) {
      console.log("register _", props.toggleForm);
      props.toggleForm("register");
    } else {
      console.log('props de statut non remonté')
    }
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.backgroundImage} />
        <div className={styles.loginGrid}>
          <div className={styles.contentSide}>
            <div className={styles.logo} alt="Logo" />
            <div className={styles.textSection}>
            <h1 className={styles.title}>See What's happening</h1>
            <h1 className={styles.subTitle}>Join Hackatweet today.</h1>
            </div>
          </div>
          <div className={styles.signBlock}>
            <SignUp stateLogged={stateLogged} />
            <h1 className={styles.textTitle}>Already have an account ?</h1>
            <SignIn stateLogged={stateLogged} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
