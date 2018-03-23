<template>
  <div>
    <shopping-header></shopping-header>
    <shopping-car></shopping-car>
  </div>
</template>

<script>
import ShoppingHeader from "@/components/ShoppingHeader";
import ShoppingCar from "@/components/ShoppingCar";

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
</style>
