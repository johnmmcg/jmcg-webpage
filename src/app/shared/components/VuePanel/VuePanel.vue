<template>
  <div :class="flipPanel">
    <div :class="$style.flipper">
  		<div :class="$style.front">
        <slot />
  		</div>
  		<div :class="$style.back">
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
      animation: {
        type: String,
        required: false,
        default: 'default',
      }
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
          if (this.animation === 'circleTrace') {
            classes.push(this.$style.circleTrace);
          } else if (this.animation === 'radiusAlt') {
            classes.push(this.$style.radiusAlt);
          } else if (this.animation === 'caffeinated') {
            classes.push(this.$style.caffeinated);
          }
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
    max-width: 300px;
    min-width: 200px;
    margin: 1rem auto;
    padding: 1rem;
    position: relative;
    perspective: 1000px;
    transform: rotateX(-180deg);
    box-shadow: none;
    transition: .25s ease-in;

    &::before,
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0px;
      height: 0px;
    }

    .front, .back {
    	width: 100%;
    	height: 100%;
    }

    /* flip speed goes here */
    .flipper {
    	transform-style: preserve-3d;
    	position: relative;
      overflow: hidden;
      transition: 1s;
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
      transition: opacity 1s ease-in;

      h3 {
        font-family: $font-family-headings;
        font-size: 4.5rem;
        line-height: 1.25;
        margin: 0;
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
    position: relative;
    transition: .25s linear;

    .front {
      opacity: 1;
    }
  }

  .circleTrace {
    box-shadow: inset 0px 0px 0px 1px white;
    position: relative;
    transition: 1s ease-in;

    &::before {
      position: absolute;
      content: "";
      left: -1.5%;
      top: -1.5%;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      // background: #2A1314;
      background: #fff;
      animation: traceCard 4s infinite;
      animation-delay: 1s;
      transition: 1s ease-in-out;
    }

    @keyframes traceCard {
      0% {
        left: -1.5%;
        top: -1.5%;
      }
      25% {
        left: 98%;
        top: -1.5%;
      }
      50% {
        left: 98%;
        top: 98.5%;
      }
      75% {
        left: -1.5%;
        top: 98.5%;
      }
      100% {
        left: -1.5%;
        top: -1.5%;
      }
    }
  }

  .radiusAlt {
    border: 1px solid transparent;
    border-radius: 0%;
    animation: alternateBorderRadius 10s infinite;
    animation-delay: .5s;
    transition: all .1s linear;

    @keyframes alternateBorderRadius {
      0% {
        border-radius: 100%;
        border: 1px solid transparent;
        transition: .1s linear;
      }
      20% {
        border-radius: 100%;
        border: 1px solid white;
        transition: .1s linear;
      }
      30% {
        border: 1px solid white;
        border-radius: 0%;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 100%;
      }
      50% {
        border: 1px solid white;
        border-radius: 100%;
      }
      60% {
        border: 1px solid white;
        border-radius: 0%;
        border-bottom-left-radius: 100%;
        border-top-right-radius: 100%;
      }
      75% {
        border: 1px solid white;
        border-radius: 100%;
      }
      95% {
        border-color: transparent;
      }
      100% {
        border-radius: 100%;
        border: 1px solid transparent;
        transition: .1s linear;
      }
    }
  }


  .caffeinated {
    // border-bottom: 1px solid white;
    // animation: fillUp 10s infinite;
    position: relative;
    transition: 1s linear;

    &::before {
      position: absolute;
      top: 0;
      left: 4px;
      height: 99%;
      width: 290px;
      background-color: $brand-dark-primary;
      animation: fillUp 12s infinite;
      animation-timing-function: step-end;
      animation-delay: 2s;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 4px;
      height: 100%;
      width: 290px;
      background-color: white;
      z-index: -1;
    }

    @keyframes fillUp {
      0% {
        background-color: $brand-dark-primary;
        height: 99%;
      }
      3% {
        height: 99%;
      }
      4% {
        height: 100%;
      }
      5% {
        height: 99%;
      }
      6% {
        height: 100%;
      }
      7% {
        height: 99%;
      }
      8% {
        height: 100%;
      }
      9% {
        height: 99%;
      }
      10% {
        height: 100%;
      }
      11% {
        height: 99%;
      }
      12% {
        height: 100%;
      }
      13% {
        height: 99%;
      }
      14% {
        height: 99%;
      }
      15% {
        height: 99%;
        animation-timing-function: ease-in-out;
      }
      25% {
        height: 4%;
        animation-timing-function: ease-in-out;
      }
      35% {
        height: 4%;
        animation-timing-function: ease-in;
      }
      100% {
        height: 99%;
        animation-timing-function: step-end;
      }
    }
  }
</style>
