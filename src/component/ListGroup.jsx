import ListGroupItem from "./ListGroupItem";

const ListGroup = ({ items, handleDelete, handleBuy }) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <ListGroupItem
                    key={item}
                    item={item}
                    handleBuyButtonClicked={() => handleBuy(item)} // ✅ NEW
                    handleDeleteButtonClicked={() => handleDelete(item)}
                />
            ))}
        </ul>
    );
};

export default ListGroup;
