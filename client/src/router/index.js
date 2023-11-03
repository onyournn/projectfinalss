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

import ChairIndex from "@/components/Chair/Index";
import ChairCreate from "@/components/Chair/CreateChair";
import ChairEdit from "@/components/Chair/EditChair";
import ChairShow from "@/components/Chair/ShowChair";

import TypeChairIndex from "@/components/TypeChair/Index";
import TypeChairCreate from "@/components/TypeChair/CreateTypeChair";
import TypeChairEdit from "@/components/TypeChair/EditTypeChair";
import TypeChairShow from "@/components/TypeChair/ShowTypeChair";

// import MusicIndex from '@/components/Music/Index'
// import MusicEdit from '@/components/Music/EditMusic'
// import MusicCreate from '@/components/Music/CreateMusic'
// import MusicShow from '@/components/Music/ShowMusic'

// import TempleIndex from '@/components/Temple/Index'
// import TempleEdit from '@/components/Temple/EditTemple'
// import TempleCreate from '@/components/Temple/CreateTemple'
// import TempleShow from '@/components/Temple/ShowTemple'

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
    /////////////////////////////////chair//

    {
      path: "/chairs",
      name: "chairs",
      component: ChairIndex
    },
    {
      path: "/chair/create",
      name: "/chair-create",
      component: ChairCreate
    },
    {
      path: "/chair/edit/:chairId",
      name: "/chair-edit",
      component: ChairEdit
    },
    {
      path: "/chair/:chairId",
      name: "/chair",
      component: ChairShow
    },
    //////////////////TypeChair
    {
      path: "/typechairs",
      name: "typechairs",
      component: TypeChairIndex
    },
    {
      path: "/typechair/typechair",
      name: "/typechair-create",
      component: TypeChairCreate
    },
    {
      path: "/typechair/typechair/:typechairId",
      name: "/typechair-edit",
      component: TypeChairEdit
    },
    {
      path: "/typechair/:typechairId",
      name: "/typechair",
      component: TypeChairShow
    }

    //   //////////////////////////Music//
    // {
    //   path: '/musics',
    //   name: 'musics',
    //   component: MusicIndex
    // },

    // {
    //   path: '/music/edit/:musicId',
    //   name: '/music-edit',
    //   component: MusicEdit
    // } ,
    // {
    //   path: '/music/create',
    //   name: '/music-create',
    //   component: MusicCreate
    // } ,
    // {
    //   path: '/music/:musicId',
    //   name: '/music',
    //   component: MusicShow
    // },

    // //////////////////////////////////////////Temple////////////////////////////////////////////////
    // {
    //   path: '/temples',
    //   name: 'temples',
    //   component: TempleIndex
    // },
    // {
    //   path: '/temple/edit/:templeId',
    //   name: '/temple-edit',
    //   component: TempleEdit
    // },
    // {
    //   path: '/temple/create',
    //   name: '/temple-create',
    //   component: TempleCreate
    // },
    // {
    //   path: '/temple/:templeId',
    //   name: '/temple',
    //   component: TempleShow
    // }
  ]
});
