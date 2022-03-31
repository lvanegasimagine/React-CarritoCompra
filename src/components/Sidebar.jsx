import React from 'react'
import Carrito from './Carrito'

const Sidebar = ({carrito}) => {
  return (
    <aside>
        <Carrito carrito={carrito}/>
    </aside>
  )
}

export default Sidebar