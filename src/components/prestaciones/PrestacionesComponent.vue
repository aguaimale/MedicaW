<template>
    <div class="main-prestaciones">
        <div class="container-text">
            <div>
                <h4 style="color: red; font-weight: 600;">- Prestaciones</h4>
            </div>
            <div>
                <h2 style="font-size: 2.5rem;">
                    Proteger <span style="font-weight: 300; color:red">es lo nuestro.</span>
                </h2>
            </div>
            <div>
                <p style="font-size: 1.2rem;">Una excelente opción para proteger a su empresa ante la presencia<br>
                    de trabajadores autónomos, proveedores, contratistas<br>
                    y/o sub-contratistas.</P>
            </div>

        </div>
        <div class="container-cards">
            <div style="display: flex;flex-direction: column;gap: 16px;">
                <Card v-motion-pop-visible-once :delay="200" class="cards">

                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Asistencia médica y farmacéutica sin límites.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="500" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Incapacidad parcial y/o total permanente.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="800" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Sepelio por muerte por cualquier causa.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="1100" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Renta diaria por internación.
                        </p>
                    </template>
                </Card>

            </div>

            <div>
                <div style="display: flex;flex-direction: column;gap: 16px;">
                    <Card v-motion-pop-visible-once :delay="1400" class="cards">
                        <template #content>
                            <p class="m-0">
                                <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                        alt="checkicon"></span>
                                Tareas en altura.
                            </p>
                        </template>
                    </Card>

                    <Card v-motion-pop-visible-once :delay="1700" class="cards">
                        <template #content>
                            <p class="m-0">
                                <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                        alt="checkicon"></span>
                                Muerte por accidente.
                            </p>
                        </template>
                    </Card>

                    <Card v-motion-pop-visible-once :delay="2000" class="cards">
                        <template #content>
                            <p class="m-0">
                                <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                        alt="checkicon"></span>
                                Prótesis.
                            </p>
                        </template>
                    </Card>

                    <Card v-motion-pop-visible-once :delay="2300" class="cards">
                        <template #content>
                            <p class="m-0">
                                <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                        alt="checkicon"></span>
                                In Itínere en motocicleta.
                            </p>
                        </template>
                    </Card>

                </div>
            </div>

        </div>
        <div v-motion-pop-visible-once :delay="2900" class="container-buttons">
            <Button label="Conocer más" severity="danger" outlined @click="visible = true" />
        </div>
        <div class="card flex justify-content-center">
            <Dialog v-model:visible="visible" modal header="Conoce todos los beneficios." :style="{ width: '50rem' }"
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

                <br>
                <div>
                    <Acordeon />
                </div>
            </Dialog>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Acordeon from '../prestaciones/Acordeon.vue'
const visible = ref(false);



</script>
<style scoped>
.main-prestaciones {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-top: 70px;
}

.container-text {
    width: 90%;
    margin-bottom: 24px;
    color: #23155B;
}

.container-cards {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 90%;
    gap: 16px;
    margin-bottom: 48px;
}

.cards {
    width: 600px !important;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05), 0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

.container-buttons {
    width: 90%;
    display: flex;

}

@media (max-width: 767px) {
    .container-cards {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 90%;
        gap: 16px;
        margin-bottom: 48px;
    }
}

@media (max-width: 767px) {
    .cards {
        width: 370px !important;
    }
}

@media (max-width: 767px) {
    .main-prestaciones {
        margin-top: 5rem;
        width: fit-content;
        height: fit-content;
    }
}

.Button-vermas {
    display: none;
}

@media (max-width: 767px) {
    .Button-vermas {
        display: flex;
        margin-left: 8px;
    }
}
</style>