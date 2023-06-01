<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/view-page">ViewPage</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <!--<HomePage></HomePage>-->
    <router-view/>
    <footer class="footer">
      <div class="container">

      </div>
    </footer> 
  </div>
</template>

<script>
/*
// @ is an alias to /src
import HomePage from '@/views/HomePage.vue.js'

export default {
  name: 'HomePage',
  components: {
    HomePage,
  }
}
*/
</script>

<style lang="sass" src="./assets/sass/style.sass"></style>
