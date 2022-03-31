import React, { useState } from "react";
import { Producto, NombreProducto } from "../style-components/CarritoStyles";

const Carrito = ({carrito}) => {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => (
          <Producto key={index}>
            <NombreProducto>{producto.nombre}</NombreProducto>
            Cantidad: {producto.cantidad}
          </Producto>
        ))
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
};

export default Carrito;
