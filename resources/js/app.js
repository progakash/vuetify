require('./bootstrap');

import Vue from 'vue'
import vuetify from "../plugins/vuetify.js";

//import component file
import HeaderApp from '../components/HeaderApp.vue'

Vue.config.productionTip = false

new Vue({
    vuetify,
	render: h => h(HeaderApp),
}).$mount('#app')