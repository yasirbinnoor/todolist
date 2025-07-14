import styles from "./ListGroupItem.module.css";

const ListGroupItem = ({ item, handleBuyButtonClicked, handleDeleteButtonClicked }) => {
    return (
        <li className={`${styles["kg-item"]} list-group-item`}>
            <span className={styles["kg-span"]}>{item}</span>
            <div className="d-flex gap-2">
                <button
                    className={`${styles.button} btn btn-info`}
                    onClick={handleBuyButtonClicked}
                >
                    Buy
                </button>

                <button
                    className={`${styles.button} btn btn-danger`}
                    onClick={handleDeleteButtonClicked}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ListGroupItem;
