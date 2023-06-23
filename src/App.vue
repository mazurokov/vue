<template>
  <div id="app">
    <HeaderTemplate/>
    <router-view/>
  </div>
</template>

<script>

// @ is an alias to /src
import HeaderTemplate from '@/components/Header/Header.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderTemplate,
  }
}

</script>

<style lang="sass" src="@/assets/sass/style.sass"></style>
