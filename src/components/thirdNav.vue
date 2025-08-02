<script setup>
import { useNavItemsStore } from '@/stores/navItems';
import searchIcon from '@/components/icons/search.vue'
import { ref } from 'vue';

const navItemStore = useNavItemsStore();

// 1. 重构：使用一个响应式状态来控制导航的可见性，而不是手动操作 DOM
const isNavOpen = ref(false);

// 2. 新增：处理点击时涟漪效果的逻辑
function handleMenuClick(event) {
    const button = event.currentTarget;

    // 创建涟漪元素
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // 计算位置和大小
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // 应用样式并添加到按钮中
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    // 动画结束后，清理涟漪元素以保持 DOM 干净
    setTimeout(() => {
        ripple.remove();
    }, 600); // 必须与 CSS 中的动画时长相匹配
}
</script>

<template>
    <div class="search" @mouseover="isNavOpen = true" @click="handleMenuClick">
        <searchIcon v-tippy="{
            content: 'Search',
            placement: 'bottom-end',
            arrow: false,
            animation: 'shift-toward',
        }" />
    </div>

    <div class="nav-container" :class="{ open: isNavOpen }" @mouseleave="isNavOpen = false">
        <div class="items">
            <router-link v-for="item in navItemStore.items" :key="item.id" :to="item.path">
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.search {
    z-index: 2;
    top: 12px;
    left: 15px;
    position: absolute;
    width: 32px;
    height: 32px;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    box-sizing: content-box;
    border-radius: 50%;
    /* 2. 新增 overflow: hidden 来限制涟漪效果的范围 */
    overflow: hidden;
}

.search:hover {
    background-color: rgb(208, 208, 208);
    transition-duration: 0.3s;
}

/* 3. 新增：涟漪效果的样式 */
.search :deep(.ripple) {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    /* 更深、半透明的颜色 */
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.open {
    /* 最好统一使用 transform */
    transform: translateX(100%);
}

.nav-container {
    top: 0;
    height: 100vh;
    width: 10%;
    background-color: #f0f4f9;
    translate: -100%;
    transition-duration: 0.3s;
    padding: 90px 0 0 0;
}

.items a {
    padding: 10px;
    display: grid;
    margin: 0 0 15px 10px;
    transition-duration: 0.3s;
}

.items a:hover {
    background-color: #d3dae1;
}

.items a.router-link-exact-active {
    font-weight: bold;
}

@media screen and (max-width:768px) {
    .nav-container {
        width: 20%;
    }
}
</style>