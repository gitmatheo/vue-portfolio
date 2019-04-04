<template>
  <a
    :href="href"
    class="project__btn btn btn--anim1 btn--inverted"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Project6 Github"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["href"]
};
</script>

<style>
</style>
