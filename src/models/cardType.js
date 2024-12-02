// models/cardType.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';

const CardType = sequelize.define('CardType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'card_types'
});

export default CardType;
