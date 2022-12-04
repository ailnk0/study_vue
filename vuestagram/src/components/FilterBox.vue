<template>
  <div :class="`filter-box ${filter}`" :style="{ backgroundImage: `url(${upload_img_url})` }"></div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    filter: String,
    upload_img_url: String,
  }
}
</script>

<style>
.filter-box {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
</style>