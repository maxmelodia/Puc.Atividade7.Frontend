<template>
    <div>
        <UsuarioRegistro1 />
        <h3> Seleção da disciplina dentro de uma turma </h3>
        <br/>
		<b-alert show dismissible v-for="mensagem in mensagens"
			:key="mensagem.texto"
			:variant="mensagem.tipo"
            >{{ mensagem.texto }}</b-alert>

        <b-container fluid >
            <b-row>
                <b-col cols="1" ><strong>Id.</strong></b-col>
                <b-col cols="1" ><strong>Turma</strong></b-col>
                <b-col cols="4" ><strong>Disciplina</strong></b-col>                    
            </b-row>
            <b-row class="espaco" v-for="(disciplina) in disciplinas" :key="disciplina.idTurma">
                <b-col cols="1"> {{disciplina.idTurma}} </b-col>
                <b-col cols="1"> {{disciplina.descricaoTurma}} </b-col>
                <b-col cols="4"> {{disciplina.descricaoDisciplina}} </b-col>
                
                <b-col class="mb-1">
                <b-button pill  variant="outline-primary" @click="showMsgBoxTwo">Matricular</b-button>
                </b-col>     
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
            boxTwo: '',
            disciplinas: [
                {idTurma: 1, descricaoTurma: 'OFERTA 1', idDisciplina: 1, descricaoDisciplina: "Análise, projeto e avaliação de arquitetura de software"},
                {idTurma: 2, descricaoTurma: 'OFERTA 1', idDisciplina: 2, descricaoDisciplina: "Arquitetura de computação em nuvens"},
                {idTurma: 3, descricaoTurma: 'OFERTA 2', idDisciplina: 3, descricaoDisciplina: "Arquitetura de backend e microsserviços"},
                {idTurma: 4, descricaoTurma: 'OFERTA 2', idDisciplina: 4, descricaoDisciplina: "Arquitetura descentralizadas e blockchain"},
                {idTurma: 5, descricaoTurma: 'OFERTA 3', idDisciplina: 1, descricaoDisciplina: "Análise, projeto e avaliação de arquitetura de software"},
                {idTurma: 6, descricaoTurma: 'OFERTA 3', idDisciplina: 2, descricaoDisciplina: "Arquitetura de computação em nuvens"},
                {idTurma: 7, descricaoTurma: 'OFERTA 4', idDisciplina: 3, descricaoDisciplina: "Arquitetura de backend e microsserviços"},
                {idTurma: 8, descricaoTurma: 'OFERTA 4', idDisciplina: 4, descricaoDisciplina: "Arquitetura descentralizadas e blockchain"}
            ],
            mensagens:[]
        }
    },

    methods: {
		limpar() {
			this.mensagens = []
        },
        
        voltar() {
            this.$router.push({ name: 'home' })
        },

        irParaProximo() {
            this.$router.push({ name: 'comp2' })
        },

        showMsgBoxTwo() {
            this.limpar();    
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Deseja cadastrar matrícula na disciplina selecionada???', {
            title: 'Alerta!',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'SIM',
            cancelTitle: 'NÃO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
            })
            .then(value => {
                this.boxTwo = value

                if (String(this.boxTwo) == "true"){
                    this.mensagens.push({
                                texto: 'Operação realizada com sucesso!',
                                tipo: 'success'           
                    })
                }

            })
            .catch(err => {
                this.mensagens.push({
                            texto: 'Falha ao realizar operação!',
                            tipo: 'error'           
                })
            })
        }

    }
}
</script>

<style>

.espaco {
  padding-bottom: 5px;
}

</style>
