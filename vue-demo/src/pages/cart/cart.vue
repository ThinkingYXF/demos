<template>
    <div class="wrap">
        <v-header>
            <h1 slot="title">购物车</h1>
        </v-header>
        <div class="content">
            <div class="optionTop">
                <span>共 <b>1</b> 件商品</span>
                <span>编辑商品</span>
            </div>
            <div class="cartItemList">
                <div class="cartItem">

                </div>
                
            </div>
            <div class="optionBottom">

            </div>
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
    },
    created(){
    
    },
}
</script>
<style scoped>
    .content{
        position: relative;
        height: calc(100vh - 100px);
        background: #f4f4f4;
        overflow: hidden;
    }
    .optionTop{
        position: absolute;
        top: 0;
        height: 35px;
        line-height: 35px;
        background: #fff;
        width: 100%;
        font-size: 13px;
    }
    .optionTop > span:nth-child(1){
        float: left;
        display: block;
        margin-left: 15px;
    }
    .optionTop b{
        color: #E93302;
    }
    .optionTop > span:nth-child(2){
        float: right;   
        display: block;
        margin-right: 15px;
    }
    .cartItemList{
        margin: 45px 10px 0 10px;
        max-height: calc(100vh - 200px);
        overflow-y: auto;
    }
    .cartItemList .cartItem{
        background: #fff;
        border-radius: 5px;
        height: 150px;
        margin-bottom: 10px;
    }
    .optionBottom{
        position: absolute;
        bottom: 0;
        height: 50px;
        background: #fff;
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid #eee;
    }
</style>