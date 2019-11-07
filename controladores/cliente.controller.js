import Cliente from '../modelos/cliente';

export async function getClientes(req, res) {
  try {
    const clientes = await Cliente.findAll();

    res.json({
      data: clientes
    });
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function nuevoCliente(req, res) {
  const { nombre, cuit, direccion } = req.body
  try {
    const cliente = await Cliente.create({
      nombre: nombre,
      cuit: cuit,
      direccion: direccion
    });
  
    if(cliente) {
      res.status(201).json({
        data: cliente
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

export async function getCliente(req, res) {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.idCliente }
    });
  
    if(cliente) {
      res.json({
        data: cliente
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

export async function borrarCliente(req, res) {
  try {
    const cantidadBorrados = await Cliente.destroy({
      where: { id: req.params.idCliente }
    })
  
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadBorrados} clientes`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function modificarCliente(req, res) {
  try {
    const cliente = await Cliente.findOne({
      where: { id: req.params.idCliente }
    })

    const { nombre, cuit, direccion } = req.body

    if(cliente) {
      const clienteModificado = await cliente.update({
        nombre: nombre,
        cuit: cuit,
        direccion: direccion
      })

      res.json({
        data: clienteModificado
      })
    } else {
      res.status(404).json({
        data: {},
        message: 'No se encontro el cliente a actualizar'
      })
    }
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