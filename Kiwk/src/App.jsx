import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";
import Clicker from './components/Clicker';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
      <Clicker />
    </div>
  );
}

export default App;
