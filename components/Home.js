import styles from "../styles/Home.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";

function Home(props) {
  const [isLogging, setIsLogging] = useState(null);
  const [confirmeConnexion, SetConfirmeConnexion] = useState(null);

  const stateLogged = (e) => {
    SetConfirmeConnexion(e);
    console.log("ValidationConfirmeConnexion", confirmeConnexion);
    if (confirmeConnexion === true) {
      console.log("register _", props.toggleForm);
      props.toggleForm("register");
    }
  };

  //   useEffect( () => {
  //     props.toggleForm(confirmeConnexion);
  //     console.log('GO TO DASH !! _', confirmeConnexion);
  // }, [confirmeConnexion]);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.backgroundImage} />
        <div className={styles.loginGrid}>
          <div className={styles.contentSide}>
            <div className={styles.logo} alt="Logo" />
            <h1 className={styles.title}>See What's happening</h1>
            <h1 className={styles.subTitle}>Join Hackatweet today.</h1>
          </div>
          <div className={styles.signBlock}>
            <SignUp isLogged={isLogging} stateLogged={stateLogged} />
            <h1 className={styles.textTitle}>Already have an account ?</h1>
            <SignIn isLogged={isLogging} stateLogged={stateLogged} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
