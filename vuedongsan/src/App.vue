<template>
  <Transition name="fade">
    <MsgDlg v-if="isMsgShow" @toggleDetail="toggleDetail($event)" :p="products[curIndex]" />
  </Transition>
  <div class="menu">
    <img alt="Vue logo" src="./assets/logo.png">
    <a v-for="item in menuItems" :key="item">{{ item }}</a>
  </div>
  <Discount />
  <ProductCard @toggleDetail="toggleDetail($event)" v-for="(p, i) in products" :key="i" :p="p" :i="i"
    :style="itemStyle" />
</template>

<script>
import RoomsData from './rooms.js';
import Discount from './DiscountBanner.vue';
import MsgDlg from './MsgDlg.vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'App',
  data() {
    return {
      isMsgShow: false,
      curIndex: 0,
      menuItems: ['Home', 'Products', 'About'],
      products: RoomsData,
      itemStyle: 'color : darkslateblue'
    }
  },
  methods: {
    toggleDetail(i) {
      this.isMsgShow = !this.isMsgShow;
      this.curIndex = i;
    }
  },
  components: {
    Discount: Discount,
    MsgDlg: MsgDlg,
    ProductCard: ProductCard,
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  opacity: 1;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  text-align: left;
}

.menu img {
  width: 20px;
  float: left;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
