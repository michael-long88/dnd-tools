<template>
  <div id="tavern-calculator">
    <div class="container">
      <form>
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
      dc: 10
    };
  }
};
</script>

<style scoped></style>
