<template>
  <section class="korzina container">
    <h2>Your cart</h2>
    <div class="korzina__list">
      <div
        class="korzina__list-card"
        v-for="(item, index) in KorzinaItems"
        :key="item.name"
      >
        <img class="korzina__list-card-img" :src="item.img" alt="" />
        <div class="korzina__list-card-about">
          <h3>{{ item.name }}</h3>
          <p>Size: {{ item.size }}</p>
          <p>Color: White</p>
          <h3>${{ item.price }}</h3>
        </div>
        <div class="korzina__list-card-bot">
          <button @click="$emit('RemoveKor', index)">
            <img src="../assets/img/Frame.png" alt="" />
          </button>
          <div class="korzina__list-card-bot-counter">
            <button @click="$emit('KorRemoveCount', item.name)">-</button>
            <span>{{ item.count }}</span>
            <button @click="$emit('KorAddCount', item.name)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="korzina__total">
      <h3>Delivery Fee: <span>$15</span></h3>
      <h3>
        Total: <span>${{ totalPriceFu }}</span>
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    KorzinaItems: Array,
  },
  computed: {
    totalPriceFu() {
      let total = 0;
      this.KorzinaItems.map((item) => {
        if (this.KorzinaItems.length > 0) {
          item.totalPrice = item.count * item.price;
          total += item.totalPrice;
        }
      });
      return total + 15;
    },
  },
};
</script>

<style lang="scss" scoped></style>
