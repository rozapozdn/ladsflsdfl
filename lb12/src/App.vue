<template>
  <div id="app">
	<favorite></favorite>
  </div>
</template>

<script>
//import Worker from './worker.vue'
//import HelloWorld from './components/HelloWorld.vue'
import Favorite from './components/favorite.vue'

export default {
  name: 'App',
  components: {
	//HelloWorld,
	//appWorker:Worker,
	favorite:Favorite
	
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
