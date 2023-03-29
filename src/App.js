
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Tienda } from "./pages/tienda/tienda";
import {Cart } from "./pages/cart/cart";
import {Navbar } from "./components/navbar";

import { TiendaContexto } from "./context/tienda-context";

function App() {
  return (
    <div className="App">
      <TiendaContexto>
        <Router>
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Tienda />} />
            <Route path="/cart" element={<Cart />} />
            {categories.map((category) => (
            <Route key={category} path={`/category/${category}`} element={<Category category={category} />} />
          ))}
          </Routes>
        </Router>
      </TiendaContexto>
    </div>
  );
}
export default App;
const categories = [
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Terror",
  "Romance",
];

function Category({ category }) {
  return <h1>Resultados para la categoría {category}</h1>;
}
