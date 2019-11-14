import Router from 'express'
import { getItemsDeUnaFactura, getItemFactura, crearItemsDeUnaFactura, borrarItemsDeUnaFactura } from '../controladores/facturaitem.controller'

const rutasItemFactura = Router()

rutasItemFactura.get('/:idfactura', getItemsDeUnaFactura);
rutasItemFactura.get('/:id', getItemFactura);
rutasItemFactura.post('/', crearItemsDeUnaFactura);
rutasItemFactura.delete('/:idfactura', borrarItemsDeUnaFactura);

export default rutasItemFactura