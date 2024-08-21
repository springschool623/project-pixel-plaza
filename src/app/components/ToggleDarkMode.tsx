import styles from '../../../styles/ToggleDarkMode.module.css';

const ToggleDarkMode = () => {
  return (
    <div className={styles.darkmodeContainer}>
        <input type="checkbox" id="darkmodeButton"/>
        <label htmlFor="darkmodeButton" className={styles.darkmodeLabel}></label>

    </div>
  );
};

export default ToggleDarkMode;
