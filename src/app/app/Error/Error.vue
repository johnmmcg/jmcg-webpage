<template>
  <div :class="$style.error">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <h1>Sorry!</h1>
          <h3>Looks like something went wrong.</h3>
          <a href="/">Try going back.</a>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow  from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';

  export default {
    metaInfo:   {
      title: 'vue-starter - an error occurred',
      meta:  [
        {
          name:    'robots',
          content: 'NOINDEX,NOFOLLOW',
        },
      ],
    },
    name:       'Error',
    components: { VueGridItem, VueGridRow, VueGrid },
    props:      {},
    data(): any {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .error {
    padding-top: $nav-bar-height;
    text-align:  center;
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: .25rem 1rem;
    margin: 1rem auto;
    width: auto;
    cursor: pointer;
    background: transparent;
    position: relative;
    font-family: $font-family-headings;
    font-size: 2rem;
    border: 2px solid $brand-primary;
    color: $brand-primary;
    background-color: transparent;
    font-weight: normal;
    outline: none;
    transition: .25s linear;

    &:hover {
      transform: scale(1.1);
      color: $bg-color;
      background-color: $brand-primary;
      transition: .25s linear;
    }

  }
</style>
