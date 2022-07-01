<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="elid"> <button v-on:click="emitirEvento">Buscar</button>
  </div>
</template>

<script>
export default {
  name: 'BuscaId',
  props: {
    msg: String
  },
  data(){
    return{
      elid:'',
    }
  },
  methods:{
      emitirEvento(event){
          this.$emit('eventoEmitido', this.elid );
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
