import Router from 'express'
import { getItemsDeUnaFactura, getItemFactura, crearItemsDeUnaFactura, borrarItemsDeUnaFactura } from '../controladores/facturaitem.controller'

const rutasItemFactura = Router()

rutasFactura.get('/:idfactura', getItemsDeUnaFactura);
rutasFactura.get('/:id', getItemFactura);
rutasFactura.post('/:idfactura', crearItemsDeUnaFactura);
rutasFactura.delete('/:idfactura', borrarItemsDeUnaFactura);

export default rutasItemFactura