import React from 'react'
import styles from './Formulario.module.css'

// Hooks personalizados
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types';

const Formulario = ({setCategoria, setCargando}) => {

    const OPCIONES = [
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'health', label: 'Salud' },
        { value: 'technology', label: 'Tecnología' }
    ]

    // Utilizar hook personalizado
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES)


    // Submit a form pasar categoría a App.js
    const buscarNoticias = e => {
        e.preventDefault()

        setCategoria(categoria)
        setCargando(true)
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    
                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Buscar"    
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

// Documentación
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario;