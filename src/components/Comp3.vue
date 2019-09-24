<template>
    <div>
        <UsuarioRegistro3 />
        <h3> Comp3 </h3>
        <b-button variant="primary" sucesso @click="voltar">Voltar</b-button>
    </div>    
</template>

<script>
import UsuarioRegistro3 from './UsuarioRegistro'

export default {
    components: {
        'UsuarioRegistro3': UsuarioRegistro3
    },  
    methods: {
        voltar() {
            this.$router.push({ name: 'comp2' })
        }
    }
}
</script>

<style>

</style>
