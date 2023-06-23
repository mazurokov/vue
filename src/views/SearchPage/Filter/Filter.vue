<template>
    <section class="filter">
        <SvgSprite />
        <button 
            type="button" 
            v-for="(item, i) of filter"
            :key="i" 
            :class="{active: i == 0}"
            class="flex_col ai-center gap-4 item"
        >
            <svg 
                v-for="(icon, i) of item.icon"
                :key="i"
                class="icon" 
                width="20" 
                height="20"
            >
                <use :xlink:href="`#i20-${icon.xlink}`"></use>
            </svg>
            <span class="common-text body-ss text-ellipsis px-6">{{ item.name }}</span>
        </button>

    </section>
</template>
  
<script>
import SvgSprite from './SvgSprite.vue';
import FilterList from './FilterList.json';
export default {
    name: 'FilterTemplate',
    data(){
        return {
           filter: FilterList,
        }
    },
    components: {
        SvgSprite,
    },
}
</script>
<style lang="sass" src="./style/style.sass"></style>