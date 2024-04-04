<template>
    <div class="main">
        <div class="contenedor">
            <div class="img-container">
                <img class="BackgroundImg" src="@/assets/institucional.png" alt="img intitucional">
            </div>
            <div class="text-container">
                <div>
                    <img class="logobrand" src="@/assets/LogoPngMw.png" alt="">
                </div>
                <h2>Es un producto <br> de Nu.mu.se</h2>
                <div style="display: flex; flex-direction: column; align-items: start;">
                    <img class="responsiveImg" src="@/assets/imagenInst.png" alt="">
                </div>
                <p>Con origen en la ciudad de Rafaela (pcia. de Santa Fe), el accionar de <span
                        style="font-weight: 600;">MEDICAR WORK</span> se
                    extiende a todo el país: Buenos Aires, Córdoba, Rosario, Santa Fe, Entre Ríos, Corrientes, Catamarca
                    y San Luis.</p>
                <p>Brindamos nuestra mayor responsabilidad en el momento de satisfacer la urgencia y la angustia que
                    generan los eventos accidentalmente dañinos. Con más de 25.000 afiliados que confían en nuestros
                    servicios y respaldan nuestra experiencia y solidez.</p>
            </div>
            <br>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;

}

.contenedor {
    display: flex;
    align-items: center;
    height: 100vh;
    gap: 84px;
    margin-top: 64px;
}

.text-container {
    width: 45%;
    padding-left: 3rem;
    color: #140453;
    padding: 16px;


}

.responsiveImg {
    display: none;
}

@media (max-width: 767px) {
    .text-container {
        width: 100%;
        height: 100%;
        padding-left: 3rem;
        color: #140453;
        padding: 16px;
    }
}

@media (max-width: 767px) {
    .responsiveImg {
        display: flex;
        width: 24rem;
        height: auto;
        border-radius: 8px 120px;
        margin-bottom: 16px;

    }
}

h2 {
    font-size: 2.5rem;
    margin-top: 5px !important;
    color: #140453;

}

.logobrand {
    width: 160px;
    margin-bottom: 16px;
}

@media (max-width: 767px) {
    .contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
}

@media (max-width: 767px) {
    h2 {
        font-size: 2rem;
        margin-top: 5px !important;
        color: #140453;
    }
}

@media (max-width: 767px) {
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 16px;
    }
}



@media (max-width: 767px) {
    .BackgroundImg {
        display: none;
    }
}
</style>