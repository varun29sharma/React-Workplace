export default function Die(numSides){
    const roll = Math.floor(Math.random()*numSides.numSides) + 1;
    return <p>{numSides.numSides} sided Die roll : {roll}</p>;
}