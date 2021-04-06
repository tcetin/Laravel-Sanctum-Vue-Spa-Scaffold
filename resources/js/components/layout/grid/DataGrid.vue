<template>
  <div class="overflow-x-auto">
    <div class="flex items-center">
      <div  :class="{'w-full':!editMode}">
        <div class="bg-white shadow-md rounded md:my-6 my-2 h-full" :class="{'w-full':!editMode}">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-600 text-white md:text-sm text-xs leading-normal">
                <slot name="header"></slot>
              </tr>
            </thead>
            <tbody class="text-gray-600 md:text-sm text-xs font-light" v-if="showBody">
              <slot name="body"></slot>
            </tbody>
            <slot name="body" v-if="!showBody"></slot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "data-table",
  props:{
    editMode:{
      type:Boolean,
      default:false
    },
    showBody:{
      type:Boolean,
      default:true
    },
    dragMode:{
      type:Boolean,
      default:true
    }
  }
};
</script>