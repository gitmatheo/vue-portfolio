<template>
  <section class="tech" id="tech">
    <div class="tech__wrapper" ref="wrapper1">
      <div class="tech__content-wrapper">
        <h2 class="tech__title heading-tertiary">
          {{language === "PL"
          ? "Technologie i narzędzia z których korzystam."
          : "Technologies and tools that I use."}}
        </h2>
        <p class="tech__desc paragraph">
          {{language === "PL"
          ? "Przez cały okres mojej nauki miałem okazję pracować z..."
          : "Throughout my entire learning process I had the pleasure to work with..."}}
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS, Sass, RWD, BEM</li>
          <li>JavaScript ES6 +</li>
          <li>React</li>
          <li>React Router</li>
          <li>Styled Components</li>
          <li>jQuery</li>
          <li>Bootstrap 4</li>
          <li>NPM</li>
          <li>WordPress</li>
          <li>Git</li>
          <li>Adobe Photoshop Lightroom</li>
        </ul>
      </div>
      <div class="tech__logos-wrapper">
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-html5"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-css3"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-sass"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-javascript"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-jquery"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-react"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-bootstrap"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-npm"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-git"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-wordpress"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-adobephotoshop"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-adobelightroom"></use>
        </svg>
      </div>
    </div>
    <div class="tech__wrapper" ref="wrapper2">
      <div class="tech__content-wrapper tech__content-wrapper--reversed">
        <h2
          class="tech__title heading-tertiary"
        >{{language === "PL" ? "W trakcie nauki..." : "Currently learning..."}}</h2>
        <p class="tech__desc paragraph">
          {{language === "PL"
          ? `Ostatnio spędzam swój wolny czas na nauce React.js + Redux z użyciem
          Firebase.`
          : ` Recently I spend my free time learning React.js + Redux using Firebase.`}}
        </p>
        <ul>
          <li>Vue.js</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div class="tech__logos-wrapper">
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-vue-dot-js"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-react"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-redux"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-firebase"></use>
        </svg>
      </div>
    </div>
    <div class="tech__wrapper" ref="wrapper3">
      <div class="tech__content-wrapper">
        <h2 class="tech__title heading-tertiary">
          {{language === "PL"
          ? ` W najbliższym czasie mam zamiar nauczyć się...`
          : ` In the near future I am going to learn ...`}}
        </h2>
        <ul>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div class="tech__logos-wrapper">
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-graphql"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-mongodb"></use>
        </svg>
        <svg class="tech__logo">
          <use xlink:href="../../assets/icons/sprite.svg#icon-node-dot-js"></use>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import ScrollMagic from "scrollmagic";
import TweenLite from "gsap";
import "debug.addIndicators";
import "animation.gsap";

export default {
  computed: {
    ...mapState({
      language: "language"
    })
  },
  methods: {
    newScene(element) {
      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.8
      })
        .setTween(TweenLite.from(element, 1, { opacity: 0, x: -100 }))
        // .addIndicators()
        .addTo(controller);
    }
  },
  mounted() {
    const { wrapper1, wrapper2, wrapper3 } = this.$refs;

    this.newScene(wrapper1);
    this.newScene(wrapper2);
    this.newScene(wrapper3);
  }
};
</script>

<style lang="scss">
@import "../../sass/base/variables";
@import "../../sass/base/mixins";
@import "../../sass/base/base";
@import "../../sass/base/typography";
@import "../../sass/base/utilities";

.tech {
  color: $color-primary-dark;
  font-size: $default-font-size;
  background: $color-grey-light-2;
  margin-top: -10rem;
  margin-bottom: -5rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  &__wrapper {
    padding: $padding-md;
    max-width: 140rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;

    @include respond(tab-port) {
      flex-direction: row-reverse;
    }

    @include respond(phone) {
      flex-direction: column;
    }

    &--right {
      text-align: right;
    }
    ul {
      list-style: none;
      line-height: 150%;
    }
  }
  &__title {
  }
  &__desc {
    font-size: $default-font-size;
  }

  &__content-wrapper {
    // background: greenyellow;
    margin-left: 5rem;

    @include respond(phone) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 5rem;
    }
    &--reversed {
      // order: 2;
      align-items: flex-end;
    }
  }
  &__logos-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 31%;
    // background: red;

    @include respond(tab-port) {
      width: 50%;
    }
    @include respond(phone) {
      width: 100%;
    }
  }
  &__logo {
    height: 10rem;
    flex-basis: 6rem;
    margin: 0 0.5rem;
    fill: currentColor;
    flex-grow: 1;
    // margin: 1rem;
  }
}
</style>
