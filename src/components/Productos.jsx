import React from "react";
// import productos from "../data/productos.json";
import { ContenedorProductos, Producto, Boton } from "../style-components/ProductosStyles.jsx";

const Productos = ({productos, agregarProductoCarrito}) => {

  return (
    <div>
      <h3>Productos</h3>
      <ContenedorProductos>
        {productos.map((producto, index) => (
          <Producto key={index}>
            <p>{producto.nombre}</p>
            <Boton onClick={() => agregarProductoCarrito(producto.id, producto.nombre)} > Agregar al carrito </Boton>
          </Producto>
        ))}
      </ContenedorProductos>
    </div>
  );
};

export default Productos;
