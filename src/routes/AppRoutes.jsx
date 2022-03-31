import React, { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {Contenedor} from '../style-components/StyleApp';
import DashboardRoutes from './DashboardRoutes';
import productos from '../data/productos.json';
import { AddProductCar } from '../selectors/AddProductCar';

const AppRoutes = () => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarProductoCarrito = (id, nombre) => {
    if(carrito.length === 0){
      setCarrito([{id: id, nombre: nombre, cantidad: 1}]);
    }else{
      const nuevoCarrito = AddProductCar(id, nombre, carrito);
      setCarrito(nuevoCarrito);
    }
  }

  return (
    <Contenedor className="App">
        <Header/>
        <DashboardRoutes productos={productos} agregarProductoCarrito={agregarProductoCarrito}/>
        <Sidebar carrito={carrito}/>
    </Contenedor>
  )
}

export default AppRoutes