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
    name: 'PushUpAnimation',
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .enterActive, .leaveActive {
    transition: 4s ease-in-out;
  }

  .enterTo, .leave {
    opacity: 1;
    // transform: translate(0%, 0%);
    position: absolute;
    top: 0;
    transition: 4s ease-in-out;
  }

  .enter, .leaveTo {
    opacity: 1;
    // transform: translate(0%, 0%);
    position: absolute;
    top: 500px;
    transition: 4s ease-in-out;
  }
</style>
