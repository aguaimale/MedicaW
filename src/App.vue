<template>

  <div>
    <MenuBar class="menu-bar" />
    <HomeView />
    <!-- <RouterView /> -->
  </div>

</template>
<script setup>
// import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue';
import HomeView from './views/HomeView.vue';



</script>
<style scoped>
.menu-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
