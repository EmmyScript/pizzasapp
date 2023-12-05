import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
//import './App.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza_images/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza_images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza_images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza_images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza_images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza_images/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  

  return (
   <div className='container'>
    <Header />
    <Menu />
    <Footer />
    <Order/>
   </div>
  );

}

function Header() {
  

  return(
    <header className='header'>
   <h1> 
    emmy pizza co.
    <p>chart me up for free e-commerce app</p>
    
    </h1>
    
    </header>
  )
}

function Menu() {
 const pizzas = pizzaData;
  const numPizzas =pizzas.length;
  return(
  <main className='menu'>
    <h2 style={{color:'blue'}}>our menu </h2>


    <>
    <p style={{color:'red'}}>
      nigeria italian propperty has dishes to ghana.
      our stone oven all organic, all delicious
    </p>
  
    
    <ul className='pizzas'>
      {pizzaData.map((pizza)=>(
        <Pizza pizzaObje = {pizza} key={pizza}/>
      ))}
    </ul>
    </>
  
      <p className='back'>we are still working on our menu.please come back later</p>
    
   {/* <Pizza 
    name ='pizza spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese'
   photoName='pizza_images/spinaci.jpg' 
   price = {10} 
   />

<Pizza 
name='pizza funghi'
ingredients='tomato, mushrooms, onion'
price = {12}
photoN
ame = 'pizza_images/funghi.jpg'

/>
*/}

  </main>
  );
}

function Pizza({pizzaObje}) {
 // if (pizzaObje.soldOut) return null;
  
  return( 
    // conditional set css to element by using bkit and js expression
    <li className={ `pizza ${pizzaObje.soldOut ? "sold-out" : ""}`} > 
      <img src= {pizzaObje.photoName} alt={pizzaObje.name} />
      <div>
      <h3>{pizzaObje.name}</h3>
<p> {pizzaObje.ingredients}</p>
  <span>{pizzaObje.soldOut ? "SOLD OUT": pizzaObje.price}</span>
</div>
  </li>
  
  );
}

function Footer() {
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen)
//if(hour >= openHour && hour <= closeHour) alert("we're currently open!"); else
//alert("sorry we're closed");

  return(
   <footer className='footer'>
{isOpen ? (
  <Order closeHour={closeHour} openHour={openHour} />
) : ( 
  <p className='backs'>
    we're happy to welcome you between {openHour} 00: && {closeHour} :00.
  </p>
)}
    
  </footer>
  );
}
 
function Order({closeHour, openHour}){
  return(
    <div className='order'>
      <p>
        we're open  from {openHour}:00 to {closeHour}come vist us or order online
      </p>
      <button className='btn'>Order </button>
    </div>
  );
}


export default App;
