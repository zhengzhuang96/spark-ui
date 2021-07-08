/*
 * @Author: zhengzhuang
 * @Date: 2021-07-08 11:36:46
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 15:44:57
 * @Description: In User Settings Edit
 * @FilePath: /spark-ui/packages/spark-button/index.js
 */
import SparkButton from './src/button.vue'

/* istanbul ignore next */
SparkButton.install = function (Vue) {
  Vue.component(SparkButton.name, SparkButton)
}

export default SparkButton
