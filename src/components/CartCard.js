import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import CoffeeContext from "../Context/CoffeeContext";


const CartCard = ({item}) => {
  const { Decrement } = useContext(CoffeeContext);
  const { Increment } = useContext(CoffeeContext);
  const { removeFromCart } = useContext(CoffeeContext);
  const { addedCoffee } = useContext(CoffeeContext);
  const { totalCost } = useContext(CoffeeContext);
  


  return (
    <div className="cart-container" key={item.id}>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </thead>
        {addedCoffee.map((item) =>{
  const { Img ,  id , coffee_name , price ,amount}  = item;
          return(
          <tbody key={item.id}>
          <tr>
            <td className="product-img">
              <img src={Img} alt="coffee_pic" />
            </td>
            <td>
              <h5> {coffee_name} </h5>
            </td>
            <td>
              <h3> ${price} </h3>
            </td>
            <td className="count" >
              <button className="sub" onClick={()=>Decrement(id)}>-</button>
              <h3> {amount} </h3>
          <button  className="add" onClick={()=>Increment(id)}>+</button>
              
            </td>
            <td>
              <h3>{ ` ${parseFloat( price * amount).toFixed(2)}`  } </h3>
            </td>
            <td>
              <RiDeleteBin6Line onClick={() => removeFromCart(id)} style={{ fontSize: 15, color: "red" }} />
            </td>
          </tr>
        </tbody>
          )
        })}
              
      </table>

      <div className="cart-sub">
        <h3> subtotal: $ {parseFloat(totalCost).toFixed(2)} </h3>
      </div>

      <div className="cart-btn">
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};
export default CartCard;
