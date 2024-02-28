// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id', // This will add category_id to Product model
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // This will add category_id to Product model
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This will add product_id to ProductTag model
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This will add tag_id to ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
