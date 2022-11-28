<template>

  <div class="black-bg">
    <div class="white-bg">
      <img class="room-img" :src="p.image">
      <h4>{{ p.title }}</h4>
      <p>{{ p.content }}</p>
      <p>{{ p.price }}원</p>
      <input v-model.Number="month" />
      <p> {{ month }}개월을 선택했습니다. 총 임대료는 {{ p.price * month }}원 입니다.</p>
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
  watch: {
    month(cur, prev) {
      if (cur >= 13) {
        alert('최대 12개월 까지만 가능합니다.');
        this.month = prev;
        return;
      }
      if (isNaN(cur)) {
        alert('숫자만 입력 가능합니다.');
        this.month = prev;
        return;
      }
    },
  },
  props: {
    p: Object,
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