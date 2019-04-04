<template>
  <header class="header" id="home">
    <vue-particles color="#dedede" id="particles-js"></vue-particles>
    <div class="header__wrapper">
      <div class="header__logo-box">
        <div class="header__logo"></div>
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">
            Mateusz
            <span class="strong">Dominiak</span>
          </span>

          <vue-typed-js :strings="typedText.pl" :loop="true">
            <span id="typed-pl" class="typing"></span>
          </vue-typed-js>
          <span id="typed"></span>
          <span class="heading-primary--sub">Front-End Developer</span>
        </h1>

        <a
          href="#projects"
          class="header__btn btn btn--white btn--animated"
          aria-label="View Projects"
        >{{language == "PL" ? projectsBtnText.pl : projectsBtnText.en}}</a>
        <a
          href="../../assets/NoweCV-final.pdf"
          class="header__btn btn btn--white btn--animated"
        >{{language == "PL" ? cvBtnText.pl : cvBtnText.en}}</a>

        <div class="header__socials">
          <ul>
            <li>
              <a
                href="https://github.com/gitmatheo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mateusz-dominiak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/matteuszd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/mateuszdominiak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import { VueParticles } from "vue-particles";
import { VueTypedJs } from "vue-typed-js";
export default {
  components: {
    VueParticles,
    VueTypedJs
  },
  data() {
    return {
      projectsBtnText: {
        pl: "Zobacz Projekty",
        en: "Show Projects"
      },
      cvBtnText: {
        pl: "Pobierz CV",
        en: "Download CV"
      },
      typedText: {
        pl: ["Zmotywowany...", "Gotowy do pracy..."],
        en: ["Self-Taught...", "Never stop learning...", "Ready to work..."]
      }
    };
  },
  methods: {},
  computed: {
    ...mapState({
      language: "language"
    })
  }
};
</script>

<style lang="scss">
@import "../../sass/base/variables";
@import "../../sass/base/mixins";
@import "../../sass/base/base";
@import "../../sass/base/typography";
@import "../../sass/base/utilities";

@import "../../sass/components/button";

.header {
  height: 85vh;
  min-height: 720px;
  background-image: linear-gradient(
      rgba($color-primary, 0.8),
      rgba($color-primary-dark, 1)
    ),
    url("../../assets/images/hero-desktop.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
  z-index: 1;

  &__wrapper {
    margin: 0 auto;
    max-width: 140rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 $padding-md;
    position: relative;
  }

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5em));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5em));
    height: 95vh;
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    only screen and (min-width: 125em) {
    background-image: linear-gradient(
        to top bottom,
        rgba($color-primary-light, 0.9),
        rgba($color-primary-dark, 0.9)
      ),
      url("../../assets/images/hero-tab.jpg");
  }

  @include respond(phone) {
    background-image: linear-gradient(
        rgba($color-primary, 0.8),
        rgba($color-primary-dark, 1)
      ),
      url("../../assets/images/hero-phone.jpg");
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10em));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10em));
  }

  @include respond(tab-land) {
    background-image: linear-gradient(
        rgba($color-primary, 0.8),
        rgba($color-primary-dark, 1)
      ),
      url("../../assets/images/hero-tab.jpg");
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  &__socials {
    ul {
      list-style: none;
      display: flex;
      // justify-content: center;
      padding: 2rem 0;
      li {
        // background: red;
        i {
          color: rgba($color-white, 1);
          font-size: 6rem;
          padding: 0.7rem;
          transition: all 0.3s ease-out;
          &:hover {
            color: rgba($color-white, 0.8);
            transform: translateY(-3px) scale(1.1);
          }
          &:active {
            color: rgba($color-white, 1);
            transform: translateY(-1px) scale(1);
          }
        }
      }
    }
  }
  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    background-image: url("../../assets/images/logo-white.svg");
    background-position: left;
    background-repeat: no-repeat;
    width: 20rem;
    height: 7rem;
    @include respond(tab-port) {
      height: 6rem;
    }

    @include respond(phone) {
      background-image: url("../../assets/images/logo-white-small.svg");
      width: 20rem;
      height: 5rem;
    }
    @include respond(phoneSM) {
      height: 5rem;
    }
  }

  &__text-box {
    z-index: 2000;
  }

  &__btn {
    margin: 1rem;
    color: rgba($color-primary-dark, 1);
    font-weight: 600;
    margin-left: 0;
  }
}

.typing {
  display: block;
  height: 2rem;
  font-size: 1.6rem;
}

#particles-js {
  position: absolute;
  width: 70%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url("");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  z-index: 1000;
}
</style>
