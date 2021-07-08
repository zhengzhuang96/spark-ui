/*
 * @Author: zhengzhuang
 * @Date: 2021-07-07 17:35:31
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 11:48:39
 * @Description: In User Settings Edit
 * @FilePath: /spark-ui/examples/main.js
 */
import {
  createApp
} from 'vue'
import App from './App.vue'

import SpackUI from './../packages'

createApp(App).use(SpackUI).mount('#app')
