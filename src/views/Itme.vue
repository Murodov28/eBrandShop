<template>
  <div>
    <Navbar />
    <Tovar
      :items="items"
      @SizeAdd="$emit('SizeAdd', $event)"
      @SizeAddName="$emit('SizeAddName', $event)"
      @RemoveCount="$emit('RemoveCount', $event)"
      @AddCount="$emit('AddCount', $event)"
      @AddCardItems="$emit('AddCardItems', $event)"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Tovar from "../components/Tovar.vue";

export default {
  components: { Navbar, Tovar, Footer },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped></style>
