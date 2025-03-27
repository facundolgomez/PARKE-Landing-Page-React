import PropTypes from 'prop-types';

const UpScreen = ({ pathImage, title, paragraph }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src={pathImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-8 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl w-full">
          <div className=" bg-white rounded-xl overflow-hidden shadow-lg opacity-100">
            <h1 className="text-xl sm:text-2xl font-semibold text-white px-4 py-3 bg-blue-600/90">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-900 px-4 py-3 opacity-100">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

UpScreen.propTypes = {
  pathImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default UpScreen;