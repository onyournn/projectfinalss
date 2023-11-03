module.exports = (sequelize, DataTypes) => {
  const TypeChair = sequelize.define("TypeChair", {
    ChairName: DataTypes.STRING,
    ChairNickName: DataTypes.STRING,
    ChairDetail: DataTypes.STRING,
  });
  return TypeChair;
};
