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
                  <li class="mr-3 flex-1">
                     <router-link to="/company"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/company'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/company'}">Companies</span>
                     </router-link>
                  </li>

                  <li class="mr-3 flex-1">
                     <router-link to="/company-image"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/company-image'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/company-image'}">Company Images</span>
                     </router-link>
                  </li>

                  <li class="mr-3 flex-1">
                     <router-link to="/wire"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/wire'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/wire'}">Wire Transfers</span>
                     </router-link>
                  </li>



                  <li class="mr-3 flex-1">
                     <router-link to="/crypto"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/crypto'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/crypto'}">Cryptos</span>
                     </router-link>
                  </li>
                  
                  <li class="mr-3 flex-1">
                     <router-link to="/content"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/content'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/content'}">Contents</span>
                     </router-link>
                  </li>

                  <li class="mr-3 flex-1">
                     <router-link to="/announce"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/announce'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/announce'}">Announcements</span>
                     </router-link>
                  </li>

                  <li class="mr-3 flex-1">
                     <router-link to="/social"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/social'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/social'}">Social Media</span>
                     </router-link>
                  </li>

                  <li class="mr-3 flex-1">
                     <router-link to="/footer-link"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/footer-link'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/footer-link'}">Footer Links</span>
                     </router-link>
                  </li>
                  
                  <li class="mr-3 flex-1">
                     <router-link to="/card-style"
                         :active-class="'md:border-blue-500 md:font-bold'"
                         class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-blue-500 border-b-2 md:border-gray-900 hover:border-blue-500">
                        <i class="fas fa-link pr-0 md:pr-3" :class="{'text-blue-500':$route.path=='/card-style'}"></i>
                        <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block" :class="{'text-white':$route.path=='/card-style'}">Card Styles</span>
                     </router-link>
                  </li>



                  
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

