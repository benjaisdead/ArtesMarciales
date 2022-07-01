<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    {{ peleadores }}
    -->

    {{ buscarid }}
    <BuscaId v-on:eventoEmitido ="recibirEvento" msg="Buscar un Peleador por ID"/>
    <br>
    <hr>
    <div v-if="mostrar" id="elenlace">
      <router-link v-bind:to="crearUrl(elPeleador.id)" >{{ elPeleador.nombre }}</router-link>
    </div>
    <div v-else>
        <PersonajeNoExiste />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BuscaId from '@/components/BuscaId.vue'
import PersonajeNoExiste from '@/components/PersonajeNoExiste.vue'

import peleadores from '@/peleadores.json';

export default {
  name: 'BuscadorView',
  components: {
    BuscaId, PersonajeNoExiste
  },
  data(){
    return{
      peleadores,
      elidrecibido:'',
      elPeleador: {},
      url: '/personaje/',
      mostrar: false,
    }
  },//fin data
  methods:{
    recibirEvento(datoHijo){
        this.elidrecibido = datoHijo;
        console.log('El componente padre BuscadorView recibio: '+this.elidrecibido);
    },
    crearUrl(unId){
          return this.url+unId;
    }
  },
  computed:{
      buscarid(){
      this.mostrar= false;
      for(let peleador of peleadores){
          if(peleador.id === this.elidrecibido ){
              this.mostrar = true;
              console.log('el peleador de propiedad computada buscarid =>');
              console.log(peleador);
              this.elPeleador.id = peleador.id;
              this.elPeleador.nombre = peleador.nombre;
              this.elPeleador.imgSrc = peleador.imgSrc;
          }//fin if
      }//fin for
      },//Fin buscarid
  }, //fin computed
}// fin export
</script>

<style scoped>
#elenlace{
  font-size: 45px;

}
</style>
