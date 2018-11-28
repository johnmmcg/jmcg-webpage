<template>
  <div :class="$style.stage" ref="stage">
  <!-- Canvas for Circle Animation -->
    <canvas :class="$style.canvas" ref="canvas"></canvas>
    </fade-animation>
    <!-- <div :class="$style.accent"></div>
    <div :class="$style.accentTwo"></div> -->
  <!-- Text Grid -->
    <fade-animation>
      <vue-grid v-if="active">
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <div :class="$style.textBlock">
              <div :class="$style.topLeftBorder"></div>
              <div :class="$style.BottomRightBorder"></div>

              <h1 :class="mainTitle" class="animated fade">John McGuinness</h1>
              <h2 :class="$style.title">Front End Web Developer</h2>
              <h3 :class="$style.subTitle">Philadelphia, Pennsylvania</h3>
            </div>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </fade-animation>
  <!-- Links Grid -->
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <slide-up-animation>
            <div
              v-if="linkOneLoaded">
              <div :class="$style.linkContainer">
                <a href="https://www.linkedin.com/in/johnmmcg/"
                target="_blank"
                title="Click to visit my LinkedIn Profile">
                  <span :class="$style.icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </span>
                  <p :class="$style.linkTitle">LinkedIn</p>
                </a>
              </div>
            </div>
          </slide-up-animation>
        </vue-grid-item>
        <vue-grid-item>
          <slide-up-animation>
            <div
              v-if="linkTwoLoaded">
              <div :class="$style.linkContainer">
                <a
                  href="https://codepen.io/johnmmcg/"
                  target="_blank"
                  title="Click to visit my CodePen Profile">
                  <span :class="$style.icon">
                    <font-awesome-icon :icon="['fab', 'codepen']" />
                  </span>
                  <p :class="$style.linkTitle">CodePen</p>
                </a>
              </div>
            </div>
          </slide-up-animation>
        </vue-grid-item>
        <vue-grid-item>
          <slide-up-animation>
            <div
              v-if="linkThreeLoaded">
              <div
              :class="$style.linkContainer">
                <a
                  href="https://github.com/johnmmcg"
                  target="_blank"
                  title="Click to visit my GitHub Profile">
                  <span :class="$style.icon">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </span>
                  <p :class="$style.linkTitle">GitHub</p>
                </a>
              </div>
            </div>
          </slide-up-animation>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  <!-- More Comming Soon -->
    <div :class="$style.bottomMessageContainer">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item>
            <fade-animation>
              <div
                v-if="moreMessageLoaded"
                :class="$style.message">
                <p>[more comming soon]</p>
              </div>
            </fade-animation>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>
  </div>
</template>

<script lang="ts">
  import { CircleAnimation } from '../../shared/animations/CircleAnimation';
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueIconGithub       from '../../shared/components/icons/VueIconGithub/VueIconGithub.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';

  export default {
    components: {
      VueIconGithub,
      VueGridItem,
      VueGridRow,
      VueGrid,
      FadeAnimation,
      SlideUpAnimation,
    },
    props:      {
      disableParticles: {
        type:     Boolean,
        required: true,
      },
    },
    data() {
      return {
        active: false,
        mainTitleLoaded: false,
        linkOneLoaded: false,
        linkTwoLoaded: false,
        linkThreeLoaded: false,
        moreMessageLoaded: false,
      };
    },
    computed:   {
      mainTitle() {
        const classes = [this.$style.mainTitle];

        if (this.mainTitleLoaded) {
          classes.push(this.$style.mainTitleLoaded);
        }

        return classes;
      },

    },
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
        CircleAnimation(this.$refs.canvas);
      }

      const self = this;

      setTimeout((event) => {
        self.active = true;
      }, 500);

      setTimeout((event) => {
        self.linkOneLoaded = true;
        self.mainTitleLoaded = true;

      }, 1000);

      setTimeout((event) => {
        self.linkTwoLoaded = true;
      }, 1250);

      setTimeout((event) => {
        self.linkThreeLoaded = true;
      }, 1500);

      setTimeout((event) => {
        self.moreMessageLoaded = true;
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
    width: auto;
    align-items: center;
    vertical-align: middle;
    margin-top: 10%;
    text-align: center;
    padding: .25rem;
  }

  .mainTitle {
    font-family: $font-family-headings;
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: .5rem;
    padding: .5rem 1rem;
    margin-top: .25rem;
    width: auto;
    display: inline-block;
    color: $text-color-inverse;
    background-image: linear-gradient(120deg, $brand-primary 0%, $brand-accent 70%);
    background-repeat: no-repeat;
    background-size: 100% 0.1em;
    background-position: 50% 88%;
    animation: mainTitleEntry 10s ease-in-out;
    transition: all 0.25s ease-in;
    // top: $space-unit * 17;

    @media screen and (max-width: $screen-phone-max) {
      font-size: 4rem;
    }
  }

  .mainTitleLoaded {
    font-size: 8rem;
    letter-spacing: .5rem;
    margin-top: .25rem;
    padding: .5rem 1rem;
    background-image: linear-gradient(120deg, $brand-primary 0%, $brand-accent 70%);
    background-position: 100% 88%;
    background-size: 100% 95%;
    transition: all 0.25s ease-in;

    @include media(phone, max) {
      font-size: 2.5rem;
    }
  }

  .title {
    font-family: $font-family;
    margin: .75rem;
    transition: .2s linear;

    @include media(phone, max) {
      font-size: 2rem;
      margin: auto .5rem;
    }
  }


  .subTitle {
    font-family: $font-cursive;
    margin: 1rem;

    @include media(phone, max) {
      font-size: 2rem;
      margin: auto 1rem;
    }
  }

  .linkContainer {
    background: transparent;
    display: inline-block;
    width: auto;
    padding: 0;
    margin-top: 1rem;
    // border: 4px solid transparent;
    cursor: pointer;
    transition: .25s ease-in-out;

    a {
      text-decoration: none;
      
      span {
        width: 100%;
        height: 100%;
        min-width: 100px;
        min-height: 100px;
        vertical-align: middle;
        // padding-top: 17px;
        display: inline-block;
        background: $brand-primary;
        color: $text-color-inverse;
        font-size: 5.5rem;
        padding: .25rem;
        border: 4px solid transparent;
        transition: .2s ease-in-out;
      }
    }

    &:hover {
      // border: 4px solid $brand-light-primary;
      border-radius: 100%;

      a {
        span {
          background: $bg-color;
          border-radius: 100%;
          border: 4px solid $brand-accent;
          color: $brand-primary;
        }
      }
    }


  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  .bottomMessageContainer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .message {
    font-family: $font-family;
    transition: .2s linear;
    @include media(phone, max) {
      font-size: 1.5rem;
      margin: auto 2rem;
    }
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

  @keyframes mainTitleEntry {
    0% {
      font-family: $font-family-headings;
      font-weight: 700;
      padding: .5rem 1rem;
      width: auto;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: 0% 0.1em;
      background-position: 50% 88%;
      transition: all 0.25s ease-out;
    }

    5% {
      background-size: 100% 0.1em;
      background-position: 0% 88%;
    }

    8% {
      background-position: 100% 88%;
      background-size: 100% 95%;
    }

    100% {
      background-position: 100% 88%;
      background-size: 100% 95%;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.05)
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
