import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Discover } from "./pages/Discover";
import { Help } from "./pages/Help";
import { Holiday } from "./pages/Holiday";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/help" element={<Help />} />
          <Route path="/holiday" element={<Holiday />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
