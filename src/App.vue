<template>
  <div id="app">
    <nav>
      <router-link to="/">Buscador</router-link> |
      <router-link to="/peleadores">Peleadores</router-link>
    </nav>
    <h1>{{ titulo }}</h1>
    <Visor mensaje='Data desde App.vue' v-bind:losPeleadores="arregloPeleadores" />

  </div>
</template>

<script>
// @ is an alias to /src
import Visor from '@/components/Visor.vue'
  export default{
      components: {
        Visor
      },
    data(){
      return{
        titulo: 'Soy el Padre',
        arregloPeleadores:[],

      }
    },
    methods:{
      buscarpeleador(){
        let url = 'peleadores.json';
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json =>{
          console.log(json);

          for(let unPeleador of json){
              this.arregloPeleadores.push(unPeleador);
          }

          console.log("arregloPeleadores =>");
          console.log(this.arregloPeleadores);

        });

      },
    }, //fin methods
    created(){
          this.buscarpeleador();
  }, //fin created

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
