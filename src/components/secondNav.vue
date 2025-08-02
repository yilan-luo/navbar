<script setup>
import { useNavItemsStore } from '@/stores/navItems';
import { ref } from 'vue';
import gridViewIcon from '@/components/icons/grid-view.vue';

const navItemStore = useNavItemsStore();
const MenuOpened = ref(false);

const openMenu = () => {
    MenuOpened.value = !MenuOpened.value;
}
</script>

<template>
    <div class="nav-container">
        <div class="content">
            <div class="logo">Logo</div>
            <div>
                <div class="icon" @click="openMenu()">
                    <gridViewIcon />
                </div>
                <div :class="{ 'active': MenuOpened, 'close': !MenuOpened }">
                    <router-link class="items" v-for="item in navItemStore.items" :key="item.id" :to="item.path">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.nav-container {
    background-color: rgb(34, 154, 114);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 3px 1px rgb(5, 92, 74);
    position: sticky;
    top: 0px;
}

.content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.content a {
    padding: 8px 15px;
    font-size: 15px;
    color: white;
    transition-duration: 0.2s;
}

.content a:hover {
    background-color: rgb(98, 178, 133);
}

.logo {
    font-size: 20px;
    color: white;
    font-weight: bold;
}

.icon {
    width: 32px;
    height: 32px;
    align-items: center;
    display: none;
    cursor: pointer;
    padding: 4px;
    box-sizing: content-box;
    border-radius: 50%;
}

.icon:hover {
    transition-duration: 0.3s;
    background-color: rgb(17, 102, 49);
}

@media (max-width: 780px) {
    .icon {
        display: flex;
    }

    .active {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: rgb(34, 154, 114);
        top: 76px;
        right: 0px;
        box-shadow: 0 1px 3px 1px;
        padding: 20px 10px;
    }

    .content a {
        margin: 5px 0;
    }

    .close {
        display: none;
    }
}

.items.router-link-exact-active {
    font-weight: bold;
}
</style>