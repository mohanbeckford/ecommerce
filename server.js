//loads required mosules

const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
//sets port
const app = express();
const PORT = process.env.PORT || 3001;
//uses express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use of routes
const categoryRoutes = require('./routes/category-routes');
const productRoutes = require('./routes/product-routes');
const tagRoutes = require('./routes/tag-routes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);
//listen to active port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
