export default function Property({name,price,rating,id}){
    return(
        <div className="Property" style={{border: "1px solid white", margin: "3px"}}>
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <h4>{rating}⭐️</h4>
        </div>
    )
} 