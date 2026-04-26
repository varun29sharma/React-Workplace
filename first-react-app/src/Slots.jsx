export default function Slots({v1,v2,v3}){
    const res = (v1 === v2 && v2 === v3 && v3 === v1);
    return(
        <div >
            <h1>{v1} {v2} {v3}</h1>
            <h2 style={{color: res ? "green" : "red"}}>
                {res ? <h3>You win<p style={{fontSize:"30px"}}>Congrats</p></h3> : <h3>You Lose<p>Try Again</p></h3>}
            </h2>
            
        </div>
    )
    
}