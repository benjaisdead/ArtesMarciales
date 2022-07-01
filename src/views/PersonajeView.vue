<template>
  <div>
    <router-link to="/peleadores">Regresar a Peleadores</router-link> |
    <router-link to="/">Regresar a Busqueda</router-link>

    <p> {{ explorardatos }} </p>
    <!-- <p>id: {{ elPeleador.id}}</p> -->
    <p>nombre: {{ elPeleador.nombre }}</p>
    <img v-bind:src="elPeleador.imgSrc" alt="">
  </div>
</template>

<script>
import peleadores from '@/peleadores.json'
export default{
    name: 'PersonajeView',
    data(){
      return{
          peleadores,
          elPeleador:{},
          existe: false,
      }
    },
    computed:{
        explorardatos(){

              for(let peleador of peleadores){

                  if(peleador.id === this.$route.params.id){
                      this.existe = true;
                      console.log('el peleador =>');
                      console.log(peleador);
                      this.elPeleador.id = peleador.id;
                      this.elPeleador.nombre = peleador.nombre;
                      this.elPeleador.imgSrc = peleador.imgSrc;
                  }

              }
              if(this.existe){
                return `id ${this.$route.params.id }`;

              }
              else{
                  this.$router.push('/');
              }


        }// fin explorardatos
    }//fin computed
}
</script>
