<template>

    <div>
        <img class="room-img" :src="p.image">
        <h4 @click="toggleDetail(i)">{{ p.title }}</h4>
        <p>{{ p.price }}원</p>
    </div>

</template>

<script>
export default {
    name : 'ProductCard',
    props : {
        p : Object,
        i : Number,
        toggleDetail : Function
    }
}
</script>

<style>
</style>