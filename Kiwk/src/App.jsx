import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/itemList"
          element={<ItemListContainer greeting="Bienvenido" />}
        />
        <Route path="/" element={<ItemCount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
