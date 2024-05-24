<template>
    <div class="main-slider">
        <Card v-motion-pop-visible-once :delay="500" class="card">
            <template #header>
                <img class="macro" alt="logo" src="@/assets/macro-logo.png" />
            </template>
            <!-- <template #title>Pago online</template> -->
            <template #content>
                <Button severity="danger" outlined
                    @click="redirect('https://pagos.macroclickpago.com.ar/SearchDeuda/796453')">Ir a pagar</Button>
            </template>
        </Card>
        <Card v-motion-pop-visible-once :delay="1000" class="card">
            <template #header>
                <img class="pronto" alt="logo" src="@/assets/pronto-pago.png" />
            </template>
            <!-- <template #title>Pago online</template> -->
            <template #content>
                <Button severity="danger" outlined
                    @click="redirect('https://gasnea.prontopago.com.ar/?serviceid=1084')">Ir a pagar</Button>
            </template>
        </Card>
        <Card v-motion-pop-visible-once :delay="1000" class="card">
            <template #header>
                <img class="invoice" alt="logo" src="@/assets/invoice.png" />
            </template>
            <!-- <template #title>Puntos pago</template> -->
            <template #content>
                <Button severity="danger" outlined @click="visible = true">Ver medios</Button>
            </template>
        </Card>
    </div>

    <div v-show="visible === 'true'" class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="Conocé otras alternativas de pagos." :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <br>
            <div>
                <Accordion :activeIndex="0">
                    <AccordionTab>
                        <div style=" display: flex; justify-content: center;align-items: center;">
                            <div style="">
                                <div style=" display: flex;justify-content:space-around; gap: 5px;">
                                    <img v-tooltip.bottom="'Visa credito - debito'" class="pay"
                                        src="@/assets/cards/visa.png" alt="cardlogo">
                                    <img class="pay" src="@/assets/cards/mastercard.png" alt="cardlogo">
                                    <img v-tooltip.bottom="'Escaneando el código de barra del cupón'" class="pay"
                                        src="@/assets/cards/mercadopago.png" alt="cardlogo">
                                    <img v-tooltip.bottom="'Como Medicar Work con n° de socio en rubro clubes y asociaciones'"
                                        class="pay" src="@/assets/cards/pagomiscuentas.png" alt="cardlogo">
                                </div>
                                <br>
                                <div style="display: flex;justify-content:space-around; gap: 5px;">

                                    <img class="pay" src="@/assets/cards/multipago.png" alt="cardlogo">
                                    <img class="pay" src="@/assets/cards/naranja.png" alt="cardlogo">
                                    <img v-tooltip.bottom="'Como Medicar Work con n° de socio en rubro clubes y asociaciones'"
                                        class="pay" src="@/assets/cards/ripsa.png" alt="cardlogo">
                                </div>
                                <br>
                                <div style="display: flex;justify-content:space-around; gap: 5px;">
                                    <img class="pay" src="@/assets/cards/cabal.png" alt="cardlogo">
                                    <img class="pay" src="@/assets/cards/rapipago.png" alt="cardlogo">

                                    <img class="pay" src="@/assets/cards/cobroexpres.png" alt="cardlogo">
                                    <img class="pay" src="@/assets/cards/pagofacil.png" alt="cardlogo">

                                </div>
                                <br>
                                <div style="display: flex;justify-content:space-around;">

                                </div>
                            </div>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </Dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const redirect = (url) => {
    window.open(url, '_blank');
};
const visible = ref(false);

</script>
<style scoped>
.main-slider {
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 80%;
    height: fit-content;
    margin-top: 32px;
}

.pagos {
    width: 210px;

}

.card {
    min-width: 200px;
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    justify-content: space-between;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.03), 0 8px 12px -6px rgba(35, 21, 91, 0.03);
}

.invoice {
    width: 65px;
}

.pay {
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.07), 0 8px 12px -6px rgba(35, 21, 91, 0.07);
    border-radius: 8px;
}



@media (max-width: 1024px) {

    .macro {
        width: 90%
    }

    .pronto {
        width: 90%
    }

    .reintegro {
        width: 120%
    }

    .main-slider {
        gap: 8px;
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .card {
        height: 100px;
        width: 100%;
    }

    .pay {
        box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.07), 0 8px 12px -6px rgba(35, 21, 91, 0.07);
        border-radius: 8px;
        width: 20%;
    }


}
</style>