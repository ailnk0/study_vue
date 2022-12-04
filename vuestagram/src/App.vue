<template>
  <div class="header d-flex flex-row">
    <button v-if="(container_step == 1 || container_step == 2)" @click="reset"
      class="btn btn-outline-info border-0 bg-white">Cancel</button>
    <img class="logo" src="./assets/logo.png" />
    <button v-if="(container_step == 1)" @click="next" class="btn btn-outline-info border-0 bg-white">Next</button>
    <button v-if="(container_step == 2)" @click="publish"
      class="btn btn-outline-info border-0 bg-white">publish</button>
  </div>

  <ContainerComp @write="upload.text = $event" :post_data="post_data" :container_step="container_step"
    :upload="upload" />

  <div v-if="(container_step == 0)" class="text-center">
    <Button class="btn btn-link btn-sm" @click="more">더 보기 ...</Button>
  </div>

  <div v-if="(container_step == 0)" class="footer">
    <div class="footer-button-plus">
      <input @change="create" accept="image/*" type="file" id="file" class="inputfile" />
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
      upload: {
        img_url: '',
        text: '',
        filter: '',
      },
      container_step: 0,
      more_count: 0,
      post_data: post_data,
    }
  },
  mounted() {
    this.emitter.on('filter_changed', (v) => {
      this.upload.filter = v;
    });
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
    create(e) {
      this.reset();
      let f = e.target.files;
      this.upload.img_url = URL.createObjectURL(f[0]);
      this.container_step = 1;
    },
    reset() {
      this.container_step = 0;
      this.upload.img_url = '';
      this.upload.text = '';
      this.upload.filter = '';
    },
    next() {
      this.container_step++;
    },
    publish() {
      let newPost = {
        name: "Minny",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.upload.img_url,
        likes: 0,
        date: "Apr 4",
        liked: false,
        content: this.upload.text,
        filter: this.upload.filter,
      };
      console.log(newPost.filter);
      this.post_data.unshift(newPost);
      this.reset();
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
  height: 50px;
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
