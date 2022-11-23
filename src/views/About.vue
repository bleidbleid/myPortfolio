<template>
    <main class="h-[700px] lg:px-16 sm:px-8 px-4">
        <section class="flex flex-col md:flex-row justify-around mx-auto gap-10 h-full text-xl">
            <article class="hidden flex-col justify-center w-1/4 lg:flex">
                <img src="cut-maria.svg" id="mariaCut" alt="Connect the dots star">
            </article>

            <article class="flex flex-col justify-center px-12 items-center md:w-1/2 lg:w-2/4">
                <p class="pb-12  mt-6 md:mb-0">
                    <span class="designer-container p-6">Maria is a designer</span> whose work aims to generate a physical interaction, even from a digital environment. She experiments with the phygital, and seeks debate through artifacts and interactive experiances. Maria always tries to provoke complicity between people, either by creating new bonds or reinforcing existing ones.
                </p>
                <p class="mb-6 md:mb-0">
                    <span class="programmer-underline py-1">
                    Maria is a programmer</span> who loves working and exploring with any tech she encouters, not only as a front-end developer, but also creating with Arduino and Processing.
                </p>
            </article>
            <article class="flex flex-col items-center justify-center  md:w-2/5 lg:w-1/4">
                <img src="maria-is.svg" class="rotate-[-4deg] w-2/3 md:w-full" id="mariaIs" alt="Connect the dots star">


            </article>

        </section>
    </main>

</template>
<script setup>
import { ref } from 'vue';
</script>
<style scoped>
.programmer-underline {
    background-image: url(/programmer-underline.svg);
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

#mariaIs {
    animation: mariais 5s infinite;
}

#mariaCut {
    animation: mariacut 2s infinite;
}

@keyframes mariais {
    50% {
        transform: rotate(2deg);
    }
}

@keyframes mariacut {
    50% {
        transform: rotateY(10deg);
    }

}
</style>