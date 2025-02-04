import UpScreen from "../upscreen/UpScreen";
import NewItem from "../newItem/NewItem";
import { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";

const News = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [news, setNews] = useState([]); // Estado para almacenar las novedades de la API

  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const changeImageUrlHandler = (event) => {
    setImageUrl(event.target.value);
  };

  // Función para obtener las novedades de la API
  const fetchNews = async () => {
    try {
      const response = await fetch("https://localhost:7185/api/New/GetAll");
      if (!response.ok) {
        throw new Error("Error al obtener las novedades");
      }
      const data = await response.json();
      setNews(data); // Almacena las novedades en el estado
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  // Obtener las novedades al cargar el componente
  useEffect(() => {
    fetchNews();
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez (al montar el componente)


  // mostrar el formulario de crear novedades solo si el admin está logueado.
  useEffect(() => {
    const showFormHandler = () => {
      const userStored = localStorage.getItem("user");

      // Verifica si hay un usuario en localStorage
      if (userStored) {
        const userObject = JSON.parse(userStored);
        const userType = userObject.newUser.userType;

        // Si el usuario es Admin, muestra el formulario
        if (userType === "Admin") {
          setShowForm(true);
        }
      }
    };

    // Ejecuta la función al cargar el componente
    showFormHandler();
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez (al montar el componente)



  const submitNewHandler = (event) => {
    event.preventDefault();
    console.log("se mandó el formulario")
    const newNew = {
      title: title,
      description: description,
      image: imageUrl,
    };

    saveDataNewHandler(newNew);   // FUNCION DE LLAMADO A LA API
  };

  const saveDataNewHandler = async (newNewData) => {
    fetch("https://localhost:7185/api/New/Create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(newNewData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("todo joya")
          return response.json(); // manejar respuesta exitosa
        } else {
          throw new Error("La respuesta tiene algunos errores.");
        }
      })
      .then(() => {
        // ACA PODRIA IR LOGICA DE MANEJO DE ERRORES Y UNA FUNCION TOGGLECHANGE POR SI ES NECESARIO RENDERIZAR LA LISTA APENAS SE AGREGUE LA NUEVA NOVEDAD
        setTitle("");
        setDescription("");
        setImageUrl("");
        fetchNews(); // Vuelve a obtener las novedades después de agregar una nueva
      })
      .catch((error) => {
        console.log(error);
        console.log("error")
        // ACA PODRIA IR UN MENSAJE ESPECIFICO BASADO EN EL ERROR (MIRAR CODIGO DE 'PIEZAS PARKE')
      });
  };



  // MAPEAR LAS NOVEDADES OBTENIDAS DE LA API
  const newsMapped = news  
  .slice() // Creamos una copia del array original para no modificarlo directamente  
  .reverse() // Invertimos el array  
  .map((prop) => (  
    <div key={prop.id} className="d-flex flex-column">  
      <NewItem  
        id={prop.id}  
        title={prop.title}  
        description={prop.description}  
        image={prop.image}  
      />  
    </div>  
  ));  

  return (
    <>
      <UpScreen
        pathImage={"../../../public/imagenes-de-fondo/imagen-novedades.jpg"}
        title={"Novedades"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      {showForm ? (
        <div className="flex justify-center py-5">
          <Card className="w-full max-w-md bg-sky-600 p-3">
            <Card.Header className="text-2xl font-bold text-white">
              SECCIÓN DE AGREGADO DE NOVEDADES
            </Card.Header>
            <Card.Body>
              <Form className="text-white" onSubmit={submitNewHandler}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-xl">Título</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={title}
                    placeholder="Ingresar título"
                    onChange={changeTitleHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-xl">Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    rows={4}
                    value={description}
                    placeholder="Ingresar descripción"
                    onChange={changeDescriptionHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-xl">Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={imageUrl}
                    placeholder="Ingresar URL de la imagen"
                    onChange={changeImageUrlHandler}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="bg-sky-950 hover:bg-sky-800 border-hidden w-full"
                >
                  Agregar producto
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <div>Cargando novedades...</div>
      ) : (
        <div className="flex flex-col items-center space-y-4 mt-6 mb-6 justify-center">
          {newsMapped}
        </div>
      )}
    </>
  );
};

export default News;
