<template>
    <div>
        <UsuarioRegistro2 />
        <h2> Comp2 </h2>
        <b-button variant="primary" sucesso @click="voltar">Voltar</b-button>
        <b-button variant="primary" sucesso @click="irParaProximo">Avançar</b-button>
    </div>
</template>

<script>
import UsuarioRegistro2 from './UsuarioRegistro'

export default {
    components: {
        'UsuarioRegistro2': UsuarioRegistro2
    },    
    methods: {
        voltar() {
            this.$router.push({ name: 'comp1' })
        },
        irParaProximo() {
            this.$router.push({ name: 'comp3' })
        }
    }
}
</script>

<style>

</style>
