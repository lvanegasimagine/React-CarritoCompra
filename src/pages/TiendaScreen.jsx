import React from "react";
import Productos from "../components/Productos";

const TiendaScreen = ({productos, agregarProductoCarrito}) => {
  return (
    <div>
      <h1>Tienda</h1>
       <Productos productos={productos} agregarProductoCarrito={agregarProductoCarrito}/>
    </div>
  );
};

export default TiendaScreen;
