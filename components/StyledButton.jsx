import styles from '../styles/StyledButton.module.css'

const StyledButton = ({ text, type="button", ...props}) => {

  console.log(styles.styledButton)

  return (
    <button type={type} className={styles.styledButton}  {...props}>
      {text}
    </button>
  )
}

export default StyledButton