<template>
  <AgeCalculator />
</template>


<script>
 import AgeCalculator from './components/AgeCalculator.vue'

 export default {
   name: 'App',
   components: {
     AgeCalculator
   }
 }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #F0F0F0;
  height: 100vh;
  padding-top: 88px;
  padding-left: 16px;
  padding-right: 16px;
 }
</style>
