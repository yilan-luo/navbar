<script setup>
import { useFirstItemStore } from '@/stores/navItems';
import { useSecondItemStore } from '@/stores/navItems';
import { useThirdItemStore } from '@/stores/navItems';
import { useForthItemStore } from '@/stores/navItems';

const firstNav = useFirstItemStore();
const secondNav = useSecondItemStore();
const thirdNav = useThirdItemStore();
const forthNav = useForthItemStore();


</script>

<template>
    <div class="nav-container">
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
    <div>像Gemini那样，一比一复刻</div>
</template>
