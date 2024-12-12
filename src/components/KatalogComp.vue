<template>
  <section class="catalog container">
    <button class="catalog__burger" @click="isCatalogShow = !isCatalogShow">
      <img src="../assets/img/catalog.png" alt="" />
    </button>
    <div
      :class="isCatalogShow ? 'catalog__filters active' : 'catalog__filters'"
    >
      <div class="catalog__filters-top">
        <h3>Filters</h3>
        <button><img src="../assets/img/catalog.png" alt="" /></button>
      </div>
      <div class="catalog__filters-center">
        <ul>
          <li>
            <button @click="$emit('FilterKStr', 'Futbolka')">T-shirts</button>
          </li>
          <li>
            <button @click="$emit('FilterKStr', 'Shorti')">Shorts</button>
          </li>
          <li>
            <button @click="$emit('FilterKStr', 'Koylak')">Shirts</button>
          </li>
          <li>
            <button @click="$emit('FilterKStr', 'Hoodie')">Hoodie</button>
          </li>
          <li><button @click="$emit('FilterKStr', 'Shim')">Jeans</button></li>
        </ul>
      </div>
      <div class="catalog__filters-bottom">
        <ul>
          <li><button @click="$emit('FilterKRang', 'Yashil')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Qizil')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Sariq')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Olovrang')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Hovorang')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Kok')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Qora')"></button></li>
          <li><button @click="$emit('FilterKRang', 'Oq')"></button></li>
        </ul>
      </div>
    </div>
    <div class="catalog__list">
      <div class="catalog__list-card" v-for="item in katalog" :key="item.name">
        <img :src="item.img" alt="" />
        <h4>{{ item.name }}</h4>
        <div class="catalog__list-card-bot">
          <h3>${{ item.price }}</h3>
          <button>
            <router-link :to="'/eBrandShop/Item/' + item.id">+</router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    katalog: Array,
  },
  data() {
    return {
      isCatalogShow: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
