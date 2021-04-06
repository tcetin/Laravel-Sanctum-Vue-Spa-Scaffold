<template>
    <!--Modal-->
    <div v-if="showModal" style="transition: opacity 0.25s ease;overflow-x: hidden;overflow-y: visible !important"
         class="pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-4/12 mx-auto rounded shadow-lg z-50 overflow-y-hidden">

            <!-- Add margin if you want to see some of the overlay behind the modal-->
            <div class="modal-content py-4 text-left px-6">
                <!--Title-->
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">
                        {{title}}
                    </p>
                </div>

                <!--Body-->
                    <slot></slot>


                <!--Footer-->
                <div class="flex justify-end pt-2" v-if="closeButton">
                    <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">
                        Kapat
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'modal',
    data(){
      return {

      }
    },
    props:{
        showModal:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'',
            required:false
        },
        closeButton:{
            type:Boolean,
            default:false
        }
    },
}
</script>
