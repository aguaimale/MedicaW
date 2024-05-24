<template>
   <!-- Home sección -->
   <section id="home">
      <HomeComponent />
   </section>
   <!-- Sección prestaciones -->
   <section id="prestaciones">
      <PrestacionesComponent style="margin-top: 48px" />
   </section>
   <!-- Sección salud -->
   <section id="salud">
      <SaludComponent style="margin-top: 48px" />
   </section>
   <section id="prestaciones-salud">
      <PrestacionesSalud style="margin-top: 48px" />
   </section>
   <!-- Sección contacto -->
   <section id="contacto">
      <ContactoComponent />
   </section>
   <!-- Sección footer -->
   <section id="footer">
      <Footer style="margin-top: 48px" />
   </section>
</template>
<script setup>
import HomeComponent from '@/components/home/HomeComponent.vue';
import PrestacionesComponent from '@/components/prestaciones/PrestacionesComponent.vue';
import SaludComponent from '../components/salud/SaludComponent.vue';
import PrestacionesSalud from '../components/salud/PrestacionesSalud.vue';
import ContactoComponent from '@/components/contacto/ContactoComponent.vue';
import Footer from '../components/footer/Footer.vue';
</script>

<style scoped>
#home {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
}

#prestaciones {
   display: flex;
   height: fit-content;
   width: 100vw;
   justify-content: center;
   background: url('../assets/bg.png') top left / cover,
      linear-gradient(173deg, rgb(240, 237, 253) 0%, rgba(255, 255, 255, 1) 57%);
}

#salud {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: fit-content;
   width: 100vw;
   padding: 48px 0;
}

#prestaciones-salud {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: fit-content;
   margin-bottom: 96px;
}

#contacto {
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 100vw;
}

@media only screen and (max-width: 600px) {
   #contacto {
      background-size: 50rem 50rem;
   }
}

#footer {
   background-color: rgb(82, 83, 85);
   height: 20vh;
   padding: 16px;
   display: flex;
   color: aliceblue;
}
</style>
