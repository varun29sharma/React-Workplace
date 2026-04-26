export default function Greeter(props){
    // console.log(props.person);
    return(
        <>
            <h1>HI THERE, {props.person}!</h1>
            <h2>-{props.from}</h2>
        </>
    );
} 