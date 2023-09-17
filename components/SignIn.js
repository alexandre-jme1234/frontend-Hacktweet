import styles from "../styles/SignIn.module.css";
import { useState, useEffect } from "react";
import { Button, Modal } from "antd";

import { useDispatch } from "react-redux";
import { addNameToStore } from "../reducers/user";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const [confIsLoging, SetConfIsLoging] = useState(null);

  const dispatch = useDispatch();

  // const verifyUserLoging = () => {
  //   return SetConfIsLoging((current) => !current);
  // };

  useEffect(() => {
    props.stateLogged(confIsLoging);
    console.log("ConfirmConnexionRemonté _", confIsLoging);
  }, [confIsLoging]);

  const handleSubmit = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(addNameToStore({name: user.name, email: user.email}))
    
    fetch("http://localhost:3000/users/signin", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json" 
      },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.result === true) {
            props.stateLogged(true);
            console.log("ValeurInitial _", data.result);
        } else {
            console.log('reponse fetch : data _', data);
            console.log('User doesn t exists');
        }
      });
  };

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="default" onClick={showModal}>
        Sign In
      </Button>
      <Modal
        open={open}
        onOk={() => handleSubmit()}
        onCancel={hideModal}
        okText="Suivant"
        cancelText="Annuler"
      >
        <div className={styles.headBlock}>
          <div className={styles.subLogo} alt="Logo" />
          <h1 className={styles.subTitle}>SignIn</h1>
        </div>
        <div className={styles.blockInput}>
          <input
            className={styles.inputStyle}
            name="myInput"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={styles.inputStyle}
            name="myInput"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={styles.inputStyle}
            type="password"
            name="myInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </Modal>
    </>
  );
}

export default SignIn;
