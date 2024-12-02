import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';

const OrderStatus = sequelize.define('OrderStatus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'order_statuses',
    timestamps: false,  // Sin timestamps (createdAt/updatedAt)
});

export default OrderStatus;
