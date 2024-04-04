<template>
    <div class="main-hero">
        <h1>Medicar<span style="font-weight: 400;">Work</span></h1>
        <h2>Proteger es lo nuestro</h2>
        <div class="button-container">
            <Button label="Para Empresas" severity="danger" />
            <Button class="button-salud" label="Medicar Salud" severity="secondary" outlined />
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.main-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 650px;
    width: 80%;
    border-radius: 24px;
    background-image: url(./ejecutivoindustria.jpg);
    background-size: cover;
    background-position: center;
    margin-top: 100px;

}

.button-salud {
    color: white;
}

.button-salud:hover {
    color: red;
}

.button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}

h1 {
    font-size: calc(4rem + 200%);
    margin-bottom: 16px;
    color: white;


}

h2 {
    font-weight: 600;
    margin-bottom: 48px;
    color: white;

}

@media (max-width: 767px) {
    .main-hero {
        height: 80vh;
        border-radius: 0px;
        width: 100%;
        background-image: url(./ejecutivoindustria.jpg);
        background-size: cover;
        background-position: center;
        margin-top: 0px;

    }

}

@media (max-width: 767px) {
    h1 {
        font-size: calc(2.2rem + 100%);
        padding-right: 10px;

    }

    h2 {
        font-size: 1.5rem;

        margin-bottom: 24px;

    }
}
</style>