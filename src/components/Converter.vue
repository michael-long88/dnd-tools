<template>
  <div class="container converter-div">
    <form @submit.prevent="convertCurrency">
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="regularAleCost">Copper:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            v-model.lazy.number="copperAmount"
            id="copper"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="silver">Silver:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            v-model.lazy.number="silverAmount"
            id="silver"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="electrum">Electrum:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            v-model.lazy.number="electrumAmount"
            id="electrum"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="gold">Gold:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            v-model.lazy.number="goldAmount"
            id="gold"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="platinum">Platinum:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            v-model.lazy.number="platinumAmount"
            id="platinum"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-3">
          <div>
            <label class="col-form-label" for="teamSize">Team Size:</label>
          </div>
        </div>
        <div class="col-md-4">
          <input
            type="number"
            min="0"
            max="99"
            class="form-control"
            v-model.lazy.number="teamSize"
            id="teamSize"
          />
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          v-model="noPlatinum"
          id="noPlatinum"
        />
        <label class="form-check-label" for="noPlatinum">
          Exchange only for copper, silver, and gold
        </label>
      </div>
      <button class="btn btn-primary converter-submit" type="submit">
        Convert Currency
      </button>
    </form>
    <div v-if="concatenatedResults" class="row">
      <div class="offset-md-4 col-md-4 results-holder">
        <span v-html="concatenatedResults" class="text-left"></span>
      </div>
    </div>
    <table class="table table-bordered rates-table">
      <tr>
        <th scope="col">
          Coin
        </th>
        <th
          v-for="(coinType, index) in coinTypes"
          :key="index"
          scope="col"
        >
          {{ coinType }}
        </th>
      </tr>
      <tr v-for="(coinType, index) in coinTypes" :key="index">
        <td scope="row">
          {{ exchangeRates[coinType][coinType]['name'] }} ({{ coinType }})
        </td>
        <td v-for="(coinValues, coin, coinIndex) in exchangeRates[coinType]" :key="coinIndex">
          {{ coinValues['label'] }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { optimalExchange, teamSplit } from '../tools/currencyExchange'
import { exchangeRates } from '../tools/exchangeRates'
export default {
  name: 'Converter',
  data () {
    return {
      copperAmount: 0,
      silverAmount: 0,
      electrumAmount: 0,
      goldAmount: 0,
      platinumAmount: 0,
      teamSize: 0,
      noPlatinum: false,
      singleResults: {},
      teamResults: [],
      concatenatedResults: '',
      exchangeRates: exchangeRates['coin'],
      coinTypes: ['cp', 'sp', 'ep', 'gp', 'pp']
    }
  },
  methods: {
    convertCurrency () {
      if (this.teamSize > 1 && this.teamSize < 100) {
        this.singleResults = {}
        if (this.noPlatinum) {
          this.teamResults = teamSplit(this.teamSize, {cp: this.copperAmount, sp: this.silverAmount, ep: this.electrumAmount, gp: this.goldAmount, pp: this.platinumAmount}, ['cp', 'sp', 'gp'])
        } else {
          this.teamResults = teamSplit(this.teamSize, {cp: this.copperAmount, sp: this.silverAmount, ep: this.electrumAmount, gp: this.goldAmount, pp: this.platinumAmount})
        }
      } else {
        this.teamResults = []
        if (this.noPlatinum) {
          this.singleResults = optimalExchange({cp: this.copperAmount, sp: this.silverAmount, ep: this.electrumAmount, gp: this.goldAmount, pp: this.platinumAmount}, ['cp', 'sp', 'gp'])
        } else {
          this.singleResults = optimalExchange({cp: this.copperAmount, sp: this.silverAmount, ep: this.electrumAmount, gp: this.goldAmount, pp: this.platinumAmount})
        }
      }
      this.aggregateResults()
      console.log(this.singleResults)
      console.log(this.teamResults)
    },
    toCoinStr (results) {
      let coinStr = ''
      Object.keys(results).forEach(key => {
        if (results[key] > 0) {
          coinStr = coinStr.concat(results[key] + key + ' ')
        }
      })

      //No coins at all
      if (coinStr.length === 0) {
        coinStr = 'No coins '
      }
      return coinStr
    },
    aggregateResults () {
      let aggregatedResultStr = ''
      if (this.teamResults.length > 0) {
        let strResults = {}
        this.teamResults.forEach(result => {
          let coinStr = this.toCoinStr(result)
          if (coinStr in strResults) {
            strResults[coinStr] += 1
          } else {
            strResults[coinStr] = 1
          }
        })

        aggregatedResultStr += '<ul>'
        Object.keys(strResults).forEach(key => {
          aggregatedResultStr += '<li>(' + strResults[key] + ') ' + key + '</li>'
        })
        aggregatedResultStr += '</ul>'
      } else {
        aggregatedResultStr = aggregatedResultStr.concat(this.toCoinStr(this.singleResults))
      }
      this.concatenatedResults = aggregatedResultStr
    }
    // test () {
    //   let results = optimalExchange({cp: 229, sp: 137, ep: 29, gp: 41}, ['cp', 'sp', 'gp'])
    //   console.log(results)
    // }
  }
}
</script>