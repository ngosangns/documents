// Router
import * as VueRouter from "vue-router"
import HomePage from "./pages/HomePage/HomePage.vue"

// ...

// Router
const routes = [
    { path: '/', component: HomePage },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})
app.use(router)