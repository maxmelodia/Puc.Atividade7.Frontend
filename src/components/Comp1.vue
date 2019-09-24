<template>
    <div>
        <UsuarioRegistro1 />
        <h3> Seleção da disciplina dentro de uma turma </h3>

        <b-container fluid>
            <b-row>
                <b-col><strong>Turma</strong></b-col>
                <b-col><strong>Disciplina</strong></b-col>                    
            </b-row>
            <b-row v-for="(disciplina, id) in disciplinas" :key="idTurma">
                <b-col> {{disciplina.descricaoTurma}} </b-col>
                <b-col> {{disciplina.descricaoDisciplina}} </b-col>
            </b-row>
        </b-container>

        <hr>
        <b-button variant="primary" sucesso @click="voltar">Voltar</b-button>
        <b-button variant="primary" sucesso @click="irParaProximo">Avançar</b-button>
    </div>
</template>

<script>
import UsuarioRegistro1 from './UsuarioRegistro'

export default {
    components: {
        'UsuarioRegistro1': UsuarioRegistro1
    },

    data() {
        return{
            disciplinas: [
                {idTurma: 1, descricaoTurma: 'OFERTA 1', idDisciplina: 1, descricaoDisciplina: "Análise, projeto e avaliação de arquitetura de software"},
                {idTurma: 2, descricaoTurma: 'OFERTA 1', idDisciplina: 2, descricaoDisciplina: "Arquitetura de computação em nuvens"},
                {idTurma: 3, descricaoTurma: 'OFERTA 2', idDisciplina: 3, descricaoDisciplina: "Arquitetura de backend e microsserviços"},
                {idTurma: 4, descricaoTurma: 'OFERTA 2', idDisciplina: 4, descricaoDisciplina: "Arquitetura descentralizadas e blockchain"},
                {idTurma: 5, descricaoTurma: 'OFERTA 3', idDisciplina: 1, descricaoDisciplina: "Análise, projeto e avaliação de arquitetura de software"},
                {idTurma: 6, descricaoTurma: 'OFERTA 3', idDisciplina: 2, descricaoDisciplina: "Arquitetura de computação em nuvens"},
                {idTurma: 7, descricaoTurma: 'OFERTA 4', idDisciplina: 3, descricaoDisciplina: "Arquitetura de backend e microsserviços"},
                {idTurma: 8, descricaoTurma: 'OFERTA 4', idDisciplina: 4, descricaoDisciplina: "Arquitetura descentralizadas e blockchain"}

            ]
        }
    },

    methods: {
        voltar() {
            this.$router.push({ name: 'home' })
        },
        irParaProximo() {
            this.$router.push({ name: 'comp2' })
        }
    }
}
</script>

<style>

</style>
