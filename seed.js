// adds required files
const sequelize = require('./config/connection');
const seedCategories = require('./seeds/category-seeds');
const seedProducts = require('./seeds/product-seeds');
const seedTags = require('./seeds/tag-seeds');
const seedProductTags = require('./seeds/product-tag-seeds');
//seeds all tables
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();
  await seedProducts();
  await seedTags();
  await seedProductTags();

  process.exit(0);
};
//calls seed all
seedAll();
