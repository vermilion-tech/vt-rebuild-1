/**
 * Defines routing structure of the app.
 * * * * */

import Vue from 'vue';
import Router from 'vue-router';

import About from '../pages/About.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/about',
			name: 'About',
			component: About
		}
	]
})
