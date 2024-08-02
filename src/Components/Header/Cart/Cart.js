import { useNavigate } from "react-router-dom";
import "./Cart.scss";

export const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-wrapper">
      <button
        className="cart-wrapper__btn"
        onClick={() => {
          navigate("/cart");
        }}
      ></button>
      <span className="cart-wrapper__text">Корзина</span>
    </div>
  );
};
