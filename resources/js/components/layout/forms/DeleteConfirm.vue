<template>
    <div class="mt-6" v-if="openModal">

        <!-- Dialog (full screen) -->
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
             style="background-color: rgba(0,0,0,.5);">

            <!-- A basic modal dialog with title, body and one button to close -->
            <div class="h-auto p-4 mx-2 text-left bg-white rounded shadow-xl md:p-8 lg:p-8 md:mx-0">
                <h3 class="text-lg text-gray-600 mx-4">{{ title }}</h3>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 flex items-center">


                    <div class="mt-2">
                        <p class="text-red-700 text-xl">Kaydı silme istediğinize emin misiniz?</p>

                        <div class="divide-y-2 divide-gray-400">
                            <div></div>
                            <div class="flex items-center justify-between w-full space-x-12 mt-4 pt-4">
                                <button type="button" @click="closeModal"
                                        class="md:text-red-600 border-2 border-red-600  rounded hover:border-gray-500 p-2 w-6/12 font-semibold space-x-2 flex items-center justify-center">
                                    <span>İptal</span>

                                </button>
                                <button type="button"
                                        @click="deleteItem"
                                        class="md:text-green-600 border-2 border-gray-200  rounded hover:border-gray-500 p-2 w-full font-semibold space-x-2 flex items-center justify-center">
                                    <i class="fas fa-circle-notch fa-spin text-blue-600" v-if="loading"></i>
                                    <i class="far fa-trash-alt" style="font-size: 18px;"></i>
                                    <span>Sil</span>

                                </button>

                            </div>
                        </div>

                        <h2 v-if="error" class="text-red-600 mt-4">{{ error }}</h2>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { repository} from "../../../_services";
import Swal from "sweetalert2";
import config from "../../../config";

export default {
    name: 'delete-confirm',
    data() {
        return {
            loading: false,
            error: ''
        }
    },
    props: {
        openModal: false,
        title: '',
        url: ''
    },
    methods: {
        closeModal() {
            this.$emit('modalClose', true);
        },
        deleteItem() {
            this.loading = true;
            repository.remove(this.url).then(
                result => {
                    this.$emit('deleted', true);
                    this.loading = false;
                    this.error = "";
                    Swal.fire({
                        title: 'İşlem Başarılı',
                        icon: 'success',
                        confirmButtonText: 'Tamam'
                    });
                },
                error => {
                    this.error = error.toString();
                    this.loading = false;
                }
            )
        }
    }

}
</script>
