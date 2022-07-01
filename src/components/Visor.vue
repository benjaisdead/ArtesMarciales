<template>
  <div>
    {{ mensaje }}
    <!--
     <ul>
          <li v-for="peleador in losPeleadores">
            {{ peleador.nombre }}
          </li>
     </ul>
     -->

    <router-view/>
  </div>
</template>

<script>
export default{
  name:'Visor',
  props: {
    mensaje: String,
    losPeleadores: [],
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
</style>
