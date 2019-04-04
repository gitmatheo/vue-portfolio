<template>
  <div class="project">
    <ProjectTop :title="project.title" :img="project.img" :stack="project.stack"/>

    <h5 class="project__name">{{project.title}}</h5>

    <div class="project__description">
      <p>{{language === "PL" ? project.desc.pl : project.desc.en}}</p>
    </div>

    <div class="project__btns-wrapper">
      <Link :href="project.githubLink">Github</Link>
      <Link :href="project.liveLink">Live</Link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProjectTop from "./ProjectTop.vue";
import Link from "./Link.vue";
import ScrollMagic from "scrollmagic";
import TweenLite from "gsap";
import "debug.addIndicators";
import "animation.gsap";
export default {
  components: {
    ProjectTop,
    Link
  },
  props: ["project"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      language: "language"
    })
  }
  // mounted() {
  //   const { project } = this.$refs;
  //   const controller = new ScrollMagic.Controller();
  //   const projectScene = new ScrollMagic.Scene({
  //     triggerElement: project.parentNode,
  //     triggerHook: 0.58
  //     // offset: 100
  //   })
  //     .setTween(
  //       TweenLite.staggerFrom(project, 0.8, {
  //         cycle: { opacity: [0, 0], x: [-200, 200] }
  //       })
  //     )
  //     .addIndicators()
  //     .addTo(controller);
  // }
};
</script>

<style>
</style>
