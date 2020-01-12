<style>
    .wrap{
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
    }
    .main{
        position: relative;
        flex: 1;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        z-index: 2;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility:hidden;    
        width: 100%;
    }
    .main::-webkit-scrollbar{
        display: none;
    }
    #pcBody {
        background: #f2f2f2;
        padding: 20px 0;
    }
    #pcBody .wrap{
        width: 700px;
        margin: 0 auto;
        background: #fff;
        border:1px solid #bcbcbc;/*no*/
    }
    #pcBody .main::-webkit-scrollbar{
        display: block;
    }
</style>
<template>
    <div class="wrap">
        <slot name="header"></slot>
        <div class="main">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
        <slot name="overlay"></slot>
    </div>
</template>
<script src="./flex.js"></script>

