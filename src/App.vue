<template>
  <div id="app">
    <game></game>
  </div>
</template>

<script>
import Game from './components/Game.vue'
export default {
  components: { Game },
  name: 'App',
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
