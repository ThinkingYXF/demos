<template>
    <footer>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="first">
                <img slot="icon" src="@/assets/mint-ui/home.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="second">
                <img slot="icon" src="@/assets/mint-ui/list.png">
                分类
            </mt-tab-item>
            <mt-tab-item id="third">
                <img slot="icon" src="@/assets/mint-ui/cart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="fourth">
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
        this.selected = nowRouter.substr(1) || 'first';
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