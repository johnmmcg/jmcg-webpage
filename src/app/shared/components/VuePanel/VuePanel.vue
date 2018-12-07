<template>
  <div :class="flipPanel">
    <div :class="$style.flipper">
  		<div :class="$style.front">
        <div :class="$style.frontContent">
          <slot />
        </div>
  		</div>
  		<div :class="$style.back" @click="flipped = true">
        <div :class="$style.backContent">
          <h3>{{number}}</h3>
        </div>
  		</div>
  	</div>
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanel',
    props: {
      number: {
        type: Number,
        required: true,
      },
      delay: {
        type:     Number,
        required: false,
        default: 1000,
      },
      animation: {
        type: String,
        required: false,
        default: 'default',
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
    width: 300px;
    min-height: 300px;
    margin: 1rem auto;
    margin-bottom: 8rem;
    padding: 1rem;
    position: relative;
    perspective: 1000px;
    box-shadow: none;
    transition: 1s ease-in;

    .front, .back {
    	width: 100%;
    	height: 100%;
    }

    /* flip speed goes here */
    .flipper {
    	transform-style: preserve-3d;
    	position: relative;
      overflow: visible;
      transition: 1s linear;
    }

    /* hide back of pane during swap */
    .front, .back {
      height: auto;
      width: 100%;
      cursor: default;
    	backface-visibility: hidden;
    	position: relative;
      transition: .5s ease-in;
    }

    /* front pane, placed above back */
    .front {
      border-radius:    $panel-border-radius;
      margin:           $panel-margin;
      padding: 1rem;
      height: auto;
      position: absolute;
    	z-index: 2;
    	transform: rotateX(-180deg);
      transition: opacity 1s ease-in, transform .5s ease-in;

      &::before,
      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 0px;
        height: 0px;
        z-index: 0;
      }

      .frontContent {
        position: relative;
        height: 100%;
        background-color: $bg-color;

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
      }
    }

    /* back, initially hidden pane */
    .back {
      cursor: pointer;
      position: absolute;
      transform: rotateX(0deg);
      transition: .5s ease-in;

      .backContent h3 {
        font-size: 15rem;
        margin: auto;
        padding-top: 0rem;
        padding-bottom: 3rem;
        line-height: 1;
        bottom: 0;
        left: 0;
        right: 0;
        color: $bg-color;
        background: $brand-dark-primary;
        animation: zoomIn 1s ease-in;
        transition: .25s ease-in-out;
      }

      &:hover {

      }

      @keyframes zoomIn {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  /* flip the pane when hovered */
  .flipped {
    position: relative;
    transition: .5s linear;

    .front {
      position: absolute;
      transform: rotateX(0deg);
      z-index: 500;
      transition: .5s ease-in;
    }

    .back {
      position: absolute;
      transform: rotateX(180deg);
      z-index: 0;
      transition: .5s ease-in;
    }
  }

  .circleTrace .flipper .front {
    box-shadow: inset 0px 0px 0px 1px white;
    transition: .5s ease-in;

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

  .radiusAlt .flipper .front {
    height: auto;
    border: 1px solid transparent;
    border-radius: 0%;
    animation: alternateBorderRadius 10s infinite;
    animation-delay: .25s;
    transition: .5s ease-in;

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

  .caffeinated .flipper .front {
    z-index: 10;
    transition: .5s ease-in;

    &::before {
      position: absolute;
      top: -1px;
      left: 2px;
      z-index: -1;
      height: 99%;
      width: 275px;
      background-color: $brand-dark-primary;
      animation: fillUp 12s infinite;
      animation-timing-function: step-end;
      animation-delay: 1s;
      transition: .25s ease-in;
    }

    &::after {
      position: absolute;
      top: -1px;
      left: 2px;
      height: 100%;
      width: 275px;
      background-color: white;
      z-index: -2;
      transition: .25s ease-in;
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
