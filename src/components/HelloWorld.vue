<template>
  <div class="page">
    <div class="list">
      <img src="../images/index4-20181120.jpg" alt="">
    </div>
    <div class="list">
      <img src="../images/index5-20181120.jpg" alt="">
    </div>
    <div class="list">
      <img src="../images/index6-20181120.jpg" alt="">
    </div>
  </div>
</template>

<script>
import {TweenMax} from 'gsap'

export default {
  name: 'HelloWorld',
  data () {
    scrollMagicController: ''
  },
  created () {
    this.initScroll()
  },
  methods: {
    initScroll () {
      this.scrollMagicController = new ScrollMagic()
    }
  }
}
</script>

<style scoped>
.list img {
  display: block;
  max-width: 100%;
}
</style>
