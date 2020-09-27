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
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'inn'}]" @click="updateSelectedReference('inn')">Inn</span>
        </li>
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'meals'}]" @click="updateSelectedReference('meals')">Meals</span>
        </li>
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'weaponFumble'}]" @click="updateSelectedReference('weaponFumble')">Weapon Fumbles</span>
        </li>
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'spellFumble'}]" @click="updateSelectedReference('spellFumble')">Spell Fumbles</span>
        </li>
      </ul>
    </div>
    <div class="container resource-div" v-if="selectedReference === 'lodging'">
      <ExpensesTable :resource="lodgingResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'crafting'">
      <ExpensesTable :resource="craftingResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'inn'">
      <ExpensesTable :resource="innResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'meals'">
      <ExpensesTable :resource="mealResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'weaponFumble'">
      <FumbleTable :resource="weaponFumbleResource" />
    </div>
    <div class="container resource-div" v-if="selectedReference === 'spellFumble'">
      <FumbleTable :resource="spellFumbleResource" />
    </div>
  </div>
</template>

<script>
import ExpensesTable from '../components/ExpensesTable'
import FumbleTable from '../components/FumbleTable'
import { lodging, crafting, inn, meals, spellAttackFumble, weaponAttackFumble } from '../references/referenceTableData'
export default {
  name: 'ReferencesPage',
  components: {
    ExpensesTable,
    FumbleTable
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
    },
    innResource() {
      return inn
    },
    mealResource() {
      return meals
    },
    weaponFumbleResource() {
      return weaponAttackFumble
    },
    spellFumbleResource() {
      return spellAttackFumble
    }
  },
  methods: {
    updateSelectedReference(newReference) {
      this.selectedReference = newReference
    }
  }
}
</script>