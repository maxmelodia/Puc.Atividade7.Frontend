<template>
    <b-card class="usuarioRegistro">
        <strong>Nome: </strong>{{usuario.nome}}<br/>
        <strong>E-mail: </strong>{{usuario.email}}<br/>
        <strong>Matrícula: </strong>{{usuario.matricula}}<br/>
        <hr>
    </b-card>
</template>

<script>
export default {
    data(){
    		return {
	    		usuario: {
                    nome: 'Maxwell Roberto Duarte',
                    email: 'maxmelodia@gmail.com',
                    matricula: 123456789
                }
			}        
    }
}
</script>

<style>

</style>
