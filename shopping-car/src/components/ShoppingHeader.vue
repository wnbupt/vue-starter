<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Brand" src="./../assets/logo.png" id="brand">
          <span>{{msg}}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ShoppingHeader",
  data() {
    return {
      msg: "Vue shopping car"
    };
  }
};
</script>

<style>
#brand {
  display: inline-block;
  width: 20px;
}
</style>

