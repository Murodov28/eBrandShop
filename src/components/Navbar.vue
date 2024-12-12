<template>
  <nav class="navbar container">
    <button @click="isBasketShow = !isBasketShow" class="navbar__burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="navbar__navigation">
      <router-link to="/eBrandShop" class="navbar__logo">Shop.co</router-link>
      <div
        :class="
          isBasketShow
            ? 'navbar__navigation-left active'
            : 'navbar__navigation-left'
        "
      >
        <div class="navbar__navigation-left-list">
          <ul>
            <li><a href="/eBrandShop/Katalog">Shop</a></li>
            <li><a href="#!">On Sale</a></li>
            <li><router-link to="/eBrandShop/Katalog">Katalog</router-link></li>
            <li><a href="#!">Brands</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbar__right">
      <router-link to="/eBrandShop/Korzina"
        ><button><img src="../assets/img/icon (2).png" alt="" /></button
      ></router-link>
      <button><img src="../assets/img/icon (1).png" alt="" /></button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isBasketShow: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
