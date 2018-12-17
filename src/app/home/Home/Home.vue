<template>
  <div :class="$style.home">
    <stage
      :disable-particles="disableParticles"
      :dispatchAbout="activateAbout"
       />
    <about v-if="aboutActive" />
  </div>
</template>

<script lang="ts">
  import { mapState }    from 'vuex';
  import Stage           from '../Stage/Stage.vue';
  import About           from '../About/About.vue';
  import { IState }      from '../../state';

  export default {
    metaInfo:   {
      title: 'John McGuinness: Developer',
      meta:  [
        {
          name:    'description',
          content: 'John McGuinness - Front End Web Devloper - Philadelphia, PA',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'john, mcguinness, john-mcguinness, frontend, front-end, developer, web-developer, vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },
        { name: 'og:url', content: 'https://johnthedev.com/' },
        { name: 'og:site_name', content: 'John McGuinness' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'John McGuinness - Developer',
        },
        {
          name:    'og:description',
          content: 'John McGuinness - Front End Web Devloper - Philadelphia, PA',
        },
        { name: 'og:image:url', content: 'https://johnthedev.com/favicon.ico' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@johnjohnjohnmcg' },
        { name: 'twitter:creator', content: '@johnjohnjohnmcg' },
        {
          name:    'twitter:title',
          content: 'John McGuinness - Front End Web Devloper - Philadelphia, PA',
        },
        { name: 'twitter:url', content: 'https://johnthedev.com/' },
        { name: 'twitter:image', content: 'https://johnthedev.com/logo.png' },
        {
          name:    'twitter:description',
          content: 'John McGuinness - Front End Web Devloper - Philadelphia, PA',
        },
      ],
    },
    components: {
      Stage,
      About,
    },
    data() {
      return {
        aboutActive: false,
      };
    },
    computed:   {
      ...mapState({
                    disableParticles: (state: IState) => state.app.config && state.app.config.features.disableParticles,
                  }),
    },
    methods: {
      activateAbout() {
        this.aboutActive = true;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .home {
    overflow: hidden;

    :global {
      .vuePanel {
        height: 100%;
      }

      .vueGridItem {
        margin-bottom: $space-unit * 2;
      }

      .featureSection {
        padding: 0;
      }
    }

    @include media(tabletLandscape) {
      :global {
        .featureSection {
          padding: $space-unit * 15 0;
        }
      }
    }
  }
</style>
