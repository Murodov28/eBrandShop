<template>
  <div>
    <Navbar />
    <Banner />
    <ItemsList :items="items" />
    <TopItemsList :items="items" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
import ItemsList from "../components/ItemsList.vue";
import TopItemsList from "../components/TopItemsList.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, Banner, ItemsList, TopItemsList, Footer },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped></style>
