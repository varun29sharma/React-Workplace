import { use, useState } from "react";
export default function Scorekeeper(){
    const [scores, setScores] = useState({p1Score : 0, p2Score : 0});
    function incrP1Score(){
        //if i do this even though value of p1 increases
        //but the change isn't render in the frame bcuz
        //when working with object when u change the variable in it
        //its the same copy u r working on soo technically there is 
        //no change in the object even thought u are incrementing the 
        //value of p1score...and since react doesn't do unneccesary 
        //re-renders the scores aren't updated thats why we should be
        //making a new copy of the object and then reflect those changes 
        //in the original copy
        // scores.p1Score += 1;
        // console.log(scores);
        // setScores(scores);

        //now to make a new copy of the object we use the 
        //spread operator {...} -> a veryyyyy simple way 
        const newScores = {...scores, p1Score: scores.p1Score + 1};
        
        // setScores(newScores);
        //this works now.
        //this form of passing just a single arg to setter function is accepted
        //but a better alternative is to use arrow function

        setScores((oldScores) => {
            return {...oldScores, p1Score :oldScores.p1Score + 1 };
        })

    }
    function incrP2Score(){
        const newScores = {...scores, p2Score : scores.p2Score + 1};
        setScores(newScores);
    }
    return(
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            
            <button onClick={incrP1Score}>+1 Player</button>
            <button onClick={incrP2Score}>+2 Player</button>
        </div>
    )
}
