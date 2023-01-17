import CreditCard from "../components/CreditCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Checkout() {
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="sub-container">
      <div>
        {cartQuantity ? (
          <h2>Checkout</h2>
        ) : (
          <h2>
            Your bag is empty! 👉🏻 <a href="/">continue shopping </a>
          </h2>
        )}
      </div>
      <div className="checkout-container">
        <div className="form-container">
          <h2>
            <span>1</span> Shipping
          </h2>
          <h4>Enter shipping details</h4>
          <form>
            <label>First Name</label>
            <input placeholder="Emmet" />
            <label>Last Name</label>
            <input placeholder="Brickowski" />
            <label>Phone number</label>
            <input placeholder="619-888-8888" />
            <label>Address</label>
            <input placeholder="123 Awesome Street" />
            <label>Apt / Suite (optional)</label>
            <input placeholder="Apt. 8A" />
            <label>City</label>
            <input placeholder="Bricksburg" />
            <label>State</label>
            <input placeholder="CA" />
            <label>Zip code</label>
            <input placeholder="92107-8888" />
          </form>
          <div className="seach-address">
            <a href="#">Search for another address</a>
            <br />

            <p>
              <input type="checkbox" />
              &nbsp; Use this as my billing address
            </p>
          </div>
        </div>
        <div className="credit-container">
          <h2>
            <span>2</span> Payment
          </h2>
          <CreditCard />
        </div>
      </div>
    </div>
  );
}
