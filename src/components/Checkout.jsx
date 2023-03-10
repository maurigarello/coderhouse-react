import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../firebaseconfig";

const Checkout = () => {
  const addOrder = async (order) => {
    const docSnap = await addDoc(collection(db, "orders"), order);
    return docSnap.id;
  };

  const { cart, removeList, totalCartPrice, totalCart } =
    useContext(CartContext);

  const [ idCompra, setIdCompra ] = useState("");
  const [ showModal, setShowModal ] = useState(false);
  const [ buyer, setBuyer ] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirm: "",
  });

  const emailRegex =
    // eslint-disable-next-line
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const telephoneRegex =
    // eslint-disable-next-line
    /^[\]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

  const orderDate = new Date().toLocaleDateString();

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  function orderHandler() {
    const order = {
      buyer,
      item: cart,
      price: totalCartPrice(),
      date: orderDate,
    };
    addOrder(order).then((data) => {
      setIdCompra(data);
    });
  }

  return (
    <>
      <div className="flex justify-center mt-14 items-center mx-auto xl:max-w-7xl xl:mx-auto">
        <div className="flex w-full flex-col justify-center items-center">
          <h1 className="font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase self-start mb-6">
            Checkout
          </h1>

          <div className="flex w-full flex-col lg:flex-row justify-start items-start">
            <div className="flex flex-col self-start w-full md:w-1/2 mr-6">
              <h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">
                Resumen
              </h2>
              <div className="flex flex-col border border-gray-200 p-4 mt-6">
                <div
                  className={
                    "flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                >
                  <p>Cantidad de items:</p>
                  <p>{totalCart()}</p>
                </div>
                <div
                  className={
                    "flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                >
                  <p>Gastos de envío:</p>
                  <p>¡Envío gratis!</p>
                </div>
                <div
                  className={
                    "flex flex-row justify-between mt-10 font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase"
                  }
                >
                  <p>Total:</p>
                  <p>
                    {totalCartPrice().toLocaleString("es-ar", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
              <Link
                to="/cart"
                className="text-sm font-medium text-gray-500 hover:text-black tracking-wide leading-normal flex flex-row items-center mt-3 lowercase"
              >
                ➲ Volver al carrito
              </Link>
            </div>

            <div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">
              <form className="space-y-6">
                <h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">
                  Detalles de facturación
                </h2>
                <input
                  className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Nombre"
                />
                <input
                  className={
                    "px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                  id="surname"
                  type="text"
                  name="surname"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Apellido"
                />
                <input
                  className={
                    "px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                  id="telephone"
                  type="tel"
                  name="telephone"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                />
                <input
                  className={
                    "px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                  id="email"
                  type="email"
                  name="email"
                  required
                  onChange={handleSubmitChange}
                  placeholder="E-mail"
                />
                <input
                  className={
                    "px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full font-light text-sm text-gray-600 tracking-wide leading-normal"
                  }
                  id="emailConfirm"
                  type="email"
                  name="emailConfirm"
                  required
                  onChange={handleSubmitChange}
                  placeholder="Confirmar e-mail"
                />
              </form>

              {buyer.name &&
              buyer.surname &&
              buyer.telephone &&
              buyer.email === buyer.emailConfirm &&
              telephoneRegex.test(buyer.telephone) &&
              emailRegex.test(buyer.email, buyer.emailConfirm) ? (
                <input
                  onClick={() => {
                    orderHandler();
                    setShowModal(true);
                  }}
                  className={
                    "font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-700 hover:bg-black focus:ring-transparent w-full text-center py-3 cursor-pointer mt-6"
                  }
                  type="submit"
                  value="Proceder al pago"
                />
              ) : (
                <input
                  className={
                    "font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-700 focus:ring-transparent w-full text-center py-3 mt-6"
                  }
                  type="submit"
                  value="Proceder al pago"
                  disabled
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          showModal ? "flex" : "hidden"
        } inset-0 fixed w-full h-full bg-gray-800`}
      >
        <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
          <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
            <h2 className="text-center md:w-9/12 lg:w-7/12 font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase">
              ¡Muchas gracias por tu compra {buyer.name.toUpperCase()}!
            </h2>
            <p
              className={
                "mt-6 text-center md:w-9/12 lg:w-7/12 font-light text-sm text-gray-600 tracking-wide leading-normal"
              }
            >
              Te enviamos un mail a {buyer.email.toLowerCase()} con tu orden de
              compra ID: {idCompra}. MauriMart.
            </p>
            <Link to="/" className="mt-6 flex justify-center">
              <button
                onClick={removeList}
                className={
                  "font-medium text-xxs tracking-wider leading-normal uppercase select-none focus:outline-none text-white bg-gray-700 hover:bg-black focus:ring-transparent w-40 text-center py-3 cursor-pointer"
                }
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
