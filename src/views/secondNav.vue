<script setup>
import { useFirstItemsStore } from '@/stores/items';
import { useSecondItemsStore } from '@/stores/items';

const firstNav = useFirstItemsStore();
const secondNav = useSecondItemsStore();
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
    </div>
</template>
