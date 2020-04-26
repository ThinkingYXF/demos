<template>
    <footer>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="@/assets/mint-ui/home.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="category">
                <img slot="icon" src="@/assets/mint-ui/list.png">
                分类
            </mt-tab-item>
            <mt-tab-item id="cart">
                <img slot="icon" src="@/assets/mint-ui/cart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="settings">
                <img slot="icon" src="@/assets/mint-ui/setting.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            "selected": ""
        }
    },
    mounted: function(){
        var nowRouter = this.$route.path;
        this.selected = nowRouter.substr(1) || 'home';
    },
    methods: {
        
    },
    watch: {
        selected(newVal, oldVal){
            this.$router.push({
                path: '/' + newVal
            })
        }
    }
}
</script>
<style scoped>

</style>