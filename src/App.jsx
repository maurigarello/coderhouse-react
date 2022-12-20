import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          {/** <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
