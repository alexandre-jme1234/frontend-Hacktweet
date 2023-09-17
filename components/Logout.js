import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Logout.module.css";
import user from "../reducers/user";
import { useEffect } from "react";


function Logout(props) {
  const user = useSelector((state) => state.user.value)

  function handleSubmit(e) {
    e.preventDefault();
    props.stateLogged('login')
  }

  return (
  <div className={styles.userContent}>
    <div className={styles.imgUser} />
    <div className={styles.textBlock}>
    <h1 style={{fontSize: '1em', color: 'azure', margin: 0}}>{user.name}</h1>
    <h1 style={{fontSize: '0.5em', color: 'grey', margin: 0}}>@{user.name}</h1>
    <button type="button" className={styles.tweetBtn} onClick={handleSubmit}>Logout</button>
    </div>
  </div>
  )
}

export default Logout;
