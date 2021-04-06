<template>
  <button
    type="submit"
    class="md:text-green-600 border-2 border-gray-200 rounded hover:border-gray-500 p-2 w-full font-semibold space-x-2 flex items-center justify-center"
  >
    <i class="fas fa-circle-notch fa-spin text-blue-600" v-if="formLoading"></i>
    <i class="far fa-plus-square" style="font-size: 18px"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "submit-btn",
  props:{
      formLoading:{
          type:Boolean,
          default:false
      }
  }
};
</script>