module.exports = (sequelize, DataTypes) => {
  const Beverage = sequelize.define('Beverage', {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.INTEGER,
      category: DataTypes.STRING
  })
  return Beverage
}