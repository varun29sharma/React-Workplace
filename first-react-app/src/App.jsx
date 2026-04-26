import { useState } from 'react'
import './App.css'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';

const data = [
  {item: 'veggies', quantity: 5, completed: false},
  {item: 'pineapple', quantity: 3, completed: true},
  {item: 'Milk', quantity: 2, completed: true},
  {item: 'bananas', quantity: 12, completed: false},

]

function App() {
  return (
    <div>
      <ShoppingList items = {data}/>
      {/* <Heading color="aqua" text="Welcome,to React" /> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <ColorList colors={["red", "blue", "green"]} /> */}
      {/* <Greeter person="React" from="Varun"/>
      <Die numSides={20}/>
      <Die numSides={10}/>
      <Die numSides={6}/> */}

      {/* <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a","b","c"]}/> */}
      {/* <ListPicker values={{a:1,b:2,c:3,d:4,e:5}}/> */}

      {/* <Slots v1="❤️" v2="-" v3="❤️"/> */}

    </div> 
  )
}  

export default App
 