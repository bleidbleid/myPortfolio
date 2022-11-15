
<template>
        <main class="h-[600px] lg:px-16 md:px-8 px-4 font-display">
            <section
                class="flex justify-around flex-col mx-auto h-full text-center text-3xl md:text-4xl lg:text-6xl">
                <article> <span class="hola-container">Hola! </span> </article> <article>My name <span class="name-container py-7 lg:py-10">is MARIA
                        BLADÉ</span> !!!!!!!!
                </article>
                <article class="mt-6 text-center text-3xl md:text-4xl lg:text-6xl">
                    I'm an <span class="interaction-container py-3"> interaction designer </span> and <span
                        class="frontend-container py-1"> front-end developer</span> based in Barcelona.
                </article>
                <article class="mx-auto max-w-sm sm:flex sm:max-w-none">
                    <div class=" text-center flex  align-center text-3xl md:text-4xl lg:text-6xl mr-4 mt-6 md:mt-0">
                        Let's get in touch :)
                    </div>
                    <div class="flex flex-col mt-6 md:mt-0">
                        <div class="flex gap-3">
                            <img src="/github-arrow.svg" alt="">
                            <a href="https://github.com/bleidbleid" class="text-center text-xl lg:text-3xl">
                                github.com/bleidbleid
                            </a>
                        </div>
                        <div class="flex gap-3 content-start mt-6">
                            <img src="/email-arrow.svg" alt="">
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