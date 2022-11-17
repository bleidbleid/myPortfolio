
<template>
    <main class="h-[600px] lg:px-16 sm:px-8 px-4 font-display">
        <section class="flex justify-around flex-col mx-auto h-full text-center text-3xl sm:text-4xl lg:text-6xl">
            <article> <span class="hola-container">Hola! </span> </article>
            
                <article>My name <router-link :to="{ name: 'about' }"><span class="name-container py-7 lg:py-10">is MARIA
                        BLADÉ</span> !!!!!!!!
                    </router-link>
                </article>
            <article class="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl">
                I'm an <router-link :to="{ name: 'projects' }"><span class="interaction-container py-3"> interaction designer </span> and <span
                    class="frontend-container py-1"> front-end developer</span></router-link> based in Barcelona.
            </article>
            <article
                class="mx-auto max-w-sm sm:items-end items-center text-center flex flex-col sm:flex-row sm:max-w-none">
                <router-link :to="{ name: 'contact' }"> <div class=" text-center align-center text-3xl sm:text-4xl lg:text-6xl mr-0 sm:mr-4 mt-6 sm:mt-0">
                     Let's get in touch :)
                </div> </router-link>
                <img class="sm:hidden mt-2 block" src="/contact-arrow.svg" alt="">

                <div class="flex flex-col mt-2 sm:mt-0">
                    <div class="flex gap-3 justify-center sm:justify-start">
                        <img class="hidden sm:block" src="/github-arrow.svg" alt="">
                        <a href="https://github.com/bleidbleid" class="text-center text-xl lg:text-3xl">
                            github.com/bleidbleid
                        </a>
                    </div>
                    <div class="flex gap-3 content-start justify-center mt-2 sm:mt-0">
                        <img class="hidden sm:block" src="/email-arrow.svg" alt="">
                        <h1 class="text-center text-xl lg:text-3xl">
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
.name-container {
    background-image: url(/name-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.interaction-container {
    background-image: url(/interaction-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.frontend-container {
    background-image: url(/frontend-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

.hola-container {
    background-image: url(/hola-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>