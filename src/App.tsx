import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Shop } from "./pages/Shop";
import { Discover } from "./pages/Discover";
import { Help } from "./pages/Help";
import { Holiday } from "./pages/Holiday";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Checkout } from "./pages/Checkout";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/help" element={<Help />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
