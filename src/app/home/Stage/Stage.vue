<template>
  <div :class="$style.stage" ref="stage">
    <canvas :class="$style.canvas" ref="canvas"></canvas>
    <!-- <div :class="$style.accent"></div>
    <div :class="$style.accentTwo"></div> -->
    <transition
      :enter-class="$style.enter"
      :enter-active-class="$style.enterActive"
      :enter-to-class="$style.enterTo"
      :leave-class="$style.leave"
      :leave-active-class="$style.leaveActive"
      :leave-to-class="$style.leaveTo">
      <vue-grid v-if="active">
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <div :class="$style.textBlock">
              <h1 :class="$style.mainTitle" class="animated fade">John McGuinness</h1>
              <h2 :class="$style.title">Front End Web Developer</h2>
              <h3 :class="$style.subTitle">Philadelphia, Pennsylvania</h3>
              <div :class="$style.message">
                <p>[more comming soon]</p>
              </div>
            </div>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </transition>
  </div>
</template>

<script lang="ts">
  import { CircleAnimation } from '../../shared/animations/CircleAnimation';
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueIconGithub       from '../../shared/components/icons/VueIconGithub/VueIconGithub.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';

  export default {
    components: { VueIconGithub, VueGridItem, VueGridRow, VueGrid, FadeAnimation },
    props:      {
      disableParticles: {
        type:     Boolean,
        required: true,
      },
    },
    data() {
      return {
        active: false,
      };
    },
    computed:   {},
    methods:    {
      handleResize() {
        const canvas: HTMLCanvasElement = this.$refs.canvas;
        const stage: HTMLElement = this.$refs.stage;
        const stageRect: ClientRect = stage.getClientRects().length > 0 ? stage.getClientRects().item(0) : {
          width:  0,
          height: 0,
        } as ClientRect;

        canvas.width = stageRect.width;
        canvas.height = stageRect.height;
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleResize);
    },
    mounted() {
      this.handleResize();

      if (!this.disableParticles) {
        // CircleAnimation(this.$refs.canvas);
      }

      const self = this;

      setTimeout((event) => {
        self.active = true;
      }, 2000);

    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .stage {
    min-height: 100vh;
    background: $bg-color;
    overflow:   hidden;
    position:   relative;
    text-align: center;
  }

  .accent {
    width:      75%;
    min-height: 100vh;
    transform:  skewX(-30deg) translateX(95%);
    box-shadow: $nav-bar-shadow;
    position:   absolute;
    transition: transform 250ms linear;
    @include background-gradient($brand-primary, $brand-dark-primary, -171deg);

    // @include media(tabletPortrait) {
    //   transform: skewX(-33deg) translateX(100%);
    // }
    //
    // @include media(tabletLandscape) {
    //   transform: skewX(-44deg) translateX(100%);
    // }
    //
    // @include media(smallDesktop) {
    //   transform: skewX(-46deg) translateX(117%);
    //   width:     49%;
    // }
  }

  .accentTwo {
    width:      75%;
    min-height: 100vh;
    transform:  skewX(30deg) translateX(-62%);
    box-shadow: $nav-bar-shadow;
    position:   absolute;
    transition: transform 250ms linear;
    @include background-gradient($brand-dark-primary, $brand-primary, -171deg);

    // @include media(tabletPortrait) {
    //   transform: skewX(37deg) translateX(-29%);
    // }
    //
    // @include media(tabletLandscape) {
    //   transform: skewX(38deg) translateX(-29%);
    // }
    //
    // @include media(smallDesktop) {
    //   transform: skewX(38deg) translateX(-19%);
    //   width:     49%;
    // }
  }

  .canvas {
    min-height:       100vh;
    width:            100%;
    position:         absolute;
    background-color: transparent;
    left:             0;
    top:              0;
  }

  .textBlock {
    position: relative;
    align-items: center;
    vertical-align: middle;
    top: 40%;
    text-align: center;
  }

  .mainTitle {
    font-family: $font-family-headings;
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: .5rem;
    transition: .2s linear;

    // top: $space-unit * 17;

    // @include media(tabletPortrait) {
    //   top: $space-unit * 24;
    // }
    //
    // @include media(tabletLandscape) {
    //   top: $space-unit * 26;
    // }
  }

  @keyframes fadeIn {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .title {
    font-family: $font-family;
    transition: .2s linear;
    // top: $space-unit * 15;
    //
    // @include media(tabletPortrait) {
    //   top: $space-unit * 22;
    // }
    //
    // @include media(tabletLandscape) {
    //   top: $space-unit * 24;
    // }

  }


  .subTitle {
    font-family: $font-cursive;
  }

  .message {
    font-family: $font-family;
    transition: .2s linear;
  }

  .github {
    font-size:           $font-size-h1;
    top:                 $space-unit * 17;
    box-shadow:          $nav-bar-shadow;
    display:             inline-block;
    background:          $nav-bar-bg;
    transition:          $button-transition;
    transition-property: box-shadow, background-color;
    color:               $text-color;
    padding:             $button-padding;

    &:hover {
      box-shadow: $button-active-shadow;
    }

    @include media(tabletPortrait) {
      top: $space-unit * 30;
    }

    @include media(tabletLandscape) {
      top: $space-unit * 42;
    }

    i {
      height: $font-size-h1;
      width:  $font-size-h1;
    }
  }

  .enterActive, .leaveActive {
    transition: $fade-animation-transition;
  }

  .enterTo, .leave {
    opacity: 1;
  }

  .enter, .leaveTo {
    opacity: 0;
  }
</style>
