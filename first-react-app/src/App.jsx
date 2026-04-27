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
import Propertylist from './PropertyList';
import Clicker from './Clicker';
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBox  from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

const colors = [
  "#E53E3E", // Red
  "#38A169", // Green
  "#3182CE", // Blue
  "#D69E2E", // Yellow
  "#805AD5", // Purple
  "#319795", // Teal
  "#D53F8C", // Pink
  "#DD6B20", // Orange
  "#718096", // Gray
  "#4A5568", // Dark Gray
  "#F56565", // Light Red
  "#48BB78", // Light Green
  "#4299E1", // Light Blue
  "#ED8936", // Light Orange
  "#9F7AEA", // Light Purple
  "#667EEA", // Indigo
];

// const data = [
//   {item: 'veggies', quantity: 5, completed: false},
//   {item: 'pineapple', quantity: 3, completed: true},
//   {item: 'Milk', quantity: 2, completed: true},
//   {item: 'bananas', quantity: 12, completed: false},

// ]

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];


function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors}/>
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Clicker message = "HI!!!" btnText = "Click Me"/> */}
      {/*  <Clicker message = "Stop Clicking" btnText = "don't click"/> */}




      {/* <Propertylist props = {properties}/> */}


      {/* <ShoppingList items = {data}/> */}
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
 