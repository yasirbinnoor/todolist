import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ items }) => {
    if (items.length === 0) {
        return <h3 className={styles.error}>Null List</h3>;
    }
    return null;
};

export default ErrorMessage;
