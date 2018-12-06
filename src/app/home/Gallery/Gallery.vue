<template>
  <div v-if="active" :class="$style.gallery" ref="gallery">
    <vue-grid :class="$style.galleryGrid">
      <vue-grid-row>
        <photo v-for="photo in photos" :description="photo.description" :src="photo.src" :title="photo.title" :alt="photo.title" />
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
        photos: [
          {
            title: 'Me in Cusco, Peru',
            description: 'At a market in Cusco, Peru',
            src: '/marketCusco.jpg',
          },
          {
            title: 'Diego and Me',
            description: 'My Olde English Bulldog, Diego',
            src: '/diegoyyo2.png',
          },
          {
            title: 'Machu Picchu',
            description: 'My wife, Alex, and I at Macchu Picchu.',
            src: '/alexyyomacchupicchu.jpg',
          },
          {
            title: 'Cup of Joe',
            description: 'My wife, Alex, and I at Stone Henge.',
            src: '/coffeeMug.jpg',
          },
        ],
      };
    },
    mounted() {
      // this.active = true;
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .gallery {
    background: $brand-primary;
    overflow:   hidden;
    position:   relative;
    padding: 8rem 2rem;

    .galleryGrid {
      // margin: 0 auto;
      // padding: 1rem;
    }
  }

</style>
