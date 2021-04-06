<template>
  <div>
    <h1 class="font-bold md:text-xl text-sm">
      <slot></slot>
      <i class="fas fa-circle-notch fa-spin text-blue-400" v-if="loading"></i>
    </h1>
  </div>
</template>

<script>
export default {
  name: "grid-title",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
