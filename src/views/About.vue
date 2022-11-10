<template>
    <div class="h-[600px] px-[64px] font-display">
        <h1 class="text-5xl font-bold mb-8"> <span class="name-underline"> About</span></h1>
        <main>

        </main>
    </div>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style scoped>
.name-underline {
    background-image: url(/name-underline.svg);
}

.education-underline {
    background-image: url(/education-underline.svg);

}

.name-underline,
.education-underline {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>