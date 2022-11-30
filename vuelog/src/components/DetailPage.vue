<template>
  <div class="container">
    <div class="card shadow-sm m-3">
      <img class="bd-placeholder-img card-img-top" width="100%" :src="posts[$route.params.id].image" />
      <div class="card-body">
        <p class="card-text">{{ posts[$route.params.id].title }}</p>
        <p class="card-text">{{ posts[$route.params.id].content }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">{{ posts[$route.params.id].date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      //post: useRoute().params.id,
    }
  },
  props: {
    posts: Object,
  },
  components: {
  }
}
</script>

<style>

</style>