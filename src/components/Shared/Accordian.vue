/* eslint-disable no-use-before-define */
<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>add something</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
/* eslint no-use-before-define: 0 */

import { ref, defineProps, computed } from "vue";
const isOpen = ref(false);

defineProps({
  header: {
    type: String,
    required: true,
  },
});

const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});

const open = () => (isOpen.value = !isOpen.value);

//   props: {
//   header: {
//     type: String,
//       required: true,
//   },
// },
// data() {
//   return {
//     isOpen: false,
//   };
// },
// computed: {
//   caretIcon() {
//     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
//   },
// },
// methods: {
//   open() {
//     this.isOpen = !this.isOpen;
//   },
// },
</script>
