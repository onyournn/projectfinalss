const UserController = require("./controllers/UserController");
const BeverageController = require("./controllers/BeverageController");


module.exports = (app) => {
  app.get("/users", UserController.index);

  //create
  app.post("/user", UserController.create);

  //edit
  app.put("/user/:userId", UserController.put);

  //delete
  app.delete("/user/:userId", UserController.remove);

  //show by id
  app.get("/user/:userId", UserController.show);


  ///////////////Beverage
  app.get("/beverages", BeverageController.index);

  app.post("/beverage", BeverageController.create);

  app.put("/beverage/:beverageId", BeverageController.put);

  app.delete("/beverage/:beverageId", BeverageController.remove);

  app.get("/beverage/:beverageId", BeverageController.show);

  
};
