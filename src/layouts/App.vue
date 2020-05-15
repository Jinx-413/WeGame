<template>
  <div id="app">
    <router-view>
      
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
  #app{
    display: flex;
    flex-flow:column;
    height:100%;
  }
</style>
