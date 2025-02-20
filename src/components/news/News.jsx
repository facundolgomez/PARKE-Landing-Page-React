import UpScreen from "../upscreen/UpScreen";
import NewItem from "../newItem/NewItem";
import { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [news, setNews] = useState([]); // Estado para almacenar las novedades de la API

  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const [emptyNews, setEmptyNews] = useState(false);

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


  // Efecto para observar cambios en el estado de `news`
  useEffect(() => {
    if (!loading) { // Solo verifica si el loading ha terminado
      if (news.length === 0) {
        console.log("El array de noticias está vacío");
        setEmptyNews(true);
        // Aquí puedes manejar el caso en que el array esté vacío
      } else {
        console.log("Noticias cargadas:", news);
        setEmptyNews(false);
      }
    }
  }, [news, loading]); // Dependencias: se ejecuta cuando `news` o `loading` cambian


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
        loadNews={fetchNews}
      />  
    </div>  
  ));  

  return (
    <>
      <UpScreen
        pathImage={"../../../public/imagenes-de-fondo/imagen-novedades.jpg"}
        title={t("news.title")}
        paragraph={t("news.paragraph")}
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
        <div className="flex justify-center my-4 text-3xl font-mono font-bold text-sky-600">
          <p className="me-4">{t("news.loading")}</p>
          <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 mt-6 mb-6 justify-center">
          {newsMapped}
        </div>
      )}
      {emptyNews && (
        <h3 className="flex justify-center my-3 text-3xl font-bold font-mono text-sky-600 ">{t("news.emptyNews")}</h3>
      )}
    </>
  );
};

export default News;
