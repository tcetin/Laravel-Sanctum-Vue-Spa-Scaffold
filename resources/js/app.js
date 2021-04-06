import "./bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate/src";
import { router } from "./_helpers";
import Vuex from "vuex";

import DataTable from "./components/layout/grid/DataGrid";
import DTd from "./components/layout/grid/Data";
import DataHead from "./components/layout/grid/Head";
import DataRow from "./components/layout/grid/Row";
import GridTitle from "./components/layout/grid/GridTitle";
import Submit from "./components/layout/buttons/Submit";


Vue.use(Vuelidate);


Vue.component('data-table',DataTable);
Vue.component('d-td',DTd);
Vue.component('data-head',DataHead);
Vue.component('data-row',DataRow);
Vue.component('grid-title',GridTitle);
Vue.component('submit-btn',Submit);



let app = new Vue({
    el: "#app",
    router,
});
