<template>
  <div class="tech__wrapper">
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
</template>

<script>
export default {};
</script>

<style>
</style>
