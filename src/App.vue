<template>
  <div>
    <router-view
      @SizeAdd="SizeAdd($event)"
      @SizeAddName="SizeAddName($event)"
      :items="items"
      @RemoveCount="RemoveCount($event)"
      @AddCount="AddCount($event)"
      @AddCardItems="AddCardItems($event)"
      @KorRemoveCount="RemoveCount($event)"
      @KorAddCount="AddCount($event)"
      @RemoveKor="RemoveKor($event)"
      @FilterKStr="FilterKStrFu($event)"
      @FilterKRang="FilterKRang($event)"
      :KorzinaItems="korzinaItems"
      :katalog="katalogItems"
    />
  </div>
</template>

<script>
import tovar1 from "./assets/img/tovar (1).png";
import tovar2 from "./assets/img/tovar (3).png";
import tovar3 from "./assets/img/tovar (5).png";
import tovar4 from "./assets/img/tovar (7).png";
import tovar5 from "./assets/img/tovar (2).png";
import tovar6 from "./assets/img/tovar (4).png";
import tovar7 from "./assets/img/tovar (6).png";
import tovar8 from "./assets/img/tovar (8).png";
export default {
  data() {
    return {
      items: [
        {
          img: tovar1,
          name: "T-SHIRT WITH TAPE DETAILS",
          class: "Futbolka",
          price: 120,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 0,
          color: "Qora",
        },
        {
          img: tovar2,
          name: "SKINNY FIT JEANS",
          class: "Shim",
          price: 240,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 1,
          color: "Kok",
        },
        {
          img: tovar3,
          name: "CHECKERED SHIRT",
          class: "Koylak",
          price: 180,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 2,
          color: "Qizil",
        },
        {
          img: tovar4,
          name: "SLEEVE STRIPED T-SHIRT",
          class: "Futbolka",
          price: 130,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 3,
          color: "Olovrang",
        },
        {
          img: tovar5,
          name: "VERTICAL STRIPED SHIRT",
          class: "Koylak",
          price: 212,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 4,
          color: "Yashil",
        },
        {
          img: tovar6,
          name: "COURAGE GRAPHIC T-SHIRT",
          class: "Futbolka",
          price: 145,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 5,
          color: "Olovrang",
        },
        {
          img: tovar7,
          name: "LOOSE FIT BERMUDA SHORTS",
          class: "Shorti",
          price: 80,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 6,
          color: "Hovorang",
        },
        {
          img: tovar8,
          name: "FADED SKINNY JEANS",
          class: "Shim",
          price: 210,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 7,
          color: "Qora",
        },
      ],
      katalogItems: [
        {
          img: tovar1,
          name: "T-SHIRT WITH TAPE DETAILS",
          class: "Futbolka",
          price: 120,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 0,
          color: "Qora",
        },
        {
          img: tovar2,
          name: "SKINNY FIT JEANS",
          class: "Shim",
          price: 240,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 1,
          color: "Kok",
        },
        {
          img: tovar3,
          name: "CHECKERED SHIRT",
          class: "Koylak",
          price: 180,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 2,
          color: "Qizil",
        },
        {
          img: tovar4,
          name: "SLEEVE STRIPED T-SHIRT",
          class: "Futbolka",
          price: 130,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 3,
          color: "Olovrang",
        },
        {
          img: tovar5,
          name: "VERTICAL STRIPED SHIRT",
          class: "Koylak",
          price: 212,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 4,
          color: "Yashil",
        },
        {
          img: tovar6,
          name: "COURAGE GRAPHIC T-SHIRT",
          class: "Futbolka",
          price: 145,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 5,
          color: "Olovrang",
        },
        {
          img: tovar7,
          name: "LOOSE FIT BERMUDA SHORTS",
          class: "Shorti",
          price: 80,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 6,
          color: "Hovorang",
        },
        {
          img: tovar8,
          name: "FADED SKINNY JEANS",
          class: "Shim",
          price: 210,
          totalPrice: 0,
          count: 1,
          size: "Small",
          id: 7,
          color: "Qora",
        },
      ],
      sizeData: null,
      items2: [
        {
          name: "T-SHIRT WITH TAPE DETAILS",
          price: 120,
        },
        {
          name: "SKINNY FIT JEANS",
          price: 240,
        },
        {
          name: "CHECKERED SHIRT",
          price: 180,
        },
        {
          name: "SLEEVE STRIPED T-SHIRT",
          price: 130,
        },
        {
          name: "VERTICAL STRIPED SHIRT",
          price: 212,
        },
        {
          name: "COURAGE GRAPHIC T-SHIRT",
          price: 145,
        },
        {
          name: "LOOSE FIT BERMUDA SHORTS",
          price: 80,
        },
        {
          name: "FADED SKINNY JEANS",
          price: 210,
        },
      ],
      korzinaItems: [],
    };
  },
  methods: {
    FilterKStrFu(name) {
      this.katalogItems = this.items.filter(
        (item) => item.class.toLowerCase() == name.toLowerCase()
      );
    },
    FilterKRang(color) {
      this.katalogItems = this.items.filter(
        (item) => item.color.toLowerCase() == color.toLowerCase()
      );
    },
    SizeAdd(size) {
      this.sizeData = size;
    },
    SizeAddName(name) {
      let prevPrice = null;
      this.items2.forEach((item) => {
        name == item.name ? (prevPrice = item.price) : "";
      });
      this.items.forEach((item) => {
        if (item.name == name) {
          if (this.sizeData == "Small") {
            this.SizeAddNameInFu(0, item, prevPrice);
          } else if (this.sizeData == "Medium") {
            this.SizeAddNameInFu(20, item, prevPrice);
          } else if (this.sizeData == "Large") {
            this.SizeAddNameInFu(30, item, prevPrice);
          } else if (this.sizeData == "X-Large") {
            this.SizeAddNameInFu(40, item, prevPrice);
          }
        }
      });
    },
    SizeAddNameInFu(count, item, prevPrice) {
      item.size = this.sizeData;
      item.price = prevPrice;
      item.price = item.price + count;
    },
    RemoveCount(name) {
      this.items.forEach((item) => {
        if (item.name == name) {
          if (item.count > 1) {
            item.count--;
          }
        }
      });
    },
    AddCount(name) {
      this.items.forEach((item) => {
        if (item.name == name) {
          item.count++;
        }
      });
    },
    AddCardItems(i) {
      let isProduct = false;
      this.items.map((item) => {
        if (this.korzinaItems) {
          this.korzinaItems.map((itemK) => {
            if (i == itemK.id) {
              isProduct = true;
            }
          });
          if (!isProduct && item.id == i) {
            this.korzinaItems.push(item);
            isProduct = false;
          }
        } else if (item.id == i) {
          this.korzinaItems.push(item);
          isProduct = false;
        }
      });
    },
    RemoveKor(name) {
      this.korzinaItems.map((item, index) => {
        if (name == index) {
          this.korzinaItems.splice(name, 1);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
