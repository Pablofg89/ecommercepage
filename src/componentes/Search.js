import React from 'react';
import './Search.scss';

const Search = (props) => {
    
    const {filtrarProductos} = props;

    return (
        <div>
            <input className="imput-search" onChange={(e) => {filtrarProductos(e.target.value)}} placeholder="Buscar productos"/>
            <button className="boton-buscar">Buscar</button>
        </div>
    )
}

export default Search
