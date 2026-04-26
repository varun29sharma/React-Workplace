function ShoppingListItem({obj}){
    const styles = {color: obj.completed ? "green" : "aqua",
        textDecoration: obj.completed ? "line-through" : "none"
    };
    return(
        <li style={styles}>
            {obj.item} - {obj.quantity}
        </li>
    )
}
export default ShoppingListItem;