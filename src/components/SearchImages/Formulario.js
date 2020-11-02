import React, { useState } from 'react';
import Error from '../Common/Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        // validar
        if(termino.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // enviar el termino de búsqueda hacia el componente principal
        guardarBusqueda(termino);
    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg input-buscador"
                        placeholder="Ejemplo: autos, gatos"
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Debes agregar algo a tu busqueda" /> : null }
        </form>
     );
}
 
export default Formulario;