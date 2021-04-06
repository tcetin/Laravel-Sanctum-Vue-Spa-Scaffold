<template>

      <div class="flex md:flex-row-reverse flex-wrap">
		
		 <!--Main Content-->
         <div class="w-full md:w-4/5 bg-gray-100">
            <div class="container bg-gray-100 pt-16 px-6">
               <router-view></router-view>
            </div>
         </div>

         <!--Sidebar-->
         <admin-sidebar></admin-sidebar>

      </div>
</template>

<script>

import AdminSidebar from "./layout/Sidebar";
import AdminHeader from "./layout/Header";

export default {
    name: 'admin-page',
    components: {AdminHeader, AdminSidebar},
    methods: {
        getYear: () => new Date().getFullYear(),
    }
}
</script>
