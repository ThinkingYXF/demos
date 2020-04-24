<template>
    <div class="swiperOne">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-lazy="">
                <img src="@/assets/background.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/th.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/logo.png" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .swiperOne{
        height: 150px;
    }
    .swiperOne img{
        width: 100%;
        height: 100%;
    }
</style>