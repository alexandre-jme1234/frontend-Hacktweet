import styles from '../styles/Home.module.css';
import SignIn from './SignIn';
import { Button, Modal } from "antd";
import {  useState  } from 'react';

function Home() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

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
            <>
          <Button type="primary" onClick={showModal}>Sign Up</Button>
          <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Suivant"
        cancelText="Annuler"
      >
       <SignIn />
      </Modal>
            </>
          <h1 className={styles.textTitle}>Already have an account ?</h1>
          <>
          <Button type="default" onClick={showModal}>Sign In</Button>
          {/* <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Suivant"
        cancelText="Annuler"
        >
        <div className={styles.subLogo} alt="Logo" />
        <SignIn />
      </Modal>  */}
          </>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
