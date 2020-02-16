<template>
  <div id="tavern-calculator">
    <div class="container">
      <form @submit.prevent="calculateChanceOfSuccess">
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="regularAleCost"
            >Regular Ale Cost:
          </label>
          <input
            class="form-control col-sm-1"
            v-model.lazy.number="regularAleCost"
            id="regularAleCost"
          />c
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="premiumAleCost"
            >Premium Ale Cost:
          </label>
          <input
            class="form-control col-sm-1"
            v-model.lazy.number="premiumAleCost"
            id="premiumAleCost"
          />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">DC: </label>
          <input
            class="form-control col-sm-1"
            v-model.lazy.number="dc"
            id="dc"
          />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">1d20 Roll: </label>
          <input
            class="form-control col-sm-1"
            v-model="roll1d20"
            disabled
            id="roll1d20"
          />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">Chance of Success: </label>
          <input
            class="form-control col-sm-1"
            v-model="chanceOfSuccess"
            disabled
            id="chanceOfSuccess"
          />
        </div>
        <button class="btn btn-primary" type="submit">Calculate</button>
      </form>
    </div>
    <br>
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
            <td>{{ numberOfRegularAles }}</td>
            <td>{{ regularAleIncome }} copper</td>
          </tr>
          <tr>
            <td>Premium Ales</td>
            <td>{{ numberOfPremiumAles }}</td>
            <td>{{ premiumAleIncome }} copper</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ totalAles }}</td>
            <td>{{ getTotalIncome }} copper</td>
          </tr>
        </tbody>
      </table>
      <button
        class="btn btn-primary"
        type="button"
        v-on:click.prevent="getDailyPatrons"
      >
        Get Today's Patrons
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  // props: {
  //   regularAleCost: Number,
  //   premiumAleCost: Number,
  //   dc: Number
  // },
  data() {
    return {
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
    };
  },
  computed: {
    getTotalIncome: function() {
      return this.regularAleIncome + this.premiumAleIncome;
    }
  },
  methods: {
    calculateChanceOfSuccess: function() {
      this.roll1d20 = Math.floor(Math.random() * 20) + 1;
      if (this.roll1d20 < this.dc) {
        this.chanceOfSuccess = 0;
      } else {
        this.chanceOfSuccess =
          this.roll1d20 +
          (100 - this.dc * (this.premiumAleCost - this.regularAleCost));
        if (this.chanceOfSuccess > 100) {
          this.chanceOfSuccess = 100;
        }
      }
    },
    getDailyPatrons: function() {
      this.getNumberOfPatrons();
      this.getTotalNumberOflAles();
      this.getNumberOfPremiumAles();
      this.getNumberOfRegularAles();
      this.getRegularAleIncome();
      this.getPremiumAleIncome();
    },
    getNumberOfPatrons: function() {
      this.numberOfPatrons = Math.floor(Math.random() * 4) + 1;
    },
    getTotalNumberOflAles: function() {
      let totalAles = 0;
      for (let i = 0; i < this.numberOfPatrons; i++) {
        let random1d4 = Math.floor(Math.random() * 4) + 1;
        totalAles += random1d4;
      }
      this.totalAles = totalAles;
    },
    getNumberOfPremiumAles: function() {
      let premiumAles = 0;
      if (this.chanceOfSuccess !== 0) {
        for (let i = 0; i < this.totalAles; i++) {
          let random1d100 = Math.floor(Math.random() * 100) + 1;
          if (random1d100 <= this.chanceOfSuccess) {
            premiumAles++;
          }
        }
      }
      this.numberOfPremiumAles = premiumAles;
    },
    getNumberOfRegularAles: function() {
      this.numberOfRegularAles = this.totalAles - this.numberOfPremiumAles;
    },
    getRegularAleIncome: function() {
      this.regularAleIncome = this.numberOfRegularAles * this.regularAleCost;
    },
    getPremiumAleIncome: function() {
      this.premiumAleIncome = this.numberOfPremiumAles * this.premiumAleCost;
    }
  }
};
</script>

<style scoped></style>
