import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>

    <div className="App">
      
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
      
    </div>

    <ItemCount />
   
    </>
  );
}

export default App;
