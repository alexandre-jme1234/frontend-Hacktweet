import styles from "../styles/SignUp.module.css";
import { useState, useEffect } from "react";
import { Button, Modal } from "antd";

import { useDispatch } from "react-redux";
import { addNameToStore } from "../reducers/user";

function SignUp(props) {
  const dispatch = useDispatch();
  const [openSignup, setOpenSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [createValidate, setCreateValidate] = useState(null)

  const showModaSignUp = () => {
    setOpenSignup(true);
  };
  const hideModalSignUp = () => {
    setOpenSignup(false);
  };

  useEffect( () => {
    props.stateLogged(true)
}, [createValidate]);

  const handleSubmit = () => {

    console.log('pasword sent _', password)
    console.log('email sent _', email) 
    dispatch(addNameToStore({name: username, email: email}))

        fetch("http://localhost:3000/users/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email, password}),
        })
          .then((response) => response.json())
          .then((data) => {
                console.log('good', data.result)
                if(data.result === true) {
                    setCreateValidate(true)                 
                    console.log('ValeurInitial _', props.stateLogged(true))
                }

        });
    };

  return (
    <>
    <Button type="primary" onClick={showModaSignUp}>
      Sign Up
    </Button>
    <Modal
      open={openSignup}
      onOk={() => handleSubmit()}
      onCancel={hideModalSignUp}
      okText="Suivant"
      cancelText="Annuler"
    >
      <div className={styles.headBlock}>
        <div className={styles.subLogo} alt="Logo" />
        <h1 className={styles.subTitle}>SignUp</h1>
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
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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

export default SignUp;
