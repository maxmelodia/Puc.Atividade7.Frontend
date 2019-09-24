<template>
    <div>
        <UsuarioRegistro3 />
        <h3> Comp3 </h3>
        <hr>
        <div class="mb-1">
        <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
        Return value: {{ String(boxTwo) }}
        </div>     
        <br/>   
        <b-button variant="primary" sucesso @click="voltar">Voltar</b-button>
    </div>    
</template>

<script>
import UsuarioRegistro3 from './UsuarioRegistro'

export default {
    components: {
        'UsuarioRegistro3': UsuarioRegistro3
    },  

    data(){
        return{
                boxOne: '',
                boxTwo: ''
        }
    },

    methods: {
        voltar() {
            this.$router.push({ name: 'comp2' })
        },

      showMsgBoxTwo() {
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
          })
          .catch(err => {
            // An error occurred
          })
      }
    }
}
</script>

<style>

</style>


