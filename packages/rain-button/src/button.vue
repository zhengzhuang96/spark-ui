<!--
 * @Author: zhengzhuang
 * @Date: 2021-07-07 17:31:19
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-08 09:58:16
 * @Description: In User Settings Edit
 * @FilePath: /rain-ui/packages/rain-button/src/button.vue
-->
<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { computed } from '@vue/runtime-core'
import '../../theme-chalk/src/button.scss'
export default {
  name: 'RainButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup (props, context) {
    const _elFormItemSize = computed(() => {
      return (props.elFormItem || {}).elFormItemSize
    })

    const buttonSize = computed(() => {
      return props.size || props._elFormItemSize || (props.$ELEMENT || {}).size
    })

    const buttonDisabled = computed(() => {
      return props.disabled || (props.elForm || {}).disabled
    })

    const handleClick = evt => {
      context.emit('click', evt)
    }

    return {
      _elFormItemSize,
      buttonSize,
      buttonDisabled,
      handleClick
    }
  }
}
</script>
