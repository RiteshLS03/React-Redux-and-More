import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <div className={`pizza ${props.soldOut && "sold-out"}`}>
      <img src={props.photoName} alt={props.name} style={{ borderRadius: 8 }} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient} </p>
        <span>{props.soldOut ? "SOLD OUT" : props.price} </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

const Menu = function () {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu ">
      <h2>Our Menu</h2>
      {numPizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            // console.log("hello");
            return (
              <Pizza
                name={pizza.name}
                photoName={pizza.photoName}
                ingredient={pizza.ingredients}
                price={pizza.price}
                key={pizza.name}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and recotta cheese"
        photoName="Pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, Mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 6;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currenly open");
  // } else {
  //   alert("Sorry! We're close ");
  // }

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour} openHour={openHour} />}
    </footer>
  );
};

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default App;
