import { useContext } from "react"

import Modal from "./UI/Modal"
import Input from "./UI/Input";
import Button from "./UI/Button";

import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

import { currencyFormatter } from "../utils/formatting";
import Error from "./Error";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function Checkout() {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading: isSending, error, sendRequest } = useHttp('http://localhost:3000/orders', requestConfig)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  function handleClose() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // {email: ...}

    sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      }
    }))
  };

  let actions = (<><Button type="button" textOnly onClick={handleClose}>Close</Button>
    <Button >Submit Order</Button></>)

  if (isSending) {
    actions = <span>sending...</span>
  }

  if (data && !error) {
    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <h2>Success</h2>
      <p>Your order was sumitted!</p>
      <p className="modal-actions">
        <Button onClick={handleClose}>Ok</Button>
      </p>
    </Modal>
  }

  return <Modal
    open={userProgressCtx.progress === 'checkout'}
    onClose={userProgressCtx.progress === 'checkout' ? handleClose : null}>
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

      <Input label="Full Name" type="text" id="name" />
      <Input label="E-Mail Address" type="email" id="email" />
      <Input label="Street" type="text" id="street" />
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>

      {error && <Error title="Failed to submit" message={error} />}

      <p className="modal-actions">
        {actions}
      </p>

    </form>
  </Modal>
}