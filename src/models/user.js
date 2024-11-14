import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    tipoDocumento: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nroDocumento: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isIn: [['user', 'admin']],
        }
    }
}, {
    timestamps: false,
    tableName: 'users'
});

export default User;
