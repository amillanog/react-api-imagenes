import React, { Fragment, useContext } from 'react';
import './../../assets/css/style.css';
import Formulario from './Formulario';
import ListadoImagenes from './ListadoImagenes';
import {SearchImagesContext} from '../../Contexts/SearchImgesContext';


const MainImages =() =>{

    const {busqueda, imagenes, paginaActual, totalpaginas, doneFetch, paginaAnterior, paginaSiguiente, setBusqueda} = useContext(SearchImagesContext);
    
    return(
        <div className="container">
            <div className="jumbotron">
                {/* <p className="lead text-center">Buscador de Imágenes</p> */}

                <Formulario 
                guardarBusqueda={setBusqueda}
                />
            </div>

            <div className="row justify-content-center scroll main-paginador">
                <ListadoImagenes 
                imagenes={imagenes}
                />

                { (paginaActual === 1) ? null : (
                <button 
                    type="button"
                    className=" mr-1"
                    onClick={paginaAnterior}
                ><i class="fas fa-angle-double-left"></i> Anterior </button>
                ) }

                { (paginaActual === totalpaginas) ? null : (
                <button 
                    type="button"
                    className="bbtn "
                    onClick={paginaSiguiente}
                >Siguiente <i class="fas fa-angle-double-right"></i></button>
                ) }
            </div>
        </div>
    )
};

MainImages.displayName = 'MainImages';
export default MainImages;

