<template>
    <div class="home">
        <h2>Início</h2>
        <b-button variant="primary" sucesso @click="irParaProximo">Avançar</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaProximo() {
            this.$router.push({ name: 'comp1' })
        }
    }
}
</script>

<style>

</style>
