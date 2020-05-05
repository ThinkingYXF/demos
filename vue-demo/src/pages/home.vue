<template>
    <div class="content">
        <div class="routerContent">
            <router-view></router-view>
        </div>

        <mt-tabbar v-model="selected">
            <mt-tab-item id="first">
                <img slot="icon" src="../assets/mint-ui/home.png">
                第一页
            </mt-tab-item>
            <mt-tab-item id="second">
                <img slot="icon" src="../assets/mint-ui/list.png">
                第二页
            </mt-tab-item>
            <mt-tab-item id="third">
                <img slot="icon" src="../assets/mint-ui/cart.png">
                第三页
            </mt-tab-item>
            <mt-tab-item id="fourth">
                <img slot="icon" src="../assets/mint-ui/setting.png">
                第四页
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected: 'first',
        }
    },
    methods: {
        
    },
    watch: {
        selected(newVal, oldVal){
            console.log(newVal, oldVal);
            this.$router.push({
                path: '/home/' + newVal
            })
        }
    }
}
</script>
<style scoped>
    
</style>