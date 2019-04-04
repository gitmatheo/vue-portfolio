<template>
  <li>
    <a :href="href" target="_blank" rel="noopener noreferrer" :aria-label="title">
      <i :class="iconClass"></i>
      {{title}}
    </a>
  </li>
</template>

<script>
export default {
  props: ["href", "title", "iconClass"]
};
</script>

<style lang="scss">
a {
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    color: white;
  }
}
i {
  display: inline-block;
  padding: 0.5rem;
}
</style>

