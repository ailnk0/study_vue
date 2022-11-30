<template>
  <div v-for="(p, i) in posts" :key="p">
    <div class="container">
      <div class="card shadow-sm m-3">
        <a :href="`/Detail/${i}`">
          <img class="bd-placeholder-img card-img-top" width="100%" :src="p.image" />
        </a>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
  components: {
  }
}
</script>

<style>

</style>