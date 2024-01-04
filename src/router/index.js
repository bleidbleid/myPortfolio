import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

// lazyloading solo importa el componente cuando lo necesitas
const routes = [
  //http://127.0.0.1:5173/
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  //   http://127.0.0.1:5173/about
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
    children: [
      {
        path: ":id",
        name: "project",
        component: () => import("../views/Project.vue"),
      },
    ],
  },
  {
    path: "/exhibitions",
    name: "exhibitions",
    component: () => import("../views/Exhibitions.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

// createWebHistory tiene una navegacion entre paginas solo con la url ej: 127.0.0.1/about
// createWebHashHistory tine una navegavion entre paginas con un # ej: 127.0.0.1#about
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;

// Este paso lo hacemos en el main.js
// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
// app.use(router)

// app.mount('#app')

// Now the app has started!
