<template>
    <header>
        <slot name="title"></slot>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-width: 320px;
        max-width: 540px;
        height: 44px;
        text-align: center;
        background: #fff;
        border-bottom: 1px solid #f7f7f7;
        z-index: 99;
    }
    h1{
        letter-spacing: .2vw;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
    }
</style>