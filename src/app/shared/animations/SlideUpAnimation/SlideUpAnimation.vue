<template>
  <transition
    :enter-class="$style.enter"
    :enter-active-class="$style.enterActive"
    :enter-to-class="$style.enterTo"
    :leave-class="$style.leave"
    :leave-active-class="$style.leaveActive"
    :leave-to-class="$style.leaveTo">
    <slot />
  </transition>
</template>

<script lang="ts">
  export default {
    name: 'SlideUpAnimation',
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .enterActive, .leaveActive {
    transition: 2s;
  }

  .enterTo, .leave {
    opacity: 1;
    transform: translate(0%, 0%);
  }

  .enter, .leaveTo {
    opacity: 0;
    transform: translate(0%, 100%);
  }
</style>
