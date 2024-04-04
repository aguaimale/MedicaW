<template>
    <div class="main">
        <div class="contenedor">
            <div class="text-container">

                <h3>
                    Medicar <span style="font-weight: 500; color: #00D386;">
                        Salud</span>
                </h3>
                <h2>
                    Ofrecemos la prestación<br> más completa.<br>
                    <span style="color: #00D386;"> ¡Descúbrelo ahora!</span>
                </h2>
            </div>
            <br>
            <div class="cards-container">
                <Card v-motion-roll-visible-left :delay="200" class="card">
                    <template #title><span class="decospan">01</span></template>
                    <template #content>
                        <p class="m-3">
                            Ofrece libertad total de uso de la suma indemnizatoria, incluso con cobertura médica
                            completa.
                        </p>
                    </template>
                </Card>

                <Card v-motion-roll-visible-left :delay="500" class="card">
                    <template #title><span class="decospan">02</span></template>
                    <template #content>
                        <p class="m-0">
                            permite la cesión total o parcial de derechos, asegurando el pago de servicios médicos al
                            prestador.
                        </p>
                    </template>
                </Card>

                <Card v-motion-roll-visible-left :delay="800" class="card">
                    <template #title><span class="decospan">03</span></template>
                    <template #content>
                        <p class="m-0">
                            El beneficiario tiene la libertad de elegir al prestador médico de su confianza
                        </p>
                    </template>
                </Card>

                <Card v-motion-roll-visible-left :delay="1100" class="card">
                    <template #title><span class="decospan">04</span></template>
                    <template #content>
                        <p class="m-0">
                            El plan familiar de MEDICAR SALUD mantiene un costo fijo, independientemente del número de
                            hijos.
                        </p>
                    </template>
                </Card>

                <Card v-motion-roll-visible-left :delay="1400" class="card">
                    <template #title><span class="decospan">05</span></template>
                    <template #content>
                        <p class="m-0">
                            Flexibilidad para adaptar el plan a cada situación y posibilidad.
                        </p>
                    </template>
                </Card>

            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 90px;
    padding-top: 90px;

}

.contenedor {
    display: flex;
    justify-content: center;
    gap: 32px;
    padding: 10px;
    height: 80%;
    padding-top: 50px;
}

@media (max-width: 767px) {
    .contenedor {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: fit-content;
        height: 80%;
    }
}

.text-container {
    display: flex;
    flex-direction: column;
    padding-right: 48px;
    color: #23155B;



}

.cards-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card {
    width: 500px;
    height: 150px;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.05), 0 8px 12px -6px rgba(35, 21, 91, 0.05);
}

h2 {
    font-size: 2.5rem;
    margin-top: 5px !important;

}

.decospan {
    color: #00D386;
}

@media (max-width: 767px) {
    .text-container {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
    }
}

@media (max-width: 767px) {
    .cards-container {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        gap: 16px;
    }
}

@media (max-width: 767px) {
    .card {
        width: 370px !important;
        margin-left: 1opx;
    }
}

@media (max-width: 767px) {
    h2 {
        font-size: 2rem;
    }
}
</style>