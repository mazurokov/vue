<template>
    <main class="search-page">
        <div class="container">
          <FilterTempalte/>

          <div class="aside-content-wrapper mt-20">
              <AsideTemplate class="left hide"/>
              <ContentTemplate/>
          </div>
        </div>
    </main>
</template>
  
<script>
import FilterTempalte from './Filter/Filter.vue';
import AsideTemplate from './Aside/AsideTemplate.vue';
import ContentTemplate from './Content/ContentTemplate.vue';
export default {
  name: 'SearchPage',
  components: {
    FilterTempalte,
    AsideTemplate,
    ContentTemplate,
  }
}
</script>
<style lang="sass" src="./style/style.sass"></style>
  