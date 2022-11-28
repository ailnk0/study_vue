<template>

  <div v-if="isMsgShow" class="black-bg">
    <div class="white-bg">
      <img class="room-img" :src="products[curIndex].image">
      <h4>{{ products[curIndex].title }}</h4>
      <p>{{ products[curIndex].content }}</p>
      <p>{{ products[curIndex].price }}원</p>
      <Discount />
      <input v-model.Number="month" />
      <p> {{ month }}개월을 선택했습니다. 총 임대료는 {{ products[curIndex].price * month }}원 입니다.</p>
      <button @click="send">닫기</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MsgDlg',
  data() {
    return {
      month: 1,
    }
  },
  props: {
    products: Array,
    curIndex: Number,
    isMsgShow: Boolean,
  },
  methods: {
    send() {
      this.$emit('toggleDetail', this.products[this.curIndex].id);
    }
  }
}
</script>

<style>

</style>