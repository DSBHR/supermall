<template>
  <div id="app">
    <main-tabber></main-tabber>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabber from "components/content/MainTabber/MainTabber";
  export default {
    name: 'App',
    components: {
      MainTabber
    }
}
</script>



<style>
  @import "./assets/css/base.css";
</style>
