<template>
  <div v-if="active" :class="$style.gallery" ref="gallery">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <h5>I'm a Front End Web Developer based in Philadelphia, PA. <br> I love a good cup of coffee and creating beautiful, efficient, and usable websites.</h5>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
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
    <!-- <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <p>Thanks for visiting.</p>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid> -->
    <div :class="$style.footerContainer">
      <vue-footer />
    </div>
  </div>
</template>

<script lang="ts">
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import FadeAnimation from '../../shared/animations/FadeAnimation/FadeAnimation.vue';
  import SlideUpAnimation from '../../shared/animations/SlideUpAnimation/SlideUpAnimation.vue';
  import Photo from './Photo.vue';
  import VueFooter from '../../shared/components/VueFooter/VueFooter.vue';

  export default {
    name: 'Gallery',
    components: {
      VueGridItem,
      VueGridRow,
      VueGrid,
      FadeAnimation,
      SlideUpAnimation,
      Photo,
      VueFooter,
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
    overflow:   hidden;
    position:   relative;
    padding: 2rem 0;
    padding-bottom: 0;
    margin: 0 auto;

    @include media(phone, max) {
      min-height: 2200px;
    }

    h5 {
      font-size: 2.75rem;
      margin: 1rem auto;
      max-width: 1000px;

      @include media(tabletPortrait, max) {
        font-size: 2.25rem;
      }
    }

    .galleryGrid {
      max-width: 1200px;
      min-height: 650px;
      margin: 5rem auto;
      margin-bottom: 12rem;
      padding: 0 4rem;
      display: block;

      @include media(tabletPortrait, max) {
        margin: 1rem auto;
        padding-bottom: 14rem;
      }
    }
  }

</style>
