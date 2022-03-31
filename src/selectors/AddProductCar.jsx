export const AddProductCar = (id, nombre, carrito) => {
  const nuevoCarrito = [...carrito];
  //TODO: Comprobar si el carrito ya tiene el ID del producto al agregar
  const yaEstaEnCarrito = nuevoCarrito.filter((carrito) => carrito.id === id).length > 0;

  if (yaEstaEnCarrito) {
    nuevoCarrito.forEach((productoDeCarrito, index) => {
      if (productoDeCarrito.id === id) {
        const cantidad = nuevoCarrito[index].cantidad;
        nuevoCarrito[index] = { id, nombre, cantidad: cantidad + 1 };
      }
    });
  } else {
    nuevoCarrito.push({ id, nombre, cantidad: 1 });
  }
  return nuevoCarrito;
};
