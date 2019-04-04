<template>
  <section class="divider" id="projects">
    <div class="divider__wrapper" ref="projectsHeader">
      <h2 class="divider__title">{{language === "PL" ? pl.title : en.title}}</h2>

      <p class="divider__desc">
        {{language === "PL" ? pl.desc : en.desc}}
        <a
          href="https://github.com/gitmatheo/Natours"
          class="divider__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Project1 Github"
        >Github</a>
      </p>
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
  data() {
    return {
      pl: {
        title: "Projekty",
        desc:
          "Poniżej znajdziesz niektóre z moich ostatnich projektów. Są tu zarówno moje własne projekty, jak i te wykonane w ramach kursów online. Wiecej z nich znajdziesz na moim"
      },
      en: {
        title: "Projects",
        desc:
          "Below are some of my recent projects. These are my own projects as well as those created as a part of online courses. You will find more of them on my"
      }
    };
  },
  computed: {
    ...mapState({
      language: "language"
    })
  },
  mounted() {
    const { projectsHeader } = this.$refs;
    const controller = new ScrollMagic.Controller();
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: projectsHeader,
      triggerHook: 0.8
    })
      .setTween(TweenLite.from(projectsHeader, 1, { opacity: 0, x: -100 })) //addd class to project 01 .addIndicators
      .addIndicators()
      .addTo(controller);
  }
};
</script>

<style lang="scss">
@import "../../sass/base/variables";
@import "../../sass/base/mixins";
@import "../../sass/base/base";
@import "../../sass/base/typography";
@import "../../sass/base/utilities";

.divider {
  background-color: lighten($color-primary-dark, 10%);
  margin: 0 auto;
  padding: 2rem 0;
  margin-bottom: -10em;
  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 80% 5em, 125% 100%, 0 100%);
    clip-path: polygon(0 0, 80% 5em, 125% 100%, 0 100%);
  }

  &__wrapper {
    padding: 5rem $padding-md;
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
  }

  &__title {
    display: block;
    color: rgba($color-white, 0.9);
  }
  &__desc {
    font-size: $default-font-size;
    color: rgba($color-white, 0.9);
    font-weight: 200;
    line-height: 150%;
    display: block;
    width: 70%;
  }
  &__link {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
}
</style>
