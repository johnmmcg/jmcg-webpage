<template>
  <div :class="$style.aboutContainer" ref="about">
    <fade-animation>
      <span v-if="activeButton"
        :class="$style.aboutMe">
        <button v-on:click="activateAbout">
          About Me.
          <div :class="$style.triangle">
          </div>
        </button>
      </span>
    </fade-animation>

    <canvas :class="aboutCanvas" ref="canvas"></canvas>

    <!-- Panels -->
    <div v-if="activeSection"
      :class="$style.aboutSections">
      <vue-grid :class="$style.aboutItems">
        <vue-grid-row>
          <vue-grid-item :class="$style.vueGridItem">
            <vue-panel
              :number="1"
              :delay="750"
              :animation="'circleTrace'"
              :class="$style.vuePanel">
              <h3>Capable.</h3>
              <vue-panel-body>
                <h5>Skills & Experience</h5>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Node</li>
                </ul>
                <ul>
                  <li>Vue</li>
                  <li>React</li>
                  <li>jQuery</li>
                  <li>Git</li>
                </ul>
                <br>
                <ul>
                  <li>Full Stack Developer at <a href="https://macguyvermedia.com/" target="_blank">MacGuyver Media</a></li>
                  <li>Apprentice Developer at <a href="https://launchacademy.com/" target="_blank">Launch Academy</a></li>
                </ul>
              </vue-panel-body>
            </vue-panel>
          </vue-grid-item>

          <vue-grid-item :class="$style.vueGridItem">
            <vue-panel
              :number="2"
              :delay="1250"
              :animation="'radiusAlt'"
              :class="$style.vuePanel">
              <h3>Creative.</h3>
              <vue-panel-body>
                <p>With my background in music production, composition, and performance, I bring the meticulous skills necessary for technical work along with the creative instincts required for artistic design and problem-solving.</p>
              </vue-panel-body>
            </vue-panel>
          </vue-grid-item>

          <vue-grid-item  :class="$style.vueGridItem">
            <vue-panel
              :number="3"
              :delay="1750"
              :animation="'caffeinated'"
              :class="$style.vuePanel">
              <h3>Caffeinated.</h3>
              <vue-panel-body>
                <p>Side-note, but related: I love coffee. It's been a passion of mine for a few years now and, fortunately, I find it to be delicious fuel for web development.</p>
              </vue-panel-body>
            </vue-panel>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>

      <!-- Contact -->
      <slide-up-animation>
        <connect v-if="slideUpContact" :buttonAction="activateGallery"></connect>
      </slide-up-animation>
    </div>

    <div ref="gallery">
      <gallery v-if="activeGallery"></gallery>
    </div>

  </div>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VuePanel        from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader   from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';
  import Connect from './Connect.vue';
  import Gallery from '../Gallery/Gallery.vue';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelHeader,
      VuePanelBody,
      VueGridRow,
      FadeAnimation,
      SlideUpAnimation,
      Connect,
      Gallery,
    },
    data() {
      return {
        activeButton: false,
        activeSection: false,
        slideUpContact: false,
        isMobile: false,
        aboutTop: 0,
        galleryTop: 0,
        activeGallery: false,
      };
    },
    computed: {
      aboutCanvas() {
        const classes = [this.$style.canvas];

        if (this.activeSection) {
          classes.push(this.$style.canvasActive);
        }

        return classes;
      },
    },
    methods:    {
      handleResize() {
        const canvas: HTMLCanvasElement = this.$refs.canvas;
        const about: HTMLElement = this.$refs.about;
        const aboutRect: ClientRect = about.getClientRects().length > 0 ? about.getClientRects().item(0) : {
          width:  0,
          height: 0,
        } as ClientRect;

        canvas.width = aboutRect.width;
        canvas.height = aboutRect.height;
        this.aboutTop = aboutRect.top;

        if (canvas.width < 800) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      activateAbout() {
        const self = this;

        self.activeSection = true;

        // reset aboutTop
        self.handleResize();

        setTimeout((event) => {
          if (self.isMobile) {
            window.scrollTo({
              top: self.aboutTop,
              left: 0,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 0,
              behavior: 'smooth',
            });
          }
        }, 500);

        setTimeout((event) => {
          self.slideUpContact = true;
        }, 2250);
      },
      activateGallery() {
        const self = this;

        self.activeGallery = true;

        setTimeout((event) => {
          if (self.isMobile) {
            window.scrollTo({
              top: (window.pageYOffset + window.innerHeight),
              left: 0,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 0,
              behavior: 'smooth',
            });
          }
        }, 500);
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleResize);
    },
    mounted() {
      const self = this;

      setTimeout((event) => {
        self.activeButton = true;
      }, 2500);

      if (self.activeSection) {
        self.handleResize();
      }
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .aboutContainer {
    font-family: $font-family;
    display: block;
    margin: auto;
    text-align: center;
    overflow: visible;
    position: relative;
    text-align: center;
    height: auto;

    .aboutMe {
      position: absolute;
      top: -175px;
      left: 0;
      right: 0;
      margin: auto;
      display: inline-block;

      @include media(tabletPortrait, max) {
        font-size: 1rem;
        margin: 1rem auto;
        top: -150px;
      }

      button {
        display: inline-block;
        padding: .25rem 1rem;
        margin: 1rem auto;
        width: auto;
        cursor: pointer;
        background: transparent;
        position: relative;
        font-family: $font-family-headings;
        font-size: 2.5rem;
        border: 2px solid $brand-primary;
        color: $brand-primary;
        background-color: transparent;
        font-weight: normal;
        outline: none;
        transition: .25s linear;


        @include media(tabletPortrait, max) {
          font-size: 1.5rem;
          padding: .5rem 1rem;
        }

        .triangle {
          position: absolute;
          width:0;
          top: 50px;
          left: 45%;
          z-index: 0;
          border-top:solid 15px black;
          border-right:solid 8px transparent;
          border-left:solid 8px transparent;
          animation: pointDown 3s infinite;
          transition: .25s linear;

          @include media(tabletPortrait, max) {
            top: 40px;
            left: 45%;
            z-index: 0;
            border-top:solid 12px black;
            border-right:solid 6px transparent;
            border-left:solid 6px transparent;
          }
        }

        &:hover {
          font-weight: bold;
          color: $bg-color;
          padding: 1rem 2rem;
          background-color: $brand-primary;
          transition: .25s linear;

          .triangle {
            position: absolute;
            width:0;
            top: 70px;
            left: 44%;
            border-top:solid 25px black;
            border-right:solid 12px transparent;
            border-left:solid 12px transparent;
            animation: none;
            transition: .25s linear;

            @include media(tabletPortrait, max) {
              top: 45px;
              left: 45%;
              z-index: 0;
              border-top:solid 16px black;
              border-right:solid 8px transparent;
              border-left:solid 8px transparent;
            }
          }
        }
      }
    }

    .canvas {
      height: 0;
      width:            100%;
      position:         absolute;
      background-color: transparent;
      left:             0;
      top:              0px;
    }

    .canvasActive {
      height: auto;
      min-height:       100vh;
    }

    .aboutSections {
      min-height: 100vh;
      background: $brand-dark-primary;
      position:   relative;
      overflow: visible;
      width: 100%;
      padding-top: 20vh;
      padding-bottom: 20vh;
      display: block;

      @include media(tabletPortrait, max) {
        padding-top: 3vh;
      }
    }

    .aboutItems {
      max-width: 1600px;
    }
  }

  @keyframes pointDown {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(20px) scale(1.25);
    }

    100% {
      transform: translateY(0px);
    }
  }
</style>
