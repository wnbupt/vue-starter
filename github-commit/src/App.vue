<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="title">Latest Vue.js Commits</h1>  
    <commit-box></commit-box>
  </div>
</template>

<script>
import CommitBox from "./components/CommitBox";

export default {
  name: "App",
  components: {
    CommitBox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 40px;
  height: auto;
  display: inline;
  vertical-align: sub;
}
.title {
  display: inline;
}
</style>
