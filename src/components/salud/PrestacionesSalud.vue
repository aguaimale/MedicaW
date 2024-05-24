<template>
   <div class="main-prestaciones">
      <div class="container-text">
         <div>
            <h4 style="color: #00d386; font-weight: 600">-Planes</h4>
         </div>
         <div>
            <h2>
               Garantía preventiva para<br />vos y
               <span style="font-weight: 500; color: #00d386">tu familia.</span>
            </h2>
         </div>
      </div>
      <div class="container-cards">
         <div style="display: flex; flex-direction: column; gap: 16px">
            <Card v-motion-pop-visible-once :delay="200" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Intervenciones quirúrgicas
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="500" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Trasplantes. *
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="800" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Prótesis.
                  </p>
               </template>
            </Card>
         </div>

         <div style="display: flex; flex-direction: column; gap: 16px">
            <Card v-motion-pop-visible-once :delay="1100" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Órtesis.
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="1400" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Renta diaria por internación no quirúrgica.
                     <br />
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="1700" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Y más beneficios.
                  </p>
               </template>
            </Card>
            <span style="color: #ccc; display: flex; justify-content: end"
               ><sub>(*)Prestación es a cargo de Cia. de Seguro</sub></span
            >
         </div>
      </div>
      <div class="div-ms">
         <h2 style="margin-bottom: 1px; color: #23155b">
            Medicar <span style="color: #00d386; font-weight: 500">Salud</span>
         </h2>
         <p style="font-weight: 500; color: #23155b">
            Es el complemento adecuado a obras sociales, mutuales y prepagas.
         </p>
      </div>
      <div class="container-buttons">
         <div class="black">
            <div>
               <h2 style="color: white">
                  ¡Conoce nuestros
                  <span style="color: white; font-weight: 600">planes! </span>
               </h2>
               <Button
                  label="Ver Planes"
                  severity="success"
                  @click="visible = true"
               />
            </div>
         </div>
      </div>

      <div class="card flex justify-content-center">
         <Dialog
            v-model:visible="visible"
            modal
            header="Conoce todos los beneficios."
            :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
         >
            <div>
               <AcordeonSalud />
            </div>
         </Dialog>
      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue';
import AcordeonSalud from '../salud/AcordeonSalud.vue';
const visible = ref(false);
</script>
<style scoped>
.main-prestaciones {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
}

.container-text {
   margin-bottom: 24px;
   color: #23155b;
   width: 63%;
}

.container-cards {
   display: flex;
   flex-direction: row;
   justify-content: start;
   gap: 16px;
}

.cards {
   width: 30vw !important;
   box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05),
      0 8px 12px -6px rgba(35, 21, 91, 0.05);
}
.black {
   background-color: rgba(0, 0, 0, 0.11);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px;
   border-radius: 8px;
}

.container-buttons {
   width: 65%;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 350px;
   background-image: url('@/assets/planesimg.jpg');
   background-size: cover;
   background-position: center;
   border-radius: 8px;
   box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05),
      0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

h2 {
   font-size: 3rem;
}

.div-ms {
   margin-bottom: 32px;
   width: 63%;
}

@media (max-width: 1024px) {
   .container-cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   .cards {
      width: 85vw !important;
   }

   .main-prestaciones {
      margin-top: 5rem;
      width: fit-content;
      height: fit-content;
   }

   .container-buttons {
      width: 90%;
   }

   h2 {
      font-size: 2rem;
   }

   .container-text {
      margin-bottom: 16px;
      color: #23155b;
      width: 85%;
   }

   .div-ms {
      margin-bottom: 16px;
      width: 90%;
   }
   .black {
      background-color: rgba(0, 0, 0, 0.11);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 8px;
   }
}

@media (max-width: 320px) {
   .container-cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
   }

   .cards {
      width: 90vw !important;
   }

   .main-prestaciones {
      margin-top: 5rem;
      width: fit-content;
      height: fit-content;
   }

   .container-buttons {
      width: 90%;
   }

   h2 {
      font-size: 2rem;
   }

   .container-text {
      margin-bottom: 16px;
      color: #23155b;
      width: 85%;
   }

   .div-ms {
      margin-bottom: 16px;
      padding: 16px;
   }
}
</style>
