import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
export const routers = createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/eBrandShop',name:'Home',component:Home},
		{path:'/eBrandShop/Item/:id',name:'Item',component:() => import('../views/Itme.vue')},
		{path:'/eBrandShop/Korzina',name:'Korzina',component:() => import('../views/Korzina.vue')},
		{path:'/eBrandShop/Katalog',name:'Katalog',component:() => import('../views/Katalog.vue')},
	]
})