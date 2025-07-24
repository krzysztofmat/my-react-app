import styles from "./my-style.module.css";

function Car(props) {
    return <h2 className={styles.bigblue}>I am a {props?.brand?.model ?? 'Unknown'}</h2>
}

export default Car;