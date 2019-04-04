<template>
  <section class="about" id="about">
    <div class="about__container" ref="about">
      <img class="about__img" src="../../assets/images/face.jpg" alt="Author photo">

      <div class="about__content">
        <h2>{{language === "PL" ? "O mnie" : "About me"}}</h2>
        <h3>
          {{language === "PL"
          ? "Pozwól, że się przedstawię..."
          : "Let me introduce myself..."}}
        </h3>
        <span v-if="language === 'PL'" v-html="pl"></span>
        <span v-else v-html="en"></span>
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
  data() {
    return {
      pl: `<p>
    Mam na imię Mateusz i jestem
    <strong>Junior Front-End Developerem</strong> mieszkającym w Łodzi.
    Zawsze szukam okazji do kodowania i uczenia się nowych rzeczy. Mam około
    sześć miesięcy praktycznego doświadczenia w kodowaniu stron
    internetowych i aplikacji przy użyciu nowoczesnego HTML, CSS i
    JavaScript. Ostatnio uczę się biblioteki React JS. Oprócz mojej bazy
    wiedzy, aktywnie poszukuję nowych technologii i staram się być na
    bieżąco z trendami i postępami w branży. Ukończyłem Bootcamp „Zostań
    Front-End Developerem” w CodersLab,
    <strong>codziennie uczę się więcej</strong>, korzystając z kursów online
    i pisząc nowe linie kodu.
  </p>
  <br />
  <p>
    Wcześniej pracowałem w najwiekszej w Polsce firmie zajmującej się
    zarządzaniem najmem jako Specjalista ds. najmu a także fotograf i
    producent video. Oprócz tego interesuję się technologią blockchain i
    kryptowalutami. Zimą jeżdzę na snowboardzie po alpejskich stokach.
  </p>
  <br />
  <p>
    Aktualnie <strong>szukam ludzi lepszych od siebie </strong> i możliwości
    zatrudnienia/stażu jako Junior Front-End Developer, gdzie mógłbym wnieść
    wartość do zespołu i dalej się rozwijać.
  </p>`,
      en: `<p>My name is Mateusz and I am a<strong> Junior Front-End Developer</strong> working in Łódź. I always look for opportunities to code and learn new things. I have about six months of practical experience coding websites and applications using modern HTML, CSS, and JavaScript. I have recently been learning the React JS. In addition to my knowledge base, I actively look for new technologies and try to keep up to date on industry trends and advancements. I completed  "Become a Front-End Developer" Bootcamp at CodersLab, <strong>I learn more every day</strong> through using online courses and writing new lines of code.</p>
  <br>
  <p>Earlier, I worked in the largest Polish company dealing with lease management as a rental specialist as well as a photographer and video producer. In addition, I'm interested in blockchain technology and cryptocurrency. In winter, I go snowboarding on the Alpine slopes.</p>
  <br>
  <p>I am currently <strong>looking for people who are better than myself</strong> and for employment/internship as a Junior Front-End Developer, where I could bring value to the team and develop further.</p>`
    };
  },
  computed: {
    ...mapState({
      language: "language"
    })
  },
  mounted() {
    const { about } = this.$refs;
    const controller = new ScrollMagic.Controller();
    const aboutScene = new ScrollMagic.Scene({
      triggerElement: about,
      triggerHook: 0.6
    })
      .setTween(TweenLite.from(about, 1, { opacity: 0, x: -100 }))
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
.about {
  background: $color-grey-light-2;
  color: $color-primary-dark;
  z-index: -100;

  &__container {
    // height: calc(40vh + 40em);
    width: 100%;
    max-width: 140rem;
    padding: 20rem $padding-md 25rem $padding-md;
    margin: -15rem auto -18rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include respond(phone) {
      flex-direction: column;
      padding: 20rem 1rem 25rem 1rem;
      margin: -15rem auto -20rem auto;
    }
  }

  &__content {
    margin-left: 3em;

    p {
      font-size: $default-font-size;
      line-height: 1.6em;
    }
  }

  &__img {
    height: 20rem;
    border-radius: 50%;
    backface-visibility: cover;
  }
}
</style>

