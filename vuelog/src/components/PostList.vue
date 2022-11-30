<template>
  <div class="card shadow-sm mb-3">
    <img class="bd-placeholder-img card-img-top" width="100%" :src="p.image" />
    <div class="card-body">
      <p class="card-text">{{ p.title }}</p>
      <p class="card-text">{{ p.content }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">{{ p.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    p: Object,
  },
  components: {
  }
}
</script>

<style>

</style>