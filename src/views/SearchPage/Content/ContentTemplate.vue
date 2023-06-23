<template>
    <section class="content">
      <div class="flex_row jc-sb">
        <div class="flex_row gao-20">
          <select title="Useless">
            <option value="0">
              Useless first
            </option>
            <option value="1">Useless 2</option>
            <option value="2">Useless 3</option>
          </select>
          <select title="Condition">
            <option value="0">
              Condition
            </option>
            <option value="1">Condition 2</option>
            <option value="2">Condition 3</option>
          </select>
          <select title="Delivery options">
            <option value="0">
              Delivery options
            </option>
            <option value="1">Delivery options 2</option>
            <option value="2">Delivery options 3</option>
          </select>
        </div>
        <div class="flex_row gap-24 tabs-wrap">
          <TabsForSorting/>
          <ShapeTemplate/>
        </div>
      </div>
      
      <RelatedTags/>

      <ProductCard/>
      
      <FeaturesTemplate/>
    </section>
</template>
  
<script>
import TabsForSorting from './TabsForSorting/TabsForSorting.vue'
import ShapeTemplate from './Shape/ShapeTemplate.vue'
import RelatedTags from './RelatedTags/RelatedTags.vue'
import ProductCard from './ProductCard/ProductCard.vue'
import FeaturesTemplate from './FeaturesTemplate/FeaturesTemplate.vue'
  export default {
    name: 'ContentTemplate',
    components: {
      TabsForSorting,
      ShapeTemplate,
      RelatedTags,
      ProductCard,
      FeaturesTemplate,
    }
  }
</script>
<style></style>