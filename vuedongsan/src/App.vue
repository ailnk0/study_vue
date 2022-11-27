<template>

  <div v-if="isMsgShow" class="black-bg">
    <div class="white-bg">
      <img class="room-img" :src="products[curIndex].image">
      <h4>{{ products[curIndex].title }}</h4>
      <p>{{ products[curIndex].content }}</p>
      <p>{{ products[curIndex].price }}원</p>
      <Discount />
      <button @click="toggleDetail">닫기</button>
    </div>
  </div>

  <div class="menu">
    <img alt="Vue logo" src="./assets/logo.png">
    <a v-for="item in menuItems" :key="item">{{ item }}</a>
  </div>

  <Discount />
  
  <div v-for="(p, i) in products" :key="i" :style="itemStyle">
    <img class="room-img" :src="p.image">
    <h4 @click="toggleDetail(i)">{{ p.title }}</h4>
    <p>{{ p.price }}원</p>
  </div>

</template>

<script>
import data from './rooms.js';
import Discount from './DiscountBanner.vue';

export default {
  name: 'App',
  data() {
    return {
      isMsgShow: false,
      curIndex: 0,
      menuItems: ['Home', 'Products', 'About'],
      products: data,
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
  height: 100%;
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
</style>
