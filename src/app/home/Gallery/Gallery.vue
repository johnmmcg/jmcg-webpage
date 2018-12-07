<template>
  <div v-if="active" :class="$style.gallery" ref="gallery">
    <h5>I'm a Front-End Web Developer seeking a full-time position in Philadelphia, PA. I love a good cup of coffee and creating elegant, beautiful, and usable websites.</h5>
    <vue-grid :class="$style.galleryGrid">
      <vue-grid-row>
        <photo v-for="(photo, index) in photos"
          :key="index + 1"
          :description="photo.description"
          :src="photo.src"
          :title="photo.title"
          :alt="photo.title"
          :delay="photo.delay"
          :index="index + 1"
          :onClick="selectPhoto"
          :selected="selected == (index + 1)" />
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';
  import Photo from './Photo.vue';

  export default {
    name: 'Gallery',
    components: {
      VueGridItem,
      VueGridRow,
      VueGrid,
      FadeAnimation,
      SlideUpAnimation,
      Photo,
    },
    data() {
      return {
        active: false,
        selected: 0,
        photos: [
          {
            title: 'That\'s me!',
            description: 'At a market in Cusco, Peru',
            src: '/marketCusco.jpg',
            delay: 500,
          },
          {
            title: 'Diego',
            description: 'My Olde English Bulldog, Diego',
            src: '/diegoyyo2.png',
            delay: 750,
          },
          {
            title: 'Machu Picchu with Alex',
            description: 'My wife, Alex, and I at Macchu Picchu.',
            src: '/alexyyomacchupicchu.jpg',
            delay: 1000,
          },
          {
            title: 'Cup of Joe',
            description: 'Cup of Joe',
            src: '/coffeeMug.jpg',
            delay: 1250,
          },
          {
            title: 'Stone Henge',
            description: 'My wife, Alex, and I at Stone Henge.',
            src: '/alexyyoStoneHenge.jpg',
            delay: 1500,
          },
          {
            title: 'More Diego',
            description: 'More Diego',
            src: '/diegoyyo.png',
            delay: 1750,
          },
        ],
      };
    },
    methods: {
      selectPhoto(index: number) {
        if (this.selected === index) {
          this.selected = 0;
        } else {
          this.selected = index;
        }
      },
    },
    mounted() {
      this.active = true;
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .gallery {
    background: $brand-light-primary;
    overflow:   visible;
    position:   relative;
    padding: 10vh 4rem;
    min-height: 800px;
    margin: 0 auto;

    h5 {
      font-size: 3rem;
      margin: 1rem auto;
      margin-bottom: 2rem;
      max-width: 800px;

      @include media(tabletPortrait, max) {
        font-size: 2.25rem;
      }
    }

    .galleryGrid {
      max-width: 1200px;
      margin-top: 2rem;
      padding: 2rem;
      display: block;
    }
  }

</style>
