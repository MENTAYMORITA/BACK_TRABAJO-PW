import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';
import User from './user.js';
import Order from './order.js';
import CardType from './cardType.js';

const PaymentDetail = sequelize.define('PaymentDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id',
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cardholder_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    card_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    card_cvv: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    card_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CardType,
            key: 'id',
        },
    },
    person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  // Referencia al modelo de User
            key: 'id',
        },
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'payment_details',
    timestamps: false,  // No usamos campos createdAt/updatedAt
});

// Relaciones
PaymentDetail.belongsTo(Order, { foreignKey: 'order_id' });
PaymentDetail.belongsTo(CardType, { foreignKey: 'card_type_id' });
PaymentDetail.belongsTo(User, { foreignKey: 'person_id' });  // Relación con el User

export default PaymentDetail;
