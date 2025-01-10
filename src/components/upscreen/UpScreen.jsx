

const UpScreen = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/imagenes-de-fondo/imagen-contacto-2.jpg")',
      }}
    >
      <section className="absolute bottom-0 left-0 mb-4 bg-transparent dark:bg-dark">
        <div className="mx-auto sm:container">
          <div className="flex flex-col text-white">
            <h1 className="text-2xl font-semibold bg-sky-600 text-white px-4 py-2">
              Contacto
            </h1>
            <p className="text-sm font-medium text-body-color justify-center items-center text-center dark:text-dark-6 bg-black px-4 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpScreen;
