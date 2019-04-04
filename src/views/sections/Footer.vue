<template>
  <footer id="contact" class="footer">
    <div class="footer__container">
      <div class="footer__contact">
        <h3>{{language === "PL" ? "Kontakt": "Contact"}}</h3>
        <ul>
          <li>
            <i class="fas fa-mobile-alt"></i>

            {{language === "PL" ? "Tel": "Mobile"}}: +48 695 655 650
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            email: matteuszd@gmail.com
          </li>
          <li>
            <a
              href="./assets/NoweCV-final.pdf"
              class="footer__cv header__btn btn btn--white btn--animated"
            >CV PL</a>
            <a
              href="./assets/NewCV-final.pdf"
              class="footer__cv header__btn btn btn--white btn--animated"
            >CV EN</a>
          </li>
        </ul>
      </div>
      <div class="footer__socials">
        <h3>{{language === "PL" ? "Media społecznościowe": "Social Media"}}</h3>
        <ul>
          <LinkItem href="https://github.com/gitmatheo" title="Github" iconClass="fab fa-github"/>
          <LinkItem
            href="https://www.linkedin.com/in/mateusz-dominiak/"
            title="Linkedin"
            iconClass="fab fa-linkedin"
          />
          <LinkItem
            href="https://www.youtube.com/user/matteuszd"
            title="YouTube"
            iconClass="fab fa-youtube"
          />
          <LinkItem
            href="https://facebook.com/mateuszdominiak"
            title="Facebook"
            iconClass="fab fa-facebook"
          />
        </ul>
      </div>
      <div class="copy">
        <p>Copyright &copy; 2019 Mateusz Dominak</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import LinkItem from "../../components/LinkItem.vue";

export default {
  components: {
    LinkItem
  },
  data() {
    return {};
  },
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
// FOOTER
.footer {
  background: #16222a;
  background: linear-gradient(to top, $color-primary, $color-primary-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $default-font-size;
  padding-top: 5rem;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(50% 0%, 100% 5rem, 100% 100%, 0 100%, 0 5rem);
    clip-path: polygon(50% 0%, 100% 5rem, 100% 100%, 0 100%, 0 5rem);
  }
  &__container {
    color: rgba($color-white, 0.9);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 80%;
    width: 100%;
    max-width: 140rem;
    line-height: 150%;
    padding: 4rem $padding-md;
    @include respond(tab-port) {
      flex-direction: column;
      padding: 2rem 0;
      div {
        text-align: center;
        padding: 2rem 0;
      }
    }

    * {
      line-height: 150%;
    }
  }
  &__copy {
    align-self: center;
  }
  &__contact {
    text-align: left;

    @include respond(tab-port) {
      text-align: center;
      align-self: center;
    }
  }
  .footer__cv {
    color: rgba($color-primary-dark, 1);
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      color: rgba($color-primary-dark, 1);
    }
  }
  ul {
    list-style: none;
  }
}
</style>
