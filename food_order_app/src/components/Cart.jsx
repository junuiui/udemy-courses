import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {

  const CartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleCheckout() {
    userProgressCtx.showCheckout();
  }

  const cartTotal = CartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {CartCtx.items.map((item) => (
          <CartItem key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => CartCtx.addItem(item)}
            onDecrease={() => CartCtx.removeItem(item.id)} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>Close</Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </p>
    </Modal>
  );
}