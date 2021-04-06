<template>
  <div v-clickoutside="hideFilterContainer" class="relative w-full">
    <input
      ref="searchInput"
      type="text"
      @keyup="filterValues"
      @click="showOptions"
      :placeholder="placeHolder"
      class="border-2 border-gray-300 w-full rounded font-semibold"
      v-model="selectedText"
    />
    <div
      class="border-2 bg-white overflow-y-scroll h-48 px-2 absolute w-full"
      :class="{
        'h-auto overflow-y-hidden': dataNotFound,
        hidden: !showFilterValues,
      }"
    >
      <ul v-if="filteredValues.length" class="text-left">
        <li
          v-for="item in filteredValues"
          :key="item.value"
          class="cursor-pointer hover:bg-blue-400 hover:text-white"
          @click="setSelected(item)"
        >
          {{ item.text }}
        </li>
      </ul>
      <span v-if="dataNotFound" class="text-red text-xs"
        >Herhangi bir kayıt bulunamadı</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "selection",
  data() {
    return {
      filteredValues: [],
      selectedValue: "",
      selectedText: "",
      dataNotFound: false,
      showFilterValues: false
    };
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    placeHolder: ""
  },
  created(){
  },
  mounted(){
      if(this.$attrs.value){
          let selected = this.options.filter(option=>option.value===this.$attrs.value);
          this.selectedValue = this.$attrs.value;
          this.selectedText = selected[0].text;
          this.$emit('input',this.selectedValue);
      };
  },

  methods: {
    filterValues(e) {
        
      // clear selected   
      this.selectedValue = "";
      this.$emit("input", this.selectedValue);

      this.filteredValues = this.options.filter(option =>
        option.text
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );

      if (this.filteredValues.length === 0) {
        this.dataNotFound = true;
      }else{
        this.dataNotFound = false;
      }
    },
    showOptions() {
      this.filteredValues = this.options;
      this.showFilterValues = true;
    },
    setSelected(item) {
      this.selectedValue = item.value;
      this.selectedText = item.text;
      this.$emit("input", this.selectedValue);
      this.filteredValues = [];
      this.dataNotFound = false;
    },
    hideFilterContainer() {
      this.filteredValues = [];
      this.dataNotFound = false;
      this.showFilterValues = false;
    }
  },
  directives: {
    clickoutside: {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // here I check that click was outside the el and his childrens
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
      stopProp(event) {
        event.stopPropagation();
      }
    }
  }
};
</script>