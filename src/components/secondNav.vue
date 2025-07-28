<script setup>
import { useFirstItemStore } from '@/stores/navItems';
import { useSecondItemStore } from '@/stores/navItems';
import { useThirdItemStore } from '@/stores/navItems';
import { useForthItemStore } from '@/stores/navItems';
import { ref } from 'vue';
import gridViewIcon from '@/components/icons/grid-view.vue';

const firstNav = useFirstItemStore();
const secondNav = useSecondItemStore();
const thirdNav = useThirdItemStore();
const forthNav = useForthItemStore();
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
                    <router-link to="/">
                        {{ firstNav.name }}
                    </router-link>
                    <router-link to="/second">
                        <span>
                            {{ secondNav.name }}
                        </span>
                    </router-link>
                    <router-link to="/third">
                        {{ thirdNav.name }}
                    </router-link>
                    <router-link to="/forth">
                        {{ forthNav.name }}
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
    transition-duration: 0.3s;
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
    display: none;
    cursor: pointer;
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
        top: 63px;
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
</style>