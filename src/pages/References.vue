<template>
  <div>
    <div class="container">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'lodging'}]" @click="updateSelectedReference('lodging')">Lodging</span>
        </li>
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'crafting'}]" @click="updateSelectedReference('crafting')">Crafting</span>
        </li>
      </ul>
    </div>
    <div class="container resource-div" v-if="selectedReference === 'lodging'">
      <ExpensesTable :resource="lodgingResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'crafting'">
      <ExpensesTable :resource="craftingResource" />
    </div>
  </div>
</template>

<script>
import ExpensesTable from '../components/ExpensesTable'
import { lodging, crafting } from '../references/referenceTableData'
export default {
  name: 'ReferencesPage',
  components: {
    ExpensesTable
  },
  data () {
    return {
      selectedReference: 'lodging'
    }
  },
  computed: {
    lodgingResource() {
      return lodging
    },
    craftingResource() {
      return crafting
    }
  },
  methods: {
    updateSelectedReference(newReference) {
      this.selectedReference = newReference
    }
  }
}
</script>