// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './modules/rem'

import 'animate.css'

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

// 引入element-ui
//import ElementUi from 'element-ui'


// 引入router
import router from './router'

//  处理axios，让组件通过this.$http来使用
import axios from 'axios'
Vue.prototype.$http = axios

//  引入全局scss文件
import './stylesheets/main.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //  在这里配置router是为了让路由里的所有的组件都能使用到$router和$router的api
  router,
  components: { App },
  template: '<App/>'
})





















/**
 * _ooOoo_
 * o8888888o
 * 88" . "88
 * (| -_- |)
 *  O\ = /O
 * ___/`---'\____
 * .   ' \\| |// `.
 * / \\||| : |||// \
 * / _||||| -:- |||||- \
 * | | \\\ - /// | |
 * | \_| ''\---/'' | |
 * \ .-\__ `-` ___/-. /
 * ___`. .' /--.--\ `. . __
 * ."" '< `.___\_<|>_/___.' >'"".
 * | | : `- \`.;`\ _ /`;.`/ - ` : | |
 * \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 * `=---='
 *          .............................................
 *           佛曰：bug泛滥，我已瘫痪！
 */