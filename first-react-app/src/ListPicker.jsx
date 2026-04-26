export default function ListPicker({values}){
    const randIdx = Math.floor(Math.random() * values.length);
    // if(Array.isArray(values)){
    const randEl = values[randIdx];
    // }else{
    //     const KeyArray = Object.keys(values);
    //     const ValArray = Object.values(values);
    //     const randEl = ValArray(randIdx);
    // }
    
    return (
        <div>
            <p>The List of Values: {values}</p>
            <p>Random element picked from list is : {randEl}</p>
        </div>
    )
}