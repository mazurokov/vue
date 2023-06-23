<template>
    <div  class="tab-sort">
      <div v-for="(item, i) of tabs" :key="`tabSort-${i}`">
        <input :id="`tabSort-${i}`" type="radio" name="TabSort" :checked="i === 0"  class="input">
        <label :for="`tabSort-${i}`" class="label">
          {{ item.name }}
        </label>
      </div>
    </div>
</template>
  
<script>
  import Tabs from './Tabs.json';
  export default {
    name: 'TabsForSorting',
    data(){
      return {
        tabs: Tabs,
      }
    },
    components: {
    },
  }
</script>
<style lang="sass" src="./style.sass"></style>