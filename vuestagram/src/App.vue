<template>
  <div class="header d-flex flex-row">
    <button class="btn btn-outline-info border-0 bg-white">Cancel</button>
    <img class="logo" src="./assets/logo.png" />
    <button class="btn btn-outline-info border-0 bg-white">Next</button>
  </div>

  <ContainerComp :post_data="post_data" :container_step="container_step" :upload_img_url="upload_img_url" />

  <div class="text-center">
    <Button class="btn btn-link btn-sm" @click="more">더 보기 ...</Button>
  </div>

  <div class="footer">
    <div class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </div>
  </div>
</template>

<script>
import ContainerComp from './components/ContainerComp.vue'
import post_data from './assets/post_data.js'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      upload_img_url: '',
      container_step: 0,
      more_count: 0,
      post_data: post_data,
    }
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.more_count++}.json`)
        .then((response) => {
          this.post_data.push(response.data);
        })
        .catch((/*error*/) => {
        });
    },
    upload(e) {
      let f = e.target.files;
      this.upload_img_url = URL.createObjectURL(f[0]);
      this.container_step = 1;
    }
  },
  components: {
    ContainerComp: ContainerComp,
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
}

.header-button {
  box-sizing: border-box;
  color: skyblue;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

.btn-more {
  margin-left: auto;
  margin-right: auto;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
