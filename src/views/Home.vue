
<template>
    <main>
        <div class="h-[600px] px-[64px] font-display">
            <div
                class="flex justify-around flex-col mx-auto h-full sm:px-6 lg:px-8 text-center text-3xl sm:text-5xl lg:text-6xl">
                <h1> <span class="hola-container">Hola! </span> My name <span class="name-container py-11">is MARIA
                        BLADÉ</span> !!!!!!!!
                </h1>
                <h1 class="mt-6 text-center sm:text-5xl lg:text-6xl">
                    I'm an <span class="interaction-container py-3"> interaction designer </span> and <span
                        class="frontend-container py-3"> front-end developer</span> based in Barcelona.
                </h1>
                <div class="mx-auto  mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <h1 class="mt-6  text-center sm:text-5xl lg:text-6xl mr-4">
                        Let's get in touch :)
                    </h1>
                    <div class="flex flex-col mt-6">
                        <div class="flex gap-3">
                            <img src="/github-arrow.svg" alt="">
                            <a href="https://github.com/bleidbleid" class="  text-center sm:text-5xl lg:text-3xl">
                                github.com/bleidbleid
                            </a>
                        </div>
                        <div class="flex gap-3 content-start mt-6">
                            <img src="/email-arrow.svg" alt="">
                            <h1 class="  text-center sm:text-5xl lg:text-3xl">
                                mariablade2000@gmail.com </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>
</script>

<style>
.name-container {
    background-image: url(/name-container.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
}

.interaction-container {
    /* background-image: url(/interaction-container.svg); */
    background-size: auto;
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