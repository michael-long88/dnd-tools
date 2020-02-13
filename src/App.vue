<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator";

export default {
  name: "App",
  components: {
    Calculator
  },
  data() {
    return {
      regularAleCost: 4,
      premiumAleCost: 6,
      dc: 10
    };
  },
  methods: {
    roll1d20: function f() {
      return Math.floor(Math.random() * 20) + 1;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
