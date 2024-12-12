<template>
  <section class="tovar container">
    <img :src="getItem.img" alt="" />
    <div class="tovar__right">
      <h2>{{ getItem.name }}</h2>
      <h3>${{ getItem.price }}</h3>
      <p>
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
      <p>Choose Size</p>

      <div class="tovar__right-size">
        <button
          @click="$emit('SizeAdd', 'Small'), $emit('SizeAddName', getItem.name)"
        >
          Small
        </button>
        <button
          @click="
            $emit('SizeAdd', 'Medium'), $emit('SizeAddName', getItem.name)
          "
        >
          Medium
        </button>
        <button
          @click="$emit('SizeAdd', 'Large'), $emit('SizeAddName', getItem.name)"
        >
          Large
        </button>
        <button
          @click="
            $emit('SizeAdd', 'X-Large'), $emit('SizeAddName', getItem.name)
          "
        >
          X-Large
        </button>
      </div>
      <div class="tovar__right-bot">
        <div class="tovar__right-bot-counter">
          <button @click="$emit('RemoveCount', getItem.name)">-</button>
          <span>{{ getItem.count }}</span>
          <button @click="$emit('AddCount', getItem.name)">+</button>
        </div>
        <button
          @click="$emit('AddCardItems', getItem.id)"
          class="tovar__right-bot-add"
        >
          Add to Card
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      currentId: null,
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getItem() {
      return this.items.find((item) => this.currentId == item.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
