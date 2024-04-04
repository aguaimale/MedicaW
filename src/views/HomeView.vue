<template>

    <!-- Home sección -->

    <section id="home">
        <HomeComponent />
    </section>

    <!-- Sección prestaciones -->

    <section id="prestaciones">
        <PrestacionesComponent />
    </section>

    <!-- Sección salud -->

    <section id="salud">
        <SaludComponent />
        <PrestacionesSalud />
    </section>

    <!-- Sección Institucional -->

    <section id="institucional">
        <Institucional />
    </section>

    <!-- Sección contacto -->

    <section id="contacto">
        <ContactoComponent />
    </section>
    <section id="footer">
        <Footer />
    </section>

</template>
<script setup>
import HomeComponent from '@/components/home/HomeComponent.vue';
import PrestacionesComponent from '@/components/prestaciones/PrestacionesComponent.vue';
import SaludComponent from '../components/salud/SaludComponent.vue';
import PrestacionesSalud from '../components/salud/PrestacionesSalud.vue';
import Institucional from '../components/instucional/InstitucionalComponent.vue';
import ContactoComponent from '@/components/contacto/ContactoComponent.vue';
import Footer from '../components/footer/Footer.vue';


</script>

<style scoped>
#home {
    display: flex;
    height: 100vh;
    width: 100vw;
    margin-bottom: 32px;
}

#prestaciones {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
    width: 100vw;
    height: fit-content;
    border-top-left-radius: 60px;
    background:
        url('../assets/bg.png') top left / cover,
        linear-gradient(173deg, rgb(240, 237, 253) 0%, rgba(255, 255, 255, 1) 57%);

}

#salud {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
    margin-bottom: 32px;
}

#institucional {
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
}

#contacto {
    margin-top: 8rem;
    display: flex;
    height: 100vh;
    width: 100vw;
    border-top-left-radius: 60px;
    background-color: #FF5E58;
    background-image: url('../assets/footerup.png');
    background-position: top left;
    background-repeat: no-repeat;
}

#footer {
    background-color: rgb(230, 234, 238);
    height: 20vh;
    padding: 16px;
    display: flex;
}
</style>