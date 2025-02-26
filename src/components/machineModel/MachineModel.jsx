const MachineModel = ({ image, title, description }) => {
  return (
    <div
      className="relative h-96 bg-cover bg-center w-72"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <section className="absolute bottom-0 left-0 mb-4 bg-transparent dark:bg-dark">
        <div className="mx-auto sm:container">
          <div className="flex flex-col text-white">
            <h1 className="text-2xl font-semibold bg-sky-600 text-white px-4 py-2">
              {title}
            </h1>
            <p className="text-sm font-medium text-body-color justify-center items-center text-center dark:text-dark-6 bg-black px-4 py-2">
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineModel;
