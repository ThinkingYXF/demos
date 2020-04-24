<template>
    <div class='wrap'>
        <v-header>
            <h1 slot="title">首页</h1>
        </v-header>
        <section class="content">
            <v-swiper-one></v-swiper-one>
        </section>
        <v-footer></v-footer>
    </div>
</template>
<script>
import vHeader from '@/components/common/header.vue';
import vFooter from '@/components/common/footer.vue';
import vSwiperOne from '@/components/common/swiper_one.vue';
export default {
    components: {
        vHeader,
        vFooter,
        vSwiperOne
    }
}
</script>
<style scoped>
    
</style>