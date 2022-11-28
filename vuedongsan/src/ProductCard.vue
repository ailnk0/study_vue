<template>

  <div>
    <img class="room-img" :src="p.image">
    <h4 @click="send">{{ p.title }}</h4>
    <p>{{ p.price }}원</p>
  </div>

</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    p: Object,
    toggleDetail: Function
  },
  methods: {
    send() {
      this.$emit('toggleDetail', this.p.id);
    }
  }
}
</script>

<style>

</style>