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

<script lang="ts">
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Accordian",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    //Data
    const isOpen = ref(false);

    //Computed
    const caretIcon = computed(() => {
      return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
    });

    //Methods
    const open = () => (isOpen.value = !isOpen.value);

    return { isOpen, caretIcon, open };
  },
});
</script>
