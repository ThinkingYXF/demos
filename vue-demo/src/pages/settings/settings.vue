<template>
    <div class="wrap">
        <v-header>
            <h1 slot="title">我的</h1>
        </v-header>
        <div class="content">
            <h1>4</h1>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
export default {
    components: {
        'v-header': Header,
        'v-footer': Footer
    }
}
</script>
<style scoped>

</style>