<template>
  <nav class="languages">
    <ul class="languages__list">
      <li class="languages__item" :class="language == `PL` && active">
        <a @click.prevent="changeLang('PL')">PL</a>
      </li>
      <li class="languages__item" :class="[language == `EN` ? active : '']">
        <a @click.prevent="changeLang('EN')">EN</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Lang",
  data() {
    return {
      active: "languages__item--active"
    };
  },
  methods: {
    ...mapMutations(["CHANGE_LANG"]),
    changeLang(lang) {
      this.CHANGE_LANG(lang);
    }
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

.languages {
  &__list {
    height: 7rem;
    width: 10rem;
    position: fixed;
    top: 4rem;
    right: 15rem;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @include respond(tab-port) {
      top: 4rem;
      right: 14rem;
    }

    @include respond(phone) {
      top: 3rem;
      right: 12rem;
    }
  }

  &__item {
    color: rgba(white, 0.7);
    z-index: 8000;
    cursor: pointer;
    a {
      font-size: 3rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.4s;
      &:hover {
        color: white;
      }
    }
    &--active {
      font-weight: 900;
      color: white;
    }
  }
}
</style>
