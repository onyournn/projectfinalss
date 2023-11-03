module.exports = (sequelize, DataTypes) => {
  const Chair = sequelize.define("Chair", {
    ChairName: DataTypes.STRING,
    ChairMaterial: DataTypes.STRING,
    ChairPrice: DataTypes.INTEGER,
    ChairColor: DataTypes.STRING,
    ChairSize: DataTypes.STRING,
  });
  return Chair;
};
