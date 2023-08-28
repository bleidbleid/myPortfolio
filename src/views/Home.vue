<template>
    <main class="h-[600px] lg:px-16 sm:px-8 px-4">
        <section class="flex justify-around flex-col mx-auto h-full text-center text-3xl sm:text-4xl lg:text-6xl">
            <article> <span class="hola-container">Hola! </span> </article>

            <article>My name is<router-link :to="{ name: 'about' }"><span
                        class="name-container py-7 hover:italic hover:text-accent hover:cursor-pointer lg:py-10">
                        MARIA BLADÉ</span> !!!!!!!!
                </router-link>
            </article>
            <article class="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl">
                I'm a <router-link :to="{ name: 'projects' }"><span
                        class="interaction-container hover:cursor-pointer py-3 hover:italic hover:text-accent">
                        multidisciplinary interaction designer </span></router-link> and <a href="https://github.com/bleidbleid" target="_blank"
                        class="frontend-container hover:cursor-pointer py-1 hover:italic hover:text-accent">
                        front-end developer</a> from Barcelona.
            </article>
            <article
                class="mx-auto max-w-sm sm:items-end items-center text-center flex flex-col sm:flex-row sm:max-w-none">
                <a href="mailto:mariablade2000@gmail.com" class="text-center align-center text-3xl sm:text-4xl lg:text-6xl mr-0 sm:mr-4 mt-6 sm:mt-0">
                    Let's get in touch :)
                </a>
                <img class="sm:hidden mt-2 block" src="/contact-arrow.svg" alt="">
                <div class="flex flex-col mt-2 sm:mt-0">
                    <div class="flex gap-3 justify-center sm:justify-start">
                        <img class="hidden sm:block " src="/github-arrow.svg" alt="">
                        <p>
                            class="text-center hover:italic hover:text-accent text-lg lg:text-2xl">
                            github.com/bleidbleid
                        </p>
                    </div>
                    <div class="flex gap-3 content-startjustify-center mt-2 sm:mt-0">
                        <img class="hidden sm:block" src="/email-arrow.svg" alt="">
                        <a href="mailto:mariablade2000@gmail.com">
                            <h1
                                class="text-center text-lg lg:text-2xl hover:italic hover:text-accent">
                                mariablade2000@gmail.com </h1>
                        </a>

                    </div>
                </div>
            </article>
        </section>
    </main>
</template>
  
<script setup>

</script>

<style>
/* SPAN SVGS */
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