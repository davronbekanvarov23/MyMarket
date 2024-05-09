import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
function Cart() {
  const { data } = useContext(GlobalContext);

  return <div>Cart</div>;
}

export default Cart;
