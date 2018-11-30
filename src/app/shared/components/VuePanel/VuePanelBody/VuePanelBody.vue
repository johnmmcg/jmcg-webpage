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

    @include media(tabletPortrait, max) {
      font-size: 1.5rem;
    }
  }
</style>
