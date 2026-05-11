import { useState } from "react";
export default function Scorekeeper2({n,target}){
    const [scoreState, setScoreState] = useState({scores: Array(Number(n)).fill(0),gameId: 1});

    const incScore = (idx) => {
        setScoreState((prev) => {
            const updatedScore = prev.scores.map((s,i) => (i === idx ? s + 1 : s));

            return{...prev, scores: updatedScore};
        })
    }
    
    const winnerIdx = scoreState.scores.findIndex(s => s >= target);

    function reset(){
        setScoreState((prev) => ({
            ...prev,
            scores: Array(Number(n)).fill(0)
        }));
    }

    return(
        <div>
            {scoreState.scores.map((score, i) => (
                <div>
                    <div key={i}>
                        <span>Player {i+1}: {score}</span>
                        <button onClick={() => incScore(i)}>+1</button>
                        {i === winnerIdx && <b>WINNER!</b>}
                    </div>
                    
                </div>
                
            ))}
            <div>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    )
}