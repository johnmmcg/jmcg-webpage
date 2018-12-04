<template>
  <div :class="flipPanel">
    <div :class="$style.flipper">
  		<div :class="$style.front">
        <slot />
  		</div>
  		<div :class="$style.back">
        Loading...
  		</div>
  	</div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanel',
    props: {
      delay: {
        type:     Number,
        required: false,
        default: 1000,
      },
    },
    data() {
      return {
        flipped: false,
      };
    },
    computed: {
      flipPanel() {
        const classes = [this.$style.vuePanel];

        if (this.flipped) {
          classes.push(this.$style.flipped);
        }

        return classes;
      },
    },
    mounted() {
      const self = this;

      setTimeout((event) => {
        self.flipped = true;
      }, self.delay);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vuePanel {
    width: auto;
    max-width: 250px;
    margin: 1rem auto;
    perspective: 1000px;
    transform: rotateX(-180deg);
    transition: .5s linear;

    .front, .back {
    	width: 100%;
    	height: 100%;
    }

    /* flip speed goes here */
    .flipper {
    	transform-style: preserve-3d;
    	position: relative;
      transition: .5s;
    }

    /* hide back of pane during swap */
    .front, .back {
      height: 100%;
      width: 100%;
    	backface-visibility: hidden;
    	position: relative;
    	top: 0;
    	left: 0;
    }

    /* front pane, placed above back */
    .front {
      background-color: $bg-color;
      border-radius:    $panel-border-radius;
      margin:           $panel-margin;
    	z-index: 2;
    	/* for firefox 31 */
    	transform: rotateX(0deg);
      opacity: 0;
      transition: opacity .5s ease-in;

      h3 {
        font-family: $font-family-headings;
        font-size: 4.5rem;
        line-height: 1.25;
        margin: .5rem;
        margin-bottom: .5rem;

        @include media(tabletPortrait, max) {
          font-size: 3.5rem;
        }
      }

      h5 {
        font-family: $font-cursive;
        color: $text-color;
        font-size: 2.15rem;
        text-decoration: underline;
        margin: 0rem auto;
        text-align: center;
        line-height: 1;
      }

      .aboutItems {
        max-width: 1600px;
      }
    }

    /* back, initially hidden pane */
    .back {
      color: $brand-dark-primary;
      background: $brand-dark-primary;
    	transform: rotateX(-180deg);
    }
  }

  /* flip the pane when hovered */
  .flipped {
    transform: rotateX(0deg);

    .front {
      opacity: 1;
    }
  }
</style>
