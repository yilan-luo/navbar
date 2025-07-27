<script setup>
import { useFirstItemsStore } from '@/stores/items';
import { useSecondItemsStore } from '@/stores/items';

const firstNav = useFirstItemsStore();
const secondNav = useSecondItemsStore();
</script>

<template>
  <div class="nav-container">
    <router-link to="/">
      <span>{{ firstNav.name }}</span>
    </router-link>
    <router-link to="/second">
      {{ secondNav.name }}
    </router-link>
  </div>
</template>
