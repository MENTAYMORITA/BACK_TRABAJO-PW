import UserService from '../services/userService.js';

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user;

        if (email) {
            user = await UserService.findByEmail(email);
        } else if (username) {
            user = await UserService.findByUsername(username);
        }

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const { password: _, ...userWithoutPassword } = user.toJSON();
        return res.status(200).json(userWithoutPassword);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const register = async (req, res) => {
    try {
        const { username, nombres, apellidos, tipoDocumento, nroDocumento, email, password, role } = req.body;
        
        if (!username || !nombres || !apellidos || !tipoDocumento || !nroDocumento || !email || !password || !role) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevoUsuario = await UserService.create({
            username,
            nombres,
            apellidos,
            tipoDocumento,
            nroDocumento,
            email,
            password,
            role
        });
        
        return res.status(201).json(nuevoUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const findAll = async (req, res) => {
    try {
        const result = await UserService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.findOne(id);
        return result ? res.status(200).json(result) : res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const result = await UserService.create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.update(id, req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await UserService.remove(id);
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombres, apellidos, tipoDocumento, nroDocumento, email, password } = req.body;
        
        const fieldsToUpdate = { nombres, apellidos, tipoDocumento, nroDocumento, email, password };

        const usuarioActualizado = await UserService.update(id, fieldsToUpdate);
        
        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.status(200).json(usuarioActualizado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { findAll, findOne, create, update, remove, login, register, updateUser };
