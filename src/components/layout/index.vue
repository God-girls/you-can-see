<style>
    .wrap{
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        height: 100%;
        flex-direction: column;
        width: 100%;
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
    }
    .main::-webkit-scrollbar{
        display: none;
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

