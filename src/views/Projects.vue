
<template>
    <main class="min-h-min px-4 md:px-8 mb-4 lg:px-16" :key="route.name">
        <router-link :to="{ name: 'projects' }">
            <h1 class="text-5xl font-bold mb-8 sm:block"> <span
                    class="projects-underline hover:cursor-pointer transition-all duration-300 transform ease hover:italic hover:text-accent">
                    Projects</span></h1>
        </router-link>

        
        <!-- Chip Tags Section Filtres -->
<section 
v-if="allProj"
class="mb-4 flex items-center flex-wrap">
    <span
        v-for="type in projectTypes"
        :key="type"
        @click="selectType(type)"
        :class="{'bg-accent text-background': selectedType === type, 'bg-gray-200': selectedType !== type}"
        class="chip cursor-pointer px-4 py-1 mr-2 mb-2 inline-block rounded-full border border-gray-400 hover:bg-accent hover:text-background transition-all"
    >
        {{ type }}
    </span>


    <span
    v-show="filteredProjects.length < projects.length"
    @click="clearFilter"
    class=" cursor-pointer inline-block text-accent hover:text-main pl-2 mr-2 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="none" stroke="blue" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x" id="X--Streamline-Feather" height="24" width="24"><desc>X Streamline Icon: https://streamlinehq.com</desc><path d="M20.7 1.7999999999999998L1.7999999999999998 20.7" stroke-width="1.5"></path><path d="M1.7999999999999998 1.7999999999999998L20.7 20.7" stroke-width="1.5"></path></svg>
</span>


</section>

        <section class="flex h-min flex-col sm:flex-row">
            <ul v-show="!allProj"
                class=" flex md:flex-col sm:block gap-y-2 md:gap-y-0 flex-wrap justify-between sm:flex-nowrap min-w-fit h-min">
                <li v-for="project in myProjects">
                    
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"
                        class="px-3 md:m-1 md:py-1 border-solid border-[1px] w-full border-accent sm:hover:bg-transparent hover:italic hover:text-accent sm:hover:border-transparent active:bg-accent sm:active:bg-transparent active:text-background sm:active:text-main rounded-full sm:rounded-none active:border-accent sm:border-none">
                        {{ project.name }}
                    </router-link>
                </li>
            </ul>
            <img v-show="!allProj" class="block sm:hidden px-5 mt-4 mb-8" src="/separator-mobile.svg" alt="">
            <img v-show="!allProj" class="hidden sm:block px-5 h-[500px]" src="/separator-projects.svg" alt="">
            <article class="columns-1 md:columns-2 lg:columns-4 gapx-2.5 gapy-4">
                <figure v-show="allProj" v-for="project in filteredProjects"
                    class="m-0 grid mb-2.5 break-inside-avoid hover:italic  hover:text-accent font-normal figure">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }" class="relative">
                    
                        <img class="max-w-full block justify-self-start" :src="project.pictureUrl[0]" 
                            alt="Project image" />
                        <figcaption
                            class="row-span-2 col-span-1 z-1 pl-2 pr-9 w-48  ml-1 bg-white absolute bottom-1 uppercase left-0 bg-[url('/miniature-project.svg')] bg-contain bg-center bg-no-repeat">
                                {{ project.name }}
                        </figcaption>
                    </router-link>
                </figure>


            </article>
            <router-view v-show="!allProj"></router-view>
        </section>
    </main>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import projects from "../data/projects.json";
import { useRoute } from 'vue-router';
import router from '../router';



// Existing project-related setup
const route = useRoute();
const isLoading = ref(true);
const page = ref();
const myProjects = ref(projects);
let allProj = ref(true);


console.log(route.params.id);

const ids = myProjects.value.map(project => project.id)

// onMounted is called when the component is ready to render
onMounted(() => {
    page.value = route.name;

    if (page.value === 'projects') {
        allProj.value = true;
    } else if (page.value === 'project' && ids.includes(route.params.id)) {
        allProj.value = false; 
    } else {
        router.push({ name: 'NotFound' }); 
    }

    isLoading.value = false;
});


watch(() => route.name, newValue => {
    page.value = route.name;

    console.log(page.value);
    

    if (page.value === 'projects') {
        allProj.value = true;
    } else if (page.value === 'project' && ids.includes(route.params.id)) {
        allProj.value = false; 
    } else {
        router.push({ name: 'NotFound' }); 
    }
});

// Chip Filtering Logic
const selectedType = ref('');

// Extraer tipos únicos, manejando los tipos como arrays
const projectTypes = ref([
    ...new Set(
        projects.flatMap(project => Array.isArray(project.type) ? project.type : [project.type])
    )
]);

// Filtered projects based on selected type
const filteredProjects = computed(() => {
  if (!selectedType.value) {
    return myProjects.value;
  }
  return myProjects.value.filter(project => 
    Array.isArray(project.type) ? project.type.includes(selectedType.value) : project.type === selectedType.value
  );
});



// Function to select a type and filter projects
const selectType = (type) => {
  selectedType.value = type;
};

// Function to clear the filter
const clearFilter = () => {
  selectedType.value = '';
};

</script>



<style>
li .router-link-active {
    color: #0000FF;
}

.prueba::hover {
    background-color: #0000FF;
}


.projects-underline {
    background-image: url(/projects-underline.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}

.figure {
    grid-template-rows: 1fr auto;
}
</style>