export default function ColorList({colors}){
    const list = colors.map((color) => <li style={{color:color}}>{color}</li>);
    return(
        <div>
            <p>
                Color list
                <ul>{list}</ul>
            </p>
            
        </div> 
    )
}

