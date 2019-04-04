<template>
  <li class="navigation__item">
    <a :href="href" class="navigation__link" aria-label="title">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: ["title", "href", "toggleNav", "text"]
};
</script>

<style>
</style>
