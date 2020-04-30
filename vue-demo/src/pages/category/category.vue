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
                <div class="rightImg">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="rightList" v-for="(item, idx) in rightList" :key="idx">
                    <div>
                        <div class="rightListTitle">{{item.title}}</div>
                        <div class="more">更多 > </div>
                    </div>
                    
                    <div class="clear"></div>
                    <ul>
                        <li v-for="(good, i) in item.itemList" :key="i">
                            <img :src="good.imgUrl" alt="">
                            <br>
                            <span>{{good.name}}</span>
                        </li>
                    </ul>
                </div>
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
            imgUrl: '',
            rightList: []
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
                    this.rightList = res.data.data.rightList;
                }
                
            });
        }
    }
}
</script>
<style scoped>
    .clear{
        clear: both;
    }
    .content{
        display: flex;
        flex: 1;
        height: calc(100vh - 100px);
    }
    .leftContent{
        box-sizing: border-box;
        width: 75px;
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
        margin: 10px;
        text-align: left;
        overflow-y: auto;
    }
    .rightImg > img{
        width: 100%;
    }
    .rightList{
        margin-top: 10px;
        overflow: hidden;
    }
    .rightList .rightListTitle{
        float: left;
    }
    .rightList .more{
        float: right;
        color: #bbb;
    }
    .rightList ul{
        display: flex;
        flex-flow: row wrap;
        /* justify-content: space-between; */
    }
    /* .rightList ul:after {
        content: "";
        flex: auto;
    } */
    .rightList ul li{
        list-style: none;
        text-align: center;
        height: 100px;
        margin-right: 5px;
    }
    .rightList ul li > img{
        width: 100px;
        height: 50px;
    }
    .rightList ul li > span{
        display: block;
        margin-top: 5px;
    }
</style>