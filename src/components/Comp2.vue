<template>
    <div>
        <UsuarioRegistro2 />
        <h3>Listagem do espelho de matrícula de um aluno</h3>
        <br/>

		<b-alert show dismissible v-for="mensagem in mensagens"
			     :key="mensagem.texto"
			     :variant="mensagem.tipo" > {{ mensagem.texto }} </b-alert>        

        <b-container fluid >
            <b-row>
                <b-col cols="1" ><strong>Id.</strong></b-col>
                <b-col cols="4" ><strong>Disciplina</strong></b-col>                    
            </b-row>
            <b-row class="espaco" v-for="(matriculada) in matriculadas" :key="matriculada.id">
                <b-col cols="1"> {{matriculada.id}} </b-col>
                <b-col cols="4"> {{matriculada.descricaoDisciplina}} </b-col>

                <b-col class="mb-1">
                <b-button pill  variant="outline-primary" @click="showMsgBoxTwo">Cancelar</b-button>
                </b-col>   

                <!-- <b-button cols="1" pill variant="outline-primary" sucesso mar >Cancelar</b-button> -->
            </b-row>
        </b-container>
        
        <b-button variant="primary" sucesso @click="voltar">Voltar</b-button>
        <!-- <b-button variant="primary" sucesso @click="irParaProximo">Avançar</b-button> -->
    </div>
</template>

<script>
import UsuarioRegistro2 from './UsuarioRegistro'

export default {
    components: {
        'UsuarioRegistro2': UsuarioRegistro2
    },    

    data(){
        return{
            boxTwo: '',
            matriculadas: [
                    {id: 1, descricaoDisciplina: "Análise, projeto e avaliação de arquitetura de software"},
                    {id: 2, descricaoDisciplina: "Arquitetura de computação em nuvens"},
                    {id: 3, descricaoDisciplina: "Arquitetura de backend e microsserviços"},
                    {id: 4, descricaoDisciplina: "Arquitetura descentralizadas e blockchain"}
            ],
            mensagens:[]
        }
    },

    methods: {
		limpar() {
			this.mensagens = []
        },

        voltar() {
            this.$router.push({ name: 'comp1' })
        },

        irParaProximo() {
            this.$router.push({ name: 'comp3' })
        },

        showMsgBoxTwo() {
            this.limpar();    
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Deseja cancelar a disciplina matriculada???', {
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
