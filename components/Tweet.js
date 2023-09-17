import styles from "../styles/Tweet.module.css";
import tweet, { addTweet } from "../reducers/tweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faHeart} from '@fortawesome/free-solid-svg-icons'
import { isLiked } from "../reducers/isLiked";
import { removeTweetToStore } from "../reducers/tweet";
import { Trends } from "./Trends";

export function Tweet(props) {

  const dispatch = useDispatch()
  const isliked = useSelector(state => state.isLiked.value)

  
  const [counter, setCounter ] = useState(0);
  const [liked, setliked ] = useState(false);
  const [color, setColor] = useState();

  const removeTweet = () => {
    dispatch(removeTweetToStore(props))
  };


  const handleSubmit = () => {
    setliked(!liked)
    if(liked) {
      setColor({'color': 'red'})
      counter = 1
      setCounter(counter)
    } else {
      setColor({'color': 'grey'})
      counter = 0
      setCounter(counter)
    }
  };

  



  return (
    <div className={styles.ListTweet}>
    <div className={styles.main}>
      <div className={styles.rowTitle} >
      <div className={styles.imgUser} />
      <h1 style={{fontSize: '1.2em', color: 'azure', margin: 0}}>{props.username}</h1>
      <h1 style={{fontSize: '0.75em', color: 'grey', margin: 0}}>@{props.email}</h1>
      </div>
      <div style={{display: "flex", flexDirection: 'row'}}>
      <div style={{fontSize: '1em', color: 'white', margin: 2}}>{props.bodyTweet}</div>
      <div style={{fontSize: '1em', color: 'blue', margin: 2}}>{props.hashTag}</div>
      </div>
      <div className={styles.rowBlock}>
      <div><FontAwesomeIcon icon={faHeart} style={color} onClick={handleSubmit}/>{counter}</div>
      <div><FontAwesomeIcon icon={faTrashCan} style={{'color' : 'grey'}} onClick={removeTweet}/></div>
      </div>
    </div>
    </div>
  );
}
