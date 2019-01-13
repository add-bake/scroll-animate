<template>
  <div class="page">
    <div id="scene1" class="list">
      <img src="../images/index4-20181120.jpg" alt="">
    </div>
    <div id="scene2" class="list">
      <img src="../images/index5-20181120.jpg" alt="">
      <img id="stopfishtoright" class="stopfishtoright" src="../images/stopfishtoright-20181120.png" alt="">
    </div>
    <div id="scene3" class="list">
      <img src="../images/index6-20181120.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  created () {
    this.initScroll()
  },
  methods: {
    initScroll () {
      this.$scrollmagic.Scene({ triggerElement: '#scene2', duration: 300 })
        .setTween('#stopfishtoright', { top: '490px', left: '300px' })
        .addIndicators({ name: '2(duration: 300)' })
        .addTo(this.controller_)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
  }
  .stopfishtoright {
    position: absolute;
    top: 150px;
    left: -60px;
    z-index: 1;
    width: 130px;
  }
}
</style>
