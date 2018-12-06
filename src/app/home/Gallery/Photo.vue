<template>
  <fade-animation>
    <vue-grid-item v-if="active" :class="$style.photoGridItem" :style="randomRotate()">
        <img :src="src" :title="desciption" :alt="description" />
        <h3>{{ title }}</h3>
    </vue-grid-item>
  </fade-animation>
</template>

<script lang="ts">
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';

  export default {
    name: 'Photo',
    components: {
      VueGridItem,
      VueGridRow,
      VueGrid,
      FadeAnimation,
      SlideUpAnimation,
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
    },
    data() {
      return {
        active: false,
      };
    },
    mounted() {
      this.active = true;
    },
    methods: {
      randomRotate() {
        const randomDegree = this.randomIntFromInterval(-5, 5);
        return `transform: rotate(${randomDegree}deg);`;
      },
      randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .photoGridItem {
    // margin: 0 auto;
    margin: 1rem auto;
    padding: 0rem;
    display: inline;
    width: auto;
    background: $bg-color;
    border: 6px solid white;
    border-bottom: 12px solid white;
    box-shadow: 0 0 1px black;

    img {
      padding: 0;
      margin: 0;
      position: relative;
      width: 100%;
      height: auto;
      max-width: 50vw;
    }

    h3 {
      text-align: center;
      color: black;
      margin: 0;
      font-size: 2.5rem;
      font-family: $font-marker;
      line-height: 1;
    }
  }

</style>
