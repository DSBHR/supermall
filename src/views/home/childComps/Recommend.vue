<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image"/>
        <div class="rc-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend div {
    flex: 1;
  }
  .recommend img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  .rc-text {
    font-size: 12px;
  }
</style>
