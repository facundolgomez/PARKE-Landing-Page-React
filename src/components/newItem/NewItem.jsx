import { useState, useEffect } from "react";

const NewItem = ({ id, title, description, image, loadNews }) => {  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showDeleteNewButton, setShowDeleteNewButton] = useState(false);
  const [showConfirmDeleteButton, setShowConfirmDeleteButton] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedImage, setEditedImage] = useState(image);

  // Función para acortar la descripción
  const shortenDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + " [...]";
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

  // Función para manejar la actualización
  const handleUpdateNew = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:7185/api/New/Update/${id}`, {
        method: "PUT", // O PATCH si tu backend lo soporta
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
        body: JSON.stringify({
          title: editedTitle,
          description: editedDescription,
          image: editedImage,
          // Envía todos los campos, pero el backend puede ignorar los no modificados
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      alert("Novedad actualizada correctamente.");
      loadNews(); // Recargar el listado
      setIsEditModalOpen(false); // Cerrar el modal
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error al actualizar la novedad.");
    }
  };


  // Función auxiliar para convertir URLs en links
const renderDescriptionWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split('\n').map((paragraph, index) => {
    const parts = paragraph.split(urlRegex);
    return (
      <p key={index} className="mb-4"> {/* Espacio entre párrafos */}
        {parts.map((part, i) => {
          if (part.match(urlRegex)) {
            return (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      </p>
    );
  });
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

      {/* Modal de edición */}

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
            <h3 className="text-xl font-semibold mb-4">Editar Novedad</h3>
            <form onSubmit={handleUpdateNew}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700">Título</label>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700">Descripción</label>
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md h-32"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700">URL de la imagen</label>
                <input
                  type="text"
                  value={editedImage}
                  onChange={(e) => setEditedImage(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Modal de lectura*/}

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
            <div className="whitespace-pre-line text-slate-600 leading-normal font-light mb-6">
            {renderDescriptionWithLinks(description)}
            </div>
            {/* Botón para cerrar el modal */}
            <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-sky-600 text-white px-4 py-2 rounded-md border-hidden hover:bg-sky-900 transition-all"
              >
                Cerrar
              </button>
              {showDeleteNewButton && (
                <>
                  <button
                  onClick={() => {
                    setIsModalOpen(false); // Cierra el modal de lectura
                    setIsEditModalOpen(true); // Abre el modal de edición
                  }}
                  className="bg-amber-500 text-white px-4 py-2 rounded-md border-hidden hover:bg-amber-600"
                >
                  Editar Novedad
                </button>
                  <button 
                    onClick={confirmDeleteHandler} 
                    className="bg-red-600 text-white px-4 py-2 rounded-md border-hidden hover:bg-red-800"
                  >
                    Borrar novedad
                  </button>
                </>
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