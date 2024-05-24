<template>
   <div class="main">
      <div class="contenedor">
         <div class="contenedor-text">
            <h2>Únete a Medicar Work</h2>
            <h2 style="font-weight: 500">
               Emergencias las 24 horas<br />
               <span><i class="pi pi-phone" style="font-size: 2rem"></i></span>
               0810-444-9675
            </h2>
            <p>
               Equipo profesional listo para responder.<br />
               Atención cálida, eficiente y cercana a tus necesidades.
            </p>
         </div>
         <div class="card-contacto">
            <Card
               v-motion-pop-visible-once
               :delay="1000"
               class="card"
               @click="sendEmail('info@medicarw.com.ar')"
            >
               <template #content>
                  <div style="display: flex; align-items: center; gap: 8px">
                     <i id="mail" class="pi pi-envelope" />
                     <p style="color: #140453">info@medicarw.com.ar</p>
                  </div>
               </template>
            </Card>
            <br />
            <Card
               v-motion-pop-visible-once
               :delay="1000"
               class="card"
               @click="openWhatsApp()"
            >
               <template #content>
                  <div style="display: flex; align-items: center; gap: 8px">
                     <i id="wapp" class="pi pi-whatsapp" />
                     <p style="color: #140453">Ponete en contacto</p>
                  </div>
               </template>
            </Card>
         </div>
      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue';

const sendEmail = (email) => {
   window.location.href = 'mailto:' + email;
};

const openWhatsApp = () => {
   var phoneNumber = '3492208336';
   window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
};
</script>
<style scoped>
.main {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   background: url('@/assets/footerup.png'),
      linear-gradient(173deg, rgba(255, 255, 255, 1) 0%, rgb(240, 237, 253) 57%);
   background-position: top left;
   background-repeat: no-repeat;
}

.contenedor {
   padding: 16px;
   margin-top: 48px;
}

h2 {
   font-size: 2.5rem;
   color: #140453;
}

p,
h3 {
   color: #140453;
}

#mail {
   color: #140453;
   font-size: 1.5rem;
}

#wapp {
   color: #140453;
   font-size: 1.5rem;
}

@media (max-width: 767px) {
   h2 {
      font-size: 2rem;
   }
}

.contenedor-form {
   display: flex;
   flex-direction: column;
   gap: 16px;
   padding: 8px;
}

.card-contacto {
   display: flex;
   align-items: center;
   gap: 8px;
   width: 100%;
}

.card {
   width: 250px;
   cursor: pointer;
}

@media (max-width: 767px) {
   .card-contacto {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;
   }
}
</style>
