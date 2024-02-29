import { Link } from "react-router-dom";

function HomePage() {


  return (
    <div>
    <section style={{ backgroundColor: '#04364A' }} className="flex justify-center items-center">
      <header style={{ backgroundColor: '#04364A' }} className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">Minsait</h1>
        <p className="text-md text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          fugit doloremque molestias recusandae labore repellat amet dicta tempore
          necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
          quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
          ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
          officia accusantium vitae doloremque, molestias modi.
        </p>

        <Link
          style={{ backgroundColor: '#04364A' }} className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/login"
        >
          Inicia Sesión
        </Link>
      </header>
    </section>

    {/* Nueva sección */}
    <section className="flex justify-center items-center my-5" style={{ backgroundColor: '#04364A' }}>
  <div className="flex justify-between w-full max-w-4x3">
    <div className="w-1/2">
      <img src="/src/assets/home1.png" alt="Descripción de la imagen" className="w-full h-auto" />
    </div>
    <div className="w-1/2 px-10">
      <h2 className="text-5xl py-2 font-bold">Título de la Sección</h2>
      <p className="text-md text-slate-400">
        Texto descriptivo que acompaña a la imagen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor quam eget arcu consequat, vel efficitur risus sollicitudin. Mauris quis erat mi. Integer pharetra ipsum et vestibulum fermentum.
      </p>
      <Link
          style={{ backgroundColor: '#04364A' }} className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Crea una Nueva Cuenta
        </Link>
    </div>
  </div>
</section>
<section className="flex justify-center items-center my-5">
    <div className="flex justify-between w-full max-w-4x3">
      {/* Primera tarjeta */}
      <div className="w-1/3 px-2">
        <div className="bg-white rounded-lg shadow-md p-5">
          <img src="/src/assets/home1.png" alt="Descripción de la imagen" className="w-full h-auto" />
          <p className="text-md text-gray-600 mt-4">Texto debajo de la primera imagen.</p>
        </div>
      </div>
       {/* segunda tarjeta */}
       <div className="w-1/3 px-2">
        <div className="bg-white rounded-lg shadow-md p-5">
          <img src="/src/assets/home1.png" alt="Descripción de la imagen" className="w-full h-auto" />
          <p className="text-md text-gray-600 mt-4">Texto debajo de la tercera imagen.</p>
        </div>
      </div>
      {/* tercera tarjeta */}
      <div className="w-1/3 px-2">
        <div className="bg-white rounded-lg shadow-md p-5">
          <img src="/src/assets/home1.png" alt="Descripción de la imagen" className="w-full h-auto" />
          <p className="text-md text-gray-600 mt-4">Texto debajo de la segunda imagen.</p>
        </div>
      </div>
    </div>
  </section>


  </div>

  );
}

export default HomePage;
