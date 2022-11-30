<template>
  <div>
    <PostComp v-for="post in post_data" :key="post" :post="post" />
  </div>
</template>

<script>
import PostComp from './PostComp.vue'

export default {
  props: {
    post_data: Array,
  },
  components: {
    PostComp: PostComp,
  }
}
</script>

<style>

</style>