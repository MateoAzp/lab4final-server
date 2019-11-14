import Producto from '../modelos/producto';

export async function getProductos(req, res) {
  try {
    const productos = await Producto.findAll();

    res.json(
      productos
    );
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function nuevoProducto(req, res) {
  console.log(req.body)
  console.log("body fin")
  const { nombre, codigo, descripcion, precio } = req.body
  
  try {
    const producto = await Producto.create({
      nombre: nombre,
      codigo: codigo,
      descripcion: descripcion,
      precio: precio
    });
  
    if(producto) {
      res.status(201).json({
        data: producto
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

export async function getProducto(req, res) {
  try {
    const producto = await Producto.findOne({
      where: { id: req.params.idproducto }
    });
    console.log("producto",producto)
    if(producto) {
      res.json(producto);
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

export async function borrarProducto(req, res) {
  try {
    const cantidadFilasBorradas = await Producto.destroy({
      where: { id: req.params.idproducto }
    })
  
    res.json({
      data: {},
      message: `Se eliminaron ${cantidadFilasBorradas} productos`
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

export async function modificarProducto(req, res) {
  try {
    const producto = await Producto.findOne({
      where: { id: req.params.idproducto }
    })

    const { nombre, codigo, descripcion, precio } = req.body

    if(provincia) {
      const productoModificado = await producto.update({
        nombre: nombre,
        codigo: codigo,
        decripcion: descripcion,
        precio: precio
      })

      res.json({
        data: productoModificado
      })
    } else {
      res.status(404).json({
        data: {},
        message: 'No se encontro el producto a actualizar'
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