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
                    <SplitButton label="Acceder" :model="IngresosWithUrls" severity="danger" />

                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
const activeSection = ref(null);

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
        label: 'Institucional',

    },
    {
        label: 'Contacto',

    },

]);
const IngresosWithUrls = ref([
    {
        label: 'Extranet',
        url: 'https://www.itdepsis.com.ar/mwn.htm',
        target: '_blank'
    },
    {
        label: 'Macro',
        url: 'https://pagos.macroclickpago.com.ar/SearchDeuda/796453',
        target: '_blank'
    },
    {
        label: 'Pronto pago',
        url: 'https://gasnea.prontopago.com.ar/?serviceid=1084',
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

.menu a.active {
    font-weight: bold;
    color: #2c283b;
}
</style>
