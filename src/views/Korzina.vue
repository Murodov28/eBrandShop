<template>
  <div>
    <Navbar />
    <KorzinaKomp
      :KorzinaItems="KorzinaItems"
      @KorRemoveCount="$emit('KorRemoveCount', $event)"
      @KorAddCount="$emit('KorAddCount', $event)"
      @RemoveKor="$emit('RemoveKor', $event)"
    />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import KorzinaKomp from "../components/KorzinaKomp.vue";
export default {
  components: { Navbar, KorzinaKomp },
  props: {
    KorzinaItems: Array,
  },
};
</script>

<style lang="scss" scoped></style>
