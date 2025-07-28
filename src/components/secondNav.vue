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
</template>
