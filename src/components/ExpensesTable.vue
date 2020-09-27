<template>
  <div>
    <h3>{{ tableTitle }}  <small><Tooltip v-if="descriptionExists" tooltipText="Click an item for a description" /></small></h3>
    <table class="table table-striped table-bordered">
      <thead>
        <th>{{ itemColumnHeader }}</th>
        <th v-if="gradeColumnHeader">
          {{ gradeColumnHeader }}
        </th>
        <th>{{ priceColumnHeader }}</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resourceItems" :key="index">
          <td
            v-if="descriptionExists"
            data-toggle="modal"
            data-target="#explanationModal"
            @click="setModalOptions(item.item, item.description)"
          >
            {{ item.item }}
          </td>
          <td v-else>
            {{ item.item }}
          </td>
          <td v-if="item.grade">
            {{ item.grade }}
          </td>
          <td>
            {{ item.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <ExplanationModal :title="modalTitle" :description="modalDescription" />
  </div>
</template>

<script>
import ExplanationModal from './explanationModal'
import Tooltip from './Tooltip'
export default {
  name: 'ExpensesTable',
  components: {
    ExplanationModal,
    Tooltip
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      modalTitle: '',
      modalDescription: ''
    }
  },
  computed: {
    resourceObj() {
      return this.resource
    },
    tableTitle() {
      return this.resourceObj.title
    },
    itemColumnHeader() {
      return this.resourceObj.itemHeader
    },
    priceColumnHeader() {
      return this.resourceObj.priceHeader
    },
    gradeColumnHeader() {
      return this.resourceObj.gradeHeader
    },
    resourceItems() {
      return this.resourceObj.items
    },
    descriptionExists() {
      return this.resourceObj.items[0].description
    }
  },
  methods: {
    setModalOptions(title, description) {
      this.modalTitle = title
      this.modalDescription = description
    }
  }
}
</script>
