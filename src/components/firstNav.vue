<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">Logo</router-link>

      <div class="menu-icon" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>

      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <router-link @click="closeMenu" v-for="item in navItemStore.items" :key="item.id" :to="item.path"
          class="nav-item nav-link">
          {{ item.name }}
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useNavItemsStore } from '@/stores/navItems';


const navItemStore = useNavItemsStore();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// 在移动端点击链接后关闭菜单
const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

/* Vue Router 激活链接的默认类 */
.nav-link.router-link-exact-active {
  background-color: #007bff;
  /* 使用一个不同的颜色高亮显示 */
  font-weight: bold;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    padding: 1rem 0;
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-item {
    text-align: center;
    margin: 0.5rem 0;
  }

  .menu-icon {
    display: block;
  }
}
</style>