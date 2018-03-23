<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" style="display:block;margin:0 auto"> -->
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/">Go to Baz</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import router from "./router/index";

const app = new Vue({
  router
}).$mount("#app");
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
