import styles from './button.module.css';
export  function PrimaryButton({
    buttonText,}) {
      return (
          <button className={styles.btn}>
             {buttonText}
          </button>
      )
};