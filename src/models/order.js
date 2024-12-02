// models/order.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    total_price_usd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    total_price_pen: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'orders'
});

// Definición de la relación con el modelo User
Order.belongsTo(sequelize.models.User, { foreignKey: 'user_id', as: 'user' });

export default Order;
