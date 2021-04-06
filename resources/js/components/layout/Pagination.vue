<template>
    <div class="divide-y-2 divide-gray-200">
        <div></div>
        <div class="flex w-full md:mt-4 text-gray-400 justify-between content-center md:text-sm text-xs md:py-2"
             v-if="links && links.length">
            <a href="#" class="text-xs" @click="getData(prev_page_url)">
                <i class="fas fa-arrow-left mr-2"></i> <span class="font-bold">Previous</span>
            </a>
            <ul>
                <li class="inline-block" v-if="!isNaN(link.label)" v-for="link in links" :class="{'text-blue-700':link.active}"
                    @click="getData(link.url)" :key="link.label">
                    <a href="#" class="px-2" v-html="link.label"></a>
                </li>
            </ul>
            <a href="#" class="text-xs" @click="getData(next_page_url)">
                <span class="font-bold">Next</span> <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </div>
    </div>
</template>

<script>
import paginate from 'jw-paginate';

export default {
    props: {
        links: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            next_page_url: '',
            prev_page_url: ''
        }
    },
    created() {
        if (!this.$listeners.changePage) {
            throw 'Missing required event listener: "changePage"';
        }
    },
    updated() {
        if (this.links.length) {
            this.next_page_url = this.links[this.links.length - 1]['url'];
            this.prev_page_url = this.links[0]['url'];
        }
    },
    methods: {
        getData(url) {
            this.$emit('changePage', url);
        }
    }
}

</script>
