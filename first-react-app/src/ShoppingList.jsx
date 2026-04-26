import ShoppingListItem from "./ShoppinListItem";

function ShoppingList({items}){
    return(
        <ul>
            {items.map(i => 
                <ShoppingListItem obj = {i}/>
            )}
        </ul>
    )

}

export default ShoppingList;