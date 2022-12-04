<template>
  <div @click="fire" :class="`filter-box ${filter}`" :style="{ backgroundImage: `url(${upload.img_url})` }">
    <slot name="filter_name"></slot>
  </div>
</template>

<script>
export default {
  props: {
    filter: String,
    upload: Object,
  },
  methods: {
    fire() {
      this.emitter.emit('filter_changed', this.filter);
    }
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