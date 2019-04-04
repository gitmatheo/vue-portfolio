<template>
  <div class="home">
    <Nav/>
    <Lang/>
    <Header/>
    <About/>
    <ProjectsHeader/>
    <Projects/>
    <Tech/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Header from "./sections/Header.vue";
import Lang from "./sections/Lang.vue";
import About from "./sections/About.vue";
import Projects from "./sections/Projects.vue";
import ProjectsHeader from "./sections/ProjectsHeader.vue";
import Tech from "./sections/Tech.vue";
import Footer from "./sections/Footer.vue";

export default {
  name: "home",
  components: {
    Nav,
    Lang,
    Header,
    About,
    Projects,
    ProjectsHeader,
    Tech,
    Footer
  }
};
</script>
