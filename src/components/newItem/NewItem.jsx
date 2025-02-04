
const NewItem = ({ id, title, description, image }) => {  
  return (  
    <div key={id} className="relative flex flex-col md:flex-row my-6 bg-white shadow-sm border border-slate-200 w-3/4 max-w-7xl mx-auto">  
      {/* Columna de la imagen */}  
      <div className="w-full md:w-1/3 flex-shrink-0">  
        <div className="w-full h-48 md:h-full overflow-hidden">  
          <img  
            src={image}  
            alt={title}  
            className="w-full h-full object-cover"  
          />  
        </div>  
      </div>  
      {/* Columna del texto */}  
      <div className="p-6 flex flex-col justify-center flex-grow">  
        <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">  
          NOVEDAD  
        </div>  
        <h4 className="mb-2 text-slate-800 text-xl font-semibold">  
          {title}  
        </h4>  
        <p className="mb-8 text-slate-600 leading-normal font-light">  
          {description}  
        </p>  
        <div>  
          <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">  
            Leer más  
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />  
            </svg>  
          </a>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default NewItem;