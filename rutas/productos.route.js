import Router from 'express'
import {getProductos, getProducto, nuevoProducto, modificarProducto, borrarProducto } from '../controladores/productos.controller'

const rutasProducto = Router()

rutasProducto.get('/', getProductos);
rutasProducto.get('/:idproducto', getProducto);
rutasProducto.post('/', nuevoProducto);
rutasProducto.put('/:idproducto', modificarProducto);
rutasProducto.delete('/:idproducto', borrarProducto);

export default rutasProducto