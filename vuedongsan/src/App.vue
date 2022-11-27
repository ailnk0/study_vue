<template>
  <div class="menu">
    <a v-for="item in menuItems" :key="item">{{ item }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">

  <div v-for="p in products" :key="p" :style="itemStyle">
    <h4>{{ p.name }}</h4>
    <p>{{ p.price }} 만원</p>
    <button @click="incRptCnt(p)">허위매물신고</button>
    <span> 신고수 : {{ p.rpt }} </span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuItems: ['Home', 'Products', 'About'],
      products: [
        { name: '역삼동원룸', price: 50, rpt: 0 },
        { name: '천호동원룸', price: 60, rpt: 0 },
        { name: '마포구원룸', price: 70, rpt: 0 }
      ],
      itemStyle: 'color : darkslateblue'
    }
  },
  methods: {
    incRptCnt(p) {
      p.rpt++;
    }
  },
  components: {
  }
}
</script>

<style>
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
}
</style>
