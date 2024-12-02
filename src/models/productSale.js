import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';
import Product from './product.js';

const ProductSale = sequelize.define('ProductSale', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id',
        },
    },
    sale_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'product_sales',
    timestamps: false,  // Sin timestamps (createdAt/updatedAt)
});

// Relaciones
ProductSale.belongsTo(Product, { foreignKey: 'product_id' });

export default ProductSale;
