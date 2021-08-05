import {useEffect, useState} from 'react';
import ProductoCard from '../componentes/ProductoCard';
import Search from '../componentes/Search';
import './Home.scss';
import Login from '../assets/login.jpg'

const Home = () => {

    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setproductosFiltrados] = useState([]);
    const [numbRand, setnumbRand] = useState([]);
    const [searchOn, setSearchOn] = useState(false);
    const [mostrarProd, setMostrarProd] = useState(false);
    const [selectItem, setSelectItem] = useState();

    //Funcion de GET al API
    const getProductos = () => {    
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(respuesta => respuesta.json())
            .then(productos => {
                let productosCompletos = productos.map(prod => {
                    let objProducto = {};
                    objProducto = prod.image && prod.image.slice(0, 4) === 'http' ? prod : 
                        prod.images && prod.images.slice(0, 4) === 'http' ? {...prod, image: prod.images} :
                        {...prod, image: Login}
                    return objProducto;
                })
                setProductos(productosCompletos);
                setproductosFiltrados(productosCompletos);
                crearNumerosRand(productosCompletos);
                
            });
    }

    
    //cantiadad de elementos pagina principal 
    let crearNumerosRand = (productos) => {
        let arrayNumRand = [];
        if (productos.length < 20 && productos.length !== 0) {
            for (let i = 0; i < productos.length;) {
                let numrand = Math.floor(Math.random() * productos.length);
                if (!arrayNumRand.includes(numrand)) {
                    arrayNumRand.push(numrand);
                    i++;
                }
            }
            setnumbRand(arrayNumRand);
        } else if (productos.length > 20) {
            for (let i = 0; i < 20;) {
                let numrand = Math.floor(Math.random() * productos.length);
                if (!arrayNumRand.includes(numrand)) {
                    arrayNumRand.push(numrand);
                    i++;
                }
            }
            setnumbRand(arrayNumRand);
        } 
    }

    //Search para los productos
    const filtrarProductos = (busqueda) => {
        busqueda ? setSearchOn(true) : setSearchOn(false);
        console.log('Búsqueda', busqueda);
        let resultado = productos.filter(prod => 
            prod.product_name.toLowerCase().includes(busqueda.toLowerCase())
        );
        crearNumerosRand(resultado);
        
    }

    //Onclick card
    const cardOnClick = (prods) => {
        console.log(prods);
    setSelectItem(prods);
    setMostrarProd(true);
    }




    useEffect(() => {
        getProductos();
    }, []);

    return (
        <div>
        <div>
             {/* Carta selecciona de cada Articulos */}
             {mostrarProd ?
                (
                    <div className="container-productos">
                        <div className="productos">
                            <img className="img-producto" src={selectItem.imagen} alt={"descripcion"} />
                            <div className="container-text">
                            <h4 className="">{selectItem.nombreProducto}</h4>
                            <p className="">{selectItem.description}</p>
                            <p className="">{"Precio: $" + selectItem.precio}</p>
                            </div>
                            <div>
                            <bottom className="btn-close-producto" onClick={() =>
                                 { setMostrarProd(false) }}>X</bottom>
                            </div>
                        </div>
                    </div>

                )
                : null
            }
        </div>
        <div className="contenedor-home">    
            <div className="search">
            <Search filtrarProductos={filtrarProductos}/>
            </div> 
            <div>         
            <h2>Productos</h2>
            </div>              
            {/* Productos */}
            <div className="contenedor-productos">
                {numbRand.length > 0 ? 
                    numbRand.map((prod, index) => (
                            <ProductoCard 
                                nombreProducto = {productosFiltrados[prod].product_name}
                                precio = {productosFiltrados[prod].price}
                                imagen = {productosFiltrados[prod].image}
                                description = {productosFiltrados[prod].description}
                                cardOnClick={cardOnClick}
                                key={index}
                            />
                        )) : numbRand.length === 0 && searchOn ? 
                        (<p>No hay resultados</p>) :
                        (<p>Cargando...</p>)
                }
            </div>
        </div></div>
    )
}

export default Home
