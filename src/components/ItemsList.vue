<template>
  <section class="items container">
    <h2>NEW ARRIVALS</h2>
    <div class="items__list">
      <div
        class="items__list-card"
        v-for="item in items.slice(0, itemsLenghy)"
        :key="item.name"
      >
        <img :src="item.img" alt="" />
        <h4>{{ item.name }}</h4>
        <div class="items__list-card-bot">
          <h3>${{ item.price }}</h3>
          <button>
            <router-link :to="'eBrandShop/Item/' + item.id">+</router-link>
          </button>
        </div>
      </div>
    </div>
    <button @click="itemsLenghy = 8" class="items__views">View All</button>
  </section>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      itemsLenghy: 4,
    };
  },
};
</script>

<style lang="scss" scoped></style>
