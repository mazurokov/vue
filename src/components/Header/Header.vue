<template>
    <header class="header">
        <div class="container">
            <a href="/" class="logo" title="Shopka">
                <svg class="logo-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 0H6C2.68629 0 0 2.68629 0 6V34C0 37.3137 2.68629 40 6 40H34C37.3137 40 40 37.3137 40 34V6C40 2.68629 37.3137 0 34 0Z" fill="url(#paint0_linear_3_35)"/>
                    <path d="M9.98657 27.448L12.6425 24.12C13.9439 25.2507 15.1919 26.0827 16.3865 26.616C17.6025 27.128 18.8825 27.384 20.2265 27.384C21.6132 27.384 22.7225 27.128 23.5545 26.616C24.3865 26.104 24.8025 25.4213 24.8025 24.568C24.8025 23.8 24.5145 23.2027 23.9385 22.776C23.3839 22.3493 22.4452 22.0293 21.1225 21.816L16.6745 21.048C14.7545 20.728 13.2932 20.056 12.2905 19.032C11.3092 18.008 10.8185 16.6853 10.8185 15.064C10.8185 12.9733 11.6079 11.32 13.1865 10.104C14.7865 8.88803 16.9412 8.28003 19.6505 8.28003C21.2719 8.28003 22.9039 8.55736 24.5465 9.11203C26.2105 9.6667 27.6612 10.4347 28.8985 11.416L26.4025 14.872C25.2079 13.9547 24.0345 13.2827 22.8825 12.856C21.7305 12.408 20.5465 12.184 19.3305 12.184C18.0932 12.184 17.1012 12.4187 16.3545 12.888C15.6079 13.336 15.2345 13.944 15.2345 14.712C15.2345 15.3947 15.4799 15.928 15.9705 16.312C16.4612 16.696 17.2825 16.9733 18.4345 17.144L22.6585 17.848C24.8772 18.2107 26.5412 18.9253 27.6505 19.992C28.7812 21.0373 29.3465 22.424 29.3465 24.152C29.3465 26.328 28.4825 28.0667 26.7545 29.368C25.0479 30.6693 22.7652 31.32 19.9065 31.32C18.1145 31.32 16.3439 30.9787 14.5945 30.296C12.8665 29.6133 11.3305 28.664 9.98657 27.448Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_3_35" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2979FF"/>
                    <stop offset="1" stop-color="#4C589E"/>
                    </linearGradient>
                    </defs>
                </svg>                    
                <span class="logo-text">
                    Shopka
                </span>
            </a>
            <div class="nav-bar">
                <a href="#" title="" class="item">
                    Sell on Shopka
                </a>
                <a href="#" title="" class="item">
                    Register
                </a>
            </div>
            <div class="header-search">
                <input type="search" placeholder="useless items on white background">  
                <button type="reset" class="btn">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 10.41L21.59 9L16 14.59L10.41 9L9 10.41L14.59 16L9 21.59L10.41 23L16 17.41L21.59 23L23 21.59L17.41 16L23 10.41Z" fill="#2979FF"/>
                    </svg>
                </button> 
            </div>
            <div class="nav-bar">
                <a class="item" href="#">Consumer Electronics</a>
            </div>
            <div class="action-bar">
                <button type="button" class="btn sign">
                    Sign in
                </button>
                <button type="button" class="btn cart">
                    My cart
                    <span class="counter">
                        5
                    </span>
                </button>
            </div>

            <div class="picture-user">
                <picture>
                    <img src="@/assets/images/pic-user.png" alt="">
                </picture>
            </div>
        </div>
    </header>
</template>
  
<script>
  
export default {
    name: 'HeaderTemplate',
    components: {
    }
}
 
</script>
  
<style lang="sass" src="./style/_style.sass"></style>
  