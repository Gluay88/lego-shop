import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { NavLink, Link } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const load = () => {
    window.location.replace("/checkout");
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Bag 🛍️</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(
                  (itemC) => itemC.id === cartItem.id
                );
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <div className="checkout-btn">
            <button onClick={load}>Proceed and Checkout</button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
