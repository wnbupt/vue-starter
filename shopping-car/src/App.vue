<template>
  <div id="app">
    <shopping-header></shopping-header>
    <shopping-car></shopping-car>
  </div>
</template>

<script>
import ShoppingHeader from "./components/ShoppingHeader";
import ShoppingCar from "./components/ShoppingCar";

export default {
  name: "App",
  components: {
    ShoppingHeader,
    ShoppingCar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
