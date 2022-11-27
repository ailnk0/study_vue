<template>

  <div v-if="isMsgShow" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="toggleMsg">닫기</button>
    </div>
  </div>

  <div class="menu">
    <img alt="Vue logo" src="./assets/logo.png">
    <a v-for="item in menuItems" :key="item">{{ item }}</a>
  </div>

  <div v-for="p in products" :key="p" :style="itemStyle">
    <img class="room-img" :src="p.image">
    <h4 @click="toggleMsg">{{ p.name }}</h4>
    <p>{{ p.price }} 만원</p>
    <button @click="incRpt(p)">허위매물신고</button>
    <span> 신고수 : {{ p.rpt }} </span>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMsgShow: false,
      menuItems: ['Home', 'Products', 'About'],
      products: [
        { name: '역삼동원룸', price: 50, rpt: 0, image: require('./assets/room0.jpg') },
        { name: '천호동원룸', price: 60, rpt: 0, image: require('./assets/room1.jpg') },
        { name: '마포구원룸', price: 70, rpt: 0, image: require('./assets/room2.jpg') }
      ],
      itemStyle: 'color : darkslateblue'
    }
  },
  methods: {
    incRpt(p) {
      p.rpt++;
    },
    toggleMsg() {
      this.isMsgShow = !this.isMsgShow;
    }
  },
  components: {
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
