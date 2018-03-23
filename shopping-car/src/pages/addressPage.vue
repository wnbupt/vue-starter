<template>
  <div>
    <shopping-header></shopping-header>
    <address-card></address-card>
  </div>
</template>

<script>
import ShoppingHeader from "@/components/ShoppingHeader";
import AddressCard from "@/components/AddressCard";

export default {
  components: {
    ShoppingHeader,
    AddressCard
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
