import React from 'react';
import './ProductoCard.scss';

const ProductoCard = (props) => {

    const {nombreProducto, precio, imagen, cardOnClick} = props;
    return (
        <div className="card-producto" >
            <img className="prod-image" src={imagen} alt="imagen producto"/>
            <p className="nombre-producto">{nombreProducto}</p>
            <p className="precio-producto">${precio}</p>
            <bottom className="detalles-boton" onClick={() => {cardOnClick(props)}}>Ver detalles</bottom>
        </div>
    )
}

export default ProductoCard;
