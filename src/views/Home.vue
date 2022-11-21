
<template>
    <main class="h-[600px] lg:px-16 sm:px-8 px-4 font-display">
        <div class="flier">
            <img src="APPS.svg">
        </div>
        <div class="flier2">
            <img src="INSTALLATIONS.svg">
        </div>
        <section class="flex justify-around flex-col mx-auto h-full text-center text-3xl sm:text-4xl lg:text-6xl">
            <article> <span class="hola-container transition-all duration-300 transform ease">Hola! </span> </article>

            <article>My name <router-link :to="{ name: 'about' }"><span
                        class="name-container py-7 hover:cursor-pointer transition-all duration-300 transform ease lg:py-10">is
                        MARIA
                        BLADÉ</span> !!!!!!!!
                </router-link>
            </article>
            <article class="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl">
                I'm an <router-link :to="{ name: 'projects' }"><span
                        class="interaction-container hover:cursor-pointer transition-all duration-300 transform ease py-3">
                        interaction designer </span> and <span
                        class="frontend-container hover:cursor-pointer transition-all duration-300 transform ease py-1">
                        front-end developer</span></router-link> based in Barcelona.
            </article>
            <article
                class="mx-auto max-w-sm sm:items-end items-center text-center flex flex-col sm:flex-row sm:max-w-none">
                <router-link :to="{ name: 'contact' }">
                    <div class=" text-center align-center text-3xl sm:text-4xl lg:text-6xl mr-0 sm:mr-4 mt-6 sm:mt-0">
                        Let's get in touch :)
                    </div>
                </router-link>
                <img class="sm:hidden mt-2 block" src="/contact-arrow.svg" alt="">

                <div class="flex flex-col mt-2 sm:mt-0">
                    <div class="flex gap-3 justify-center sm:justify-start">
                        <img class="hidden sm:block " src="/github-arrow.svg" alt="">
                        <a href="https://github.com/bleidbleid"
                            class="text-center hover:text-semantic transition-all duration-300 transform ease text-lg lg:text-2xl">
                            github.com/bleidbleid
                        </a>
                    </div>
                    <div
                        class="flex gap-3 content-start hover:text-semantic transition-all duration-300 transform ease justify-center mt-2 sm:mt-0">
                        <img class="hidden sm:block" src="/email-arrow.svg" alt="">
                        <h1 class="text-center text-lg lg:text-2xl">
                            mariablade2000@gmail.com </h1>
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>
  
<script setup>
</script>

<style>
.flier {
    pointer-events: none;
}

.flier2 {
    pointer-events: none;
}

.flier>* {
    /* Adjust animation duration to change the element’s speed */
    animation: fly 90s linear infinite;
    pointer-events: none !important;
    top: 0;
    left: 0;
    transform: translateX(-120%) translateY(-120%) rotateZ(0);
    position: fixed;
    animation-delay: 1s;
    z-index: 999999;
}

.flier2>* {
    /* Adjust animation duration to change the element’s speed */
    animation: fly2 50s linear infinite;
    pointer-events: none !important;
    top: 0;
    left: 0;
    transform: translateX(-120%) translateY(-120%) rotateZ(0);
    position: fixed;
    animation-delay: 1s;
    z-index: 999999;
}

/* Keyframe values control where the element will begin
    and end its trajectory across the screen. Each rule
    represents a path the element follows across the screen. */

@keyframes fly {

    98.001%,
    0% {
        display: block;
        transform: translateX(-200%) translateY(100vh) rotateZ(0deg)
    }

    15% {
        transform: translateX(100vw) translateY(-100%) rotateZ(180deg)
    }

    15.001%,
    18% {
        transform: translateX(100vw) translateY(-30%) rotateZ(0deg)
    }

    40% {
        transform: translateX(-200%) translateY(3vh) rotateZ(-180deg)
    }

    40.001%,
    43% {
        transform: translateX(-200%) translateY(-100%) rotateZ(-180deg)
    }

    65% {
        transform: translateX(100vw) translateY(50vh) rotateZ(0deg)
    }

    65.001%,
    68% {
        transform: translateX(20vw) translateY(-200%) rotateZ(180deg)
    }

    95% {
        transform: translateX(10vw) translateY(100vh) rotateZ(0deg)
    }
}
@keyframes fly2 {

98.001%,
0% {
    display: block;
    transform: translateY(-200%) translateX(100vh) rotateZ(0deg)
}

15% {
    transform: translateY(100vw) translateX(-100%) rotateZ(180deg)
}

15.001%,
18% {
    transform: translateY(100vw) translateX(-30%) rotateZ(0deg)
}

40% {
    transform: translateY(-200%) translateX(3vh) rotateZ(-180deg)
}

40.001%,
43% {
    transform: translateY(-200%) translateX(-100%) rotateZ(-180deg)
}

65% {
    transform: translateY(100vw) translateX(50vh) rotateZ(0deg)
}

65.001%,
68% {
    transform: translateY(20vw) translateX(-200%) rotateZ(180deg)
}

95% {
    transform: translateY(10vw) translateX(100vh) rotateZ(0deg)
}
}

/* SPAN SVGS */
.name-container {
    background-image: url(/name-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

:hover.name-container {
    background-image: url(/name-container-hover.svg);
}

.interaction-container {
    background-image: url(/interaction-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

:hover.interaction-container {
    background-image: url(/interaction-container-hover.svg);
}

.frontend-container {
    background-image: url(/frontend-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

:hover.frontend-container {
    background-image: url(/frontend-container-hover.svg);
}

.hola-container {
    background-image: url(/hola-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

:hover.hola-container {
    background-image: url(/hola-container-hover.svg);
}
</style>