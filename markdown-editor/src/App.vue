<template>
  <div id="app">
    <img src='../src/assets/logo.png'>
    <h1 class="title">Markdown Editor</h1>
    <mark-editor></mark-editor>
  </div>
</template>

<script>
import MarkEditor from "./components/MarkEditor";

export default {
  name: "App",
  components: {
    MarkEditor
  }
};
</script>

<style>
html,
body,
#app,
#editor {
  margin: 10px;
  height: 100%;
  font-family: "Monaco", courier, monospace;
  color: #333;
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
textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 14px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
#editor div {
  background-color: beige;
  font-size: 14px;
}
code {
  color: #f66;
}
</style>
