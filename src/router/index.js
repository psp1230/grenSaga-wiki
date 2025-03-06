import { createRouter, createWebHistory ,createWebHashHistory  } from 'vue-router';
import Index from '@/components/Index.vue'; //引入component範例
import Character from '@/components/character/Character.vue'; 
import Kyara from '@/components/character/Kyara.vue'; 
// import Weapon from '../components/Weapon.vue'; //引入component範例
// import Artifact from '../components/Artifact.vue'; //引入component範例
// import Madougu from '../components/Madougu.vue'; //引入component範例
import Taisei from '@/components/taisei/Taisei.vue';
import PVPTaisei from '@/components/taisei/PVPTaisei.vue';
import WeaponIndex from '@/components/weapon/WeaponIndex.vue'

import NotFind from '@/components/NotFind.vue';

import dashborad from '@/components/backstage/dashborad.vue';

import { getAuth } from 'firebase/auth';

const routes = [

  {
    path: '/',
    name: 'index',
    component: Index,
  }, 
  {
    path: '/character',
    name: 'character',
    component: Character,
  }, 
  {
    path: '/character/:KyaraCode',
    name: 'kyara',
    component: Kyara,
  }, 
  {
    path: '/weapon', 
    name: 'weapon', 
    component: WeaponIndex, 
  }, 
  {
    path: '/artifact', 
    name: 'artifact', 
    component: NotFind, 
  }, 
  {
    path: '/madougu', 
    name: 'madougu', 
    component: NotFind, 
  }, 
  {
    path: '/taisei', 
    name: 'taisei', 
    component: Taisei, 
  }, 
  {
    path: '/pvptaisei', 
    name: 'pvptaisei', 
    component: PVPTaisei, 
  },


  //backstage
  {
    path:'/admin',
    name:'dashborad',
    component:dashborad,
    meta:{requiresAuth:true}
  }



];


const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;