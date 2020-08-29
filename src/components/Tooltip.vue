<template>
  <span
    data-toggle="tooltip"
    :data-placement="placement"
    :title="tooltipText"
  >
    <font-awesome-icon :icon="['fas', 'question-circle']" />
  </span>
</template>

<script>
import $ from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faQuestionCircle)

export default {
  name: 'Tooltip',
  props: {
    tooltipText: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      required: false,
      default: 'left'
    }
  },
  mounted() {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
</script>
