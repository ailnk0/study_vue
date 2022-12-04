<template>
  <div class="post d-flex flex-column mb-5">
    <div class="post-header d-flex flex-row">
      <div class="post-profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="post-profile-name">{{ post.name }}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage: `url(${post.postImage})` }"></div>
    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p><strong>{{ post.filter }}</strong> {{ post.content }}</p>
      <p class="post-date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  }
}
</script>

<style>
.post {
  width: 100%;
}

.post-profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
}

.post-profile-name {
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  padding: 10px;
}

.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.post-date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>