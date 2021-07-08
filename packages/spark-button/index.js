/*
 * @Author: zhengzhuang
 * @Date: 2021-07-08 11:36:46
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 11:37:40
 * @Description: In User Settings Edit
 * @FilePath: /spark-ui/packages/spark-button/index.js
 */
import SparkButton from './src/button'

/* istanbul ignore next */
SparkButton.install = function (Vue) {
  Vue.component(SparkButton.name, SparkButton)
}

export default SparkButton
