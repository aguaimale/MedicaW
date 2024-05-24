<template>
  <div>
    <MenuBar class="menu-bar" />
    <HomeView />
    <BottonEmergencias />
  </div>
</template>
<script setup>
import MenuBar from './components/MenuBar.vue';
import HomeView from './views/HomeView.vue';
import BottonEmergencias from './components/BottonEmergencias.vue';

</script>
<style scoped>
.menu-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
