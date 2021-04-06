<template>
        <router-link class="block py-2 mt-4 space-x-2 text-sm" :to="to">
            <slot></slot>
        </router-link>
</template> 
<script>
export default {
    name: "nav-link",
    props: {
        to: {
            type: String,
            required: true
        }
    }
};
</script>
