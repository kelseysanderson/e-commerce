// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo (Category, {
  foreignKey: 'category_id',
})

Category.hasMany(Product,{
  foreignKey: 'category_id',
})

Product.belongsToMany(Tag,{
  through: {
    model: ProductTag
  },
  as: 'products'
})

Tag.belongsToMany(Product,{
  through: {
    model:ProductTag
  },
  as:'tags'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
