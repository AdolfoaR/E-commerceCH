
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Tienda } from "./pages/tienda/tienda";
import {Cart } from "./pages/cart/cart";
import {Navbar } from "./components/navbar";
import {Category } from "./components/category"

import { TiendaContexto } from "./context/tienda-context";

function App() {
  const categories = [
    "Acción",
    "Aventura",
    "Comedia",
    "Drama",
    "Terror",
    "Romance",
  ];

  return (
    <div className="App">
      <TiendaContexto>
        <Router>
          <Navbar categories={categories} />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/cart" element={<Cart />} />
            {categories.map((category) => (
              <Route
                key={category}
                path={`/category/:category`}
                element={<Category category={category} />}
              />
            ))}
          </Routes>
        </Router>
      </TiendaContexto>
    </div>
  );
}
export default App;


