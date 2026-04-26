function handleClick(){
    console.log("Clicked the Button!")
}

function handleHover(){
    console.log("Hovered over the Button!")
}

export default function Clicker(){
    return (
        <div>
            <p>Click/Hover the Button</p>
            <button onClick={handleClick}>Click</button>
            <br />
            <button onMouseOver={handleHover}>Hover</button>
        </div>
    )
}