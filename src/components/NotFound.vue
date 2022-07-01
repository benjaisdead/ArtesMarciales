<template>
  <div>
      <h1> LA PAGINA QUE BUSCAS NO EXISTE </h1>
      <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
  export default{
    name: 'NotFound',
  }
</script>

<style scoped>
h1{
  color: red;
  font-size: 55px;
}
</style>
