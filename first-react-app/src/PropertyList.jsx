import Property from "./Property"
import "./PropertyList.css"
export default function Propertylist({props}){
    return (
        <div className="PropertyList">
            {props.map(p => {
                return <Property {...p} />
            })}

        </div>
    )
}