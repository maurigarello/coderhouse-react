import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
    </div>
  );
}

export default App;
