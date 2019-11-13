import Router from 'express'
import { getClientes, getCliente, nuevoCliente, modificarCliente, borrarCliente  } from '../controladores/cliente.controller'

const rutasCliente = Router()

rutasCliente.get('/', getClientes);
rutasCliente.get('/:idcliente', getCliente);
rutasCliente.post('/', nuevoCliente);
rutasCliente.put('/:idcliente', modificarCliente);
rutasCliente.delete('/:idcliente', borrarCliente);

export default rutasCliente