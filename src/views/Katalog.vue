<template>
  <div>
    <Navbar />
    <KatalogComp
      @FilterKRang="$emit('FilterKRang', $event)"
      @FilterKStr="$emit('FilterKStr', $event)"
      :katalog="katalog"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import KatalogComp from "../components/KatalogComp.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, KatalogComp, Footer },
  props: {
    katalog: Array,
  },
};
</script>

<style lang="scss" scoped></style>
