<template>
  <div id="tavern-calculator">
    <div class="container">
      <form @submit.prevent="calculateChanceOfSuccess">
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="regularAleCost">Regular Ale Cost: </label>
          <input class="form-control col-sm-1" v-model.lazy.number="regularAleCost" id="regularAleCost" />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="premiumAleCost">Premium Ale Cost: </label>
          <input class="form-control col-sm-1" v-model.lazy.number="premiumAleCost" id="premiumAleCost" />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">DC: </label>
          <input class="form-control col-sm-1" v-model.lazy.number="dc" id="dc" />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">1d20 Roll: </label>
          <input class="form-control col-sm-1" v-model="roll1d20" disabled id="roll1d20" />
        </div>
        <div class="form-group row justify-content-center">
          <label class="col-form-label" for="dc">Chance of Success: </label>
          <input class="form-control col-sm-1" v-model="chanceOfSuccess" disabled id="chanceOfSuccess" />
        </div>
        <button type="submit">Calculate</button>
      </form>
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
      chanceOfSuccess: 0
    };
  },
  methods: {
    calculateChanceOfSuccess: function f() {
      this.roll1d20 = Math.floor(Math.random() * 20) + 1;
      if (this.roll1d20 < this.dc) {
        this.chanceOfSuccess = 0;
      } else {
        this.chanceOfSuccess = this.roll1d20 + (100 - (this.dc * (this.premiumAleCost - this.regularAleCost)));
        if (this.chanceOfSuccess > 100) {
          this.chanceOfSuccess = 100;
        }
      }
    }
  }
};
</script>

<style scoped></style>
