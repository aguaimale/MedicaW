<template>
    <div class="main">
        <div class='button-emergency'>
            <a :href="'tel:' + telefono" class="button-body">
                <img style="width: 80%;" src="../assets/emergency-contact.svg" alt="icono-emergencia">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            telefono: '0810-444-9675'
        };
    }
}
</script>
<style scoped>
.button-body {
    width: 65px;
    height: 65px;
    border-radius: 100px;
    background-color: #FF5E58;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 45px;
    right: 25px;
    z-index: 999;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.09), 0 8px 12px -6px rgba(35, 21, 91, 0.09);
}

.emerdiv {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: -6px;
    right: 10px;
    z-index: 999;
}

.button-body:hover {
    transform: scale(1.1);
}

a {
    text-decoration: none;
}

@media (max-width: 1024px) {
    .button-body {
        width: 45px;
        height: 45px;
        border-radius: 100px;
        background-color: #FF5E58;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 15px;
        right: 10px;
        z-index: 999;
        box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.09), 0 8px 12px -6px rgba(35, 21, 91, 0.09);
    }

    .emerdiv {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: -6px;
        right: 7px;
        z-index: 999;

    }

    .button-body:hover {
        transform: scale(1.1);
    }
}
</style>
