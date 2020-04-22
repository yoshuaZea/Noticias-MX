import React, { useState, useEffect, Fragment } from 'react';

// Componentes
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import Spinner from './components/Spinner'

function App() {

  // Main State
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = 'b95d49df008e42f6b0ef4ee697c24f50'
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`

      const respuesta = await fetch(url)
      const noticia = await respuesta.json()
      setNoticias(noticia.articles)
    }
    
    setTimeout(() => {
      consultarAPI()
      setCargando(false)
    }, 2000)

  }, [categoria])

  let componente = (cargando) 
    ? <Spinner /> 
    : <ListadoNoticias 
        noticias={noticias}
      />  

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
          setCargando={setCargando}
        />
        { componente }        
      </div>
    </Fragment>
  );
}

export default App;
