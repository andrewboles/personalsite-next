import styles from '../styles/StyledButton.module.css'

const StyledButton = ({onClick, text, style}) => {

  console.log(styles.styledButton)

  return (
    <button onClick={onClick} className={styles.styledButton} style={style}>
      {text}
    </button>
  )
}

export default StyledButton