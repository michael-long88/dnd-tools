<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(filterObj, filterName) in spellOptions"
        :key="filterName"
        class="col"
      >
        <label :for="filterName" class="form-label">{{ filterName }}</label>
        <select
          class="form-select form-control"
          multiple="true"
          v-if="filterName !== 'Classes'"
          :id="filterName"
          v-model="apiOptions[filterObj.apiName]"
        >
          <option
            v-for="filterOption in filterObj.options"
            :key="filterOption"
            :value="filterOption"
          >
            {{ filterOption === 0 ? 'Cantrip' : filterOption }}
          </option>
        </select>
        <select
          class="form-select form-control"
          multiple="true"
          v-else
          :id="filterName"
          v-model="selectedClasses"
        >
          <option
            v-for="filterOption in filterObj.options"
            :key="filterOption"
            :value="filterOption"
          >
            {{ filterOption }}
          </option>
        </select>
      </div>
    </div>
    <div class="row justify-content-end py-4">
      <div class="col-2">
        <button class="btn btn-primary" @click="searchAPI()">
          Search
        </button>
      </div>
    </div>
    <div class="card" v-if="apiSearched && !spellResults.length">
      <div class="card-body">
        <h2>No results could be found for the selected choices</h2>
      </div>
    </div>
    <div id="accordian" v-else>
      <div
        class="card"
        v-for="(spell, index) in spellResults"
        :key="spell.index"
      >
        <div class="card-header text-left" :id="`heading${index}`">
          <h5 class="mb-0">
            <button
              :class="[{ 'collapsed': spell.name !== selectedSpell.name}, 'btn btn-link']"
              data-toggle="collapse"
              :data-target="`#collapse${index}`"
              aria-expanded="false"
              :aria-controls="`#collapse${index}`"
              @click="getSpell(spell.index)"
            >
              {{ spell.name }}
            </button>
          </h5>
        </div>
        <div
          :id="`#collapse${index}`"
          :class="['collapse', { 'show': spell.name === selectedSpell.name}]"
          :aria-labelledby="`heading${index}`"
          data-parent="#accordion"
        >
          <div class="card-body" v-if="selectedSpell">
            <div class="row text-left">
              <div class="col-3">
                <b>Level:</b> {{ selectedSpell.level === 0 ? 'Cantrip' : selectedSpell.level }}
              </div>
              <div class="col-3">
                <b>Casting Time:</b> {{ selectedSpell.casting_time }}
              </div>
              <div class="col-3">
                <b>Range:</b> {{ selectedSpell.range }}
              </div>
              <div class="col-3" v-if="selectedSpell.components">
                <b>Components:</b> {{ selectedSpell.components.join(', ') }}
              </div>
              <div class="col-3" v-else>
                <b>Components:</b> None
              </div>
            </div>
            <div class="row text-left">
              <div class="col-3">
                <b>Duration:</b> {{ selectedSpell.duration }}
              </div>
              <div class="col-3">
                <b>School:</b> {{ selectedSpell.school.name }}
              </div>
              <div class="col-3" v-if="selectedSpell.dc">
                <b>Attack/Save:</b> {{ selectedSpell.dc.dc_type.name }} Save
              </div>
              <div class="col-3" v-else>
                <b>Attack/Save:</b> None
              </div>
              <div class="col-3" v-if="selectedSpell.damage">
                <b>Damage/Effect:</b> {{ selectedSpell.damage.damage_type.name }}
              </div>
              <div class="col-3" v-else>
                <b>Damage/Effect:</b> None
              </div>
            </div>
            <div class="row text-left">
              <div class="col-3" v-if="selectedSpell.ritual">
                <b>Ritual:</b> Yes
              </div>
              <div class="col-3" v-else>
                <b>Ritual:</b> No
              </div>
              <div class="col-3" v-if="selectedSpell.concentration">
                <b>Concentration:</b> Yes
              </div>
              <div class="col-3" v-else>
                <b>Concentration:</b> No
              </div>
            </div>
            <hr />
            <div class="row text-left">
              <p v-for="(para, subIndex) in selectedSpell.desc" :key="`para${subIndex}`">
                {{ para }}
              </p>
              <p v-if="selectedSpell.higher_level">
                <b>At Higher Levels: </b>{{ selectedSpell.higher_level.join(' ') }}
              </p>
              <i v-if="selectedSpell.material">* ({{ selectedSpell.material }})</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { spells } from '../../references/referenceAPIData'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Spells',
  data () {
    return {
      apiSearched: false,
      apiOptions: {
        level: [],
        school: []
      },
      selectedClasses: [],
      spellResults: [],
      selectedSpell: {
        name: '',
        level: 0,
        casting_time: '',
        desc: [],
        higher_level: [],
        range: '',
        components: [],
        material: '',
        ritual: false,
        duration: '',
        concentration: false,
        attack_type: '',
        damage: {
          damage_type: {
            name: ''
          }
        },
        school: {
          name: ''
        },
        dc: {
          dc_type: {
            name: ''
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getBaseURL'
    ]),
    spellOptions () {
      return spells
    }
  },
  methods: {
    async searchAPI () {
      const isEmpty = !Object.values(this.apiOptions).some(x => (x !== null && x !== ''))
      if (!isEmpty) {
        this.apiSearched = true
        let levelList = ''
        let schoolList = ''
        if (this.apiOptions.level.length) {
          levelList = this.apiOptions.level.join(',')
          levelList = `level=${levelList}&`
        }
        if (this.apiOptions.school.length) {
          schoolList = this.apiOptions.school.join(',')
          schoolList = `school=${schoolList}`
        }
        let spellURL = `${this.getBaseURL}spells?${levelList}${schoolList}`
        let availableSpells = []
        let apiSpellResults = []
        if (this.selectedClasses.length) {
          for (let className of this.selectedClasses) {
            className = className.toLowerCase()
            let classURL = `${this.getBaseURL}/classes/${className}/spells`
            let classResponse = await axios.get(classURL)
            availableSpells.push(...classResponse.data.results.map(spell => spell.index))
          }
        }
        let spellResponse = await axios.get(spellURL)
        apiSpellResults = spellResponse.data.results
        if (this.selectedClasses.length && availableSpells.length) {
          this.spellResults = apiSpellResults.filter(spell => availableSpells.includes(spell.index))
        } else if (this.selectedClasses.length && !availableSpells.length) {
          this.spellResults = []
        }
      }
    },
    async getSpell (spellIndex) {
      let spellURL = `${this.getBaseURL}spells/${spellIndex}`
      let spell = await axios.get(spellURL)
      this.selectedSpell = spell.data
    }
  }
}
</script>
