<template>
  <div class="cards-wrapper">
      <div v-for="(item, i) of productCard" :key="i" class="product-card">
        <span class="picture">
          <picture>      
          <img src="./images/Image-0.png" alt=""/>          
          </picture>
        </span>
        <div class="content flex_col gap-8">
          <div class="description">
            {{ item.description }}
          </div>
          <div class="price" v-for="(price, i) of item.price" :key="`price-${i}`">
            {{ price.value }}
          </div>
          <div class="description-extra">
            {{ item.descriptionExtra }}
          </div>
          <div class="estimation" v-for="(estimate, i) of item.estimate" :key="`estimation-${i}`">
            <div class="flex_row gap-8">
              <div class="estimation-icon">
                <svg v-for="(icon, i) of 5" :key="`icon-${i}`" class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00004 11.3106L11.42 13.3359L10.5124 9.51884L13.5339 6.95059L9.55505 6.61395L8.00004 3.0195L6.44503 6.61395L2.46619 6.95059L5.48214 9.51884L4.58012 13.3359L8.00004 11.3106Z"/>
                </svg>
              </div>
              <div class="estimation-value">{{ estimate.value }}</div>
            </div>
            <button type="button" class="estimation-btn sm">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.07 18.585L14 18.655L13.923 18.585C10.598 15.568 8.4 13.573 8.4 11.55C8.4 10.15 9.45 9.10001 10.85 9.10001C11.928 9.10001 12.978 9.80001 13.349 10.752H14.651C15.022 9.80001 16.072 9.10001 17.15 9.10001C18.55 9.10001 19.6 10.15 19.6 11.55C19.6 13.573 17.402 15.568 14.07 18.585ZM17.15 7.70001C15.932 7.70001 14.763 8.26701 14 9.15601C13.237 8.26701 12.068 7.70001 10.85 7.70001C8.694 7.70001 7 9.38701 7 11.55C7 14.189 9.38 16.352 12.985 19.621L14 20.545L15.015 19.621C18.62 16.352 21 14.189 21 11.55C21 9.38701 19.306 7.70001 17.15 7.70001Z" fill="#2979FF"/>
              </svg>

              Watch
            </button>
          </div>
        </div>
    </div>
  </div>
</template>
  
<script>
import ProductCard from "./ProductCard.json"
  export default {
    name: 'ProductCard',
    data(){
      return{
        productCard: ProductCard
      }
    },
  }
</script>
<style lang="sass" src="./style.sass"></style>