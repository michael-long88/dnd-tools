<template>
  <div id="tavern-calculator">
    <div class="container">
      <button class="btn btn-primary" @click="changeCalculationType()">
        {{ calculationType }}
      </button>
      <h4>Instructions:</h4>
      <div class="text-left">
        <ol>
          <li
            v-for="(step, index) in instructions[calculationType]"
            :key="index"
          >
            {{ step }}
          </li>
        </ol>
      </div>
    </div>
    <div class="container">
      <form @submit.prevent="calculateChanceOfSuccess">
        <div class="form-group row">
          <div class="col-md-2 offset-md-4">
            <div>
              <Tooltip :tooltipText="'Cost of a normal ale in your tavern'" />&nbsp;
              <label class="col-form-label" for="regularAleCost">Regular Ale Cost:</label>
            </div>
          </div>
          <div class="col-md-2">
            <input
              class="form-control"
              v-model.lazy.number="regularAleCost"
              id="regularAleCost"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-2 offset-md-4">
            <div>
              <Tooltip :tooltipText="'Cost of a premium ale in your tavern'" />&nbsp;
              <label class="col-form-label" for="premiumAleCost">Premium Ale Cost:</label>
            </div>
          </div>
          <div class="col-md-2">
            <input
              class="form-control"
              v-model.lazy.number="premiumAleCost"
              id="premiumAleCost"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-2 offset-md-4">
            <div>
              <Tooltip :tooltipText="'DC check to pass in order to sell a premium ale'" />&nbsp;
              <label class="col-form-label" for="dc">DC:</label>
            </div>
          </div>
          <div class="col-md-2">
            <input
              class="form-control"
              v-model.lazy.number="dc"
              id="dc"
            />
          </div>
        </div>
        <div v-if="calculationType === 'Single Day'">
          <div class="form-group row">
            <div class="col-md-2 offset-md-4">
              <label class="col-form-label" for="roll1d20">1d20 Roll:</label>
            </div>
            <div class="col-md-2">
              <input
                class="form-control"
                v-model="roll1d20"
                disabled
                id="roll1d20"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-2 offset-md-4">
              <label class="col-form-label" for="chanceOfSuccess">Chance of Success:</label>
            </div>
            <div class="col-md-2">
              <input
                class="form-control"
                v-model="chanceOfSuccess"
                disabled
                id="chanceOfSuccess"
              />
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Calculate Chance of Success
          </button>
        </div>
      </form>
    </div>
    <br />
    <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Amount</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Patrons</td>
            <td>{{ numberOfPatrons }}</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Regular Ales</td>
            <td>{{ numberOfRegularAles.toLocaleString() }}</td>
            <td>{{ regularAleIncome.toLocaleString() }} copper</td>
          </tr>
          <tr>
            <td>Premium Ales</td>
            <td>{{ numberOfPremiumAles.toLocaleString() }}</td>
            <td>{{ premiumAleIncome.toLocaleString() }} copper</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ totalAles.toLocaleString() }}</td>
            <td>{{ getTotalIncome.toLocaleString() }} copper</td>
          </tr>
        </tbody>
      </table>
      <div v-if="calculationType === 'Multiple Days'">
        <div class="form-group row">
          <div class="col-md-2 offset-md-4">
            <label for="numDays">Number of days (between 1 and 30):</label>
          </div>
          <div class="col-md-2">
            <input
              type="number"
              class="form-control"
              v-model.lazy.number="numberOfDays"
              id="numDays"
              name="numDays"
              min="1"
              max="30"
            />
          </div>
        </div>
        <button
          class="btn btn-primary"
          type="button"
          :disabled="numberOfDays < 1 || numberOfDays > 30"
          @click.prevent="getDailyPatrons"
        >
          Get Patrons for {{ numberOfDays }} day(s)
        </button>
      </div>
      <div v-else>
        <button
          class="btn btn-primary"
          type="button"
          @click.prevent="getDailyPatrons"
        >
          Get Patrons
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from './Tooltip'
import instructions from '@/instructions'
export default {
  name: 'Calculator',
  components: {
    Tooltip
  },
  data() {
    return {
      calculationType: 'Single Day',
      instructions: instructions,
      regularAleCost: 4,
      premiumAleCost: 6,
      dc: 10,
      roll1d20: 0,
      chanceOfSuccess: 0,
      numberOfPatrons: 0,
      numberOfRegularAles: 0,
      numberOfPremiumAles: 0,
      totalAles: 0,
      regularAleIncome: 0,
      premiumAleIncome: 0,
      numberOfDays: 1,
      multiDaySuccessChancess: []
    }
  },
  computed: {
    getTotalIncome() {
      return this.regularAleIncome + this.premiumAleIncome
    }
  },
  methods: {
    changeCalculationType() {
      if (this.calculationType === 'Single Day') {
        this.calculationType = 'Multiple Days'
      } else {
        this.calculationType = 'Single Day'
      }
    },
    calculateChanceOfSuccess() {
      this.roll1d20 = Math.floor(Math.random() * 20) + 1
      this.chanceOfSuccess = 0
      if (this.roll1d20 >= this.dc) {
        this.chanceOfSuccess = this.roll1d20 + (100 - this.dc * (this.premiumAleCost - this.regularAleCost))
        if (this.chanceOfSuccess > 100) {
          this.chanceOfSuccess = 100
        }
      }
    },
    getDailyPatrons() {
      if (this.calculationType === 'Multiple Days') {
        let numberOfPatrons = 0
        let totalNumberOfAles = 0
        let numberOfPremiumAles = 0
        for (let i = 0; i < this.numberOfDays; i++) {
          this.calculateChanceOfSuccess()
          this.getNumberOfPatrons()
          this.getTotalNumberOflAles()
          this.getNumberOfPremiumAles()
          numberOfPatrons += this.numberOfPatrons
          totalNumberOfAles += this.totalAles
          numberOfPremiumAles += this.numberOfPremiumAles
        }
        this.numberOfPatrons = numberOfPatrons
        this.totalAles = totalNumberOfAles
        this.numberOfPremiumAles = numberOfPremiumAles
      } else {
        this.getNumberOfPatrons()
        this.getTotalNumberOflAles()
        this.getNumberOfPremiumAles()
      }
      this.getNumberOfRegularAles()
      this.getRegularAleIncome()
      this.getPremiumAleIncome()
    },
    getNumberOfPatrons() {
      let numberOfPatrons = 0
      numberOfPatrons += Math.floor(Math.random() * 4) + 1
      this.numberOfPatrons = numberOfPatrons
    },
    getTotalNumberOflAles() {
      let totalAles = 0
      for (let i = 0; i < this.numberOfPatrons; i++) {
        totalAles += Math.floor(Math.random() * 4) + 1
      }
      this.totalAles = totalAles
    },
    getNumberOfPremiumAles() {
      let premiumAles = 0
      if (this.chanceOfSuccess !== 0) {
        for (let i = 0; i < this.totalAles; i++) {
          let random1d100 = Math.floor(Math.random() * 100) + 1
          if (random1d100 <= this.chanceOfSuccess) {
            premiumAles++
          }
        }
      }
      this.numberOfPremiumAles = premiumAles
    },
    getNumberOfRegularAles() {
      this.numberOfRegularAles = this.totalAles - this.numberOfPremiumAles
    },
    getRegularAleIncome() {
      this.regularAleIncome = this.numberOfRegularAles * this.regularAleCost
    },
    getPremiumAleIncome() {
      this.premiumAleIncome = this.numberOfPremiumAles * this.premiumAleCost
    }
  }
}
</script>

<style scoped></style>
