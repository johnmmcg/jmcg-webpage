<template>
  <vue-grid-item
    :class="selectPhoto"
    :data-index="index">
    <push-up-animation>
      <div v-if="active"
        :class="$style.photoContainer"
        :style="randomRotate()"
        @click="setSelected">
        <img :src="src" :title="description" :alt="description" />
        <h3>{{ title }}</h3>
      </div>
    </push-up-animation>
  </vue-grid-item>
</template>

<script lang="ts">
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';
  import PushUpAnimation from '../../shared/animations/PushUpAnimation/PushUpAnimation.vue';

  export default {
    name: 'Photo',
    components: {
      VueGridItem,
      VueGridRow,
      VueGrid,
      SlideUpAnimation,
      PushUpAnimation,
    },
    props: {
      description: {
        type: String,
        require: false,
        default: '',
      },
      src: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      rotate: {
        type: Number,
        required: false,
        default: 0,
      },
      delay: {
        type: Number,
        required: false,
        default: 1000,
      },
      index: {
        type: Number,
        require: true,
      },
      onClick: {
        type: Function,
      },
      selected: {
        type: Boolean,
        required: true,
      },
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
      }, self.delay);
    },
    methods: {
      randomRotate() {
        const randomDegree = this.randomIntFromInterval(-5, 5);
        return `transform: rotate(${randomDegree}deg);`;
      },
      randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      setSelected() {
        this.onClick(this.index);
      },
    },
    computed: {
      selectPhoto() {
        if (this.selected) {
          return [this.$style.selected];
        } else {
          return [this.$style.photoGridItem];
        }
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .photoGridItem {
    margin: 0 auto;
    position: relative;
    min-width: 250px;
    min-height: 300px;
    z-index: 10;
    cursor: pointer;
    transform: scale(1);
    overflow: visible;
    transition: .5s ease-in-out;

    &:hover {
      animation: pulseUpPhoto .5s linear;
      transition: .25s ease-in;
    }

    @include media(tabletPortrait, max) {
      min-width: 250px;
      min-height: 300px;
    }

    .photoContainer {
      margin: 0 auto;
      z-index: 0;
      position: relative;
      width: 250px;
      height: auto;
      background: $bg-color;
      border: 6px solid white;
      border-bottom: 12px solid white;
      box-shadow: 0px 0px 5px black;
      transition: .5s ease-in-out;

      @include media(tabletPortrait, max) {
        width: 250px;
      }

      img {
        z-index: 0;
        padding: 0;
        margin: 0;
        position: relative;
        width: 100%;
        height: auto;
        transition: .5s ease-in-out;
      }

      h3 {
        z-index: 0;
        text-align: center;
        color: black;
        margin: 0;
        font-size: 2rem;
        font-family: $font-marker;
        line-height: 1.25;
        transition: 25s linear;
      }
    }
  }

  .selected {
    margin: 0 auto;
    min-width: 250px;
    min-height: 300px;
    position: relative;
    z-index: 500;
    cursor: pointer;
    transform: scale(1.5);
    overflow: visible;
    transition: .5s ease-in-out;

    &:hover {
      animation: pulseDownPhoto .5s reverse;
      transition: .25s ease-in;
    }

    @include media(tabletPortrait, max) {
      min-width: 200px;
      min-height: 250px;
    }

    .photoContainer {
      margin: 0 auto;
      position: relative;
      width: 250px;
      height: auto;
      background: $bg-color;
      border: 6px solid white;
      border-bottom: 12px solid white;
      box-shadow: 0px 0px 1px black;
      transition: .5s ease-in-out;

      @include media(tabletPortrait, max) {
        width: 250px;
      }

      img {
        padding: 0;
        margin: 0;
        position: relative;
        width: 100%;
        height: auto;
        transition: .5s ease-in-out;
      }

      h3 {
        z-index: 0;
        text-align: center;
        color: black;
        margin: 0;
        font-size: 2.5rem;
        font-family: $font-marker;
        line-height: 1;
        transition: 25s linear;

      }
    }
  }

  @keyframes pulseUpPhoto {
    0% {
      top: 0px;
      transition: .25s ease-in;
    }
    50% {
      top: -10px;
      transition: .25s ease-in;
    }
    100% {
      top: 0px;
      transition: .25s ease-in;
    }
  }

  @keyframes pulseDownPhoto {
    0% {
      top: 0px;
      transition: .25s ease-in;
    }
    50% {
      top: 10px;
      transition: .25s ease-in;
    }
    100% {
      top: 0px;
      transition: .25s ease-in;
    }
  }

</style>
