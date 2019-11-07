import Router from 'express'
import { getFacturas, getFactura, nuevoFacturas, borrarFactura} from '../controladores/factura.controller'

const rutasFactura = Router()

rutasFactura.get('/', getFacturas);
rutasFactura.get('/:idcliente', getFactura);
rutasFactura.post('/', nuevoFacturas);
rutasFactura.delete('/:idcliente', borrarFactura);

export default rutasFactura