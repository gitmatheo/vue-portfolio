<template>
  <section class="projects" ref="projects">
    <div class="projects__wrapper">
      <Project v-for="project in projects" :key="project.title" :project="project" ref="project"/>
    </div>
  </section>
</template>

<script>
import Project from "../../components/Project.vue";
import natours from "../../assets/images/natours.png";
import trillo from "../../assets/images/trillo.png";
import nexter from "../../assets/images/nexter.png";
import weatherApp from "../../assets/images/react-weather-app.png";
import todoApp from "../../assets/images/react-todo-app.png";
import milk from "../../assets/images/milk.png";
import proktolog from "../../assets/images/proktolog.png";
import oldPortfolio from "../../assets/images/old-portfolio.png";
import spanishRobot from "../../assets/images/spanish-robot.png";
import videalty from "../../assets/images/videalty.png";

import ScrollMagic from "scrollmagic";
import TweenLite from "gsap";
import "debug.addIndicators";
import "animation.gsap";

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          title: "Natours",
          stack: ["HTML", "CSS", "Sass"],
          img: natours,
          desc: {
            pl:
              "Landing page dla fikcyjnej firmy zajmującej się organizowaniem wycieczek turystycznych. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com.",
            en:
              "Landing page for a fictional company that offers tours in nature. A website made as a part of `Advanced CSS Course` from Udemy.com."
          },
          githubLink: "https://github.com/gitmatheo/Natours",
          liveLink: "https://gitmatheo.github.io/Natours/"
        },
        {
          title: "Trillo",
          stack: ["HTML", "CSS", "Sass"],
          img: trillo,
          desc: {
            pl:
              "Fikcyjna wyszukiwarka hoteli. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com. Stylowana głównie za pomocą CSS Flexbox",
            en:
              "Fictional all in one booking app made as a part of 'Advanced CSS Course' from Udemy.com. Styled mainly using CSS Flexbox."
          },
          githubLink: "https://github.com/gitmatheo/Trillo",
          liveLink: "https://gitmatheo.github.io/Trillo/"
        },
        {
          title: "Nexter",
          stack: ["HTML", "CSS", "Sass"],
          img: nexter,
          desc: {
            pl:
              "Landing page dla fikcyjnej firmy zajmującej się luksusowymi nieruchomościami. Strona wykonana w ramach kursu 'Advanced CSS and Sass' z Udemy.com. Stylowana głównie za pomocą CSS Grid",
            en:
              "Landing page for a fictional company that offers luxury real estates. Site created as part of the `Advanced CSS and Sass` course from Udemy.com. Styled mainly using CSS Grid."
          },
          githubLink: "https://github.com/gitmatheo/Nexter",
          liveLink: "https://gitmatheo.github.io/Nexter/"
        },
        {
          title: "React Weather App",
          stack: ["HTML", "CSS", "Sass", "React js", "Styled Components"],
          img: weatherApp,
          desc: {
            pl:
              "Prosta aplikacja pogodowa napisana z użyciem biblioteki react i styled components",
            en: "Simple Weather App created using React and Styled Components."
          },
          githubLink: "https://github.com/gitmatheo/React-Weather-App",
          liveLink: "https://gitmatheo.github.io/React-Weather-App/"
        },
        {
          title: "React ToDo App",
          stack: ["HTML", "CSS", "Sass", "React js", "Styled Components"],
          img: todoApp,
          desc: {
            pl:
              "TodoApp wykonana w ramach nauki biblioteki React.js zapisująca aktualny stan zadań do localstorage",
            en:
              "TodoApp reated using React library, which records the current status of tasks to local storage."
          },
          githubLink: "https://github.com/gitmatheo/React-todoapp",
          liveLink: "https://gitmatheo.github.io/React-todoapp/"
        },
        {
          title: "Szkoła rodzenia - Milk",
          stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
          img: milk,
          desc: {
            pl:
              "Strona internetowa wykonana dla łódzkiej szkoły rodzenia MILK. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
            en:
              "A website made for the MILK birth school. Based on WordPress CMS and Divi Theme from Elegant Themes."
          },
          githubLink: null,
          liveLink: "https://milk.edu.pl/"
        },
        {
          title: "Proktolog Nowicki",
          stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
          img: proktolog,
          desc: {
            pl:
              "Strona internetowa wykonana dla lekarza proktologa. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
            en:
              "A business website made for a proctologist. Based on WordPress CMS and Divi Theme from Elegant Themes."
          },

          githubLink: null,
          liveLink: "https://proktolog-nowicki.pl/"
        },
        {
          title: "Videalty",
          stack: ["HTML", "CSS", "WordPress", "Dive Theme"],
          img: videalty,
          desc: {
            pl:
              "Moja strona internetowa nt. wideo i fotografii nieruchomości. Oparta o CMS WordPress i szablon DIVI od Elegant Themes.",
            en:
              "My website about video and real estate photography. Based on CMS WordPress and Divi Theme from Elegant Themes."
          },
          githubLink: null,
          liveLink: "https://videalty.pl/"
        },
        {
          title: "Strona Wizytówka",
          stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "typed.js",
            "fullpage.js"
          ],
          img: oldPortfolio,
          desc: {
            pl:
              "Dawna strona wizytówka wykonana z wykorzystaniem jQuery Typed.js i Fullpage.js",
            en:
              "Old portfolio website created using jQuery Typed.js and Fullpage.js."
          },
          githubLink: "https://github.com/gitmatheo/mywebsite",
          liveLink: "https://gitmatheo.github.io/mywebsite/"
        },
        {
          title: "Spanish Robot",
          stack: ["HTML", "CSS", "JavaScript", "jQuery", "Svg", "granim.js"],
          img: spanishRobot,
          desc: {
            pl:
              "Gra do nauki hiszpańskich słowek przygotowywana na warsztatach CodersLab. Zawiera dużo błędów, ale możesz zobaczyć ją na GitHub jeśli masz ochotę. Przygotowywana dla rozdzielczości 1366x768.",
            en:
              "A game for learning Spanish words. created o the CodersLab Bootcamp. It has a lot of bugs but you can check it if you want. View it on 1366x768 screen resolution for the best experience."
          },
          githubLink: "https://github.com/gitmatheo/spanish-robot",
          liveLink: "https://gitmatheo.github.io/spanish-robot/"
        }
      ]
    };
  },
  mounted() {
    const { project, projects } = this.$refs;
    const projectsArray = project.map(el => {
      return el.$el;
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: projects,
      triggerHook: 0.58
    })
      .setTween(
        TweenLite.staggerFrom(projectsArray, 0.8, {
          cycle: { opacity: [0, 0], x: [-200, 200] }
        })
      )
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
.projects {
  background: $color-primary-dark;
  -webkit-clip-path: polygon(0 10em, 100% 0, 100% calc(100% - 10em), 0% 100%);
  clip-path: polygon(0 10em, 100% 0, 100% calc(100% - 10em), 0% 100%);
  overflow: hidden;
  &__wrapper {
    grid-column: center-start/ center-end;
    margin: 0 auto;
    max-width: 140rem;
    padding: 15em $padding-md;
    display: grid;
    grid-template-columns: repeat(3, minmax(25rem, 1fr));
    grid-gap: 7rem;

    @include respond(tab-land) {
      // width < 1200?
      grid-template-columns: repeat(2, minmax(25rem, 1fr));
    }

    @include respond(phone) {
      // width < 900?
      grid-template-columns: minmax(25rem, 1fr);
    }

    @include respond(big-desktop) {
      font-size: 75%; //1rem = 12, 12/16
    }
  }
}

.project {
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    padding: 3rem;
    color: rgba($color-white, 0.9);
  }
  &__img {
    width: 100%;
  }

  &__name {
    width: calc(100% - 3em);
    margin: 0 3rem;
    font-size: $font-size-medium;
    font-weight: 400;
    padding: 0.5rem 0rem;
    border-bottom: 1px solid rgba($color-white, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;

    // &::before,
    // &::after {
    //   content: "";
    //   background: rgba(white, 0.8);
    //   width: 15%;
    //   height: 1px;
    // }
    // &::before {
    //   margin-left: 0.5em;
    //   margin-right: auto;
    // }
    // &::after {
    //   margin-right: 0.5em;
    //   margin-left: auto;
    // }
  }

  &__description {
    font-size: $default-font-size;
    display: flex;
    align-items: center;
  }

  &__btns-wrapper {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    width: 45%;
    padding: 1.5rem 0rem !important;
  }
}

.card-top {
  padding: 0;
  backface-visibility: hidden;
  &__fig {
    position: relative;
    overflow: hidden;
    .card-top__figcap::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      content: "";
      -webkit-transition: -webkit-transform 0.6s;
      transition: transform 0.6s;
      -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
        translate3d(0, -100%, 0);
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
        translate3d(0, -100%, 0);
    }
    ul {
      list-style: none;
      position: absolute;
      right: 1.5em;
      bottom: 1.5em;
      padding: 0 1em;
      border-right: 4px solid #fff;
      font-size: $default-font-size;
      text-align: right;
      opacity: 0;
      -webkit-transition: opacity 0.35s;
      transition: opacity 0.35s;
    }
    &:hover {
      ul {
        opacity: 1;
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
      }
      .card-top__img {
        opacity: 0.1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      .card-top__figcap {
        &::before {
          -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
          transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg)
            translate3d(0, 100%, 0);
        }
      }
      .card-top__heading {
        color: white;
        background: transparent;
      }
    }
  }
  &__img {
    position: relative;
    padding: 1em;
    display: block;
    min-height: 100%;
    max-width: 100%;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale3d(1.05, 1.05, 1);
    transform: scale3d(1.05, 1.05, 1);
    padding: $padding-sm;
  }

  &__figcap {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: $font-size-small;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    &::before,
    &::after {
      pointer-events: none;
    }
  }
  &__figcap,
  &__figcap > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__figcap > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }
  &__heading {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2em 0.8em;
    margin: 1em;
    background: rgba($color-white, 0.9);
    color: $color-primary-dark;
    font-size: $default-font-size;
    transition: all 0.2s;
  }
}
</style>
