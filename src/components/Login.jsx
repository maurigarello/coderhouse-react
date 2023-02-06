const Login = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 mt-12 mx-auto bg-white rounded-md shadow-lg border border-gray-100 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 tracking-wide leading-normal">
          Iniciar sesión
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
            >
              Email
            </label>
            <input
              type="email"
              className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href={void(0)} className="text-xs text-gray-600 tracking-wide leading-normal hover:underline">
            Olvidaste tu contraseña?
          </a>
          <div className="mt-6">
            <button className="text-white tracking-wider leading-normal uppercase select-none focus:outline-non bg-gray-700 hover:bg-black focus:ring-transparent w-full text-center py-3 mt-3">
              Acceder
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          No tenés una cuenta?{" "}
          <a href={void(0)} className="font-medium text-black hover:underline">
            Registrarse
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
