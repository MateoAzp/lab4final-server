import FacturaItem from '../modelos/itemfactura';

export async function crearItemsDeUnaFactura(req, res) {
    const { itemsFactura } = req.body
  try {
    let itemsNuevos = []
    for(const item of itemsFactura)
    {
        const itemFacturaNuevo = await Facturas.create({
            id:  item.id,
            idFactura: item.idFactura,
            cantidad:  item.cantidad,
            codigo:  item.codigo,
            descripcion:  item.descripcion,
            precioUnitario:  item.precioUnitario,
            iva: item.iva,
            idProducto: item.idProducto,
            subtotal: item.subtotal
          });

          itemsNuevos.push(itemFacturaNuevo)
    }   
  
    if(itemsNuevos.count > 0) {
      res.status(201).json({
        data: itemsNuevos
      });
    } else {
      res.json({
        data: {}
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function getItemFactura(req, res) {
  try {
    const itemFactura = await Factura.findOne({
      where: { id: req.params.id },
      limit: 1
    });
  
    if(itemFactura) {
      res.json({
        data: itemFactura
      });
    } else {
      res.json({
        data: {}
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function getItemsDeUnaFactura(req, res) {
  try {
    const itemsDeFactura = await Factura.findAll({
      where: { id: req.params.idfactura },
      limit: 1
    });
  
    if(itemsDeFactura) {
      res.json({
        data: itemsDeFactura
      });
    } else {
      res.json({
        data: {}
      })
    }
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function borrarItemsDeUnaFactura(req, res) {
  try {
    const idFactura = req.params.idfactura
    const cantidadBorradas = await Factura.destroy({
      where: { id: idFactura },
    })
  
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadBorradas} items de factura con ID : ${idFactura}`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

function catchError(e, res) {
    res.status(500).json({
        error: e.message        
    })
}