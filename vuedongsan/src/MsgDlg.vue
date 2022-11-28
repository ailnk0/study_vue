<template>

  <div v-if="isMsgShow" class="black-bg">
    <div class="white-bg">
      <img class="room-img" :src="products[curIndex].image">
      <h4>{{ products[curIndex].title }}</h4>
      <p>{{ products[curIndex].content }}</p>
      <p>{{ products[curIndex].price }}원</p>
      <Discount />
      <button @click="toggleDetail">닫기</button>
    </div>
  </div>

</template>

<script>
export default {
    name : 'MsgDlg',
    props : {
        products : Array,
        curIndex : Number,
        isMsgShow : Boolean,
        toggleDetail : Function
    }
}
</script>

<style>
</style>