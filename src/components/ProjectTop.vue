<template>
  <div class="card-top">
    <figure class="project__img card-top__fig">
      <img class="card-top__img" :src="img" alt="Mockup project 7">
      <figcaption class="card-top__figcap">
        <h2 class="card-top__heading">{{title}}</h2>
        <ul>
          <li v-for="(item, index) in stack" :key="index">{{item}}</li>
        </ul>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "stack"]
};
</script>

<style>
</style>
