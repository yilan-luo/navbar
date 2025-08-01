<template>
    <div class="container">
        <h1>Vue Tippy 淡入淡出效果示例</h1>

        <button v-tippy="{
            content: '这是一个淡入淡出的 Tooltip！',
            animation: 'fade',
            duration: 300,
            placement: 'bottom',
        }" class="btn">
            淡入淡出 (300ms)
        </button>

        <button v-tippy="{
            content: '这是一个进入慢，离开快的 Tooltip。',
            animation: 'shift-toward',
            duration: [300, 250],
            arrow: false,
            placement: 'top',
        }" class="btn">
            不同时长淡入淡出 (500ms, 100ms)
        </button>

        <button v-tippy="tippyOptions" class="btn">
            绑定到 data
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tippyOptions: {
                content: '我是从 data 绑定的 Tooltip 内容',
                animation: 'fade',
                duration: 250,
                theme: 'light', // 还可以结合其他主题
            }
        }
    }
}
</script>

<style>
/* 引入 Tippy 的动画 CSS，这一步已在 main.js 完成 */
/* @import 'tippy.js/animations/fade.css'; */

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
}

.btn {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
}
</style>