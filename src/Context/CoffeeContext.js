import { createContext, useEffect, useState } from "react";
import { CoffeeDetails } from "../Data";

const CoffeeContext = createContext({});

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const Increment = (id) => {
    const cofitem = addedCoffee.find((item) => {
      return item.id === id;
    });
    addToCart(cofitem);
  };

  const Decrement = (id) => {
    const checkForNewCoffee = addedCoffee.find((item) => id === item.id);

    if (checkForNewCoffee) {
      const newCart = addedCoffee.map((item) => {
        if (item.id === id) {
          return { ...item, amount: checkForNewCoffee.amount - 1 };
        } else {
          return item;
        }
      });
      setAddedCoffee(newCart);
    }
    if (checkForNewCoffee.amount < 2) {
      removeFromCart(id);
    }
  };

  useEffect(() => {
    const total = addedCoffee.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalCost(total);
  });

  const addToCart = (coffee, amount) => {
    const newItem = { ...coffee, amount: 1 };
    const checkForNewCoffee = addedCoffee.find((item) => coffee.id === item.id);

    if (checkForNewCoffee) {
      const newCart = addedCoffee.map((item) => {
        if (item.id === coffee.id) {
          return { ...coffee, amount: checkForNewCoffee.amount + 1 };
        } else {
          return item;
        }
      });
      setAddedCoffee(newCart);
    } else {
      setAddedCoffee([...addedCoffee, newItem]);
    }
  };
  console.log(addedCoffee);

  const removeFromCart = (id) => {
    const newCart = addedCoffee.filter((coffee) => {
      return id !== coffee.id;
    });
    setAddedCoffee(newCart);
  };

  return (
    <CoffeeContext.Provider
      value={{
        addedCoffee,
        totalCost,
        Decrement,
        Increment,
        addToCart,
        removeFromCart,
        CoffeeDetails,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
export default CoffeeContext;
