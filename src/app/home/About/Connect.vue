<template>
  <vue-grid :class="$style.contactContainer">
    <vue-grid-row>
      <vue-grid-item>
        <h3>Want to connect?</h3>
        <a href="mailto:john.maurer.mcguinness@gmail.com">            john.maurer.mcguinness@gmail.com</a>
        <!-- <button type="button" name="button" @click="buttonAction">More About Me
          <div :class="$style.triangle">
          </div>
        </button> -->
      </vue-grid-item>
    </vue-grid-row>
  </vue-grid>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';

  export default {
    name: 'Connect',
    components: {
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
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .contactContainer {
    position: absolute;
    left:0;
    right:0;
    bottom: -10px;
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
      margin: 0rem;

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

      @include media(tabletPortrait, max) {
        font-size: 1.5rem;
      }
    }

    button {
      display: block;
      padding: .25rem 1rem;
      margin: 2rem auto;
      margin-bottom: 4rem;
      width: auto;
      cursor: pointer;
      background: transparent;
      position: relative;
      font-family: $font-family-headings;
      font-size: 1.5rem;
      border: 2px solid $brand-primary;
      color: $bg-color-inverse;
      background-color: $brand-light-primary;
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
        top: 35px;
        left: 46%;
        z-index: 0;
        border-top:solid 8px $brand-light-primary;
        border-right:solid 5px transparent;
        border-left:solid 5px transparent;
        animation: pointDown 3s infinite;
        transition: .25s linear;

        @include media(tabletPortrait, max) {
          top: 45px;
        }
      }

      &:hover {
        font-weight: bold;
        color: $brand-light-primary;
        font-size: 2rem;
        background-color: transparent;
        border: 2px solid $brand-light-primary;
        transition: .25s linear;

        .triangle {
          position: absolute;
          width: 0;
          top: 50px;
          left: 46%;
          border-top:solid 15px $brand-light-primary;
          border-right:solid 8px transparent;
          border-left:solid 8px transparent;
          animation: none;
          transition: .25s linear;
        }
      }
    }
  }

  @keyframes pointDown {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px) scale(1.1);
    }

    100% {
      transform: translateY(0px);
    }
  }
</style>
