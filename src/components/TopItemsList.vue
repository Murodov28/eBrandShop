<template>
  <section class="topItems container">
    <h2>Top Selling</h2>
    <div class="topItems__list">
      <div
        class="topItems__list-card"
        v-for="item in items.slice(TopItems1, TopItems2).reverse()"
        :key="item.name"
      >
        <img :src="item.img" alt="" />
        <h4>{{ item.name }}</h4>
        <div class="topItems__list-card-bot">
          <h3>${{ item.price }}</h3>
          <button>
            <router-link :to="'/eBrandShop/Item/' + item.id">+</router-link>
          </button>
        </div>
      </div>
    </div>
    <button @click="(TopItems1 = 0), (TopItems2 = 8)" class="topItems__views">
      View All
    </button>
  </section>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      TopItems1: 4,
      TopItems2: 8,
    };
  },
};
</script>

<style lang="scss" scoped></style>
