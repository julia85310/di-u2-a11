# DI UNIDAD 2, ACTIVIDAD 11
## Ejercicio 1: Actualizar un artículo en el carrito de compras
Completa la lógica handleIncreaseClick para que al presionar »+» aumente el número correspondiente para cada producto. Código en ShoppingCart.

## Ejercicio 2: Eliminar un artículo del carrito de compras
Este carrito de compras tiene un botón »+» que funciona, pero el botón »–» no hace nada. Debes agregarle un controlador de evento para que al presionarlo disminuya el count del producto correspondiente. Si presionas »–» cuando el conteo es 1, el producto debería eliminarse automáticamente del carrito. Asegúrate de que nunca muestre 0. Código en ShoppingCart2.

## Ejercicio 3: Repara las mutaciones usando métodos que no muten 
En este ejemplo, todos los controladores de eventos en Ejercicio3.js usan mutación. Como resultado, la edición y eliminación de tareas no funciona. Vuelve a escribir handleAddTodo, handleChangeTodo y handleDeleteTodo para usar los métodos no que no realicen mutaciones:

## Ejercicio 4: Arregla las mutaciones usando Immer
Este es el mismo ejemplo que en el desafío anterior. Esta vez, arregla las mutaciones usando Immer. Para tu comodidad, useImmer ya está importado, por lo que debes cambiar la variable de estado todos para usarlo. Codigo en Ejercicio4.js