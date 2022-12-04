<template>
  <div>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="🔎" />
      <div class="post-header d-flex" v-for="f in follower" :key="f">
        <div class="post-profile" :style="{ backgroundImage: `url(${f.image})` }"></div>
        <span class="post-profile-name">{{ f.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then((response) => {
        follower.value = response.data;
      });
    });

    return {
      follower
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>