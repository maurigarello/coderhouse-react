import macgyver from "../assets/carrito macgyver.png";
import sillon_norte from "../assets/sillon_zona_norte.png";
import escalerita_canitas from "../assets/escalerita_canitas.png";
import sillita_pediatra_palermo from "../assets/sillita_pediatra_palermo.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Sillon Zona Norte",
    description: "Hecho con la pana mas fina del mercado",
    price: 1500,
    img: sillon_norte,
    stock: 14,
    category: "sillas",
  },
  {
    id: 2,
    name: "Escalerita Las Canitas",
    description: "La navaja suiza de las escaleritas de madera",
    price: 1200,
    img: escalerita_canitas,
    stock: 12,
    category: "utilerias",
  },
  {
    id: 3,
    name: "Sillita Pediatra Palermo",
    description: "Sillita estilo palermo soho",
    price: 1350,
    img: sillita_pediatra_palermo,
    stock: 6,
    category: "sillas",
  },
  {
    id: 4,
    name: "Carrito MacGyver",
    description: "El santo grial de los carritos",
    price: 1400,
    img: macgyver,
    stock: 18,
    category: "utilerias",
  },
];

export { PRODUCTS };
