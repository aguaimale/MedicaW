<template>
   <div class="main-prestaciones">
      <div class="container-text">
         <div>
            <h4 style="font-weight: 600; color: #ff5e58">-Prestaciones</h4>
         </div>
         <div>
            <h2 style="font-size: 2.5rem">
               Proteger es lo
               <span style="font-weight: 600; color: #ff5e58">nuestro.</span>
            </h2>
         </div>
         <div>
            <p style="font-size: 1rem">
               Excelentes programas para proteger autónomos, proveedores,
               profesionales,<br />
               contratistas, subcontratistas y a quien participe en su actividad
               de forma temporal.
            </p>
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
                     Asistencia médica y farmacéutica sin límites.
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
                     Incapacidad parcial y/o total permanente.*
                  </p>
                  <span
                     style="
                        color: #ccc;
                        margin-left: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                     "
                     ><sub>(*)Prestación es a cargo de Chubb</sub>
                     <img
                        class="chubblogo"
                        src="@/assets/chubblogo.svg"
                        alt="chubb"
                  /></span>
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
                     Sepelio por muerte por cualquier causa.
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="1100" class="cards">
               <template #content>
                  <p class="m-0" style="display: flex; align-items: center">
                     <span
                        ><img
                           style="margin-right: 10px"
                           src="../icons/check-icon.svg"
                           alt="checkicon"
                     /></span>
                     Renta diaria por internación.
                  </p>
               </template>
            </Card>
         </div>

         <div>
            <div style="display: flex; flex-direction: column; gap: 16px">
               <Card v-motion-pop-visible-once :delay="1400" class="cards">
                  <template #content>
                     <p class="m-0" style="display: flex; align-items: center">
                        <span
                           ><img
                              style="margin-right: 10px"
                              src="../icons/check-icon.svg"
                              alt="checkicon"
                        /></span>
                        Tareas en altura.
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
                        Muerte por accidente.*
                     </p>
                     <span
                        style="
                           color: #ccc;
                           margin-left: 32px;
                           display: flex;
                           align-items: center;
                           justify-content: space-between;
                        "
                        ><sub>(*)Prestación es a cargo de Chubb</sub>
                        <img
                           class="chubblogo"
                           src="@/assets/chubblogo.svg"
                           alt="chubb"
                     /></span>
                  </template>
               </Card>

               <Card v-motion-pop-visible-once :delay="2000" class="cards">
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

               <Card v-motion-pop-visible-once :delay="2300" class="cards">
                  <template #content>
                     <p class="m-0" style="display: flex; align-items: center">
                        <span
                           ><img
                              style="margin-right: 10px"
                              src="../icons/check-icon.svg"
                              alt="checkicon"
                        /></span>
                        In Itínere en motocicleta.
                     </p>
                  </template>
               </Card>
            </div>
         </div>
      </div>
      <div v-motion-pop-visible-once :delay="2900" class="container-buttons">
         <div class="calltoaction">
            <div>
               <h2 class="call">¿PERSONAL SIN NOMINAR?</h2>
               <h3>La unica prestadora que ampara este tipo de personal.</h3>
            </div>
            <Button
               label="Conocé más"
               severity="danger"
               @click="visible = true"
            />
         </div>
      </div>
      <div class="card flex justify-content-center">
         <Dialog
            v-model:visible="visible"
            modal
            header="ADICIONAL SIN NOMINAR"
            :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
         >
            <br />
            <div>
               <Acordeon />
            </div>
         </Dialog>
      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue';
import Acordeon from '../prestaciones/Acordeon.vue';
const visible = ref(false);
</script>
<style scoped>
.main-prestaciones {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
}

.container-text {
   width: 100%;
   padding: 16px;
   color: #23155b;
}

.container-cards {
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 16px;
   margin-bottom: 32px;
}

.cards {
   width: 600px !important;
   box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05),
      0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

.container-buttons {
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 350px;
   padding: 16px;
   background-image: url('@/assets/sinnominar.jpg');
   background-size: cover;
   background-position: center;
   border-radius: 8px;
   box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05),
      0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

.chubblogo {
   width: 3rem;
   margin-left: 3rem;
}

h2 {
   font-size: 2rem;
}

h3 {
   font-size: 1rem;
   color: #23155b;
}

.calltoaction {
   padding-right: 100px;
}

.call {
   font-size: 1.4rem;
   color: #23155b;
}

@media (max-width: 1024px) {
   .main-prestaciones {
      width: 100vw;
   }

   .container-text {
      width: 85vw;
      color: #23155b;
   }

   .container-buttons {
      width: 95%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 250px;
      padding: 16px;
   }

   .container-cards {
      display: flex;
      flex-direction: column;
   }

   .cards {
      width: 85vw !important;
   }

   .chubblogo {
      width: 4rem;
      margin-top: 0.5rem;
   }

   .call {
      font-size: 1.4rem;
      color: #23155b;
   }

   h3 {
      font-size: 0.7rem;
      color: #23155b;
   }

   .calltoaction {
      padding-right: 0px;
      margin-left: 48px;
   }
}
</style>
