<template>
  <!-- 글목록 -->
  <div v-if="(container_step == 0)">
    <PostComp v-for="post in post_data" :key="post" :post="post" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="(container_step == 1)">
    <div class="upload-image" :class="`${upload.filter}`" :style="{ backgroundImage: `url(${upload.img_url})` }"></div>
    <div class="filters">
      <FilterBox v-for="filter in filter_list" :key="filter" :filter="filter" :upload="upload">
        <template v-slot:filter_name>{{ filter }}</template>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="(container_step == 2)">
    <div class="upload-image" :class="`${upload.filter}`" :style="{ backgroundImage: `url(${upload.img_url})` }"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box" placeholder="write!"></textarea>
    </div>
  </div>

  <!-- 내 정보 -->
  <div v-if="(container_step == 3)">
    <MyPage />
  </div>
</template>

<script>
import PostComp from './PostComp.vue'
import FilterBox from './FilterBox.vue'
import MyPage from './MyPage.vue'
import FilterList from '../assets/filter_list.js'

export default {
  data() {
    return {
      filter_list: FilterList,
    }
  },
  props: {
    upload: Object,
    container_step: Number,
    post_data: Array,
  },
  components: {
    PostComp: PostComp,
    FilterBox: FilterBox,
    MyPage: MyPage,
  }
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>