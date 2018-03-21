<template>
  <div id="app">
    <h2 style='margin-bottom:20px'>{{title}}</h2>
    <todo-list/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: { TodoList },
  data: function() {
    return {
      title: "每日清单"
    };
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
  width: 600px;
  margin: 50px auto;
  text-align: left;
}
</style>
