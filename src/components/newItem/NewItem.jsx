import ReadMoreButton from "../readMoreButton/ReadMoreButton";
const NewItem = ({ id, title, description, date, image }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md max-w-full lg:max-w-4xl xl:max-w-5xl">
      <img
        src={image}
        alt={title}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-2/3 h-auto object-cover rounded-lg mb-6"
      />

      <small className="text-gray-500 mb-3 text-left">{date}</small>

      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 text-left mb-4">
        {title}
      </h1>

      <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left mb-6">
        {description}
      </p>

      <ReadMoreButton />
    </div>
  );
};
export default NewItem;
