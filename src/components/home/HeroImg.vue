<template>
   <div class="main-hero" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="black">
         <div class="hero-logo">
            <img class="iso" src="@/assets/ISO.png" alt="isologo" />
            <h1 style="margin-top: 8px">
               Medicar<span style="font-weight: 400">Work</span>
            </h1>
         </div>
         <h2>Proteger es lo nuestro</h2>
      </div>
   </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ejecutivoindustria from './brands/ejecutivoindustria.jpg';
import durlero from './brands/durlero.jpg';
import carpintero from './brands/carpintero.jpg';

const backgrounds = [ejecutivoindustria, durlero, carpintero];
let currentBackgroundIndex = 0;

const backgroundUrl = ref(backgrounds[currentBackgroundIndex]);

const changeBackground = () => {
   currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
   backgroundUrl.value = backgrounds[currentBackgroundIndex];
};

onMounted(() => {
   setInterval(changeBackground, 3000);
});
</script>
<style scoped>
.main-hero {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 650px;
   width: 100%;
   background-size: cover;
   background-position: center;
   transition: background-image 2s ease;
}

.hero-logo {
   display: flex;
   flex-direction: row;
   align-items: center;
   text-align: center;
   justify-content: center;
}

.iso {
   width: 19%;
   margin-right: 4px;
   padding: 10px;
}

.black {
   background-color: rgba(0, 0, 0, 0.089);
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.button-salud {
   border-color: white;
   color: white;
}

.button-container {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 16px;
}

h1 {
   font-size: calc(4rem + 200%);
   margin-bottom: 16px;
   color: rgb(255, 255, 255);
}

h2 {
   font-weight: 600;
   margin-bottom: 48px;
   color: rgb(255, 255, 255);
   font-size: calc(1rem + 200%);
}

@media (max-width: 1024px) {
   .main-hero {
      height: 65vh;
      border-radius: 0px;
      width: 100%;
      background-size: cover;
      background-position: center;
      margin-top: 0px;
   }

   .black {
      background-color: rgba(0, 0, 0, 0.089);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0px;
   }

   h1 {
      font-size: calc(1rem + 100%);
   }

   h2 {
      font-size: 1rem;
   }
}

@media (max-width: 320px) {
   .main-hero {
      height: 65vh;
      border-radius: 0px;
      width: 100%;
      background-size: cover;
      background-position: center;
      margin-top: 0px;
   }

   .black {
      background-color: rgba(0, 0, 0, 0.089);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0px;
   }

   h1 {
      font-size: calc(1rem + 100%);
   }

   h2 {
      font-size: 1rem;
   }
}
</style>
