<template>
    <div class="card">
        <Menubar :model="items" class="menu">
            <template #start>
                <div>
                    <img style="width: 2rem; margin-right: 0.5rem;" src="../assets/ISO.png" alt="logoMw">
                </div>
            </template>
            <template #item="{ item, props }" style="border: 1px solid red;">
                <a :class="{ 'active': activeSection === item.label }" class="flex align-items-center"
                    v-bind="props.action" @click="scrollToSection(item.label)">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
            <template #end>
                <div class="flex align-items-center">
                    <Button class="reintegro-button" label="Reintegro" @click="reintegro()" icon="pi pi-wallet" outlined
                        style="margin-right: 4px;" />
                    <SplitButton @click="abrirVentana()" label="EXTRANET" :model="IngresosWithUrls" severity="danger"
                        outlined />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
const activeSection = ref(null);
const abrirVentana = () => {
    window.open('https://www.itdepsis.com.ar/mwn.htm', '_blank');
}

const reintegro = () => {
    window.open('https://www.itdepsis.com.ar/cgi-bin/wspd_cgi.sh/WService=desmw/solirein.htm?pri=s&uweb=s', '_blank');
}

const items = ref([
    {
        label: 'Home',

    },
    {
        label: 'Prestaciones',

    },
    {
        label: 'Salud',

    },
    {
        label: 'Contacto',

    },

]);
const IngresosWithUrls = ref([
    {
        label: 'EXTRANET',
        url: 'https://www.itdepsis.com.ar/mwn.htm',
        target: '_blank'
    },
    {
        label: 'MACRO CLICK DE PAGO',
        url: 'https://pagos.macroclickpago.com.ar/SearchDeuda/796453',
        target: '_blank'
    },
    {
        label: 'PRONTO PAGO',
        url: 'https://gasnea.prontopago.com.ar/?serviceid=1084',
        target: '_blank'
    },
    {
        label: 'REINTEGRO',
        url: 'https://www.itdepsis.com.ar/cgi-bin/wspd_cgi.sh/WService=desmw/solirein.htm?pri=s&uweb=s',
        target: '_blank'
    },

]);

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        activeSection.value = sectionId;
    }
};

</script>
<style scoped>
.menu {
    border: none;
    border-radius: 0px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    box-shadow: 0 12px 64px -4px rgba(35, 21, 91, 0.03), 0 8px 12px -6px rgba(35, 21, 91, 0.03);
}

@media only screen and (max-width: 600px) {
    .reintegro-button {
        display: none;
    }
}

.menu a.active {
    font-weight: 500;
    color: #2c283b;
}
</style>
