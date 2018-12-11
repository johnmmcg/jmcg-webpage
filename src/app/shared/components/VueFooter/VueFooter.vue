<template>
    <div :class="$style.vueFooter">
      <slide-up-animation>
      <vue-grid v-if="active">
        <vue-grid-row>
          <vue-grid-item>
            <small>
              Thanks for visiting!
            </small>
          </vue-grid-item>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-item>
            <a
              href="/jmcg-resume.pdf"
              target="_blank">
              <div :class="$style.icon">
                <font-awesome-icon :icon="['fas', 'file-alt']" />
              </div>
              <p :class="$style.label">Resume</p>
            </a>
            <a href="https://www.linkedin.com/in/johnmmcg/"
            target="_blank">
              <div :class="$style.icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </div>
              <p :class="$style.label">LinkedIn</p>
            </a>
            <a
              href="https://github.com/johnmmcg"
              target="_blank">
              <div :class="$style.icon">
                <font-awesome-icon :icon="['fab', 'github']" />
              </div>
              <p :class="$style.label">GitHub</p>
            </a>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </slide-up-animation>
  </div>
</template>

<script lang="ts">
  import VueGrid              from '../VueGrid/VueGrid.vue';
  import VueGridItem          from '../VueGridItem/VueGridItem.vue';
  import VueGridRow           from '../VueGridRow/VueGridRow.vue';
  import SlideUpAnimation from '../../animations/SlideUpAnimation/SlideUpAnimation.vue';

  export default {
    name:       'VueFooter',
    components: {
      VueGrid,
      VueGridItem,
      VueGridRow,
      SlideUpAnimation,
    },
    data() {
      return {
        active: false,
      };
    },
    mounted() {
      const self = this;
      setTimeout((event) => {
        self.active = true;
      }, 1000);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueFooter {
    padding: .25rem;
    background: $brand-dark-primary;
    color: $brand-light-primary;
    text-align: center;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    z-index: 50;

    @include media(tabletPortrait, max) {
      height: 110px;
    }

    i {
      height: $font-size-h1;
      width:  $font-size-h1;
      fill:   $brand-accent;
      margin: 0 $space-unit * 2;
    }

    small {
      display: inline-block;
      margin: .25rem;
    }

    a {
      margin: 1rem 2rem;
      height: 55px;
      margin-top: .5rem;
      text-align: center;
      position: relative;
      display: inline-block;
      text-decoration: none;
      overflow: visible;
      transition: .25s ease-in-out;

      .icon {
        color: $brand-light-primary;
        font-size: 3rem;
        margin: 0 auto;
        transition: .25s ease-in-out;
      }

      .label {
        font-weight: bold;
        margin: auto;
        opacity: 0;
        font-size: 1rem;
        margin: 0 auto;
        padding: 0;
        position: relative;
        top: 20px;
        transition: .25s ease-in-out;
      }

      &:hover {
        .icon {
          color: $bg-color;
          font-size: 3rem;
        }

        .label {
          text-decoration: none;
          color: white;
          text-align: center;
          margin: 0 auto;
          padding: 0;
          position: relative;
          top: -8px;
          opacity: 1;
        }
      }
    }

  }
</style>
