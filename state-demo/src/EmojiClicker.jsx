import {v4 as uuid} from 'uuid';
import { useState } from "react"
export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
    function randomEmoji(){
        const choice = ["😒","😘","😳","😎"];
        return choice[Math.floor(Math.random() * choice.length)];
    }
    const addEmoji = () => {
        setEmojis((oldEmoji) => {
            return [...oldEmoji, {id: uuid(), emoji: randomEmoji()}];
        })
    }
    const deleteEmoji = (id) => {
        //console.log(id);
        //we use filter method to sort out the unwanted id
        //basically pretending to delete it
        setEmojis((prevEmojis) => {
            return prevEmojis.filter(e => e.id !== id);
        })

    }
    const allHearts = () => {
        setEmojis((item) => {
            return item.map(e => {
                return {...e, emoji : "❤️"};
            })
        }) 
    }
    return( 
        <div>
            {emojis.map((e) =>( 
                //we write an arrow function here bcuz if we did
                //{deleteEmoji(e.id)}-> it would be exectued immediately
                //and thats not what we want...therefore we use this => to
                //cover up for that immediate execution

                <span onClick={() => {deleteEmoji(e.id)}} key={e.id} style={{fontSize : "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={allHearts}>Make em all hearts</button>
        </div>
    )
}