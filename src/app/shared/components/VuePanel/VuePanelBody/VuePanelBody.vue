<template>
  <div :class="$style.vuePanelBody">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelBody',
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vuePanelBody {
    font-family: $font-family;
    display: block;
    font-size: 1.75rem;
    padding: 1rem;
    padding-top: 0rem;
    text-align: center;

    @include media(tabletPortrait, max) {
      font-size: 1.5rem;
    }

    ul {
      display: inline-block;
      list-style: none;
      margin: .25rem 2rem;
      margin-top: 0rem;
      text-align: center;
      font-size: 1.5rem;

      li {
        margin: .75rem auto;
        line-height: 1.25;
      }
    }

    hr {
      margin: .25rem;
    }

    a {
      display: inline;
      position: relative;
      width: auto;
      margin: .25rem auto;
      padding: .1rem .25rem;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      background: transparent;
      color: $brand-primary;
      transition: .2s ease-in;

      &:hover {
        background: $brand-primary;
        color: $bg-color;
      }
    }
  }
</style>
