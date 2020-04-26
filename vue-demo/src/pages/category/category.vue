<template>
    <div class="wrap">
        <v-header>
            <h1 slot="title">分类</h1>
        </v-header>
        <section class="content">
            <div class="leftContent">
                <ul>
                    <li @click="changeTab(item, idx)" v-for="(item, idx) in categoryList" :key="idx" :class="(idx==leftIndex ? 'active' : '')">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="rightContent">
                <div>
                    <img :src="imgUrl" alt="">
                </div>
                <div class=""></div>
            </div>
        </section>
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
    },
    data(){
        return {
            categoryList: [],
            leftIndex: 0,
            imgUrl: ''
        }
    },
    created: function(){
        this.init();
    },
    methods: {
        init(){
            this.$http.getCategory().then(res=>{
                if(res.data.data){
                    this.categoryList = res.data.data;
                    
                    this.leftIndex = 0;
                    this.changeTab(this.categoryList[this.leftIndex], this.leftIndex);
                }
            });
        },
        changeTab(item, idx){
            this.leftIndex = idx;
            this.$http.getCategoryDetail().then(res=>{
                if(res.data.data){
                    this.imgUrl = res.data.data.imgUrl;
                }
                
            });
        }
    }
}
</script>
<style scoped>
    .content{
        display: flex;
        flex: 1;
        height: calc(100vh - 100px);
    }
    .leftContent{
        box-sizing: border-box;
        width: 80px;
        border-right: 1px solid #ccc;
        overflow-y: auto;
        background: #f8f8f8;
    }
    .leftContent ul li{
        box-sizing: border-box;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 12px;
    }
    .leftContent ul li.active{
        background: #fff;
        font-size: 13px;
        font-weight: bold;
    }
    
    .rightContent{
        flex: 1;
        padding-top: 10px;
        margin-left: 10px;
    }
</style>