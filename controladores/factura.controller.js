import Factura from '../modelos/factura';

export async function getFacturas(req, res) {
  try {
    const facturas = await Factura.findAll({ include: 'producto'});

    res.json(facturas);
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function nuevoFacturas(req, res) {
    const { tipo, fecha, numero, puntoDeVenta,  idcliente, total } = req.body
  try {
    const factura = await Facturas.create({
      tipo : tipo,
      numero: numero,
      fechaEmision: fechaEmision,
      puntoDeVenta: puntoDeVenta,
      idcliente: idcliente,
      total: total
    });
  
    if(factura) {
      res.status(201).json({
        data: factura
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

export async function getFactura(req, res) {
  try {
    const factura = await Factura.findOne({
      where: { id: req.params.idfactura }
    });
  
    if(factura) {
      res.json({
        data: factura
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

export async function borrarFactura(req, res) {
  try {
    const cantidadBorradas = await Factura.destroy({
      where: { id: req.params.idfactura },
      limit: 1
    })
  
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadBorradas} facturas`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

// export async function modificarFactura(req, res) {
//   try {
//     const factura = await Factura.findOne({
//       where: { id: req.params.idCliente },
//       limit: 1
//     })

//     const { tipo, fecha, numero, puntoDeVenta, idcliente, total } = req.body

//     if(factura) {
//       const facturaModificada = await factura.update({
//         tipo : tipo,
//         numero: numero,
//         fechaEmision: fechaEmision,
//         puntoDeVenta: puntoDeVenta,
//         idcliente: idcliente,
//         total: total
//       })

//       res.json({
//         data: facturaModificada
//       })
//     } else {
//       res.status(404).json({
//         data: {},
//         message: 'No se encontro e a actualizar'
//       })
//     }
//   } catch (e) {
//     res.status(500).json({
//       error: e.message
//     })
//   }
// }

function catchError(e, res) {
    res.status(500).json({
        error: e.message        
    })
}