<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="title">table component</h1>
    <table-component/>
  </div>
</template>

<script>
import TableComponent from "./components/TableComponent";

export default {
  name: "App",
  components: {
    TableComponent
  }
};
</script>

<style>
#app {
  width: 600px;
  margin: 0 auto;
  text-align: center;
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

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
