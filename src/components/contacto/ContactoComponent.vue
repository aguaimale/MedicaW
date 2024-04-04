<template>
    <div class="main">
        <div class="contenedor">
            <div class="contenedor-text">
                <h2>Únete a Medicar Work <br>y recibe cobertura</h2>
                <h2 style="font-weight: 500;">Emergencias las 24 horas<br>
                    <span><i class=" pi pi-phone" style="font-size: 2rem"></i></span> 0810-444-9675
                </h2>
                <p>
                    Equipo profesional listo para responder.<br> Atención cálida, eficiente y cercana a tus necesidades.
                </p>
            </div>
            <div class="contenedor-form">
                <h3>contáctanos</h3>
                <InputText type="text" v-model="mailContacto.nombre" variant="filled" placeholder="Ingresa tu nombre" />
                <InputText type="text" v-model="mailContacto.correoElectronico" variant="filled"
                    placeholder="Ingresa tu email" />
                <Textarea v-model="mailContacto.mensaje" rows="5" cols="30" placeholder="Deja tu comentario" />
                <div>
                    <Button class="formButton" label="Enviar" severity="secondary" outlined @click="sendmensaje" />
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
import { ref } from "vue";
const mailContacto = ref({
    nombre: '',
    correoElectronico: '',
    mensaje: '',
});

const sendmensaje = () => {

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
}

.contenedor {
    padding: 16px;
    margin-top: 48px;
}

h2 {
    font-size: 2.5rem;
    color: white;
}

p,
h3 {
    color: white;
}

@media (max-width: 767px) {
    h2 {
        font-size: 2rem
    }
}

.contenedor-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;

}

.formButton {
    color: white;

}

.formButton:hover {
    color: rgb(255, 95, 95);
    background: white;

}
</style>