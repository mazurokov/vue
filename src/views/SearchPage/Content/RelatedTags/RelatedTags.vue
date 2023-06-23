<template>
    <div class="flex_row wrap gap-10 mt-40 mb-16">
        <div class="body-ss fw-medium as-center">
            Related
        </div>
        <div class="flex_row wrap gap-8">
            <div v-for="(item, i) of relatedTags" :key="i" class="badge-gray sm">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>
  
<script>
import RelatedTags from './RelatedTags.json'
  export default {
    name: 'RelatedTagsTemplate',
    data(){
        return {
            relatedTags: RelatedTags,
        }
    },
    components: {
    }
  }
</script>
<style lang="sass" src="./style.sass"></style>