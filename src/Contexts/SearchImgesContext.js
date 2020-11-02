import React, {
    createContext,
    useState,
    useEffect,
    Children
} from 'react';
import {
    getImages, 
    imagenesPorPagina
} from '../constants';

export const SearchImagesContext = createContext();

const SearchImagesProvider = ({
    children
}) => {

    const [busqueda, setBusqueda] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalpaginas, setTotalPaginas] = useState(5);
    const [doneFetch, setDoneFetch] = useState(false);

    useEffect(() => searchImages(busqueda, imagenesPorPagina, paginaActual), [busqueda, paginaActual]);

    const searchImages = (busqueda, imagenesPorPagina, paginaActual) => {
        console.log('entrando');
        console.log(busqueda + ' ' + imagenesPorPagina + ' ' + paginaActual);
        fetch(getImages(busqueda, imagenesPorPagina, paginaActual))
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImagenes(data.hits);
                setDoneFetch(true);
                // calcular el total de paginas
                const calcularTotalPaginas = Math.ceil(data.totalHits / imagenesPorPagina);
                setTotalPaginas(calcularTotalPaginas);
            })
            .catch(err => console.log(err));

    };
    const subirScroll = () =>{
        const jumbotron = document.querySelector('.main-paginador').firstElementChild;
        jumbotron.scrollIntoView({ behavior: 'smooth' });
    }
    
      // definir la página anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaActual - 1;

        if(nuevaPaginaActual === 0 ) return;

        setPaginaActual(nuevaPaginaActual);
        subirScroll();
    }

    // definir la pagina siguiente
    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaActual + 1;

        if(nuevaPaginaActual > totalpaginas ) return;

        setPaginaActual(nuevaPaginaActual);
        subirScroll();
    }

    return(
        <SearchImagesContext.Provider value={{ busqueda, imagenes, paginaActual, totalpaginas, doneFetch, paginaAnterior, paginaSiguiente, setBusqueda }}>
        { children }
        </SearchImagesContext.Provider>
    );

};

export default SearchImagesProvider;