import styles from "./Input.module.css"

const Input = ({ handleOnKeyDown }) => {

    
    return (
        <input type="text"
            placeholder="VIP Fruit"
            className={styles.input}
            onKeyDown={handleOnKeyDown}
        />
    )
}

export default Input;



