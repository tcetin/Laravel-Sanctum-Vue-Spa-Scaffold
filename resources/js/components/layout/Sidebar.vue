<template>
		 <!--Sidebar-->
         <div class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div class="text-center flex justify-center md:mb-8">
                <router-link to="/">
                 <img  alt="logo" class="object-contain w-48" src="/img/logo.png" />
                </router-link>
             </div>
            <div class="md:relative mx-auto  lg:px-6"> 
                
               <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                 
                  <li class="mr-3 flex-1 md:mt-8">
                     <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline" @click="logout">
                     <i class="fas fa-sign-out-alt pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Logout</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import { authenticationService } from '../../_services';
import { router } from '../../_helpers';

export default {
  name: "admin-sidebar",
  data() {
      return {
          open:false,
      }
  },
  components: { NavLink },
  created() {
;
  },
  computed:{

  },
  methods: {
    subIsActive: function(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {});
    },
    logout: () => {
        authenticationService.logout();
        router.push('/login');
    }
  }
};
</script>

