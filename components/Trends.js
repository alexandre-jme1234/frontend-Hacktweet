import styles from "../styles/Trends.module.css";




export function Trends(props) {
  return (<div className={styles.content}>
  <div className={styles.section} style={{color: 'blue'}}>{props.hashTag}</div>
  <div className={styles.section}>'Hey'</div>
  </div>
  )
}
