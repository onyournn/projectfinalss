import Vue from "vue";
import Router from "vue-router";
// @ = เริ่มที่ src
// ใช้componentไหนอย่าลืม!! import
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";

import UserIndex from "@/components/User/Index";
import UserCreate from "@/components/User/CreateUser";
import UserEdit from "@/components/User/EditUser";
import UserShow from "@/components/User/ShowUser";
import Login from "@/components/Login";

import BeverageIndex from "@/components/Beverage/Index";
import BeverageCreate from "@/components/Beverage/CreateBeverage";
import BeverageEdit from "@/components/Beverage/EditBeverage";
import BeverageShow from "@/components/Beverage/ShowBeverage";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "/user-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "/user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "/user",
      component: UserShow
    },
    /////////////////////////////////Beverage//

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/beverages",
      name: "beverages",
      component: BeverageIndex
    },
    {
      path: "/beverage/create",
      name: "/beverage-create",
      component: BeverageCreate
    },
    {
      path: "/beverage/edit/:beverageId",
      name: "/beverage-edit",
      component: BeverageEdit
    },
    {
      path: "/beverage/:beverageId",
      name: "/beverage",
      component: BeverageShow
    },
   
  ]
});
