import Router from 'vue-router';
import Vue from 'vue';
import { authenticationService } from "../_services";
import routes from "./routes";

Vue.use(Router);

export const router = new Router(routes);


router.beforeEach((to, from, next) => {
    let currentUser = authenticationService.currentUser();
    if (to.name !== 'login' && !currentUser) next({ name: 'login' })
    else next()
})
