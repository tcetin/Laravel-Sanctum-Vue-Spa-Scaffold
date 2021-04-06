<template>
    <!--    https://tailwindcss.com/docs/display#hidden-->
    <header
        class="row-span-1 bg-gray-300 h-16 flex flex-wrap content-center justify-between hidden xl:inline-flex w-full"
    >
        <h2 class="text-red-600 mx-6">Payment Board</h2>
        
        <ul class="space-x-20 mr-8">
            
            <li class="inline-block">
                <span
                    style="cursor:pointer;"
                    class="text-red-600 space-x-2"
                    @click="logout"
                >
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </span>
            </li>
        </ul>
    </header>
</template>

<script>
import { authenticationService } from "../../_services";
import { router } from "../../_helpers";

export default {
    name: "admin-header",
    created() {
    },
    computed: {
        companyName() {
        }
    },
    methods: {
        logout: () => {
            authenticationService.logout();
            router.push("/login");
        }
    }
};
</script>
