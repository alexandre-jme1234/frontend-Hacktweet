import Home from "./Home.js";
import styles from "../styles/Dashboard.module.css";
import tweet, { addTweetToStore } from "../reducers/tweet.js";
import { useDispatch, useSelector } from "react-redux";
import { createRoot } from "react-dom/client";
import { validHashtag } from "./Regex.js";
import { useState } from "react";
import {Trends} from '../components/Trends.js';

import { Input } from "antd";

import Logout from "./Logout.js";
import { Tweet } from "./Tweet.js";

function Dashboard(props) {
  const dispatch = useDispatch();

  const [confirmeConnexion, SetConfirmeConnexion] = useState("");
  const [createTweet, SetCreateTweet] = useState("");

  const allTweet = useSelector((state) => state.tweet.value);
  const username = useSelector((state) => state.user.value);

  const eachTweet = allTweet.map((data, i) => {
    console.log("data _", data);
    const filterTweet = data.replace(validHashtag, "");
    const hashTag = data.match(validHashtag);
    return (
      <Tweet
        key={i}
        bodyTweet={filterTweet}
        username={username.name}
        email={username.email}
        hashTag={hashTag}
      />
    );
  });

const eachHashtag = allTweet.map((data, i) => {
  const hashTagFiltered = data.match(validHashtag);
  console.log("data _", data);
  if(hashTagFiltered){
    console.log('hashatag save', hashTagFiltered.typeof)
    return (
      <Trends
        key={i}
        hashTag={hashTagFiltered}
      />
    );
  };
});



  const handleSubmit = () => {
    if (createTweet !== "") {
      dispatch(addTweetToStore(createTweet));
    }
    console.log("Champs vide");
  };

  const stateLogged = (e) => {
    console.log("LogoutProp Bien remontée", e);
    SetConfirmeConnexion(e);
    console.log("ValidationConfirmeConnexion", confirmeConnexion);
    if (confirmeConnexion === "login") {
      console.log("register _", props.toggleForm);
      props.toggleForm("login");
    } else {
      console.log("props de statut non remonté");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.fristColumn}>
        <div className={styles.subLogo} alt="Logo" />
        <div style={{ marginTop: "180%" }}>
          <Logout stateLogged={stateLogged} />
        </div>
      </div>
      <div className={styles.mainContent}>
        <h1
          style={{ color: "white", fontSize: "1em", fontFamily: "MontHeavy" }}
        >
          Hello
        </h1>
        <div className={styles.inputTweet}>
          <Input
            showCount
            maxLength={100}
            marginLeft="10px"
            onChange={(e) => SetCreateTweet(e.target.value)}
            value={createTweet}
          />
          <button
            type="button"
            className={styles.tweetBtn}
            onClick={handleSubmit}
          >
            Tweet
          </button>
        </div>
        <div id="tweet">{eachTweet}</div>
      </div>
      <div className={styles.secondColumn}>
        <div className={styles.mainContent}>
          <h1
            style={{ color: "white", fontSize: "1em", fontFamily: "MontHeavy" }}
          >
            Trends
          </h1>
          <div className={styles.contentHashtag}>{eachHashtag}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
