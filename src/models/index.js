import User from './user.js';
import Product from './product.js';
import ProductCategory from './productCategory.js';
import Order from './order.js';
import OrderItem from './orderItem.js';
import PaymentDetail from './paymentDetail.js';
import CardType from './cardType.js';
import OrderStatus from './orderStatus.js';
import ProductSale from './productSale.js';

// Asociaciones entre ProductCategory y Product
ProductCategory.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });

// Asociaciones entre User y Order
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

// Asociaciones entre Order y OrderItem
Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

// Asociaciones entre Product y OrderItem
Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

// Asociaciones entre Order y PaymentDetail
Order.hasMany(PaymentDetail, { foreignKey: 'order_id' });
PaymentDetail.belongsTo(Order, { foreignKey: 'order_id' });

// Asociaciones entre CardType y PaymentDetail
CardType.hasMany(PaymentDetail, { foreignKey: 'card_type_id' });
PaymentDetail.belongsTo(CardType, { foreignKey: 'card_type_id' });

// Asociaciones entre User y PaymentDetail (relación con person_id)
User.hasMany(PaymentDetail, { foreignKey: 'person_id' });
PaymentDetail.belongsTo(User, { foreignKey: 'person_id' });

// Asociaciones entre Product y ProductSale
Product.hasMany(ProductSale, { foreignKey: 'product_id' });
ProductSale.belongsTo(Product, { foreignKey: 'product_id' });

export {
    User,
    Product,
    ProductCategory,
    Order,
    OrderItem,
    PaymentDetail,
    CardType,
    OrderStatus,
    ProductSale
};
