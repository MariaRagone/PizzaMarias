import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import { CartContext } from "./contexts";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <Link to={"/"}>
        <h1>Pizza Maria's</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
