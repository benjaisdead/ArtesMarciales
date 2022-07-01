<template>
  <div class="peleadores">
    <h1>Peleadores</h1>
      <ul>
        <li v-for="unPeleador in peleadores">
            <router-link v-bind:to="crearUrl(unPeleador.id)" >{{ unPeleador.nombre }}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import peleadores from '@/peleadores.json';
export default{
  name:'PeleadoresView',
  props: {
    mensaje: String
  },
  data(){
    return{
          peleadores,
          url: '/personaje/'
    }
  },
  methods:{
      crearUrl(unId){
            return this.url+unId;
      }
  },
  computed:{

  }
}
</script>

<style scoped>
li{
  text-align: left;
}
</style>
