<template>
    <div class="shape-wrap">
      <svg style="display: none;">
        <symbol viewBox="0 0 28 28" id="i28-viewList">
          <path d="M10 7V11H22V7H10ZM10 21H22V17H10V21ZM10 16H22V12H10V16ZM5 11H9V7H5V11ZM5 21H9V17H5V21ZM5 16H9V12H5V16Z" fill="#787885"/>
        </symbol>
        <symbol viewBox="0 0 28 28" id="i28-viewGrid">
          <path d="M5 13H13V5H5V13ZM5 23H13V15H5V23ZM15 23H23V15H15V23ZM15 5V13H23V5" fill="#2979FF"/>
        </symbol>
      </svg>

      <input id="shape-0" type="radio" name="Shape" class="input">
      <label for="shape-0" class="label">
        <svg 
                class="icon" 
                width="28" 
                height="28"
            >
                <use xlink:href="#i28-viewList"></use>
            </svg>
      </label>

      <input id="shape-1" type="radio" name="Shape" class="input" checked>
      <label for="shape-1" class="label">
        <svg 
                class="icon" 
                width="28" 
                height="28"
            >
                <use xlink:href="#i28-viewGrid"></use>
            </svg>
      </label>
    </div>
</template>
  
<script>
  export default {
    name: 'ShapeTemplate',
  }
</script>
<style lang="sass" src="./style.sass"></style>