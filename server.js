const { app } = require('./app');

const { sequelize } = require('./util/database');
const { initModels } = require('./util/initModels');

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

initModels();

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});