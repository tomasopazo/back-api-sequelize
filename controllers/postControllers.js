const publicacionModels = require('../models/postModels');

exports.getAllPosts = async (req, res) => {

    try {
        const posts = await publicacionModels.findAll();
        res.status(200).json({
            ok: true,
            posts
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Error al obtener los datos de posts: ', error,
        })
    }
}

exports.createPost = async(req, res) => {

    try {
        
        const { fecha, descripcion, imagen, hora, ubicacion, userId } = req.body;
        const post = await publicacionModels.create({ fecha, descripcion, imagen, hora, ubicacion, userId })

        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        res.status(500).json({
            succes: false,
            msg: 'Error del servidor'
        })
        console.log(error);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const id = req.params.id; // Suponiendo que el ID del post a eliminar se pasa como un parámetro en la URL
        // Busca el post por su ID
        const post = await publicacionModels.findByPk(id);
        if (!post) {
            return res.status(404).json({
                message: 'Post no encontrado',
            });
        }
        // Elimina el post
        await post.destroy();
        res.status(200).json({
            ok: true,
            message: 'Post eliminado con éxito',
        });
    } catch (error) {//captura el error del servidor
        console.error(error);
        res.status(500).json({
            message: 'Error en el servidor',
        });
    }
};

exports.updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await publicacionModels.findByPk(id);
  
      if (!post) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }
  
      // Actualiza los campos del post con los valores de req.body
      await post.update(req.body);
  
      res.status(200).json({ message: 'Post actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
};