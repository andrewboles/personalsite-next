import styles from '../styles/StyledButton.module.css'

const StyledButton = ({onClick, text, style, type="button"}) => {

  console.log(styles.styledButton)

  return (
    <button type={type} onClick={onClick} className={styles.styledButton} style={style}>
      {text}
    </button>
  )
}

export default StyledButton