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
            <vue-panel :delay="750" :class="$style.vuePanel">
              <h3>Capable.</h3>
              <vue-panel-body>
                <h5>Skills</h5>
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
                <h5>Experience</h5>
                <ul>
                  <li>Full Stack Developer at <a href="https://macguyvermedia.com/" target="_blank">MacGuyver Media</a></li>
                  <li>Apprentice Developer at <a href="https://launchacademy.com/" target="_blank">Launch Academy</a></li>
                </ul>
              </vue-panel-body>
            </vue-panel>
          </vue-grid-item>

          <vue-grid-item :class="$style.vueGridItem">
            <vue-panel :delay="1000" :class="$style.vuePanel">
              <h3>Creative.</h3>
              <vue-panel-body>
                <p>With my background in music production, composition, and performance, I bring the meticulous skills necessary for technical work along with the creative instincts required for artistic design and problem-solving.</p>
              </vue-panel-body>
            </vue-panel>
          </vue-grid-item>

          <vue-grid-item  :class="$style.vueGridItem">
            <vue-panel :delay="1250" :class="$style.vuePanel">
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
        <vue-grid v-if="slideUpContact" :class="$style.contactContainer">
          <vue-grid-row>
            <vue-grid-item>
              <h3>Want to connect?</h3>
                <a href="mailto:john.maurer.mcguinness@gmail.com">            john.maurer.mcguinness@gmail.com</a>
            </vue-grid-item>
          </vue-grid-row>
        </vue-grid>
      </slide-up-animation>
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
    },
    data() {
      return {
        activeButton: false,
        activeSection: false,
        slideUpContact: false,
        isMobile: false,
        aboutTop: 0,
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

          self.slideUpContact = true;
        }, 250);
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
        font-size: 3vw;
        margin: auto 2rem;
        top: -170px;
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
          font-size: 2rem;
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
  }

  .contactContainer {
    position: absolute;
    left:0;
    right:0;
    bottom: 0px;
    margin: 2rem auto;
    margin-bottom: 0;
    padding: 2rem 1rem;
    border: 4px solid $bg-color;
    border-bottom-color: transparent;
    display: inline-block;
    width: auto;
    max-width: 600px;

    @include media(tabletPortrait, max) {
      padding-top: 0rem;
    }

    h3 {
      color: $brand-light-primary;
      font-size: 3rem;

      @include media(tabletPortrait, max) {
        margin-top: 2rem;
        font-size: 8vw;
      }
    }

    a {
      font-size: 1.75rem;
      font-weight: normal;
      text-decoration: none;
      color: $brand-accent;
      word-break: break-all;
      line-height: 1;
      transition: .25s linear;

      &:hover {
        font-weight: bold;
        color: $bg-color;
        border-bottom: 1px solid $bg-color;
      }
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