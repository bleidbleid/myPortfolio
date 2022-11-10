
<template>
    <main>
        <div class="h-[600px] px-[64px] font-display">
            <h1 class="text-5xl font-bold "> <span class="projects-underline"> Projects</span></h1>
            <ul>
                
                <li>
                    <router-link :to="{ name: 'project', params: { id: 'toska' } }">Toska</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'project', params: { id: 'dissenyem-comerç' } }">Dissenyem Comerç</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </main>
</template>
  
<script setup>
</script>

<style>
.projects-underline {
    background-image: url(/projects-underline.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>