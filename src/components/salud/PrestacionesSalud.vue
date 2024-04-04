<template>
    <div class="main-prestaciones">
        <div class="container-text">
            <div>
                <h4 style="color:#00D386; font-weight: 600;">- Prestaciones</h4>
            </div>
            <div>
                <h2>
                    Garantía preventiva para protegerte<br> a vos y <span style="font-weight: 500; color:#00D386">a tu
                        familia.</span>
                </h2>
            </div>
        </div>
        <div class="container-cards">
            <div style="display: flex;flex-direction: column;gap: 16px;">
                <Card v-motion-pop-visible-once :delay="200" class="cards">

                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Intervenciones quirúrgicas
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="500" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Trasplantes.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="800" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Prótesis.
                        </p>
                    </template>
                </Card>
            </div>

            <div style="display: flex;flex-direction: column;gap: 16px;">
                <Card v-motion-pop-visible-once :delay="1100" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Órtesis.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="1400" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Renta diaria por internación no quirúrgica.
                        </p>
                    </template>
                </Card>

                <Card v-motion-pop-visible-once :delay="1700" class="cards">
                    <template #content>
                        <p class="m-0">
                            <span><img style=" margin-right: 10px;" src="../icons/check-icon.svg"
                                    alt="checkicon"></span>
                            Y más beneficios.
                        </p>
                    </template>
                </Card>

            </div>
        </div>
        <div class="container-buttons">
            <Button label="Ver Planes" severity="success" outlined @click="visible = true" />
        </div>
        <div class="card flex justify-content-center">
            <Dialog v-model:visible="visible" modal header="Conoce todos los beneficios." :style="{ width: '50rem' }"
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <div>
                    <AcordeonSalud />
                </div>
            </Dialog>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import AcordeonSalud from '../salud/AcordeonSalud.vue'
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
    color: #23155B;
    width: 63%;
}

.container-cards {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 16px;
    margin-bottom: 48px;
}

.cards {
    width: 600px !important;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05), 0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

.container-buttons {
    width: 63%;
    display: flex;
}

@media (max-width: 767px) {
    .container-cards {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
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

@media (max-width: 767px) {
    .container-buttons {
        width: 90%;
    }
}

h2 {
    font-size: 2.5rem
}

@media (max-width: 767px) {
    h2 {
        font-size: 2rem
    }

}

@media (max-width: 767px) {
    .container-text {
        margin-bottom: 16px;
        color: #23155B;
        width: 85%;

    }

}
</style>