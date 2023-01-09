import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import LegoLogo from "../../assets/LEGO_logo_OG.svg";
import AccountIcon from "../../assets/account-icon.svg";
import "../App.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      <NavbarBs sticky="top" className="shadow-sm mb-3" id="nav-bg">
        <Container>
          <Link to="/">
            <img src={LegoLogo} alt="Lego Logo" className="lego-logo" />
          </Link>
          <Nav className="me-auto">
            {/* Nav.Link acts like react-router => give property to the link to...??*/}

            <Nav.Link to="/" as={NavLink}>
              <span className="nav-icon">🚗</span> Cars
            </Nav.Link>
            <Nav.Link to="/discover" as={NavLink}>
              <span className="nav-icon">🕵🏻‍♀️</span>Discover
            </Nav.Link>
            <Nav.Link to="/help" as={NavLink}>
              <span className="nav-icon">🙋🏼‍♀️</span>Help
            </Nav.Link>
            <Nav.Link to="/holiday" as={NavLink}>
              <span className="nav-icon">🎁</span>Holiday
            </Nav.Link>
          </Nav>
          <div className="account-btn">
            <a href="#">
              <img src={AccountIcon} alt="account-icon" />
              <p className="text">Account</p>
            </a>
          </div>

          {cartQuantity > 0 && (
            <div className="cart-icon">
              <Button
                onClick={openCart}
                style={{
                  minWidth: "3rem",
                  height: "3rem",
                  position: "relative",
                }}
                className="cart-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#ffc107"
                >
                  <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
                </svg>
                <p className="text-cart">bag</p>

                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            </div>
          )}
        </Container>
      </NavbarBs>
    </div>
  );
}
