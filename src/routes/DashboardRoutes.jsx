import React from 'react'
import { Switch, Route } from 'react-router-dom';
import BlogScreen from '../pages/BlogScreen';
import Error404Screen from '../pages/Error404Screen';
import InicioScreen from '../pages/InicioScreen';
import TiendaScreen from '../pages/TiendaScreen';

const DashboardRoutes = ({productos, agregarProductoCarrito}) => {
  return (
    <main>
      <Switch>
            <Route exact={true} path="/"><InicioScreen/></Route>
            <Route path='/blog'><BlogScreen/> </Route>
            <Route path='/tienda'><TiendaScreen productos={productos} agregarProductoCarrito={agregarProductoCarrito} /> </Route>
            <Route path='*'><Error404Screen/> </Route>
        </Switch>
    </main>
  )
}

export default DashboardRoutes