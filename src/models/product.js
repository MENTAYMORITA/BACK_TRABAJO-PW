import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';
import ProductCategory from './productCategory.js'

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imageUrl: {
        type: DataTypes.STRING(255),
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    priceUSD: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    pricePEN: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    
    category_id: {  
        type: DataTypes.INTEGER,
        references: {
            model: ProductCategory,  
            key: 'id'  
        },
        onUpdate: 'CASCADE',  
        onDelete: 'SET NULL'  
    }
}, {
    timestamps: false,
    tableName: 'products'
});

export default Product;
