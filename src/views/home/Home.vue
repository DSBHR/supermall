<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
    <Recommend :recommends="recommends"></Recommend>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper";
  import Recommend from "./childComps/Recommend";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend
    },
    created() {
      //请求多个数据  轮播图
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.banners);
        console.log(this.recommends);
      }).catch()

    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
