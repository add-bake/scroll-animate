<template>
  <div
    class="page"
    @touchmove="walkAnimate = true"
    @touchend="walkAnimate = false">
    <div id="scene1" class="list">
      <img src="../images/index4-20181120.jpg" alt="">
    </div>
    <div id="scene2" class="list">
      <img src="../images/index5-20181120.jpg" alt="">
      <img class="list2-tree" src="../images/tree3-20181120.png" alt="">
      <!-- <img class="stopfish" v-if="!walking" src="../images/stopfishtoright-20181120.png" alt=""> -->
      <div :class="{walkfish: true, animate: walkAnimate}"></div>
    </div>
    <div id="scene3" class="list">
      <img src="../images/index6-20181120.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'
import '../plugin'

export default {
  name: 'HelloWorld',
  data () {
    return {
      info: {
        size: this.$scrollmagic.info('size'),
        vertical: this.$scrollmagic.info('vertical'),
        scrollPos: this.$scrollmagic.info('scrollPos'),
        scrollDirection: this.$scrollmagic.info('scrollDirection'),
        container: this.$scrollmagic.info('container'),
        isDocument: this.$scrollmagic.info('isDocument')
      },
      walkAnimate: false
    }
  },
  computed: {
    scrollContainer () {
      return (this.info.container === window) ? 'window' : this.info.container.tagName
    }
  },
  created () {
    this.$scrollmagic.handleScrollTo = function (target) {
      TweenMax.to(window, 1.5, {
        scrollTo: {
          y: target,
          autoKill: false
        }
      })
    }
  },
  mounted () {
    const scene = this.$scrollmagic.scene({
      triggerElement: '#scene2',
      triggerHook: 0,
      duration: '70%',
      reverse: true
    })

    scene.on('progress', event => {
      // this.walkAnimate = true
      // console.log(this.$scrollmagic.info())
    })

    this.$scrollmagic.addScene(
      scene
        .setTween(
          TweenMax.to('.walkfish', 5, {
            top: 450,
            left: 270
          })
        )
        .addIndicators()
    )
  },
  methods: {
    updateInfo () {
      this.info = this.$scrollmagic.info()
    },
    handleScroll (evt) {
      this.updateInfo()
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
  .walkfish {
    position: absolute;
    top: 130px;
    left: -130px;
    z-index: 1;
    width: 135px;
    height: 155px;
  }
  .walkfish {
    background: url("../images/walkfishright-20181120.png") 0 0 no-repeat;
    background-size: 200% 100%;
    &.animate {
      animation: run1 .7s steps(2) infinite;
    }
  }
  .list2-tree {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 119px;
  }
}
@keyframes run1 {
    0% { background-position: 0 0; }
    100% { background-position: 200% 0; }
}
</style>
