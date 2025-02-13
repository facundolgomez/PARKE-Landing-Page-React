import { useState, useEffect } from "react";

const NewItem = ({ id, title, description, image, loadNews }) => {  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteNewButton, setShowDeleteNewButton] = useState(false);
  const [showConfirmDeleteButton, setShowConfirmDeleteButton] = useState(false);

  // Función para acortar la descripción
  const shortenDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "[...]";
  };

  // mostrar el boton de eliminar novedad solo si el admin está logueado.
  useEffect(() => {
    const showDeleteButtonHandler = () => {
      const userStored = localStorage.getItem("user");

      // Verifica si hay un usuario en localStorage
      if (userStored) {
        const userObject = JSON.parse(userStored);
        const userType = userObject.newUser.userType;

        // Si el usuario es Admin, muestra el formulario
        if (userType === "Admin") {
          setShowDeleteNewButton(true);
        }
      }
    };

    // Ejecuta la función al cargar el componente
    showDeleteButtonHandler();
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez (al montar el componente)

  const confirmDeleteHandler = () => {
    setShowConfirmDeleteButton(true)
  }

  const deleteDataNewHandler = async (id) => {
    try {
      const response = await fetch(`https://localhost:7185/api/New/Delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
  
      // Verificar si la respuesta es exitosa (código 2xx)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      // Si la respuesta es exitosa...
      console.log("Eliminación exitosa.");
  
      // Aquí puedes agregar lógica adicional, como actualizar el estado de tu aplicación
      // o mostrar un mensaje de éxito al usuario.
      loadNews();
      alert("Elemento eliminado correctamente.");
  
    } catch (error) {
      // Manejo de errores
      console.error("Error al eliminar el elemento:", error);
  
      // Mostrar un mensaje de error al usuario
      alert("Hubo un error al eliminar el elemento. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
      <div key={id} className="relative flex flex-col md:flex-row my-6 bg-white shadow-lg border border-slate-200 rounded-md w-3/4 max-w-7xl mx-auto">  
        {/* Columna de la imagen */}  
        <div className="w-full md:w-1/3 flex-shrink-0">  
          <div className="w-full h-48 md:h-full overflow-hidden">  
            <img  
              src={image}  
              alt={title}  
              className="w-full h-full rounded-md shadow-lg object-cover"  
            />  
          </div>  
        </div>  
        {/* Columna del texto */}  
        <div className="p-6 flex flex-col justify-center flex-grow">  
          <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">  
            NUEVO
          </div>  
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">  
            {title}  
          </h4>  
          <p className="mb-8 text-slate-600 leading-normal font-light break-words">  
            {shortenDescription(description, 150)}{" "} 
          </p>  
          <button
              onClick={() => setIsModalOpen(true)}
              className="text-slate-800 font-semibold text-sm hover:underline flex items-center border-hidden bg-transparent w-32"
            >
              Leer más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
        </div>  
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4 md:mx-6 lg:mx-auto max-h-[90vh] overflow-y-auto">
            {/* Imagen en el modal */}
            <div className="flex justify-center w-full max-h-1/2-screen overflow-hidden">  
            <img  
              src={image}  
              alt={title}  
              className="w-auto max-h-[40vh] rounded-md shadow-lg object-contain"  
            />  
          </div>
            {/* Título en el modal */}
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
              {title}
            </h2>
            {/* Descripción completa en el modal */}
            <p className="text-slate-600 leading-normal font-light mb-6">
              {description}
            </p>
            {/* Botón para cerrar el modal */}
            <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-900 transition-all"
              >
                Cerrar
              </button>
              {showDeleteNewButton && (
                <button 
                  onClick={confirmDeleteHandler} 
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800"
                >
                  Borrar novedad
                </button>
              )}
            </div>

            {showConfirmDeleteButton && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                  {/* Mensaje de confirmación */}
                  <p className="text-slate-800 text-lg font-semibold mb-6 text-center">
                    ¿Está seguro que desea eliminar la novedad?
                  </p>
                  {/* Botones de acción */}
                  <div className="flex justify-end space-x-4">
                    {/* Botón Cancelar */}
                    <button
                      onClick={() => setShowConfirmDeleteButton(false)}
                      className="bg-sky-600 border-hidden text-white px-4 py-2 rounded-md hover:bg-sky-900 transition-all"
                    >
                      Cancelar
                    </button>
                    {/* Botón Confirmar */}
                    <button
                      onClick={() => {
                        deleteDataNewHandler(id); // Llama a la función para eliminar la novedad
                        setShowConfirmDeleteButton(false); // Cierra la ventana emergente
                      }}
                      className="bg-red-600 border-hidden text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );  
};  

export default NewItem;