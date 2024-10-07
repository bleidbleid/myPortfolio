<template>
  <main class="h-full lg:px-16 sm:px-8 px-4 text-xl">
    <h1 class="text-5xl font-bold mb-8 sm:block">
      <span class="font-display about-underline"> Press</span>
    </h1>
    <section class="flex flex-col mb-8">
      <article>
        <a href="https://www.rtve.es/play/videos/helvetica/helvetica-disseny-institucional/5854379/">
          <!-- <img src="public/projects/helvetica.png" alt=""> -->
        </a>      
      </article>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped>
.programmer-underline {
  background-image: url(/programmer-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.human-underline {
  background-image: url(/human-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}

.designer-container {
  background-image: url(/designer-container.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.about-underline {
  background-image: url(/about-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
