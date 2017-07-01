import Vue from 'vue'
import  {Table, TableColumn, Menu, MenuItem, Form, FormItem}from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Form);
Vue.use(FormItem)

new Vue({
    el: '#app',
    render: h => h(App)
});
