<template>
   <div class="main">
      <HeroImg />
      <SliderBrands />
   </div>
</template>
<script setup>
import HeroImg from '../home/HeroImg.vue';
import SliderBrands from '../home/SliderBrands.vue';
</script>
<style scoped>
.main {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   width: 100%;
   height: 90%;
   padding: 8px;
}

h2 {
   font-weight: 400;
   color: #334155;
}
</style>
