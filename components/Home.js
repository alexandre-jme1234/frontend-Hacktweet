import styles from '../styles/Home.module.css';
import { Button } from "antd";

function Home() {
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
          <Button type="primary">Primary Button</Button>
          <h1 className={styles.textTitle}>Already have an account ?</h1>
          <Button type="default" >Secondary Button</Button> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
