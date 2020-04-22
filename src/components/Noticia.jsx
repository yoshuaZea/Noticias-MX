import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Noticia = ({noticia}) => {

    // Extraer datos
    const { urlToImage, url, title, description, source } = noticia

    const imagen = (urlToImage) 
    ? <Fragment>
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
      </Fragment>
    : null

    return ( 
        <div className="col s12 m6 l4">
            <TransitionGroup
                component="div"
                className="fade-in"
            >
                <CSSTransition
                    classNames="fade-in"
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <div className="card">
                        <div className="card-image">
                            { imagen }
                        </div>

                        <div className="card-content">
                            <h5><b>{title}</b></h5>
                            <p>
                                {description}
                            </p>
                        </div>

                        <div className="card-action">
                            <a 
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="waves-effect waves-light btn">
                                Ver noticia completa</a>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )      
}

// Documentación
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia