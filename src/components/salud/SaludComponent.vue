<template>
   <div class="main">
      <div class="contenedor">
         <div class="text-container">
            <h3>
               Medicar
               <span style="font-weight: 500; color: #00d386"> Salud</span
               ><br />
               <span style="font-weight: 500; margin-top: 0px"
                  >Garantizamos tu bienestar</span
               >
            </h3>
            <h2>
               La prestación más<br />completa.<br />
               <span style="color: #00d386"> ¡Descúbrelo ahora!</span>
            </h2>
         </div>
         <br />
         <div class="cards-container">
            <Card v-motion-pop-visible-once :delay="200" class="card">
               <template #title><span class="decospan">01</span></template>
               <template #content>
                  <p class="m-3">
                     Libertad de uso de la suma indemnizatoria, incluso cuando
                     tengas obra social o prepaga que cubra todos sus gastos
                     médicos.
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="500" class="card">
               <template #title><span class="decospan">02</span></template>
               <template #content>
                  <p class="m-0">
                     Permite la cesión total o parcial de derechos, garantizando
                     el pago de los servicios médicos al prestador.
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="800" class="card">
               <template #title><span class="decospan">03</span></template>
               <template #content>
                  <p class="m-0">Libre elección del prestador médico.</p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="1100" class="card">
               <template #title><span class="decospan">04</span></template>
               <template #content>
                  <p class="m-0">
                     El plan familiar tiene costo fijo, independientemente del
                     número de hijos.
                  </p>
               </template>
            </Card>

            <Card v-motion-pop-visible-once :delay="1400" class="card">
               <template #title><span class="decospan">05</span></template>
               <template #content>
                  <p class="m-0">
                     Planes Flexibles, adaptables a cada situación y
                     posibilidad.
                  </p>
                  <sub style="color: #ccc"> (*) Sin gastos de sellados. </sub>
               </template>
            </Card>
         </div>
      </div>
   </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   width: 100%;
   height: 100%;
}

.contenedor {
   display: flex;
   justify-content: center;
   height: 80%;
   gap: 48px;
}

.text-container {
   display: flex;
   flex-direction: column;
   color: #23155b;
}

.cards-container {
   display: flex;
   flex-direction: column;
   gap: 8px;
}

.card {
   width: 30vw;
   height: fit-content;
   box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05),
      0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

h2 {
   font-size: 2.5rem;
   margin-top: 5px !important;
}

.decospan {
   color: #00d386;
}

@media (max-width: 1024px) {
   .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
   }

   .contenedor {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: 80%;
      gap: 0;
   }

   .text-container {
      display: flex;
      flex-direction: column;
   }

   .cards-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
   }

   .card {
      width: 80vw !important;
   }

   h2 {
      font-size: 2rem;
   }
}

@media (max-width: 320px) {
   .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
   }

   .contenedor {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: 80%;
   }

   .text-container {
      display: flex;
      flex-direction: column;
   }

   .cards-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
   }

   .card {
      width: 90vw !important;
   }

   h2 {
      font-size: 1.8rem;
   }
}
</style>
