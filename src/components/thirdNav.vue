<script setup>
import { useFirstItemStore } from '@/stores/navItems';
import { useSecondItemStore } from '@/stores/navItems';
import { useThirdItemStore } from '@/stores/navItems';
import { useForthItemStore } from '@/stores/navItems';
import menuIcon from '@/components/icons/menu.vue'
import { ref, onMounted } from 'vue';

const firstNav = useFirstItemStore();
const secondNav = useSecondItemStore();
const thirdNav = useThirdItemStore();
const forthNav = useForthItemStore();

const iconRef = ref(null);
const navRef = ref(null);


onMounted(() => {
    if (iconRef.value && navRef.value)
        iconRef.value.addEventListener("mouseover", function () {
            navRef.value.classList.add("open");
        })
    navRef.value.addEventListener("mouseleave", function () {
        navRef.value.classList.remove("open");
    })
})

</script>

<template>
    <div class="menu" ref="iconRef">
        <menuIcon />
    </div>
    <div class="nav-container" ref="navRef">
        <div class="items">
            <router-link to="/">
                {{ firstNav.name }}
            </router-link>
            <router-link to="/second">
                {{ secondNav.name }}
            </router-link>
            <router-link to="/third">
                <span>
                    {{ thirdNav.name }}
                </span>
            </router-link>
            <router-link to="/forth">
                {{ forthNav.name }}
            </router-link>
        </div>
    </div>


</template>

<style scoped>
.menu {
    z-index: 2;
    top: 10px;
    left: 7px;
    position: absolute;
    width: 32px;
    height: 32px;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    box-sizing: content-box;
    border-radius: 50%;
}

.menu:hover {
    background-color: rgb(208, 208, 208);
    transition-duration: 0.3s;
}

.open {
    transform: translateX(60%);
}

.nav-container {
    top: 0;
    height: 100vh;
    width: 10%;
    background-color: #f0f4f9;
    translate: -60%;
    transition-duration: 0.3s;
    padding: 80px 0 0 0;
}

.items a {
    padding: 10px;
    display: grid;
    margin: 10px 0 10px 0;
    transition-duration: 0.3s;
}

.items a:hover {
    background-color: #d3dae1;
}

@media screen and (max-width:768px) {
    .nav-container {
        width: 20%;
    }
}
</style>