const UserModels = require('../models/userModels');

exports.getAllUsers = async (req, res) => {

    try {
        const users = await UserModels.findAll();
        res.status(200).json({
            ok: true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: 'Error al obtener los datos: ', error,
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email } = req.body;

        const NewUser = {
            username,
            password,
            email
        }

        const user = await UserModels.create(NewUser);

        res.status(201).json({
            ok: true,
            message: 'usuario creado con exito',
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'error en el servidor'
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id; // Suponiendo que el ID del usuario a eliminar se pasa como un parámetro en la URL
        // Busca el usuario por su ID
        const user = await UserModels.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }
        // Elimina el usuario
        await user.destroy();
        res.status(200).json({
            ok: true,
            message: 'Usuario eliminado con éxito',
        });
    } catch (error) {//captura el error del servidor
        console.error(error);
        res.status(500).json({
            message: 'Error en el servidor',
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModels.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualiza los campos del usuario con los valores de req.body
        await user.update(req.body);

        res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

