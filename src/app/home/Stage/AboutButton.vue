<template>
  <span :class="$style.aboutMeButton">
    <button v-on:click="buttonAction">
      About Me.
      <div :class="$style.triangle">
      </div>
    </button>
  </span>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';
  import FadeAnimation   from '../../shared/animations/FadeAnimation/FadeAnimation.vue';

  export default {
    name: 'AboutButton',
    components: {
      FadeAnimation,
      VueGrid,
      VueGridItem,
      VueGridRow,
    },
    props: {
      buttonAction: {
        type: Function,
        required: true,
      },
    },
    mounted() {
      this.active = true;
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .aboutMeButton {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    display: inline-block;

    @include media(tabletPortrait, max) {
      font-size: 1rem;
      margin: 1rem auto;
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
          border-top: solid 12px black;
          border-right: solid 6px transparent;
          border-left: solid 6px transparent;
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
            top: 55px;
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
