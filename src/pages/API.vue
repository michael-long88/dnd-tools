<template>
  <div>
    <div class="container">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <span :class="['nav-link', { 'active' : selectedReference === 'spells'}]" @click="updateSelectedReference('spells')">Spells</span>
        </li>
      </ul>
    </div>
    <div class="container resource-div" v-if="selectedReference === 'spells'">
      <Spells />
    </div>
  </div>
</template>

<script>
import Spells from '../components/spells/Spells'
export default {
  name: 'API',
  components: {
    Spells
  },
  data () {
    return {
      selectedReference: 'spells'
    }
  },
  computed: {
  },
  methods: {
    updateSelectedReference(newReference) {
      this.selectedReference = newReference
    }
  }
}
</script>